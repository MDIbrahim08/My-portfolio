import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";

export interface MenuItem {
  num: string;
  name: string;
  clipId: string;
  image: string;
  subtitle?: string;
  skills?: string[];
}

const defaultItems: MenuItem[] = [
  {
    num: "01",
    name: "Gourmet Burgers",
    clipId: "clip-original",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    num: "02",
    name: "Fresh Desserts",
    clipId: "clip-hexagons",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    num: "03",
    name: "Artisan Waffles",
    clipId: "clip-pixels",
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

export const ConnoisseurStackInteractor = ({
  items = defaultItems,
  className
}: { items?: MenuItem[]; className?: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<SVGImageElement>(null);
  const mainGroupRef = useRef<SVGGElement>(null);
  const masterTl = useRef<gsap.core.Timeline | null>(null);

  const createLoop = (index: number) => {
    const item = items[index];
    const selector = `#${item.clipId} .path`;

    if (masterTl.current) masterTl.current.kill();

    if (imageRef.current) imageRef.current.setAttribute("href", item.image);
    if (mainGroupRef.current) mainGroupRef.current.setAttribute("clip-path", `url(#${item.clipId})`);
    
    gsap.set(selector, { scale: 0, transformOrigin: "50% 50%" });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // 1. IN (Expo Out)
    tl.to(selector, {
      scale: 1,
      duration: 0.8,
      stagger: { amount: 0.4, from: "random" },
      ease: "expo.out",
    })
    // 2. IDLE (Sine Breath)
    .to(selector, {
      scale: 1.05,
      duration: 1.5,
      yoyo: true,
      repeat: 1,
      ease: "sine.inOut",
      stagger: { amount: 0.2, from: "center" }
    })
    // 3. OUT (Expo In)
    .to(selector, {
      scale: 0,
      duration: 0.6,
      stagger: { amount: 0.3, from: "edges" },
      ease: "expo.in",
    });

    masterTl.current = tl;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      createLoop(0);
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleItemHover = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    createLoop(index);
  };

  return (
    <div 
      ref={containerRef} 
      className={cn(
        "flex flex-col lg:flex-row items-center justify-between w-full p-6 sm:p-10 md:p-14 overflow-hidden transition-colors duration-500",
        "bg-transparent", 
        className
      )}
    >
      
      {/* LEFT SIDE: HIGH CONTRAST MENU */}
      <div className="z-20 w-full lg:w-1/2">
        <nav>
          <ul className="flex flex-col gap-10 sm:gap-14">
            {items.map((item, index) => (
              <li
                key={item.num}
                onMouseEnter={() => handleItemHover(index)}
                onClick={() => handleItemHover(index)}
                className="group cursor-pointer"
              >
                <div className="flex items-start gap-5 sm:gap-7">
                  {/* Numbers */}
                  <span className={cn(
                    "text-2xl sm:text-3xl font-mono font-bold transition-all duration-500 mt-1",
                    activeIndex === index 
                      ? "text-white scale-110" 
                      : "text-zinc-600" 
                  )}>
                    {item.num}
                  </span>
                  
                  {/* Main Domain Text & Skills Chips */}
                  <div className="space-y-3">
                    <h2 className={cn(
                      "text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.88] transition-all duration-500",
                      activeIndex === index 
                        ? "text-white opacity-100 translate-x-2 sm:translate-x-4" 
                        : "opacity-35 translate-x-0 text-transparent [text-stroke:1.5px_#52525b] [-webkit-text-stroke:1.5px_#52525b]"
                    )}>
                      {item.name.includes(" ") ? (
                        <>
                          {item.name.split(" ").slice(0, -1).join(" ")}<br />
                          {item.name.split(" ").slice(-1)}
                        </>
                      ) : (
                        item.name
                      )}
                    </h2>

                    {/* Subtitle & Skills Pills */}
                    {item.skills && activeIndex === index && (
                      <div className="flex flex-wrap gap-1.5 pt-1 translate-x-2 sm:translate-x-4 transition-all animate-fadeIn">
                        {item.skills.map((skill) => (
                          <span key={skill} className="clay-badge px-2.5 py-0.5 text-[9px] font-mono text-zinc-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* RIGHT SIDE: SQUARE GRID (Sharp Squares / Hexagons / Horizontal Slices) */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0">
        <div className="absolute w-[120%] h-[120%] bg-white/5 blur-[120px] rounded-full transition-opacity duration-1000" />
        
        <svg viewBox="0 0 500 500" className="w-[100%] max-w-[460px] h-auto z-10 drop-shadow-[0_0_50px_rgba(255,255,255,0.05)]">
          <defs>
            <clipPath id="clip-original">
              {/* High-Tech Neural Matrix Blades */}
              <rect className="path" x="25" y="25" width="450" height="65" rx="16" />
              <rect className="path" x="25" y="105" width="215" height="75" rx="16" />
              <rect className="path" x="255" y="105" width="220" height="75" rx="16" />
              <rect className="path" x="25" y="195" width="450" height="110" rx="20" />
              <rect className="path" x="25" y="320" width="280" height="75" rx="16" />
              <rect className="path" x="320" y="320" width="155" height="75" rx="16" />
              <rect className="path" x="25" y="410" width="450" height="65" rx="16" />
            </clipPath>

            <clipPath id="clip-hexagons">
              <rect className="path" x="20" y="20" width="200" height="280" rx="12" />
              <rect className="path" x="20" y="320" width="200" height="160" rx="12" />
              <rect className="path" x="240" y="20" width="240" height="140" rx="12" />
              <rect className="path" x="240" y="180" width="110" height="160" rx="12" />
              <rect className="path" x="370" y="180" width="110" height="160" rx="12" />
              <rect className="path" x="240" y="360" width="240" height="120" rx="12" />
            </clipPath>

            {/* Grid Squares with rx="4" */}
            <clipPath id="clip-pixels">
              {Array.from({ length: 9 }).map((_, i) => (
                <rect
                  key={i}
                  className="path"
                  x={(i % 3) * 160 + 20}
                  y={Math.floor(i / 3) * 160 + 20}
                  width="140"
                  height="140"
                  rx="4" 
                />
              ))}
            </clipPath>
          </defs>

          <g ref={mainGroupRef} clipPath={`url(#${items[0].clipId})`}>
            <image
              ref={imageRef}
              href={items[0].image}
              width="500"
              height="500"
              preserveAspectRatio="xMidYMid slice"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default ConnoisseurStackInteractor;
