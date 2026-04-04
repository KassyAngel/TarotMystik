import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LocalNotifications } from '@capacitor/local-notifications';

interface NotificationPermissionModalProps {
  onClose: () => void;
}

export async function scheduleNotificationWithLanguage(t: (key: string) => string) {
  try {
    console.log('🔔 [NOTIF] Planification avec langue:', t('common.language'));

    await LocalNotifications.createChannel({
      id: 'daily-tirage',
      name: t('notification.channel.name'),
      importance: 5,
      description: t('notification.channel.description'),
      sound: 'default',
      vibration: true,
      visibility: 1,
    });

    const notificationVariants = [
      { title: t('notification.variants.1.title'), body: t('notification.variants.1.body') },
      { title: t('notification.variants.2.title'), body: t('notification.variants.2.body') },
      { title: t('notification.variants.3.title'), body: t('notification.variants.3.body') },
      { title: t('notification.variants.4.title'), body: t('notification.variants.4.body') },
      { title: t('notification.variants.5.title'), body: t('notification.variants.5.body') },
    ];

    const randomVariant = notificationVariants[Math.floor(Math.random() * notificationVariants.length)];

    await LocalNotifications.cancel({ notifications: [{ id: 1 }] });

    await LocalNotifications.schedule({
      notifications: [
        {
          id: 1,
          title: randomVariant.title,
          body: randomVariant.body,
          schedule: {
            on: { hour: 10, minute: 0 },
            repeats: true,
            allowWhileIdle: true,
          },
          sound: 'default',
          smallIcon: 'ic_notification',
          largeIcon: 'ic_launcher',
          largeBody: randomVariant.body,
          summaryText: 'TarotMystik',
          actionTypeId: 'OPEN_APP',
          extra: { action: 'daily_reading' },
          ongoing: false,
          autoCancel: true,
          channelId: 'daily-tirage',
        },
      ],
    });

    console.log('✅ Notification quotidienne programmée');
    localStorage.setItem('notificationLanguage', t('common.language') || 'fr');
    return true;
  } catch (err) {
    console.error('❌ Erreur planification notification:', err);
    return false;
  }
}

