import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const VIDEOS = [
  '/carousel1.webm',
  '/carousel2.webm',
  '/carousel3.webm',
  '/carousel4.webm',
  '/carousel5.webm',
];

const DURATION_MS = 5000;

export function StoryCarousel() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const startRef = useRef<number>(performance.now());
  const elapsedRef = useRef<number>(0);
  const rafRef = useRef<number>(0);

  // Reset & autoplay when active changes
  useEffect(() => {
    setProgress(0);
    elapsedRef.current = 0;
    startRef.current = performance.now();
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  }, [active]);

  // Animate progress bar & advance
  useEffect(() => {
    const tick = (now: number) => {
      if (!paused) {
        const elapsed = elapsedRef.current + (now - startRef.current);
        const pct = Math.min(100, (elapsed / DURATION_MS) * 100);
        setProgress(pct);
        if (elapsed >= DURATION_MS) {
          setActive((prev) => (prev + 1) % VIDEOS.length);
          return;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, paused]);

  // Handle pause/resume timing reference
  useEffect(() => {
    const v = videoRef.current;
    if (paused) {
      elapsedRef.current = elapsedRef.current + (performance.now() - startRef.current);
      v?.pause();
    } else {
      startRef.current = performance.now();
      v?.play().catch(() => {});
    }
  }, [paused]);

  const goTo = (idx: number) => {
    setActive(((idx % VIDEOS.length) + VIDEOS.length) % VIDEOS.length);
  };

  return (
    <div
      className="relative w-full max-w-5xl mx-auto aspect-[9/16] sm:aspect-[4/5] md:aspect-[16/9] bg-black overflow-hidden rounded-lg shadow-xl select-none"
      onMouseDown={() => setPaused(true)}
      onMouseUp={() => setPaused(false)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={VIDEOS[active]}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        preload="metadata"
      />

      {/* Bottom gradient (from bottom of video up to before center) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Progress bars (top, story-style) */}
      <div className="absolute top-3 left-3 right-3 flex gap-1 z-20">
        {VIDEOS.map((_, i) => (
          <div key={i} className="flex-1 h-[3px] bg-white/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-white"
              style={{
                width: i < active ? '100%' : i === active ? `${progress}%` : '0%',
                transition: i === active ? 'none' : 'width 0.2s linear',
              }}
            />
          </div>
        ))}
      </div>

      {/* Tap zones / arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); goTo(active - 1); }}
        aria-label="Previous"
        className="absolute left-0 top-0 bottom-0 w-1/3 z-10 flex items-center justify-start pl-2 sm:pl-4 text-white/0 hover:text-white/80 transition-colors group"
      >
        <span className="bg-black/30 backdrop-blur-sm rounded-full p-1.5 sm:p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </span>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); goTo(active + 1); }}
        aria-label="Next"
        className="absolute right-0 top-0 bottom-0 w-1/3 z-10 flex items-center justify-end pr-2 sm:pr-4 text-white/0 hover:text-white/80 transition-colors group"
      >
        <span className="bg-black/30 backdrop-blur-sm rounded-full p-1.5 sm:p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </span>
      </button>
    </div>
  );
}
