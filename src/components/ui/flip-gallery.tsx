import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FlipImageItem {
  title: string;
  url: string;
  tag?: string;
  subtitle?: string;
}

const defaultImages: FlipImageItem[] = [
  {
    title: "GeeksforGeeks Hackfest — 2nd Place Overall",
    url: "/achievements/award-geeksforgeeks-hackfest.png",
    tag: "HACKATHON WINNER",
    subtitle: "Hackfest Powered by GeeksforGeeks Classroom Program · ₹15,000 Prize",
  },
  {
    title: "Ticket to Finale — GeeksforGeeks Hackfest",
    url: "/achievements/award-geeksforgeeks-finale.png",
    tag: "FINALE QUALIFIER",
    subtitle: "2nd Runner-Up Prize & Finale Qualification · Bangalore",
  },
  {
    title: "1st Place — Prompt to Product (OJAS 2K26)",
    url: "/achievements/award-prompt-to-product.png",
    tag: "AI INNOVATION",
    subtitle: "Chanakya University Intra-University Fest · School of Engineering",
  },
  {
    title: "2nd Place — Website & App Development",
    url: "/achievements/award-app-dev.png",
    tag: "FULL STACK AWARD",
    subtitle: "OJAS 2K26 Technical Competition · Chanakya University",
  },
  {
    title: "OJAS 2K26 University Championship Trophy",
    url: "/achievements/award-ojas-trophy.png",
    tag: "ACADEMIC EXCELLENCE",
    subtitle: "Chanakya University Engineering Recognition & Celebration",
  },
];

const FLIP_SPEED = 750;
const flipTiming: KeyframeAnimationOptions = { duration: FLIP_SPEED, iterations: 1, easing: "cubic-bezier(0.25, 1, 0.5, 1)" };

// flip down
const flipAnimationTop: Keyframe[] = [
  { transform: "rotateX(0deg)" },
  { transform: "rotateX(-90deg)" },
  { transform: "rotateX(-90deg)" },
];
const flipAnimationBottom: Keyframe[] = [
  { transform: "rotateX(90deg)" },
  { transform: "rotateX(90deg)" },
  { transform: "rotateX(0deg)" },
];

// flip up
const flipAnimationTopReverse: Keyframe[] = [
  { transform: "rotateX(-90deg)" },
  { transform: "rotateX(-90deg)" },
  { transform: "rotateX(0deg)" },
];
const flipAnimationBottomReverse: Keyframe[] = [
  { transform: "rotateX(0deg)" },
  { transform: "rotateX(90deg)" },
  { transform: "rotateX(90deg)" },
];

interface FlipGalleryProps {
  images?: FlipImageItem[];
  className?: string;
}

