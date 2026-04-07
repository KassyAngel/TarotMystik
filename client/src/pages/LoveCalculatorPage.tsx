// client/src/pages/LoveCalculatorPage.tsx
// v6 — Design Sublime : textes ultra-visibles, images webp, inputs renforcés, toutes phases magnifiées

import { useState, useCallback } from 'react';
import { UserSession } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  getLoveResult,
  getRandomMessage,
  getRandomAdvice,
  calculateCompatibilityPercentage,
  type CompatibilityMode,
} from '@/data/loveCalculatorData';

interface LoveCalculatorPageProps {
  user: UserSession;
  onBack: () => void;
  onSaveReading?: (reading: any) => Promise<void>;
  onReadingComplete?: (oracleType: string) => void;
  isPremium?: boolean;
  shouldShowAdBeforeReading?: (oracleType: string) => Promise<boolean>;
}

export function LoveCalculatorPage({
  onBack, onSaveReading, onReadingComplete, shouldShowAdBeforeReading,
}: LoveCalculatorPageProps) {
  const { t } = useLanguage();

  type Phase = 'mode' | 'input' | 'calculating' | 'result';
  const [phase, setPhase]             = useState<Phase>('mode');
  const [mode, setMode]               = useState<CompatibilityMode>('love');
  const [name1, setName1]             = useState('');
  const [name2, setName2]             = useState('');
  const [pct, setPct]                 = useState(0);
  const [displayPct, setDisplayPct]   = useState(0);
  const [result, setResult]           = useState<any>(null);
  const [message, setMessage]         = useState('');
  const [advice, setAdvice]           = useState('');
  const [showDetails, setShowDetails] = useState(false);

  // ── Date i18n via clés plates ──────────────────────────────────────────────
  const now = new Date();
  const DAY_KEYS   = ['loveCalculator.day.sun','loveCalculator.day.mon','loveCalculator.day.tue','loveCalculator.day.wed','loveCalculator.day.thu','loveCalculator.day.fri','loveCalculator.day.sat'];
  const MONTH_KEYS = ['loveCalculator.month.jan','loveCalculator.month.feb','loveCalculator.month.mar','loveCalculator.month.apr','loveCalculator.month.may','loveCalculator.month.jun','loveCalculator.month.jul','loveCalculator.month.aug','loveCalculator.month.sep','loveCalculator.month.oct','loveCalculator.month.nov','loveCalculator.month.dec'];
  const todayLabel = `${t(DAY_KEYS[now.getDay()])} ${now.getDate()} ${t(MONTH_KEYS[now.getMonth()])}`;

  const handleSelectMode = (m: CompatibilityMode) => { setMode(m); setPhase('input'); };

  const handleCalculate = useCallback(async () => {
    if (!name1.trim() || !name2.trim()) return;
    const adPromise = shouldShowAdBeforeReading
      ? shouldShowAdBeforeReading('loveCalculator').catch(() => false)
      : Promise.resolve(false);
    const p   = calculateCompatibilityPercentage(name1, name2, mode);
    const res = getLoveResult(p, mode);
    setPct(p); setResult(res);
    setMessage(t(getRandomMessage(res)));
    setAdvice(t(getRandomAdvice(res)));
    setDisplayPct(0); setShowDetails(false);
    setPhase('calculating');
    await adPromise;
    const duration = 1800;
    const start    = performance.now();
    const animate  = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      setDisplayPct(Math.round(eased * p));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayPct(p);
        setPhase('result');
        setTimeout(() => setShowDetails(true), 350);
        onSaveReading?.({ type: 'loveCalculator', cards: [`${name1} & ${name2}`], date: new Date(), answer: `${p}%` });
        onReadingComplete?.('loveCalculator');
      }
    };
    requestAnimationFrame(animate);
  }, [name1, name2, mode, t, shouldShowAdBeforeReading, onSaveReading, onReadingComplete]);

  const handleReset = () => {
    setName1(''); setName2(''); setPct(0); setDisplayPct(0);
    setResult(null); setMessage(''); setAdvice('');
    setShowDetails(false); setPhase('mode');
  };

  // ── Palette score ──────────────────────────────────────────────────────────
  const scoreGrad = (p: number) => {
    if (p >= 90) return { from: '#f472b6', mid: '#e879f9', to: '#fdf4ff', glow: 'rgba(244,114,182,.85)', ring: '#f472b6', accent: '#fce7f3', text: '#fff0f6' };
    if (p >= 80) return { from: '#e879f9', mid: '#d946ef', to: '#f3e8ff', glow: 'rgba(232,121,249,.80)', ring: '#e879f9', accent: '#f5d0fe', text: '#fdf4ff' };
    if (p >= 70) return { from: '#c084fc', mid: '#a855f7', to: '#e9d5ff', glow: 'rgba(192,132,252,.75)', ring: '#c084fc', accent: '#ede9fe', text: '#f5f3ff' };
    if (p >= 65) return { from: '#a855f7', mid: '#9333ea', to: '#ddd6fe', glow: 'rgba(168,85,247,.70)', ring: '#a855f7', accent: '#ddd6fe', text: '#f5f3ff' };
    if (p >= 60) return { from: '#9333ea', mid: '#7c3aed', to: '#c4b5fd', glow: 'rgba(147,51,234,.65)', ring: '#9333ea', accent: '#c4b5fd', text: '#ede9fe' };
    if (p >= 50) return { from: '#6366f1', mid: '#4f46e5', to: '#a5b4fc', glow: 'rgba(99,102,241,.60)', ring: '#6366f1', accent: '#a5b4fc', text: '#e0e7ff' };
    if (p >= 40) return { from: '#4f46e5', mid: '#4338ca', to: '#818cf8', glow: 'rgba(79,70,229,.55)', ring: '#4f46e5', accent: '#818cf8', text: '#e0e7ff' };
    return             { from: '#4338ca', mid: '#3730a3', to: '#6366f1', glow: 'rgba(67,56,202,.50)', ring: '#4338ca', accent: '#6366f1', text: '#c7d2fe' };
  };

  const loveColors   = { from: '#f472b6', mid: '#e879f9', to: '#fdf4ff', glow: 'rgba(244,114,182,.70)', ring: '#e879f9', accent: '#fce7f3', text: '#fff0f6' };
  const friendColors = { from: '#818cf8', mid: '#a78bfa', to: '#e0e7ff', glow: 'rgba(129,140,248,.70)', ring: '#818cf8', accent: '#e0e7ff', text: '#eef2ff' };
  const modeColors   = mode === 'love' ? loveColors : friendColors;
  const sc           = result ? scoreGrad(pct) : modeColors;

  const safeTop    = 'calc(96px + env(safe-area-inset-top, 0px))';
  const safeBottom = 'calc(120px + env(safe-area-inset-bottom, 0px))';

  // ── Couleurs des labels selon mode ────────────────────────────────────────
  const labelColor = mode === 'love' ? 'rgba(255,200,230,1)' : 'rgba(199,218,255,1)';
  const accentColor = mode === 'love' ? '#f472b6' : '#818cf8';
  const borderColor = mode === 'love' ? 'rgba(244,114,182,.75)' : 'rgba(129,140,248,.72)';
  const inputFocusShadow = mode === 'love'
    ? 'inset 0 2px 14px rgba(0,0,0,.55), 0 0 0 3px rgba(244,114,182,.22), 0 0 28px rgba(244,114,182,.18)'
    : 'inset 0 2px 14px rgba(0,0,0,.55), 0 0 0 3px rgba(99,102,241,.22), 0 0 28px rgba(99,102,241,.18)';

  return (
    <div style={{
      position: 'fixed', inset: 0, display: 'flex', flexDirection: 'column',
      overflow: 'hidden', background: '#020510',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');
        .lc-serif { font-family: 'Cinzel', serif; }
        .lc-body  { font-family: 'EB Garamond', serif; }

        @keyframes lc-star    { 0%,100%{opacity:.15;transform:scale(1);}   50%{opacity:1;transform:scale(1.8);} }
        @keyframes lc-float   { 0%,100%{transform:translateY(0);}          50%{transform:translateY(-10px);} }
        @keyframes lc-in      { from{opacity:0;transform:translateY(22px);} to{opacity:1;transform:translateY(0);} }
        @keyframes lc-pulse   { 0%,100%{opacity:.60;transform:scale(1);}  50%{opacity:1;transform:scale(1.14);} }
        @keyframes lc-spin    { from{transform:rotate(0deg);}              to{transform:rotate(360deg);} }
        @keyframes lc-shim    { from{background-position:-200% center;}    to{background-position:200% center;} }
        @keyframes lc-detail  { from{opacity:0;transform:scale(.96) translateY(18px);} to{opacity:1;transform:scale(1) translateY(0);} }
        @keyframes lc-dot     { 0%,100%{opacity:.5;} 50%{opacity:1;} }
        @keyframes lc-aurora  { 0%,100%{opacity:.20;transform:scale(1) rotate(0deg);}  50%{opacity:.38;transform:scale(1.06) rotate(4deg);} }
        @keyframes lc-img-in  { from{opacity:0;transform:scale(.85);} to{opacity:1;transform:scale(1);} }
        @keyframes lc-glow-pulse { 0%,100%{filter:drop-shadow(0 0 18px rgba(244,114,182,.55));} 50%{filter:drop-shadow(0 0 36px rgba(244,114,182,.95));} }
        @keyframes lc-glow-pulse-f { 0%,100%{filter:drop-shadow(0 0 18px rgba(129,140,248,.55));} 50%{filter:drop-shadow(0 0 36px rgba(129,140,248,.95));} }

        .lc-star    { animation: lc-star   ease-in-out infinite; }
        .lc-float   { animation: lc-float  5.5s ease-in-out infinite; }
        .lc-in      { animation: lc-in     .44s ease-out forwards; }
        .lc-pulse   { animation: lc-pulse  2.4s ease-in-out infinite; }
        .lc-spin    { animation: lc-spin   9s   linear infinite; }
        .lc-detail  { animation: lc-detail .55s cubic-bezier(.16,1,.3,1) forwards; }
        .lc-dot     { animation: lc-dot    1.8s ease-in-out infinite; }
        .lc-aurora  { animation: lc-aurora 7s   ease-in-out infinite; }
        .lc-img-love   { animation: lc-img-in .5s ease-out forwards, lc-glow-pulse 3s ease-in-out infinite .6s; }
        .lc-img-friend { animation: lc-img-in .5s ease-out forwards, lc-glow-pulse-f 3s ease-in-out infinite .6s; }

        /* ── Badge date ─────────────────────────────────────────────── */
        .lc-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 20px; border-radius: 99px;
          border: 1.5px solid rgba(200,210,255,.65);
          background: linear-gradient(135deg, rgba(55,48,163,.95), rgba(36,32,100,.98));
          font-family: 'Cinzel', serif; font-size: 11px;
          letter-spacing: .20em; text-transform: uppercase;
          color: rgba(240,245,255,1);
          box-shadow: 0 0 24px rgba(99,102,241,.35), inset 0 1px 0 rgba(200,210,255,.22);
          text-shadow: 0 0 12px rgba(165,180,252,.60);
        }
        .lc-badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: radial-gradient(circle, #e0e7ff, #a5b4fc);
          box-shadow: 0 0 10px rgba(200,210,255,1);
        }

        /* ── Cartes mode ─────────────────────────────────────────────── */
        .lc-mode-card {
          position: relative; overflow: hidden;
          border-radius: 22px; padding: 28px 16px 24px;
          cursor: pointer; text-align: center;
          transition: transform .22s ease, border-color .22s ease, box-shadow .22s ease;
        }
        .lc-mode-card::before {
          content: ''; position: absolute; inset: 0; opacity: 0;
          background: radial-gradient(circle at 50% 30%, rgba(255,255,255,.10) 0%, transparent 65%);
          transition: opacity .22s;
        }
        .lc-mode-card:hover::before { opacity: 1; }
        .lc-mode-card-love {
          border: 2px solid rgba(244,114,182,.70);
          background: linear-gradient(155deg, rgba(120,10,65,.96) 0%, rgba(65,4,50,.98) 55%, rgba(20,3,34,1) 100%);
          box-shadow: 0 0 55px rgba(244,114,182,.30), 0 10px 36px rgba(0,0,0,.65), inset 0 1px 0 rgba(255,180,220,.20);
        }
        .lc-mode-card-friendship {
          border: 2px solid rgba(129,140,248,.65);
          background: linear-gradient(155deg, rgba(20,12,85,.96) 0%, rgba(10,7,60,.98) 55%, rgba(4,3,32,1) 100%);
          box-shadow: 0 0 55px rgba(129,140,248,.28), 0 10px 36px rgba(0,0,0,.65), inset 0 1px 0 rgba(165,180,252,.18);
        }
        .lc-mode-card:hover { transform: translateY(-6px) scale(1.02); }
        .lc-mode-card-love:hover {
          border-color: rgba(244,114,182,1);
          box-shadow: 0 0 70px rgba(244,114,182,.50), 0 14px 44px rgba(0,0,0,.70), inset 0 1px 0 rgba(255,180,220,.28);
        }
        .lc-mode-card-friendship:hover {
          border-color: rgba(129,140,248,1);
          box-shadow: 0 0 70px rgba(129,140,248,.45), 0 14px 44px rgba(0,0,0,.70), inset 0 1px 0 rgba(200,210,255,.22);
        }

        /* ── Icône image ─────────────────────────────────────────────── */
        .lc-icon-wrap {
          width: 80px; height: 80px; border-radius: 50%;
          margin: 0 auto 16px;
          display: flex; align-items: center; justify-content: center;
          position: relative;
        }
        .lc-icon-wrap-love {
          background: radial-gradient(circle, rgba(244,114,182,.22) 0%, rgba(232,121,249,.10) 60%, transparent 80%);
          border: 1.5px solid rgba(244,114,182,.45);
          box-shadow: 0 0 32px rgba(244,114,182,.40), inset 0 1px 0 rgba(255,255,255,.08);
        }
        .lc-icon-wrap-friend {
          background: radial-gradient(circle, rgba(129,140,248,.22) 0%, rgba(165,180,252,.10) 60%, transparent 80%);
          border: 1.5px solid rgba(129,140,248,.42);
          box-shadow: 0 0 32px rgba(129,140,248,.38), inset 0 1px 0 rgba(255,255,255,.08);
        }
        .lc-icon-wrap img {
          width: 56px; height: 56px; object-fit: contain;
        }

        /* ── Titres cartes ───────────────────────────────────────────── */
        .lc-card-title-love {
          font-family: 'Cinzel', serif; font-weight: 700; font-size: 16px;
          letter-spacing: .08em; margin-bottom: 7px;
          background: linear-gradient(135deg, #fce7f3, #fda4cf, #fdf4ff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 12px rgba(244,114,182,.55));
        }
        .lc-card-title-friend {
          font-family: 'Cinzel', serif; font-weight: 700; font-size: 16px;
          letter-spacing: .08em; margin-bottom: 7px;
          background: linear-gradient(135deg, #bfdbfe, #a5b4fc, #e0e7ff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 12px rgba(129,140,248,.50));
        }
        .lc-card-sub-love   { font-family:'EB Garamond',serif; font-size:13.5px; color:rgba(255,210,235,1); font-style:italic; margin:0; }
        .lc-card-sub-friend { font-family:'EB Garamond',serif; font-size:13.5px; color:rgba(210,225,255,1); font-style:italic; margin:0; }

        /* ── Champs ──────────────────────────────────────────────────── */
        .lc-input-shell {
          border-radius: 16px;
          border: 2px solid rgba(165,180,252,.55);
          background: rgba(8,5,28,.92);
          box-shadow: inset 0 2px 16px rgba(0,0,0,.60), 0 0 0 0 rgba(99,102,241,0);
          transition: border-color .25s, box-shadow .25s;
        }
        .lc-input-shell:focus-within {
          border-color: rgba(200,215,255,.95);
          box-shadow: inset 0 2px 16px rgba(0,0,0,.60), 0 0 0 4px rgba(99,102,241,.20), 0 0 32px rgba(99,102,241,.18);
        }
        .lc-input-shell-love:focus-within {
          border-color: rgba(255,182,220,.95);
          box-shadow: inset 0 2px 16px rgba(0,0,0,.60), 0 0 0 4px rgba(244,114,182,.22), 0 0 32px rgba(244,114,182,.18);
        }
        .lc-input {
          width: 100%; padding: 18px 22px;
          background: transparent; border: none; outline: none;
          font-family: 'EB Garamond', serif; font-size: 19px;
          color: rgba(240,245,255,1);
          letter-spacing: .02em;
        }
        .lc-input::placeholder { color: rgba(130,145,200,.55); font-style: italic; }

        /* ── Label champ ─────────────────────────────────────────────── */
        .lc-field-label {
          display: block; margin-bottom: 9px;
          font-family: 'Cinzel', serif; font-size: 11.5px;
          letter-spacing: .22em; text-transform: uppercase;
          font-weight: 600;
        }

        /* ── Bouton principal ────────────────────────────────────────── */
        .lc-btn {
          position: relative; overflow: hidden;
          width: 100%; padding: 20px 28px; border-radius: 15px;
          border: 2px solid rgba(200,215,255,.65);
          background: linear-gradient(135deg, #1e1b4b 0%, #3730a3 30%, #4c1d95 55%, #3730a3 75%, #1e1b4b 100%);
          background-size: 200%;
          color: rgba(240,248,255,1);
          font-family: 'Cinzel', serif; font-size: 13.5px;
          font-weight: 700; letter-spacing: .18em; text-transform: uppercase;
          cursor: pointer;
          box-shadow: 0 0 50px rgba(99,102,241,.55), 0 6px 28px rgba(0,0,0,.55), inset 0 1px 0 rgba(200,215,255,.28);
          transition: transform .18s, filter .18s, box-shadow .18s;
          text-shadow: 0 0 20px rgba(200,215,255,.50);
        }
        .lc-btn::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,.16) 50%, transparent 70%);
          background-size: 200% 100%;
          animation: lc-shim 2.8s linear infinite;
          pointer-events: none;
        }
        .lc-btn:hover:not(:disabled) {
          transform: translateY(-2px); filter: brightness(1.22);
          box-shadow: 0 0 70px rgba(99,102,241,.70), 0 10px 36px rgba(0,0,0,.60), inset 0 1px 0 rgba(200,215,255,.32);
        }
        .lc-btn:active:not(:disabled) { transform: scale(.99); }
        .lc-btn:disabled { opacity: .28; cursor: not-allowed; }

        /* ── Bouton ghost ─────────────────────────────────────────────── */
        .lc-btn-ghost {
          width: 100%; padding: 16px 28px; border-radius: 14px;
          border: 1.5px solid rgba(130,145,220,.38); background: rgba(15,12,42,.45);
          color: rgba(200,215,255,.90);
          font-family: 'Cinzel', serif; font-size: 12px;
          font-weight: 600; letter-spacing: .14em; text-transform: uppercase;
          cursor: pointer; transition: all .24s;
        }
        .lc-btn-ghost:hover {
          background: rgba(99,102,241,.15);
          border-color: rgba(165,180,252,.65);
          color: rgba(220,230,255,1);
          box-shadow: 0 0 22px rgba(99,102,241,.20);
        }

        /* ── Carte résultat ───────────────────────────────────────────── */
        .lc-result-card {
          border-radius: 22px; padding: 2px;
          background: linear-gradient(140deg, rgba(165,180,252,.70) 0%, rgba(71,85,105,.22) 50%, rgba(165,180,252,.70) 100%);
          box-shadow: 0 0 70px rgba(99,102,241,.28), 0 10px 36px rgba(0,0,0,.50);
        }
        .lc-result-card-inner {
          border-radius: 20px; padding: 28px 24px;
          background: linear-gradient(165deg, rgba(4,2,18,1) 0%, rgba(8,5,30,1) 100%);
        }

        /* ── Séparateurs ─────────────────────────────────────────────── */
        .lc-rule { height: 1px; background: linear-gradient(90deg, transparent, rgba(165,180,252,.65), transparent); }

        /* ── Anneau SVG ─────────────────────────────────────────────── */
        .lc-ring-track { fill: none; stroke: rgba(99,102,241,.18); }
        .lc-ring-fill  { fill: none; stroke-linecap: round; transform: rotate(-90deg); transform-origin: 50% 50%; }

        /* ── Note box ───────────────────────────────────────────────── */
        .lc-note {
          padding: 15px 20px; border-radius: 14px; text-align: center;
          background: linear-gradient(135deg, rgba(35,30,90,.72), rgba(55,48,163,.42));
          border: 1.5px solid rgba(130,145,220,.40);
          box-shadow: inset 0 1px 0 rgba(200,215,255,.12);
        }
        .lc-note p {
          font-family: 'EB Garamond', serif;
          font-size: 14px; color: rgba(210,225,255,.92);
          font-style: italic; line-height: 1.70; margin: 0;
        }

        /* ── Pill mode actif ─────────────────────────────────────────── */
        .lc-pill-love {
          font-family:'Cinzel',serif; font-size:11px; letter-spacing:.22em;
          text-transform:uppercase; padding:8px 22px; border-radius:99px;
          background:linear-gradient(135deg,rgba(244,114,182,.28),rgba(232,121,249,.16));
          border:2px solid rgba(244,114,182,.65);
          color:rgba(255,210,235,1);
          box-shadow:0 0 20px rgba(244,114,182,.28);
          text-shadow:0 0 12px rgba(244,114,182,.50);
        }
        .lc-pill-friend {
          font-family:'Cinzel',serif; font-size:11px; letter-spacing:.22em;
          text-transform:uppercase; padding:8px 22px; border-radius:99px;
          background:linear-gradient(135deg,rgba(99,102,241,.28),rgba(165,180,252,.16));
          border:2px solid rgba(129,140,248,.62);
          color:rgba(210,225,255,1);
          box-shadow:0 0 20px rgba(129,140,248,.25);
          text-shadow:0 0 12px rgba(129,140,248,.50);
        }

        /* ── Section label résultat ─────────────────────────────────── */
        .lc-section-label {
          font-family:'Cinzel',serif; font-size:10.5px;
          letter-spacing:.24em; text-transform:uppercase;
          font-weight:600; margin-bottom:12px;
        }
      `}</style>

      {/* ── Fond étoilé + aurores ── */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }} aria-hidden>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(165deg,#020510 0%,#060916 55%,#08091c 100%)' }} />
        <div className="lc-aurora" style={{ position:'absolute', top:'-10%', right:'-5%', width:'550px', height:'550px', borderRadius:'50%', filter:'blur(95px)', background:'radial-gradient(circle,rgba(99,102,241,.50) 0%,transparent 65%)' }} />
        <div className="lc-aurora" style={{ position:'absolute', bottom:'-5%', left:'-8%', width:'460px', height:'460px', borderRadius:'50%', filter:'blur(95px)', background:'radial-gradient(circle,rgba(168,85,247,.45) 0%,transparent 65%)', animationDelay:'2s' }} />
        <div className="lc-aurora" style={{ position:'absolute', top:'45%', left:'55%', width:'360px', height:'360px', borderRadius:'50%', filter:'blur(115px)', background:'radial-gradient(circle,rgba(244,114,182,.40) 0%,transparent 65%)', animationDelay:'4s' }} />
        <div className="lc-aurora" style={{ position:'absolute', top:'20%', left:'10%', width:'280px', height:'280px', borderRadius:'50%', filter:'blur(105px)', background:'radial-gradient(circle,rgba(59,130,246,.28) 0%,transparent 65%)', animationDelay:'1s' }} />
        {Array.from({ length: 40 }, (_, i) => (
          <div key={i} className="lc-star" style={{
            position:'absolute', borderRadius:'50%',
            width:  i % 5 === 0 ? '3.5px' : i % 3 === 0 ? '2.5px' : '1.8px',
            height: i % 5 === 0 ? '3.5px' : i % 3 === 0 ? '2.5px' : '1.8px',
            background: i % 4 === 0 ? '#dde5ff' : i % 4 === 1 ? '#c7d2fe' : i % 4 === 2 ? '#bae6fd' : '#f5d0fe',
            top:  `${(i * 2.6 + 3) % 100}%`,
            left: `${(i * 6.5 + 5) % 100}%`,
            opacity: .18 + (i % 5) * .14,
            animationDuration: `${1.8 + (i % 5) * .7}s`,
            animationDelay:    `${(i % 7) * .25}s`,
          }} />
        ))}
      </div>

      {/* ── Scroll principal ── */}
      <div style={{ flex:1, overflowY:'auto', overflowX:'hidden', padding:'0 18px', position:'relative', zIndex:1 }}>
        <div style={{ maxWidth:'480px', margin:'0 auto', width:'100%' }}>

          {/* ══════════════════════════════════════
              PHASE : CHOIX DU MODE
          ══════════════════════════════════════ */}
          {phase === 'mode' && (
            <div className="lc-in" style={{ paddingTop:safeTop, paddingBottom:safeBottom, display:'flex', flexDirection:'column', gap:'28px' }}>

              {/* En-tête */}
              <div style={{ textAlign:'center', display:'flex', flexDirection:'column', gap:'18px' }}>
                <div style={{ display:'flex', justifyContent:'center' }}>
                  <div className="lc-badge">
                    <div className="lc-badge-dot lc-dot" />
                    {todayLabel}
                  </div>
                </div>
                <h1 className="lc-serif" style={{
                  fontSize:'clamp(26px, 7vw, 36px)', fontWeight:700, margin:0,
                  background:'linear-gradient(135deg, #fda4cf 0%, #e879f9 35%, #a78bfa 65%, #93c5fd 100%)',
                  WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
                  filter:'drop-shadow(0 0 32px rgba(232,121,249,.70))',
                  lineHeight:1.20,
                }}>
                  {t('loveCalculator.title')}
                </h1>
                <p className="lc-body" style={{
                  fontSize:'18px', color:'rgba(225,215,255,1)', fontStyle:'italic',
                  lineHeight:1.70, margin:0,
                  textShadow:'0 0 24px rgba(200,180,255,.40)',
                }}>
                  {t('loveCalculator.mode.subtitle')}
                </p>
              </div>

              {/* Séparateur */}
              <div style={{ position:'relative', height:'1px' }}>
                <div className="lc-rule" />
                <div style={{ position:'absolute', top:'-5px', left:'50%', transform:'translateX(-50%)', width:'10px', height:'10px', borderRadius:'50%', background:'radial-gradient(circle, #c7d2fe, #6366f1)', boxShadow:'0 0 16px rgba(165,180,252,1)' }} />
              </div>

              {/* Cartes mode */}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px' }}>

                {/* ── Amour ── */}
                <div className="lc-mode-card lc-mode-card-love" onClick={() => handleSelectMode('love')}>
                  <div style={{ position:'absolute', top:'10px', left:'50%', transform:'translateX(-50%)', width:'90px', height:'90px', borderRadius:'50%', background:'radial-gradient(circle, rgba(244,114,182,.28) 0%, transparent 70%)', filter:'blur(18px)', pointerEvents:'none' }} />
                  <div className="lc-float lc-icon-wrap lc-icon-wrap-love">
                    <img
                      src="/Image/love.webp"
                      alt="Amour"
                      className="lc-img-love"
                      style={{ width:'56px', height:'56px', objectFit:'contain' }}
                      onError={(e) => {
                        // Fallback SVG si l'image n'est pas encore disponible
                        (e.target as HTMLImageElement).style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.innerHTML = `<svg viewBox="0 0 56 56" width="56" height="56" fill="none"><path d="M28 39C28 39 14 31 14 22.5C14 18.5 17 15.5 21 15.5C23.5 15.5 25.8 16.9 28 19.2C30.2 16.9 32.5 15.5 35 15.5C39 15.5 42 18.5 42 22.5C42 31 28 39 28 39Z" fill="url(#lG)"/><defs><linearGradient id="lG" x1="14" y1="15" x2="42" y2="39" gradientUnits="userSpaceOnUse"><stop stop-color="#f9a8d4"/><stop offset=".5" stop-color="#f472b6"/><stop offset="1" stop-color="#e879f9"/></linearGradient></defs></svg>`;
                        (e.target as HTMLImageElement).parentNode?.appendChild(fallback.firstChild!);
                      }}
                    />
                  </div>
                  <p className="lc-card-title-love">{t('loveCalculator.mode.love')}</p>
                  <p className="lc-card-sub-love">{t('loveCalculator.mode.love.subtitle')}</p>
                </div>

                {/* ── Amitié ── */}
                <div className="lc-mode-card lc-mode-card-friendship" onClick={() => handleSelectMode('friendship')}>
                  <div style={{ position:'absolute', top:'10px', left:'50%', transform:'translateX(-50%)', width:'90px', height:'90px', borderRadius:'50%', background:'radial-gradient(circle, rgba(129,140,248,.28) 0%, transparent 70%)', filter:'blur(18px)', pointerEvents:'none' }} />
                  <div className="lc-float lc-icon-wrap lc-icon-wrap-friend" style={{ animationDelay:'0.7s' }}>
                    <img
                      src="/Image/friendship.webp"
                      alt="Amitié"
                      className="lc-img-friend"
                      style={{ width:'56px', height:'56px', objectFit:'contain' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.innerHTML = `<svg viewBox="0 0 56 56" width="56" height="56" fill="none"><circle cx="21" cy="21" r="6.5" fill="url(#fG1)"/><circle cx="35" cy="21" r="6.5" fill="url(#fG2)"/><path d="M13 37C13 32 16.8 29 21 29C23.2 29 25.2 29.8 26.8 31.1C25.2 32.6 24.1 34.5 23.8 36.7L23.5 39H13V37Z" fill="url(#fG1)" opacity=".85"/><path d="M43 37C43 32 39.2 29 35 29C32.8 29 30.8 29.8 29.2 31.1C30.8 32.6 31.9 34.5 32.2 36.7L32.5 39H43V37Z" fill="url(#fG2)" opacity=".85"/><defs><linearGradient id="fG1" x1="13" y1="14" x2="32" y2="39" gradientUnits="userSpaceOnUse"><stop stop-color="#93c5fd"/><stop offset="1" stop-color="#818cf8"/></linearGradient><linearGradient id="fG2" x1="24" y1="14" x2="43" y2="39" gradientUnits="userSpaceOnUse"><stop stop-color="#a78bfa"/><stop offset="1" stop-color="#c084fc"/></linearGradient></defs></svg>`;
                        (e.target as HTMLImageElement).parentNode?.appendChild(fallback.firstChild!);
                      }}
                    />
                  </div>
                  <p className="lc-card-title-friend">{t('loveCalculator.mode.friendship')}</p>
                  <p className="lc-card-sub-friend">{t('loveCalculator.mode.friendship.subtitle')}</p>
                </div>
              </div>

              <button className="lc-btn-ghost" onClick={onBack}>{t('loveCalculator.back')}</button>
            </div>
          )}

          {/* ══════════════════════════════════════
              PHASE : SAISIE DES PRÉNOMS
          ══════════════════════════════════════ */}
          {phase === 'input' && (
            <div className="lc-in" style={{ paddingTop:safeTop, paddingBottom:safeBottom, display:'flex', flexDirection:'column', gap:'22px' }}>

              <div style={{ textAlign:'center', display:'flex', flexDirection:'column', gap:'14px' }}>
                <div style={{ display:'flex', justifyContent:'center' }}>
                  <div className="lc-badge"><div className="lc-badge-dot lc-dot" />{todayLabel}</div>
                </div>
                <div style={{ display:'flex', justifyContent:'center' }}>
                  <span className={mode === 'love' ? 'lc-pill-love' : 'lc-pill-friend'}>
                    {t(`loveCalculator.mode.${mode}`)}
                  </span>
                </div>
                <h1 className="lc-serif" style={{
                  fontSize:'clamp(22px, 6vw, 30px)', fontWeight:700, margin:0,
                  background:'linear-gradient(135deg, #dde5ff, #f0f4ff, #dde5ff)',
                  WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
                  filter:'drop-shadow(0 0 22px rgba(165,180,252,.65))',
                }}>
                  {t('loveCalculator.title')}
                </h1>
              </div>

              <div style={{ position:'relative', height:'1px' }}>
                <div className="lc-rule" />
                <div style={{ position:'absolute', top:'-5px', left:'50%', transform:'translateX(-50%)', width:'10px', height:'10px', borderRadius:'50%', background:'radial-gradient(circle,#c7d2fe,#6366f1)', boxShadow:'0 0 16px rgba(165,180,252,1)' }} />
              </div>

              {/* Champs */}
              <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
                <div>
                  <label className="lc-field-label" style={{ color: labelColor, textShadow:`0 0 14px ${accentColor}60` }}>
                    {t('loveCalculator.name1Label')}
                  </label>
                  <div className={`lc-input-shell ${mode === 'love' ? 'lc-input-shell-love' : ''}`}>
                    <input
                      className="lc-input" type="text" value={name1}
                      onChange={e => setName1(e.target.value)}
                      placeholder={t('loveCalculator.name1Placeholder')}
                      onKeyDown={e => e.key === 'Enter' && name1.trim() && name2.trim() && handleCalculate()}
                    />
                  </div>
                </div>

                {/* & séparateur */}
                <div style={{ display:'flex', alignItems:'center', gap:'16px' }}>
                  <div className="lc-rule" style={{ flex:1 }} />
                  <span className="lc-serif" style={{
                    fontSize:'22px', fontWeight:700,
                    color: accentColor,
                    textShadow:`0 0 20px ${accentColor}CC`,
                    filter:`drop-shadow(0 0 10px ${accentColor})`,
                  }}>&</span>
                  <div className="lc-rule" style={{ flex:1 }} />
                </div>

                <div>
                  <label className="lc-field-label" style={{ color: labelColor, textShadow:`0 0 14px ${accentColor}60` }}>
                    {t('loveCalculator.name2Label')}
                  </label>
                  <div className={`lc-input-shell ${mode === 'love' ? 'lc-input-shell-love' : ''}`}>
                    <input
                      className="lc-input" type="text" value={name2}
                      onChange={e => setName2(e.target.value)}
                      placeholder={t('loveCalculator.name2Placeholder')}
                      onKeyDown={e => e.key === 'Enter' && name1.trim() && name2.trim() && handleCalculate()}
                    />
                  </div>
                </div>
              </div>

              <div className="lc-note">
                <p>{t('loveCalculator.note')}</p>
              </div>

              <button className="lc-btn" onClick={handleCalculate} disabled={!name1.trim() || !name2.trim()}>
                ✦ {t('loveCalculator.mode.calculateButton')} ✦
              </button>
              <button className="lc-btn-ghost" onClick={() => setPhase('mode')}>
                {t('loveCalculator.changeMode')}
              </button>
            </div>
          )}

          {/* ══════════════════════════════════════
              PHASE : CALCUL (spinner)
          ══════════════════════════════════════ */}
          {phase === 'calculating' && (
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center', minHeight:'100vh' }}>
              <div className="lc-in" style={{ textAlign:'center', display:'flex', flexDirection:'column', gap:'32px' }}>
                <div style={{ position:'relative', width:'130px', height:'130px', margin:'0 auto' }}>
                  <svg className="lc-spin" style={{ position:'absolute', inset:0, width:'100%', height:'100%' }} viewBox="0 0 60 60">
                    <circle className="lc-ring-track" cx="30" cy="30" r="25" strokeWidth="5.5" />
                    <circle className="lc-ring-fill" cx="30" cy="30" r="25"
                      stroke="url(#calcG)" strokeWidth="5.5"
                      strokeDasharray="157.1" strokeDashoffset="104" />
                    <defs>
                      <linearGradient id="calcG" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={modeColors.from} />
                        <stop offset="50%" stopColor={modeColors.mid} />
                        <stop offset="100%" stopColor={modeColors.accent} />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="lc-pulse" style={{
                    position:'absolute', inset:'16px', borderRadius:'50%',
                    background:`radial-gradient(circle,${modeColors.glow} 0%,transparent 70%)`,
                  }} />
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
                  <p className="lc-serif" style={{
                    fontSize:'11px', letterSpacing:'.28em', textTransform:'uppercase',
                    color:'rgba(210,220,255,1)', margin:0,
                    textShadow:'0 0 18px rgba(165,180,252,.55)',
                  }}>
                    {t('loveCalculator.calculating')}
                  </p>
                  <p className="lc-serif" style={{
                    fontSize:'24px', fontWeight:600, margin:0,
                    background:'linear-gradient(135deg,#dde5ff,#f0f4ff)',
                    WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
                    filter:'drop-shadow(0 0 18px rgba(200,210,255,.60))',
                  }}>
                    {name1} & {name2}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════
              PHASE : RÉSULTAT
          ══════════════════════════════════════ */}
          {phase === 'result' && result && (
            <div className="lc-in" style={{ paddingTop:safeTop, paddingBottom:safeBottom, display:'flex', flexDirection:'column', gap:'22px' }}>

              {/* Duo + badge */}
              <div style={{ textAlign:'center', display:'flex', flexDirection:'column', gap:'12px' }}>
                <div style={{ display:'flex', justifyContent:'center' }}>
                  <div className="lc-badge"><div className="lc-badge-dot lc-dot" />{todayLabel}</div>
                </div>
                <p className="lc-serif" style={{
                  fontSize:'16px', fontWeight:600, letterSpacing:'.16em', textTransform:'uppercase',
                  background:`linear-gradient(135deg, ${sc.from}, ${sc.accent})`,
                  WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
                  filter:`drop-shadow(0 0 16px ${sc.glow})`,
                  margin:0,
                  textShadow:'none',
                }}>
                  {name1} & {name2}
                </p>
              </div>

              {/* Anneau score */}
              <div className="lc-float" style={{ position:'relative', width:'220px', height:'220px', margin:'0 auto' }}>
                <div style={{
                  position:'absolute', inset:'-22px', borderRadius:'50%',
                  background:`radial-gradient(circle,${sc.glow} 0%,transparent 65%)`,
                  filter:'blur(28px)', opacity:.80,
                }} />
                <svg viewBox="0 0 134 134" style={{ position:'absolute', inset:0, width:'100%', height:'100%' }}>
                  <circle cx="67" cy="67" r="62" fill="none" stroke={`rgba(165,180,252,.12)`} strokeWidth="1" strokeDasharray="4 8" />
                  <circle className="lc-ring-track" cx="67" cy="67" r="57" strokeWidth="8" />
                  <circle
                    className="lc-ring-fill" cx="67" cy="67" r="57"
                    stroke="url(#scoreG)" strokeWidth="8"
                    strokeDasharray="358.1"
                    strokeDashoffset={358.1 - (358.1 * displayPct / 100)}
                  />
                  <defs>
                    <linearGradient id="scoreG" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={sc.from} />
                      <stop offset="50%" stopColor={sc.mid ?? sc.from} />
                      <stop offset="100%" stopColor={sc.accent} />
                    </linearGradient>
                  </defs>
                </svg>
                <div style={{
                  position:'absolute', inset:'20px', borderRadius:'50%',
                  background:`radial-gradient(circle,${sc.glow} 0%,transparent 70%)`,
                  filter:'blur(20px)',
                }} />
                <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <span className="lc-serif" style={{
                    fontSize:'54px', fontWeight:700, lineHeight:1,
                    background:`linear-gradient(135deg,${sc.text ?? sc.from},${sc.accent})`,
                    WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
                    filter:`drop-shadow(0 0 28px ${sc.glow})`,
                  }}>
                    {displayPct}%
                  </span>
                </div>
              </div>

              {/* Titre du résultat */}
              <div style={{ textAlign:'center' }}>
                <p className="lc-serif" style={{
                  fontSize:'26px', fontWeight:700, margin:0,
                  background:`linear-gradient(135deg,${sc.from},${sc.mid ?? sc.from},${sc.accent})`,
                  WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
                  filter:`drop-shadow(0 0 24px ${sc.glow})`,
                }}>
                  {t(result.titleKey)}
                </p>
              </div>

              {/* Détails */}
              {showDetails && (
                <div className="lc-detail" style={{ display:'flex', flexDirection:'column', gap:'20px' }}>
                  <div className="lc-result-card">
                    <div className="lc-result-card-inner" style={{ display:'flex', flexDirection:'column', gap:'24px' }}>

                      <div>
                        <p className="lc-section-label" style={{
                          color: sc.from,
                          textShadow:`0 0 18px ${sc.glow}`,
                        }}>
                          {t('loveCalculator.dayScore')}
                        </p>
                        <p className="lc-body" style={{
                          fontSize:'18px', color:'rgba(235,240,255,1)',
                          lineHeight:1.76, fontStyle:'italic', margin:0,
                        }}>
                          {message}
                        </p>
                      </div>

                      <div className="lc-rule" />

                      <div>
                        <p className="lc-section-label" style={{
                          color: sc.accent,
                          textShadow:`0 0 18px ${sc.glow}`,
                        }}>
                          {t('loveCalculator.dayAdvice')}
                        </p>
                        <p className="lc-body" style={{
                          fontSize:'17px', color:'rgba(220,225,255,1)',
                          lineHeight:1.72, fontStyle:'italic', margin:0,
                        }}>
                          {advice}
                        </p>
                      </div>

                    </div>
                  </div>

                  <div className="lc-note">
                    <p>{t('loveCalculator.note')}</p>
                  </div>

                  <button className="lc-btn" onClick={handleReset}>
                    ✦ {t('loveCalculator.newCalculation')} ✦
                  </button>
                  <button className="lc-btn-ghost" onClick={onBack}>{t('loveCalculator.back')}</button>
                </div>
              )}

            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default LoveCalculatorPage;