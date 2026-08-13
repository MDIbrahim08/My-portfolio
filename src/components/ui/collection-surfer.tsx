"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  MotionValue,
} from "framer-motion";

export interface CollectionItem {
  id: number;
  image: string;
  title: string;
}

export type CollectionSurferVariant = "magnetic" | "uplift" | "simple";

// Default items for the component in case none are provided
const ITEMS: CollectionItem[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    title: "HERITAGE 01",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    title: "HERITAGE 02",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    title: "HERITAGE 03",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=800&q=80",
    title: "HERITAGE 04",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
    title: "HERITAGE 05",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=800&q=80",
    title: "HERITAGE 06",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80",
    title: "HERITAGE 07",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    title: "HERITAGE 08",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800&q=80",
    title: "HERITAGE 09",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80",
    title: "HERITAGE 10",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    title: "HERITAGE 11",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    title: "HERITAGE 12",
  },
  {
    id: 13,
    image:
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80",
    title: "HERITAGE 13",
  },
  {
    id: 14,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    title: "HERITAGE 14",
  },
  {
    id: 15,
    image:
      "https://images.unsplash.com/photo-1496217590455-aa63a8350eea?w=800&q=80",
    title: "HERITAGE 15",
  },
  {
    id: 16,
    image:
      "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=800&q=80",
    title: "HERITAGE 16",
  },
];

interface CollectionSurferProps {
  items?: CollectionItem[];
  variant?: CollectionSurferVariant;
  sectionRef?: React.RefObject<HTMLDivElement | null>;
}

export function CollectionSurfer({
  items = ITEMS,
  variant = "magnetic",
  sectionRef,
}: CollectionSurferProps) {
  // Duplicate items for infinite carousel track
  const duplicatedItems = [...items, ...items];

  // Scroll sensitivity
  const scrollPerItem = 600;

  // Exact scroll distance for one loop of original items
  const loopDistance = items.length * scrollPerItem;

  // Track scroll inside targeted section instead of global page scroll to keep it self-contained
  const { scrollY } = useScroll(
    sectionRef ? { target: sectionRef, offset: ["start start", "end end"] } : {}
  );

  const smoothScroll = useSpring(scrollY, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
  });

  const loopedProgress = useTransform(
    smoothScroll,
    (value) => value % loopDistance
  );

  // Step vector
  const stepX = 280;
  const stepY = -40;
  const stepZ = -220;

  // Smooth translation vectors
  const x = useTransform(
    loopedProgress,
    [0, loopDistance],
    [0, -items.length * stepX]
  );
  const y = useTransform(
    loopedProgress,
    [0, loopDistance],
    [0, -items.length * stepY]
  );
  const z = useTransform(
    loopedProgress,
    [0, loopDistance],
    [0, -items.length * stepZ]
  );

  const mouseX = useMotionValue(-10000);
  const mouseY = useMotionValue(-10000);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (variant === "simple") return;
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const handleMouseLeave = () => {
    if (variant === "simple") return;
    mouseX.set(-10000);
    mouseY.set(-10000);
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Scene viewport */}
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          perspective: "1800px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        <motion.div
          className="relative w-0 h-0"
          style={{
            x,
            y,
            z,
            transformStyle: "preserve-3d",
          }}
        >
          {duplicatedItems.map((item, i) => (
            <Card
              key={`${item.id}-${i}`}
              item={item}
              i={i}
              stepX={stepX}
              stepY={stepY}
              stepZ={stepZ}
              mouseX={mouseX}
              mouseY={mouseY}
              scrollSpring={smoothScroll}
              variant={variant}
              totalLength={items.length}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function Card({
  item,
  i,
  stepX,
  stepY,
  stepZ,
  mouseX,
  mouseY,
  scrollSpring,
  variant,
  totalLength,
}: {
  item: CollectionItem;
  i: number;
  stepX: number;
  stepY: number;
  stepZ: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  scrollSpring: MotionValue<number>;
  variant: CollectionSurferVariant;
  totalLength: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform([mouseX, mouseY, scrollSpring], ([x, y]) => {
    if (!ref.current || variant === "simple") return 200;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    return Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
  });

  const targetScale = useTransform(distance, [0, 400], [1.35, 1]);
  const springScale = useSpring(targetScale, {
    mass: 0.5,
    stiffness: 300,
    damping: 20,
  });

  const targetUplift = useTransform(distance, [0, 400], [-80, 0]);
  const springUplift = useSpring(targetUplift, {
    mass: 0.5,
    stiffness: 300,
    damping: 20,
  });

  const transform = useTransform([springScale, springUplift], ([s, u]) => {
    let scaleValue = 1;
    let upliftValue = 0;

    if (variant === "magnetic") {
      scaleValue = Number(s);
    } else if (variant === "uplift") {
      upliftValue = Number(u);
    }

    const baseX = i * stepX;
    const baseY = i * stepY;
    const baseZ = i * stepZ;

    return `translate3d(${baseX}px, ${baseY + upliftValue}px, ${baseZ}px) rotateY(-40deg) scale(${scaleValue})`;
  });

  return (
    <motion.div
      ref={ref}
      className="absolute w-[260px] h-[360px] bg-neutral-900 rounded-[20px] overflow-hidden shadow-2xl transition-colors duration-500 ease-out group border border-white/10"
      style={{
        transform,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="absolute top-4 left-4 z-10 text-white font-mono text-[10px] bg-black/60 px-2 py-0.5 rounded-full border border-white/10 opacity-70 group-hover:opacity-100">
        {String((i % totalLength) + 1).padStart(2, "0")}
      </div>

      <div className="relative w-full h-full brightness-75 group-hover:brightness-100 transition-all duration-300">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        {/* Title overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent p-4 flex flex-col justify-end">
          <p className="font-display font-black text-sm tracking-tight text-white text-left uppercase">
            {item.title}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default CollectionSurfer;
