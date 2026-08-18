import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, RotateCcw, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export interface GalleryItem {
  id: string | number;
  title: string;
  subtitle?: string;
  tag?: string;
  image: string;
  description?: string;
}

export const defaultGalleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "GeeksforGeeks Hackfest — 2nd Place Overall",
    subtitle: "Hackfest Powered by GeeksforGeeks Classroom Program · ₹15,000 Award",
    tag: "HACKATHON WINNER",
    image: "/achievements/award-geeksforgeeks-hackfest.png",
    description: "Secured 2nd place overall competing against top engineering teams across Bangalore.",
  },
  {
    id: 2,
    title: "Ticket to Finale — GeeksforGeeks Hackfest",
    subtitle: "2nd Runner-Up Prize & Finale Qualification · Bangalore",
    tag: "FINALE QUALIFIER",
    image: "/achievements/award-geeksforgeeks-finale.png",
    description: "Qualified for the prestigious finale round with Amazon Prize & official Ticket to Finale.",
  },
  {
    id: 3,
    title: "1st Place — Prompt to Product (OJAS 2K26)",
    subtitle: "Chanakya University Intra-University Fest · School of Engineering",
    tag: "AI INNOVATION",
    image: "/achievements/award-prompt-to-product.png",
    description: "Awarded 1st place for building and deploying a production generative AI platform.",
  },
  {
    id: 4,
    title: "2nd Place — Website & App Development",
    subtitle: "OJAS 2K26 Technical Competition · Chanakya University",
    tag: "FULL STACK AWARD",
    image: "/achievements/award-app-dev.png",
    description: "Recognized for full-stack architecture, UX/UI elegance, and technical execution.",
  },
  {
    id: 5,
    title: "OJAS 2K26 University Championship Trophy",
    subtitle: "Chanakya University Engineering Recognition & Celebration",
    tag: "ACADEMIC EXCELLENCE",
    image: "/achievements/award-ojas-trophy.png",
    description: "Honored with the official trophy for technical excellence and competitive programming.",
  },
];

interface FlipGalleryProps {
  items?: GalleryItem[];
  className?: string;
  autoPlayInterval?: number;
}

