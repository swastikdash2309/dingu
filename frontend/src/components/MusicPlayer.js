import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

const MusicPlayer = ({ shouldPlay }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Set to 50% volume
      if (shouldPlay && !playing) {
        audioRef.current.play().catch(err => {
          console.log('Autoplay prevented:', err);
        });
      } else if (!shouldPlay && playing) {
        audioRef.current.pause();
      }
    }
  }, [shouldPlay]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          console.error('Play error:', err);
        });
      }
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50" data-testid="music-player">
      <div className="glass-panel p-4 rounded-full flex items-center gap-3 shadow-2xl border-2 border-romantic-accent/40">
        <button
          onClick={togglePlay}
          className="bg-gradient-to-r from-romantic-accent to-romantic-pink hover:scale-110 text-white rounded-full p-4 transition-all duration-300 shadow-lg"
          data-testid="play-pause-button"
          aria-label={playing ? 'Pause music' : 'Play music'}
        >
          {playing ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6 ml-1" />
          )}
        </button>
        <div className="flex items-center gap-2 pr-3">
          <Volume2 className="w-5 h-5 text-romantic-accent" />
          <div className="flex flex-col">
            <span className="text-xs font-body font-semibold text-romantic-dark">
              Now Playing
            </span>
            <span className="text-xs font-body text-gray-600">
              Love Story
            </span>
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src="https://customer-assets.emergentagent.com/job_romance-memoir/artifacts/vtau094k_love%20story%20fingerstyle%20guitar.wav" type="audio/wav" />
      </audio>
    </div>
  );
};

export default MusicPlayer;
