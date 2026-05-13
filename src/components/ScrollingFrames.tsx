import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform } from 'motion/react';

const FRAME_COUNT = 136;

interface ScrollingFramesProps {
  className?: string;
}

export function ScrollingFrames({ className = "" }: ScrollingFramesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldLoad, setShouldLoad] = useState(false);

  const progress = Math.round((imagesLoaded / FRAME_COUNT) * 100);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

  // Defer image loading until section approaches viewport (saves ~4.5MB on initial page load)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '600px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Show content after first batch loads (20 frames) instead of waiting for all
    if (imagesLoaded >= 20) {
      setTimeout(() => setIsLoading(false), 200);
    }
  }, [imagesLoaded]);

  useEffect(() => {
    if (!shouldLoad) return;
    
    const images: HTMLImageElement[] = [];
    const BATCH_SIZE = 20;
    let currentIndex = 1;

    const loadBatch = () => {
      const endIndex = Math.min(currentIndex + BATCH_SIZE, FRAME_COUNT + 1);
      
      for (let i = currentIndex; i < endIndex; i++) {
        const img = new Image();
        const frameNumber = i.toString().padStart(3, '0');
        img.src = `/amarone-frames-second/ezgif-frame-${frameNumber}.jpg`;
        img.onload = () => setImagesLoaded((prev) => prev + 1);
        images.push(img);
      }

      currentIndex = endIndex;
      
      // Load next batch after a small delay
      if (currentIndex <= FRAME_COUNT) {
        setTimeout(loadBatch, 50);
      }
    };

    loadBatch();
    imagesRef.current = images;
    
    return () => {
      images.forEach((img) => { img.onload = null; });
    };
  }, [shouldLoad]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx || isLoading) return;

    let pending = false;
    let rafId = 0;

    const updateFrame = () => {
      const currentFrame = Math.floor(frameIndex.get());
      const img = imagesRef.current[currentFrame - 1];
      if (img && img.complete && img.naturalHeight !== 0) {
        if (canvas.width !== img.naturalWidth) canvas.width = img.naturalWidth;
        if (canvas.height !== img.naturalHeight) canvas.height = img.naturalHeight;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    };

    const schedule = () => {
      if (pending) return;
      pending = true;
      rafId = requestAnimationFrame(() => {
        pending = false;
        updateFrame();
      });
    };

    const unsubscribe = frameIndex.on('change', schedule);
    updateFrame();

    return () => {
      unsubscribe();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [frameIndex, isLoading]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 bg-stone-200 flex items-center justify-center z-10">
          <div className="text-center">
            <div className="text-sm text-stone-600 mb-2">Loading frames...</div>
            <div className="text-xs text-stone-500">{progress}%</div>
          </div>
        </div>
      )}
      
      {/* Canvas for frame-by-frame animation */}
      <div className="w-full h-full relative">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
          style={{ display: isLoading ? 'none' : 'block' }}
        />
      </div>
    </div>
  );
}