export default function FlipGallery({ images = defaultImages, className = "" }: FlipGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const uniteRef = useRef<NodeListOf<HTMLElement> | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const defineFirstImg = () => {
    if (!uniteRef.current) return;
    uniteRef.current.forEach(setActiveImage);
    setImageTitle();
  };

  const setActiveImage = (el: HTMLElement) => {
    el.style.backgroundImage = `url('${images[currentIndex]?.url}')`;
  };

  const setImageTitle = () => {
    const gallery = containerRef.current;
    if (!gallery) return;
    gallery.setAttribute("data-title", images[currentIndex]?.title || "");
    gallery.style.setProperty("--title-y", "0");
    gallery.style.setProperty("--title-opacity", "1");
  };

  // initialise first image once
  useEffect(() => {
    if (!containerRef.current) return;
    uniteRef.current = containerRef.current.querySelectorAll<HTMLElement>(".unite");
    defineFirstImg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateGallery = (nextIndex: number, isReverse = false) => {
    const gallery = containerRef.current;
    if (!gallery) return;

    // determine direction animation arrays
    const topAnim = isReverse ? flipAnimationTopReverse : flipAnimationTop;
    const bottomAnim = isReverse ? flipAnimationBottomReverse : flipAnimationBottom;

    const overlayTop = gallery.querySelector(".overlay-top");
    const overlayBottom = gallery.querySelector(".overlay-bottom");

    if (overlayTop) overlayTop.animate(topAnim, flipTiming);
    if (overlayBottom) overlayBottom.animate(bottomAnim, flipTiming);

    // hide title
    gallery.style.setProperty("--title-y", "-0.75rem");
    gallery.style.setProperty("--title-opacity", "0");
    gallery.setAttribute("data-title", "");

    // update images with slight delay so animation looks continuous
    if (uniteRef.current) {
      uniteRef.current.forEach((el, idx) => {
        const delay =
          (isReverse && idx !== 1 && idx !== 2) || (!isReverse && (idx === 1 || idx === 2))
            ? FLIP_SPEED - 200
            : 0;

        setTimeout(() => {
          el.style.backgroundImage = `url('${images[nextIndex]?.url}')`;
        }, delay);
      });
    }

    // reveal new title roughly half-way through animation
    setTimeout(() => {
      if (!gallery) return;
      gallery.setAttribute("data-title", images[nextIndex]?.title || "");
      gallery.style.setProperty("--title-y", "0");
      gallery.style.setProperty("--title-opacity", "1");
    }, FLIP_SPEED * 0.5);
  };

  const updateIndex = (increment: number) => {
    const inc = Number(increment);
    const newIndex = (currentIndex + inc + images.length) % images.length;
    const isReverse = inc < 0;
    setCurrentIndex(newIndex);
    updateGallery(newIndex, isReverse);
  };

  const currentItem = images[currentIndex];

  return (
    <div className={cn("flex flex-col items-center justify-center p-4 sm:p-8 font-sans", className)}>
      
      {/* Outer Clay Card Container */}
      <div className="relative clay-glass-card p-6 sm:p-10 border border-white/10 rounded-3xl shadow-2xl flex flex-col items-center">
        
        {/* Top Header Tag */}
        <div className="w-full flex items-center justify-between pb-6 mb-6 border-b border-white/10 text-xs font-mono">
          <div className="flex items-center gap-2">
            <Award size={15} className="text-white" />
            <span className="text-white font-bold uppercase tracking-wider text-[11px]">
              Verified Credentials
            </span>
          </div>
          <div className="flex items-center gap-2">
            {currentItem?.tag && (
              <span className="clay-badge px-2.5 py-0.5 text-[9px] font-mono font-bold text-white uppercase">
                {currentItem.tag}
              </span>
            )}
            <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white font-mono text-[10px] font-bold">
              0{currentIndex + 1} / 0{images.length}
            </span>
          </div>
        </div>

        {/* 3D Flip Display Stage */}
        <div
          className="relative bg-white/5 border border-white/20 p-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          style={{ ["--gallery-bg-color" as any]: "rgba(255 255 255 / 0.075)" }}
        >
          {/* Mechanical Flip Container */}
          <div
            id="flip-gallery"
            ref={containerRef}
            className="relative w-[280px] h-[380px] sm:w-[360px] sm:h-[480px] md:w-[420px] md:h-[540px] text-center rounded-xl overflow-hidden shadow-2xl bg-black"
            style={{ perspective: "1000px" }}
          >
            <div className="top unite"></div>
            <div className="bottom unite"></div>
            <div className="overlay-top unite"></div>
            <div className="overlay-bottom unite"></div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-full right-0 mt-3 flex items-center gap-3">
            <button
              type="button"
              onClick={() => updateIndex(-1)}
              title="Previous Recognition"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg"
            >
              <ChevronLeft size={18} strokeWidth={2.5} />
            </button>
            <button
              type="button"
              onClick={() => updateIndex(1)}
              title="Next Recognition"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg"
            >
              <ChevronRight size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Dynamic Caption & Subtitle Underneath */}
        <div className="w-full mt-14 pt-4 border-t border-white/10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-3">
          <div>
            <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-tight">
              {currentItem?.title}
            </h3>
            {currentItem?.subtitle && (
              <p className="text-xs font-mono text-zinc-400 font-medium mt-0.5">
                {currentItem?.subtitle}
              </p>
            )}
          </div>

          {/* Pagination Indicators */}
          <div className="flex items-center gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  const inc = idx - currentIndex;
                  if (inc !== 0) updateIndex(inc);
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                  currentIndex === idx ? "w-6 bg-white" : "w-1.5 bg-white/25 hover:bg-white/50"
                )}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Component-scoped mechanical flip CSS */}
      <style>{`
        #flip-gallery::after {
          content: '';
          position: absolute;
          background-color: #000000;
          width: 100%;
          height: 3px;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          z-index: 30;
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.9);
        }

        #flip-gallery::before {
          content: attr(data-title);
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.8rem;
          font-family: monospace;
          left: 0;
          position: absolute;
          top: calc(100% + 0.75rem);
          line-height: 1.5;
          opacity: var(--title-opacity, 0);
          transform: translateY(var(--title-y, 0));
          transition: opacity 400ms cubic-bezier(0.16, 1, 0.3, 1), transform 400ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        #flip-gallery > * {
          position: absolute;
          width: 100%;
          height: 50%;
          overflow: hidden;
          background-size: 100% 200% !important;
          background-repeat: no-repeat;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .top,
        .overlay-top {
          top: 0;
          transform-origin: bottom;
          background-position: top center !important;
        }

        .bottom,
        .overlay-bottom {
          bottom: 0;
          transform-origin: top;
          background-position: bottom center !important;
        }
      `}</style>
    </div>
  );
}

export { FlipGallery };