export const FlipGallery: React.FC<FlipGalleryProps> = ({
  items = defaultGalleryItems,
  className = "",
  autoPlayInterval = 6000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isAutoPlay, nextSlide, autoPlayInterval]);

  const currentItem = items[currentIndex];

  return (
    <div
      className={cn(
        "relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden bg-black/60 backdrop-blur-2xl border border-white/10 shadow-2xl p-4 sm:p-8 transition-all duration-500",
        isFullscreen ? "fixed inset-4 z-[999] max-w-none max-h-none h-[calc(100vh-2rem)] flex flex-col justify-between" : "",
        className
      )}
    >
      {/* Top Bar Controls */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
          <span className="text-white/80 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
            <Award size={14} className="text-white" />
            Verified Recognitions
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Auto play toggle */}
          <button
            type="button"
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={cn(
              "p-2 rounded-full border transition-all text-xs flex items-center gap-1.5 cursor-pointer",
              isAutoPlay
                ? "bg-white text-black border-white shadow-lg"
                : "bg-white/5 text-white/70 border-white/10 hover:text-white hover:border-white/30"
            )}
            title={isAutoPlay ? "Pause Autoplay" : "Start Autoplay"}
          >
            <RotateCcw size={12} className={isAutoPlay ? "animate-spin" : ""} />
            <span className="text-[10px] uppercase tracking-wider hidden sm:inline">
              {isAutoPlay ? "Auto ON" : "Auto"}
            </span>
          </button>

          {/* Fullscreen toggle */}
          <button
            type="button"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition-all cursor-pointer"
            title="Toggle fullscreen"
          >
            {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
          </button>

          {/* Pagination Counter */}
          <span className="px-3 py-1 rounded-full bg-white/10 text-white font-mono text-[10px] font-bold">
            0{currentIndex + 1} / 0{items.length}
          </span>
        </div>
      </div>

      {/* Main Ultra-Smooth 3D Page Flip Viewport */}
      <div className="relative w-full my-6 flex-1 flex flex-col items-center justify-center min-h-[360px] sm:min-h-[460px] md:min-h-[520px]">
        <div
          className="relative w-full max-w-2xl aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
          style={{ perspective: "1800px", transformStyle: "preserve-3d" }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentItem.id}
              custom={direction}
              initial={{
                rotateX: direction === "next" ? 45 : -45,
                opacity: 0,
                scale: 0.94,
                y: direction === "next" ? 15 : -15,
                filter: "brightness(0.7) blur(2px)",
              }}
              animate={{
                rotateX: 0,
                opacity: 1,
                scale: 1,
                y: 0,
                filter: "brightness(1) blur(0px)",
              }}
              exit={{
                rotateX: direction === "next" ? -45 : 45,
                opacity: 0,
                scale: 0.94,
                y: direction === "next" ? -15 : 15,
                filter: "brightness(0.7) blur(2px)",
              }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1], // Silky book page turn easing
              }}
              className="absolute inset-0 w-full h-full flex flex-col overflow-hidden"
              style={{ transformStyle: "preserve-3d", transformOrigin: "center center" }}
            >
              {/* TOP FLAP HALF */}
              <div className="relative w-full h-1/2 overflow-hidden border-b border-black/80 bg-neutral-950">
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="absolute top-0 left-0 w-full h-[200%] object-contain sm:object-cover bg-black"
                />
                {/* Dynamic Page Sheen / Shadow */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/12 via-transparent to-black/50 pointer-events-none" />
                
                {/* Top Badge */}
                {currentItem.tag && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="clay-badge px-3 py-1 text-[9px] font-mono font-bold text-white uppercase tracking-wider bg-black/70 backdrop-blur-md border border-white/20 shadow-md">
                      {currentItem.tag}
                    </span>
                  </div>
                )}
              </div>

              {/* SPLIT HORIZONTAL PAGE FOLD SEAM */}
              <div className="h-[2px] w-full bg-black/90 shadow-[0_2px_10px_rgba(0,0,0,0.95)] z-20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-40" />
              </div>

              {/* BOTTOM FLAP HALF */}
              <div className="relative w-full h-1/2 overflow-hidden bg-neutral-950">
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="absolute bottom-0 left-0 w-full h-[200%] object-contain sm:object-cover bg-black"
                />
                {/* Bottom page depth gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Side Navigation Chevron Buttons */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous achievement"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/70 hover:bg-white text-white hover:text-black border border-white/20 transition-all duration-300 backdrop-blur-md cursor-pointer hover:scale-110 shadow-xl"
          >
            <ChevronLeft size={18} strokeWidth={2.5} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next achievement"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/70 hover:bg-white text-white hover:text-black border border-white/20 transition-all duration-300 backdrop-blur-md cursor-pointer hover:scale-110 shadow-xl"
          >
            <ChevronRight size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Bottom Metadata & Caption Bar */}
      <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
            {currentItem.title}
          </h3>
          {currentItem.subtitle && (
            <p className="text-xs font-mono text-zinc-400 font-medium">
              {currentItem.subtitle}
            </p>
          )}
          {currentItem.description && (
            <p className="text-xs text-white/70 font-light max-w-xl">
              {currentItem.description}
            </p>
          )}
        </div>

        {/* Thumbnail Dots Bar */}
        <div className="flex items-center gap-2 self-start sm:self-center">
          {items.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setDirection(idx > currentIndex ? "next" : "prev");
                setCurrentIndex(idx);
              }}
              className={cn(
                "h-2 rounded-full transition-all duration-300 cursor-pointer",
                currentIndex === idx
                  ? "w-8 bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                  : "w-2 bg-white/20 hover:bg-white/50"
              )}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlipGallery;
