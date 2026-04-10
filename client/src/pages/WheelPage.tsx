// client/src/pages/WheelPage.tsx
// 🎡 Page Roue - bouton Retour au-dessus de la bannière pub (safe-area corrigé)

import { useState, useEffect } from 'react';
import Wheel from '@/components/Wheel';
import AdLoadingScreen from '@/components/AdLoadingScreen';
import { UserSession } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';
import { showRewardedAd, showInterstitialAd } from '@/admobService';

interface WheelPageProps {
  user: UserSession;
  onBack: () => void;
  onSaveReading?: (reading: any) => void;
  isPremium?: boolean;
  wheelCounter?: number;
  onWheelComplete?: () => void;
  onReadingComplete?: (oracleType: string) => void;
}

// Hauteur estimée de la bannière pub AdMob (50px standard + safe-area)
const AD_BANNER_HEIGHT = 60;

const getRandomVariation = () => {
  const variations = ['1', '2', '3'];
  const choice = variations[Math.floor(Math.random() * variations.length)];
  console.log(`🎲 Variation choisie: ${choice}`);
  return choice;
};

export default function WheelPage({
  user,
  onBack,
  onSaveReading,
  isPremium = false,
  wheelCounter = 0,
  onWheelComplete,
  onReadingComplete
}: WheelPageProps) {
  const { t } = useLanguage();
  const [isComplete, setIsComplete] = useState(false);
  const [isLoadingAd, setIsLoadingAd] = useState(false);
  const [showLongAdMessage, setShowLongAdMessage] = useState(false);
  const [variation, setVariation] = useState<string | null>(null);
  const [wheelUnlocked, setWheelUnlocked] = useState(isPremium);
  const [adShownThisSession, setAdShownThisSession] = useState(false);

  useEffect(() => {
    setAdShownThisSession(false);
  }, []);

  useEffect(() => {
    if (adShownThisSession) return;

    const unlockWheel = async () => {
      if (isPremium) {
        setVariation(getRandomVariation());
        setWheelUnlocked(true);
        return;
      }

      const nextCount = wheelCounter + 1;
      setVariation(getRandomVariation());

      if (nextCount === 1) {
        let messageTimeoutId: NodeJS.Timeout | null = null;
        try {
          const adPromise = showRewardedAd('wheel_first');
          const loadingTimeoutId = setTimeout(() => {
            setIsLoadingAd(true);
            messageTimeoutId = setTimeout(() => setShowLongAdMessage(true), 45000);
          }, 500);
          const rewardGranted = await adPromise;
          clearTimeout(loadingTimeoutId);
          if (messageTimeoutId) clearTimeout(messageTimeoutId);
          setIsLoadingAd(false);
          setShowLongAdMessage(false);
          setAdShownThisSession(true);
          if (rewardGranted) {
            setWheelUnlocked(true);
          } else {
            alert(t('oracle.wheel.adNotCompleted') || 'Veuillez regarder la publicité jusqu\'à la fin.');
            onBack();
          }
        } catch (error) {
          if (messageTimeoutId) clearTimeout(messageTimeoutId);
          setIsLoadingAd(false);
          setShowLongAdMessage(false);
          alert(t('oracle.wheel.adError') || 'Une erreur est survenue. Réessayez.');
          onBack();
        }
      } else if ((nextCount - 1) % 3 === 0 && nextCount > 1) {
        try {
          await showInterstitialAd(`wheel_${nextCount}`);
          setAdShownThisSession(true);
        } catch (error) {
          console.error('❌ [WHEEL] Erreur pub interstitielle:', error);
        }
        setWheelUnlocked(true);
      } else {
        setWheelUnlocked(true);
      }
    };

    unlockWheel();
  }, [isPremium, wheelCounter, t, onBack, adShownThisSession]);

  const handleComplete = (result: { category: string; interpretation: string }) => {
    setIsComplete(true);
    if (onWheelComplete) onWheelComplete();
  };

  if (isLoadingAd) {
    return <AdLoadingScreen showLongMessage={showLongAdMessage} adType="rewarded" />;
  }

  if (wheelUnlocked) {
    return (
      <div className="fixed inset-0" style={{ background: '#080808' }}>

        {/* ── FOND CONSTELLATION DORÉE — fixe derrière ── */}
        <canvas
          id="constellation-canvas"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
          <div className="wp-orb wp-orb-1" />
          <div className="wp-orb wp-orb-2" />
        </div>

        {/* ✅ ZONE SCROLLABLE — padding-bottom = hauteur bannière pub + safe-area */}
        <div
          className="absolute inset-0"
          style={{
            zIndex: 10,
            overflowY: 'auto',
            overflowX: 'hidden',
            WebkitOverflowScrolling: 'touch',
            paddingTop: '56px',
            // ✅ Clé : on réserve exactement la hauteur de la bannière pub
            // pour que le bouton Retour reste toujours visible au-dessus
            paddingBottom: `${AD_BANNER_HEIGHT}px`,
          }}
        >
          <Wheel
            onComplete={handleComplete}
            variation={variation}
            isPremium={isPremium}
            onReset={() => setVariation(getRandomVariation())}
          />

          {/* ✅ BOUTON RETOUR — dans le scroll, au-dessus de la bannière */}
          <div className="px-4 mt-2 mb-2">
            <div className="max-w-lg mx-auto">
              <button
                onClick={onBack}
                className="w-full min-h-[50px] text-base font-bold px-4 border-2 border-amber-500/40 text-amber-100 rounded-xl transition-all duration-300 active:scale-[0.97]"
                style={{ background: 'rgba(8,8,8,0.85)' }}
              >
                {isComplete
                  ? `${t('oracle.backToOracles') || 'Retour aux oracles'} →`
                  : `← ${t('common.back') || 'Retour'}`
                }
              </button>
            </div>
          </div>
        </div>

        <style>{`
          .wp-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(90px);
            pointer-events: none;
          }
          .wp-orb-1 {
            width: 420px; height: 420px;
            top: -120px; left: 50%; transform: translateX(-50%);
            background: radial-gradient(ellipse, rgba(180,140,30,0.08) 0%, transparent 65%);
            animation: wp-float 16s ease-in-out infinite alternate;
          }
          .wp-orb-2 {
            width: 280px; height: 280px;
            bottom: -40px; right: -60px;
            background: radial-gradient(ellipse, rgba(140,100,20,0.05) 0%, transparent 65%);
            animation: wp-float 11s ease-in-out infinite alternate-reverse;
          }
          @keyframes wp-float {
            0%   { transform: translateX(-50%) translateY(0) scale(1); }
            100% { transform: translateX(-50%) translateY(-20px) scale(1.08); }
          }
        `}</style>

        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var canvas = document.getElementById('constellation-canvas');
            if (!canvas) return;
            var ctx = canvas.getContext('2d');
            var W = canvas.width  = window.innerWidth;
            var H = canvas.height = window.innerHeight;
            var stars = [];
            for (var i = 0; i < 120; i++) {
              stars.push({
                x: Math.random() * W, y: Math.random() * H,
                r: Math.random() * 1.4 + 0.3,
                gold: Math.random() > 0.55,
                phase: Math.random() * Math.PI * 2,
                speed: Math.random() * 0.8 + 0.3,
              });
            }
            var lines = [];
            for (var j = 0; j < 20; j++) {
              var a = Math.floor(Math.random() * stars.length);
              var b = Math.floor(Math.random() * stars.length);
              var dx = stars[a].x - stars[b].x;
              var dy = stars[a].y - stars[b].y;
              if (Math.sqrt(dx*dx + dy*dy) < 130) lines.push([a, b]);
            }
            var t = 0;
            function draw() {
              ctx.clearRect(0, 0, W, H);
              t += 0.008;
              lines.forEach(function(l) {
                var sa = stars[l[0]], sb = stars[l[1]];
                ctx.beginPath(); ctx.moveTo(sa.x, sa.y); ctx.lineTo(sb.x, sb.y);
                ctx.strokeStyle = 'rgba(212,175,55,0.09)'; ctx.lineWidth = 0.5; ctx.stroke();
              });
              stars.forEach(function(s) {
                var op = 0.3 + 0.55 * Math.sin(t * s.speed + s.phase);
                ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = s.gold ? 'rgba(212,175,55,' + op + ')' : 'rgba(240,235,220,' + (op * 0.55) + ')';
                ctx.fill();
                if (s.gold && s.r > 1.2) {
                  ctx.beginPath(); ctx.arc(s.x, s.y, s.r * 2.8, 0, Math.PI * 2);
                  ctx.fillStyle = 'rgba(212,175,55,' + (op * 0.07) + ')'; ctx.fill();
                }
              });
              requestAnimationFrame(draw);
            }
            draw();
            window.addEventListener('resize', function() {
              W = canvas.width = window.innerWidth;
              H = canvas.height = window.innerHeight;
            });
          })();
        `}} />
      </div>
    );
  }

  return null;
}