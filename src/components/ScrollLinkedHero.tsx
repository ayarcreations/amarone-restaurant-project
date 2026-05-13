import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Language, content } from '../content';
import { Logo } from './Logo';

const DESKTOP_FRAME_COUNT = 149;
const PHONE_FRAME_COUNT = 151;

interface ScrollLinkedHeroProps {
  lang: Language;
}

export function ScrollLinkedHero({ lang }: ScrollLinkedHeroProps) {
  const t = content[lang];
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameCountRef = useRef(window.innerWidth < 768 ? PHONE_FRAME_COUNT : DESKTOP_FRAME_COUNT);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isLoading, setIsLoading] = useState(true);

  const progress = Math.round((imagesLoaded / frameCountRef.current) * 100);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate current frame index based on scroll progress
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, frameCountRef.current]);

  useEffect(() => {
    // Show content after first batch loads (20 frames) instead of waiting for all
    if (imagesLoaded >= 20) {
      setTimeout(() => setIsLoading(false), 300);
    }
  }, [imagesLoaded]);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      frameCountRef.current = mobile ? PHONE_FRAME_COUNT : DESKTOP_FRAME_COUNT;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const folder = isMobile ? 'amarone-frames-phone' : 'amarone-frames-desktop';
    
    // Clear previous images if we re-run
    imagesRef.current = [];
    setImagesLoaded(0);

    // Load frames in batches for better performance
    const BATCH_SIZE = 20;
    let currentIndex = 1;

    const loadBatch = () => {
      const endIndex = Math.min(currentIndex + BATCH_SIZE, frameCountRef.current + 1);
      
      for (let i = currentIndex; i < endIndex; i++) {
        const img = new Image();
        const frameNum = i.toString().padStart(3, '0');
        img.src = `/${folder}/ezgif-frame-${frameNum}.jpg`;
        img.onload = () => {
          setImagesLoaded(prev => prev + 1);
        };
        imagesRef.current.push(img);
      }

      currentIndex = endIndex;
      
      // Load next batch after a small delay to allow UI to update
      if (currentIndex <= frameCountRef.current) {
        setTimeout(loadBatch, 50);
      }
    };

    loadBatch();
  }, [isMobile]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    // Set canvas size once and on resize only (not every frame)
    const sizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    sizeCanvas();

    let rafId = 0;
    let pending = false;

    const renderFrame = (index: number) => {
      const img = imagesRef.current[Math.max(0, Math.min(frameCountRef.current - 1, Math.floor(index) - 1))];
      if (!img || !img.complete || img.naturalHeight === 0) return;

      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;

      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (imgRatio > canvasRatio) {
        drawWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
      } else {
        drawHeight = canvas.width / imgRatio;
        offsetY = (canvas.height - drawHeight) / 2;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    const scheduleRender = (index: number) => {
      if (pending) return;
      pending = true;
      rafId = requestAnimationFrame(() => {
        pending = false;
        renderFrame(index);
      });
    };

    // Draw first frame right away (will work as soon as that image loads)
    renderFrame(1);

    const unsubscribe = frameIndex.on('change', scheduleRender);

    const handleResize = () => {
      sizeCanvas();
      renderFrame(frameIndex.get());
    };
    window.addEventListener('resize', handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [frameIndex]);

  // When images finish loading, redraw the current frame so it appears even if scroll hasn't fired
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx || imagesLoaded === 0) return;
    const idx = Math.max(0, Math.min(frameCountRef.current - 1, Math.floor(frameIndex.get()) - 1));
    const img = imagesRef.current[idx];
    if (img && img.complete && img.naturalHeight !== 0) {
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      let dw = canvas.width, dh = canvas.height, ox = 0, oy = 0;
      if (imgRatio > canvasRatio) { dw = canvas.height * imgRatio; ox = (canvas.width - dw) / 2; }
      else { dh = canvas.width / imgRatio; oy = (canvas.height - dh) / 2; }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, ox, oy, dw, dh);
    }
  }, [imagesLoaded, frameIndex]);

  // Fade out hero content as we scroll
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.05], [0, -100]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center pointer-events-auto"
          >
            <Logo className="h-12 w-auto animate-pulse" />
            <div className="w-48 h-px bg-stone-200 mt-8 mb-4 relative overflow-hidden">
              <div 
                className="absolute top-0 left-0 bottom-0 bg-gold-400 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] font-sans font-semibold text-stone-400">
              Loading {progress}%
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div ref={containerRef} className="relative h-[400vh]">
      {/* Sticky container that stays in view while scrolling down */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#faf9f6]">
        
        {/* Canvas that draws the frames */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Subtle overlay to ensure text is readable if needed*/}
        <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-transparent to-stone-900/60 pointer-events-none"></div>

        {/* Hero content */}
        <motion.div 
          style={{ opacity, y }}
          className="relative z-10 px-6 max-w-6xl w-full mx-auto flex flex-col items-center justify-center h-full"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[112px] leading-[0.85] font-serif mb-6 md:mb-8 text-white drop-shadow-lg text-center"
          >
            {t.hero.title.split(' ')[0]}<span className="italic text-gold-400 ml-2 md:ml-4 drop-shadow-lg">{t.hero.title.split(' ').slice(1).join(' ')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="text-sm md:text-base font-sans font-light leading-relaxed text-white/90 max-w-sm mb-12 drop-shadow text-center"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="w-full flex justify-center"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#menu" className="px-8 py-4 border border-gold-400 text-gold-400 text-[11px] uppercase tracking-[0.2em] font-sans font-semibold hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all backdrop-blur-sm bg-stone-900/20 text-center">
                {t.hero.discoverMenu}
              </a>
              <a href="https://wa.me/31107200802" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-white text-white text-[11px] uppercase tracking-[0.2em] font-sans font-semibold hover:bg-white hover:text-stone-900 transition-all backdrop-blur-sm bg-stone-900/20 text-center">
                {t.hero.makeReservation}
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          style={{ opacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-6 md:left-12 flex items-center space-x-4 mix-blend-difference pb-safe"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white">Scroll</span>
          <motion.div 
            animate={{ x: [0, 8, 0] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} className="-rotate-90 text-white" />
          </motion.div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
