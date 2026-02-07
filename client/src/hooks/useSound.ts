import { useRef, useCallback } from 'react';

export function useSound(soundFile: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = useCallback(() => {
    console.log('🎵 [useSound] Attempting to play:', soundFile);

    try {
      if (!audioRef.current) {
        const fullPath = `/sounds/${soundFile}`;
        console.log('🎵 [useSound] Creating new Audio with path:', fullPath);
        audioRef.current = new Audio(fullPath);
        audioRef.current.volume = 0.5;

        // Événements de debug
        audioRef.current.addEventListener('loadeddata', () => {
          console.log('✅ [useSound] Audio loaded successfully');
        });

        audioRef.current.addEventListener('error', (e) => {
          console.error('❌ [useSound] Audio loading error:', e);
          console.error('❌ [useSound] Attempted path:', fullPath);
        });
      }

      audioRef.current.currentTime = 0;

      audioRef.current.play()
        .then(() => {
          console.log('✅ [useSound] Audio playing successfully');
        })
        .catch(e => {
          console.error('❌ [useSound] Audio play failed:', e);
          console.error('❌ [useSound] Error details:', {
            name: e.name,
            message: e.message,
            soundFile: soundFile,
            audioSrc: audioRef.current?.src
          });
        });
    } catch (error) {
      console.error('❌ [useSound] Unexpected error:', error);
    }
  }, [soundFile]);

  return play;
}