export default function NotificationPermissionModal({ onClose }: NotificationPermissionModalProps) {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleAccept = async () => {
    try {
      const permission = await LocalNotifications.requestPermissions();
      if (permission.display === 'granted') {
        const success = await scheduleNotificationWithLanguage(t);
        if (success) {
          localStorage.setItem('notificationPermission', 'granted');
          localStorage.setItem('notificationTime', '10:00');
          localStorage.setItem('notificationTimezone', Intl.DateTimeFormat().resolvedOptions().timeZone);
        }
      } else {
        localStorage.setItem('notificationPermission', 'denied');
      }
    } catch (err) {
      console.error('❌ Erreur notifications:', err);
      localStorage.setItem('notificationPermission', 'error');
    }
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const handleDecline = () => {
    localStorage.setItem('notificationPermission', 'denied');
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <>
      <style>{`
        @keyframes notif-backdrop-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes notif-card-in {
          from { opacity: 0; transform: translateY(24px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        @keyframes bell-ring {
          0%,100% { transform: rotate(0deg); }
          15%     { transform: rotate(14deg); }
          30%     { transform: rotate(-10deg); }
          45%     { transform: rotate(8deg); }
          60%     { transform: rotate(-5deg); }
          75%     { transform: rotate(3deg); }
        }
        @keyframes gold-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes orb-pulse {
          0%,100% { transform: scale(1);   opacity: 0.55; }
          50%     { transform: scale(1.18); opacity: 0.80; }
        }
        @keyframes star-drift {
          0%   { transform: translateY(0px)   rotate(0deg);   opacity: 0.4; }
          50%  { transform: translateY(-6px)  rotate(180deg); opacity: 0.9; }
          100% { transform: translateY(0px)   rotate(360deg); opacity: 0.4; }
        }
        .notif-backdrop {
          animation: notif-backdrop-in 0.25s ease-out forwards;
        }
        .notif-card {
          animation: notif-card-in 0.35s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        .bell-icon { animation: bell-ring 2.4s ease-in-out infinite; }
        .gold-btn-text {
          background: linear-gradient(
            90deg,
            #b8942a 0%, #f5d876 30%, #d4af37 50%, #f5d876 70%, #b8942a 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gold-shimmer 2.8s linear infinite;
        }
        .orb { animation: orb-pulse 3s ease-in-out infinite; }
        .star-float { animation: star-drift ease-in-out infinite; }
        .divider-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.45), transparent);
        }
      `}</style>

      {/* Backdrop */}
      <div
        className="notif-backdrop fixed inset-0 z-50 flex items-center justify-center"
        style={{ background: 'rgba(4,3,14,0.92)', backdropFilter: 'blur(8px)', padding: '24px' }}
      >
        {/* Card */}
        <div
          className="notif-card relative w-full overflow-hidden"
          style={{
            maxWidth: '340px',
            borderRadius: '20px',
            background: 'linear-gradient(160deg, #0e0b1e 0%, #100d22 50%, #0a0818 100%)',
            border: '1px solid rgba(212,175,55,0.28)',
            boxShadow: `
              0 0 0 1px rgba(212,175,55,0.08),
              0 8px 40px rgba(0,0,0,0.85),
              0 0 80px rgba(212,175,55,0.06),
              inset 0 1px 0 rgba(212,175,55,0.12)
            `,
          }}
        >
          {/* Top golden glow */}
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none"
            style={{
              height: '140px',
              background: 'radial-gradient(ellipse at 50% -20%, rgba(212,175,55,0.14) 0%, transparent 70%)',
            }}
          />

          {/* Floating stars background */}
          {[
            { top:'12%', left:'8%',  size:'3px', delay:'0s',   dur:'3.2s' },
            { top:'8%',  left:'88%', size:'2px', delay:'0.6s', dur:'2.8s' },
            { top:'22%', left:'92%', size:'2px', delay:'1.2s', dur:'3.6s' },
            { top:'18%', left:'4%',  size:'2px', delay:'0.3s', dur:'4s'   },
            { top:'55%', left:'96%', size:'2px', delay:'1.8s', dur:'3s'   },
            { top:'70%', left:'3%',  size:'2px', delay:'0.9s', dur:'3.4s' },
          ].map((s, i) => (
            <div
              key={i}
              className="star-float absolute rounded-full"
              style={{
                top: s.top, left: s.left,
                width: s.size, height: s.size,
                background: '#d4af37',
                animationDelay: s.delay,
                animationDuration: s.dur,
              }}
            />
          ))}

          <div className="relative px-6 pt-7 pb-6">
            {/* Bell icon */}
            <div className="flex justify-center mb-5">
              <div className="relative">
                <div
                  className="orb absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(212,175,55,0.22) 0%, transparent 70%)',
                    filter: 'blur(12px)',
                    transform: 'scale(1.8)',
                  }}
                />
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    width: '68px', height: '68px',
                    borderRadius: '50%',
                    background: 'linear-gradient(145deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)',
                    border: '1px solid rgba(212,175,55,0.30)',
                    boxShadow: '0 0 20px rgba(212,175,55,0.12), inset 0 1px 0 rgba(212,175,55,0.20)',
                  }}
                >
                  <span className="bell-icon text-3xl" style={{ display: 'inline-block' }}>🔔</span>
                </div>
              </div>
            </div>

            {/* Ornament */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="divider-line w-12" />
              <span style={{ color: 'rgba(212,175,55,0.50)', fontSize: '9px', letterSpacing: '4px' }}>✦ ✦ ✦</span>
              <div className="divider-line w-12" />
            </div>

            {/* Title */}
            <h2
              className="text-center font-bold mb-2"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: '20px',
                letterSpacing: '0.03em',
                color: '#d4af37',
                textShadow: '0 2px 16px rgba(212,175,55,0.35)',
              }}
            >
              {t('notification.modal.title')}
            </h2>

            {/* Description */}
            <p
              className="text-center mb-5 leading-relaxed"
              style={{ fontSize: '13px', color: 'rgba(220,210,255,0.65)', lineHeight: '1.6' }}
            >
              {t('notification.modal.description')}
            </p>

            {/* Benefits */}
            <div
              className="rounded-xl mb-5 overflow-hidden"
              style={{
                background: 'rgba(212,175,55,0.04)',
                border: '1px solid rgba(212,175,55,0.16)',
              }}
            >
              {[
                'notification.modal.benefit1',
                'notification.modal.benefit2',
                'notification.modal.benefit3',
              ].map((key, i) => (
                <div
                  key={key}
                  className="flex items-center gap-3 px-4 py-3"
                  style={{
                    borderBottom: i < 2 ? '1px solid rgba(212,175,55,0.10)' : 'none',
                  }}
                >
                  <span style={{
                    width: '5px', height: '5px',
                    background: '#d4af37',
                    borderRadius: '1px',
                    transform: 'rotate(45deg)',
                    flexShrink: 0,
                    boxShadow: '0 0 6px rgba(212,175,55,0.60)',
                  }} />
                  <span style={{ fontSize: '12.5px', color: 'rgba(220,210,255,0.72)', lineHeight: '1.5' }}>
                    {t(key)}
                  </span>
                </div>
              ))}
            </div>

            {/* Accept button */}
            <button
              onClick={handleAccept}
              className="w-full flex items-center justify-center transition-all duration-200 active:scale-[0.98]"
              style={{
                height: '50px',
                borderRadius: '10px',
                background: 'linear-gradient(180deg, #d4af37 0%, #b8942a 100%)',
                boxShadow: '0 2px 16px rgba(212,175,55,0.25)',
                border: '1px solid rgba(212,175,55,0.50)',
                fontSize: '12px',
                letterSpacing: '0.16em',
                color: '#0a0818',
                fontWeight: '700',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 4px 24px rgba(212,175,55,0.42)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 2px 16px rgba(212,175,55,0.25)')}
            >
              {t('notification.modal.accept')}
            </button>

            {/* Decline */}
            <button
              onClick={handleDecline}
              className="w-full mt-3 py-2 text-center transition-colors duration-200"
              style={{ fontSize: '13px', color: 'rgba(212,175,55,0.38)', background: 'none', border: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(212,175,55,0.65)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(212,175,55,0.38)')}
            >
              {t('notification.modal.decline')}
            </button>

            {/* Note */}
            <p
              className="text-center mt-3 italic"
              style={{ fontSize: '11px', color: 'rgba(212,175,55,0.28)', lineHeight: '1.4' }}
            >
              {t('notification.modal.note')}
            </p>
          </div>

          {/* Bottom golden glow line */}
          <div
            className="absolute bottom-0 left-8 right-8"
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.20), transparent)',
            }}
          />
        </div>
      </div>
    </>
  );
}