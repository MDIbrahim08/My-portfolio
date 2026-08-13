import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Pause, Shield, Cpu, ExternalLink, Sparkles } from "lucide-react";
import { useState } from "react";

type VideoFrame = {
  id: string;
  title: string;
  category: string;
  description: string;
  videoUrl?: string;
  fallbackImage: string;
  tags: string[];
  link?: string;
};

const DEFAULT_FRAMES: VideoFrame[] = [
  {
    id: "01",
    title: "CYZEN AI — 6-in-1 Threat Intelligence",
    category: "AI & Cybersecurity Platform",
    description: "Multi-model threat triage platform with 98.31% phishing detection accuracy and sub-second crisis response recommendations.",
    fallbackImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    tags: ["LLaMA 3.3 70B", "LightGBM", "Groq", "Supabase"],
    link: "https://cyzenai.netlify.app"
  },
  {
    id: "02",
    title: "PulseBLR — Autonomous Commute Engine",
    category: "Multi-Agent Orchestration",
    description: "5-agent LLM pipeline processing real-time city signals to deliver dynamic multi-modal urban routing strategies in Bangalore.",
    fallbackImage: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=1200",
    tags: ["Multi-Agent LLM", "React", "TypeScript", "Python"],
    link: "https://pulseblr.netlify.app"
  },
  {
    id: "03",
    title: "Web Posture & Header Inspector",
    category: "Web Security Hardening",
    description: "Automated HTTP response header scanner evaluating endpoints against OWASP baselines to prevent XSS and clickjacking.",
    fallbackImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
    tags: ["Python", "OWASP", "CSP/HSTS Audit", "Web Security"]
  }
];

export default function ThreeDVideoShowcase({ frames = DEFAULT_FRAMES }: { frames?: VideoFrame[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 3D Motion transforms driven by scroll
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const perspective = useTransform(scrollYProgress, [0, 0.5, 1], [1200, 1000, 1200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 bg-[#030303] relative z-10 overflow-hidden border-y border-white/10">
      {/* Background Ambient Glow & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-[10px] tracking-[0.4em] font-black text-amber-400 uppercase mb-4 flex items-center gap-2">
              <Sparkles size={14} className="text-amber-400 animate-pulse" />
              GEN-Z MOTION SHOWCASE // GOOGLE FLOW AI
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight uppercase">
              3D CINEMATIC REEL.
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/50 leading-relaxed font-light">
            Scroll-linked 3D spatial frames generated with Google Flow. High-contrast studio lighting, real-time depth perspective, and multi-agent interaction reels.
          </p>
        </div>

        {/* 3D Perspective Grid */}
        <motion.div
          style={{ perspective, rotateX, opacity }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-300"
        >
          {frames.map((frame, index) => {
            const isPlaying = playingId === frame.id;
            return (
              <motion.div
                key={frame.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative bg-[#090909] border border-white/10 hover:border-amber-400/50 rounded-3xl p-6 transition-all duration-500 shadow-2xl overflow-hidden backdrop-blur-md"
              >
                {/* Neon Top Edge Accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* 3D Video/Frame Container */}
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-black border border-white/10 shadow-inner group">
                  {frame.videoUrl ? (
                    <video
                      src={frame.videoUrl}
                      poster={frame.fallbackImage}
                      loop
                      muted
                      playsInline
                      autoPlay={isPlaying}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={frame.fallbackImage}
                      alt={frame.title}
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  )}

                  {/* Dark Studio Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* HUD Top Bar Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center pointer-events-none">
                    <span className="text-[9px] font-mono tracking-widest text-white/60 bg-black/60 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                      FRAME // {frame.id}
                    </span>
                    <span className="text-[9px] font-mono tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full backdrop-blur-md">
                      3D DEPTH MAP
                    </span>
                  </div>

                  {/* Play / Pause Interactive Button */}
                  {frame.videoUrl && (
                    <button
                      onClick={() => setPlayingId(isPlaying ? null : frame.id)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors"
                    >
                      <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300 shadow-xl">
                        {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
                      </div>
                    </button>
                  )}
                </div>

                {/* Content & Tags */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.25em] font-black uppercase text-amber-400">
                      {frame.category}
                    </span>
                    {frame.link && (
                      <a
                        href={frame.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-amber-400 transition-colors"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  <h3 className="font-display text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {frame.title}
                  </h3>

                  <p className="text-xs text-white/50 leading-relaxed font-light">
                    {frame.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {frame.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 bg-white/5 border border-white/10 text-white/70 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* HUD Bottom Info Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono tracking-widest text-white/30 uppercase">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <Shield size={12} className="text-amber-400" /> HARDWARE ACCELERATED 3D ENGINE
            </span>
            <span className="hidden md:inline">&bull;</span>
            <span className="hidden md:flex items-center gap-2">
              <Cpu size={12} className="text-amber-400" /> GOOGLE FLOW AI RENDERED
            </span>
          </div>
          <span>SCROLL DOWN TO EXPLORE PROJECTS &bull; VOID SYS 2026</span>
        </div>
      </div>
    </section>
  );
}
