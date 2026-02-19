import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import MysticalButton from '@/components/MysticalButton';
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
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(6px)' }}
    >
      <div
        className={`relative max-w-md w-full rounded-2xl shadow-2xl transform transition-all duration-300 ${isVisible ? 'scale-100' : 'scale-90'}`}
        style={{
          background: 'linear-gradient(180deg, #0a0818 0%, #060612 60%, #080816 100%)',
          border: '1px solid rgba(139,92,246,0.35)',
          boxShadow: '0 0 60px rgba(0,0,0,0.95), 0 0 30px rgba(139,92,246,0.08)',
        }}
      >
        {/* Lueur violette en haut */}
        <div
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none rounded-t-2xl"
          style={{ background: 'radial-gradient(ellipse at 50% -10%, rgba(139,92,246,0.18) 0%, transparent 70%)' }}
        />

        <div className="relative p-6">
          {/* Icône */}
          <div className="text-center mb-4">
            <div className="text-6xl mb-2 animate-pulse">🔔</div>
            <div className="text-xs" style={{ color: 'rgba(167,139,250,0.55)' }}>✨ ✦ ✨</div>
          </div>

          {/* Titre */}
          <h2
            className="text-2xl font-bold text-center mb-3 font-serif"
            style={{ color: '#d4af37', textShadow: '0 2px 12px rgba(212,175,55,0.30)' }}
          >
            {t('notification.modal.title')}
          </h2>

          {/* Description */}
          <p className="text-center mb-6 leading-relaxed text-sm" style={{ color: 'rgba(226,217,243,0.75)' }}>
            {t('notification.modal.description')}
          </p>

          {/* Avantages */}
          <div
            className="rounded-xl p-4 mb-6 space-y-3"
            style={{
              background: 'rgba(139,92,246,0.06)',
              border: '1px solid rgba(139,92,246,0.20)',
            }}
          >
            {[
              { icon: '🔮', key: 'notification.modal.benefit1' },
              { icon: '⭐', key: 'notification.modal.benefit2' },
              { icon: '✨', key: 'notification.modal.benefit3' },
            ].map(({ icon, key }) => (
              <div key={key} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(226,217,243,0.80)' }}>
                <span className="mt-0.5">{icon}</span>
                <span>{t(key)}</span>
              </div>
            ))}
          </div>

          {/* Bouton Accepter — style doré comme le reste de l'app */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleAccept}
              className="w-full font-bold py-4 rounded-xl transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #b8942a 100%)',
                color: '#0a0818',
                boxShadow: '0 4px 20px rgba(212,175,55,0.35)',
                border: 'none',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 28px rgba(212,175,55,0.50)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(212,175,55,0.35)'; }}
            >
              🔔 {t('notification.modal.accept')}
            </button>

            <button
              onClick={handleDecline}
              className="text-sm transition-colors py-2"
              style={{ color: 'rgba(167,139,250,0.45)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(167,139,250,0.75)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(167,139,250,0.45)'; }}
            >
              {t('notification.modal.decline')}
            </button>
          </div>

          {/* Note */}
          <p className="text-xs text-center mt-4 italic" style={{ color: 'rgba(167,139,250,0.35)' }}>
            {t('notification.modal.note')}
          </p>
        </div>
      </div>
    </div>
  );
}