"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer({ src }: { src: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3;
    audio.loop = true;

    // Auto-play attempt
    const playAttempt = audio.play();
    if (playAttempt) {
      playAttempt
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src={src} preload="auto" />
      <button
        onClick={toggleMusic}
        className="music-pulse fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--gold-light)] bg-white/90 shadow-lg backdrop-blur-sm transition-all hover:bg-[var(--gold-light)] hover:text-white"
        aria-label={isPlaying ? "Matikan musik" : "Nyalakan musik"}
      >
        {isPlaying ? (
          <Volume2 className="h-5 w-5 text-[var(--gold)]" />
        ) : (
          <VolumeX className="h-5 w-5 text-gray-400" />
        )}
      </button>
    </>
  );
}
