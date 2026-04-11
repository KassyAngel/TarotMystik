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
        @keyframes nm-backdrop-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes nm-card-in {
          from { opacity: 0; transform: translateY(28px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes nm-bell {
          0%,100% { transform: rotate(0deg) scale(1); }
          15%     { transform: rotate(12deg) scale(1.05); }
          30%     { transform: rotate(-8deg) scale(1.05); }
          45%     { transform: rotate(6deg) scale(1.02); }
          60%     { transform: rotate(-4deg); }
          75%     { transform: rotate(2deg); }
        }
        @keyframes nm-orb-pulse {
          0%,100% { opacity: 0.4; transform: scale(1); }
          50%     { opacity: 0.7; transform: scale(1.15); }
        }
        @keyframes nm-star {
          0%   { opacity: 0.2; transform: scale(0.8); }
          50%  { opacity: 0.8; transform: scale(1.2); }
          100% { opacity: 0.2; transform: scale(0.8); }
        }
        @keyframes nm-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .nm-backdrop {
          animation: nm-backdrop-in 0.3s ease-out forwards;
        }
        .nm-card {
          animation: nm-card-in 0.4s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        .nm-bell { animation: nm-bell 3s ease-in-out infinite; display: inline-block; }
        .nm-orb  { animation: nm-orb-pulse 3s ease-in-out infinite; }
        .nm-star { animation: nm-star ease-in-out infinite; }
        .nm-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,127,0.35), transparent);
        }
        .nm-btn-accept {
          transition: box-shadow 0.25s, transform 0.2s, background 0.25s;
        }
        .nm-btn-accept:hover {
          box-shadow: 0 4px 28px rgba(100,70,180,0.45) !important;
          transform: translateY(-1px);
        }
        .nm-btn-accept:active { transform: scale(0.98); }
        .nm-btn-decline {
          transition: color 0.25s;
        }
        .nm-btn-decline:hover { color: rgba(201,168,127,0.70) !important; }
      `}</style>

      <div
        className="nm-backdrop"
        style={{
          position: 'fixed', inset: 0, zIndex: 50,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(4,3,16,0.88)',
          backdropFilter: 'blur(10px)',
          padding: '24px',
        }}
      >
        <div
          className="nm-card"
          style={{
            position: 'relative',
            width: '100%', maxWidth: '340px',
            borderRadius: '18px',
            background: 'linear-gradient(160deg, #0d0b1f 0%, #110e26 55%, #090716 100%)',
            border: '1px solid rgba(201,168,127,0.22)',
            boxShadow: `
              0 0 0 1px rgba(201,168,127,0.06),
              0 12px 50px rgba(0,0,0,0.80),
              0 0 60px rgba(80,50,150,0.12),
              inset 0 1px 0 rgba(201,168,127,0.10)
            `,
            overflow: 'hidden',
          }}
        >
          {/* Halo haut */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            height: '160px', pointerEvents: 'none',
            background: 'radial-gradient(ellipse at 50% -10%, rgba(100,70,180,0.18) 0%, transparent 70%)',
          }} />

          {/* Étoiles flottantes */}
          {[
            { top:'10%', left:'7%',  size:'2px', delay:'0s',   dur:'3.2s' },
            { top:'7%',  left:'90%', size:'2px', delay:'0.7s', dur:'2.6s' },
            { top:'20%', left:'93%', size:'2px', delay:'1.3s', dur:'3.8s' },
            { top:'16%', left:'3%',  size:'2px', delay:'0.4s', dur:'4.2s' },
            { top:'60%', left:'97%', size:'2px', delay:'1.9s', dur:'3.0s' },
            { top:'75%', left:'2%',  size:'2px', delay:'1.0s', dur:'3.5s' },
          ].map((s, i) => (
            <div
              key={i}
              className="nm-star"
              style={{
                position: 'absolute',
                top: s.top, left: s.left,
                width: s.size, height: s.size,
                borderRadius: '50%',
                background: '#c9a87f',
                animationDelay: s.delay,
                animationDuration: s.dur,
              }}
            />
          ))}

          <div style={{ position: 'relative', padding: '28px 24px 24px' }}>

            {/* Icône cloche */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <div style={{ position: 'relative' }}>
                <div
                  className="nm-orb"
                  style={{
                    position: 'absolute', inset: '-20px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(100,70,180,0.25) 0%, transparent 70%)',
                    filter: 'blur(14px)',
                  }}
                />
                <div style={{
                  position: 'relative',
                  width: '64px', height: '64px',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'linear-gradient(145deg, rgba(100,70,180,0.18) 0%, rgba(60,40,120,0.10) 100%)',
                  border: '1px solid rgba(201,168,127,0.25)',
                  boxShadow: '0 0 20px rgba(80,50,150,0.15), inset 0 1px 0 rgba(201,168,127,0.15)',
                }}>
                  <span className="nm-bell" style={{ fontSize: '28px' }}>🔔</span>
                </div>
              </div>
            </div>

            {/* Ornement */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
              <div className="nm-divider" style={{ width: '48px' }} />
              <span style={{ color: 'rgba(201,168,127,0.45)', fontSize: '8px', letterSpacing: '5px' }}>✦ ✦ ✦</span>
              <div className="nm-divider" style={{ width: '48px' }} />
            </div>

            {/* Titre */}
            <h2 style={{
              textAlign: 'center',
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '20px', fontWeight: '700',
              letterSpacing: '0.02em',
              color: '#e8d4b8',
              textShadow: '0 2px 16px rgba(201,168,127,0.25)',
              margin: '0 0 10px',
            }}>
              {t('notification.modal.title')}
            </h2>

            {/* Description */}
            <p style={{
              textAlign: 'center',
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '14px', lineHeight: '1.65',
              color: 'rgba(220, 205, 178, 0.78)',
              margin: '0 0 20px',
            }}>
              {t('notification.modal.description')}
            </p>

            {/* Bénéfices */}
            <div style={{
              borderRadius: '10px', marginBottom: '20px', overflow: 'hidden',
              background: 'rgba(201,168,127,0.04)',
              border: '1px solid rgba(201,168,127,0.14)',
            }}>
              {[
                'notification.modal.benefit1',
                'notification.modal.benefit2',
                'notification.modal.benefit3',
              ].map((key, i) => (
                <div
                  key={key}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '12px 16px',
                    borderBottom: i < 2 ? '1px solid rgba(201,168,127,0.09)' : 'none',
                  }}
                >
                  <span style={{
                    width: '5px', height: '5px',
                    background: '#c9a87f',
                    borderRadius: '1px', transform: 'rotate(45deg)',
                    flexShrink: 0,
                    boxShadow: '0 0 6px rgba(201,168,127,0.55)',
                  }} />
                  <span style={{
                    fontSize: '13px',
                    color: 'rgba(225, 210, 185, 0.82)',
                    lineHeight: '1.5',
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                  }}>
                    {t(key)}
                  </span>
                </div>
              ))}
            </div>

            {/* Bouton accepter — violet/améthyste sobre */}
            <button
              className="nm-btn-accept"
              onClick={handleAccept}
              style={{
                width: '100%', height: '52px',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'linear-gradient(160deg, rgba(100,70,180,0.90) 0%, rgba(70,45,140,0.95) 100%)',
                border: '1px solid rgba(150,110,220,0.45)',
                boxShadow: '0 2px 20px rgba(80,50,150,0.30)',
                fontSize: '13px', letterSpacing: '0.18em',
                color: '#f0e6ff',
                fontWeight: '600',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {t('notification.modal.accept')}
            </button>

            {/* Bouton refuser */}
            <button
              className="nm-btn-decline"
              onClick={handleDecline}
              style={{
                width: '100%', marginTop: '12px', padding: '10px',
                textAlign: 'center',
                fontSize: '13px',
                color: 'rgba(201,168,127,0.40)',
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                letterSpacing: '0.03em',
              }}
            >
              {t('notification.modal.decline')}
            </button>

            {/* Note */}
            <p style={{
              textAlign: 'center', marginTop: '10px',
              fontSize: '11px', fontStyle: 'italic',
              color: 'rgba(201,168,127,0.25)', lineHeight: '1.4',
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}>
              {t('notification.modal.note')}
            </p>
          </div>

          {/* Ligne bas */}
          <div style={{
            position: 'absolute', bottom: 0, left: '32px', right: '32px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(201,168,127,0.15), transparent)',
          }} />
        </div>
      </div>
    </>
  );
}