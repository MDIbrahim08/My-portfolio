import React, { useEffect, useRef, useState } from "react";
import { RotateCcw, Volume2, VolumeX } from "lucide-react";
import { isSfxEnabled, playThunk, subscribeSfx, toggleSfx } from "@/lib/sfx";

const SECTIONS = [
  { id: "heroreel", label: "01 // HERO REEL" },
  { id: "about", label: "02 // ABOUT" },
  { id: "projects", label: "03 // PROJECTS" },
  { id: "skills", label: "04 // SKILLS" },
  { id: "achievements", label: "05 // AWARDS" },
  { id: "contact", label: "06 // CONNECT" },
];

export const TelemetryDock: React.FC = () => {
  const [activeLabel, setActiveLabel] = useState(SECTIONS[0].label);
  const [soundOn, setSoundOn] = useState(() => isSfxEnabled());
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    return subscribeSfx(setSoundOn);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const mid = window.innerHeight * 0.4;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= mid) {
            setActiveLabel(SECTIONS[i].label);
            return;
          }
        }
      }
      setActiveLabel(SECTIONS[0].label);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mini live waveform visualizer when SFX is enabled
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let phase = 0;
    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      const bars = 5;
      const gap = 3;
      const bw = 2;
      for (let i = 0; i < bars; i++) {
        const amp = soundOn
          ? 3 + Math.abs(Math.sin(phase + i * 0.85)) * (h - 5)
          : 3;
        const x = i * (bw + gap) + 1;
        const y = (h - amp) / 2;
        ctx.fillStyle = soundOn ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.28)";
        ctx.fillRect(x, y, bw, amp);
      }
      phase += 0.14;
      if (soundOn) {
        raf = requestAnimationFrame(draw);
      }
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [soundOn]);

  const handleRewind = () => {
    playThunk(115, 0.16);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-40 flex items-center gap-2 rounded-full border border-white/15 bg-[#090b10]/85 backdrop-blur-xl px-3 py-2 shadow-[0_12px_36px_rgba(0,0,0,0.65)]"
      role="region"
      aria-label="Portfolio telemetry and audio controls"
    >
      {/* Live LED + Active Section Readout */}
      <div className="flex items-center gap-2 pr-2 border-r border-white/10">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        <span className="font-mono text-[10px] tracking-[0.18em] text-white/80 uppercase whitespace-nowrap">
          {activeLabel}
        </span>
      </div>

      {/* Rewind to Top Keycap */}
      <button
        type="button"
        onClick={handleRewind}
        title="Rewind to Hero Reel"
        aria-label="Rewind to top"
        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-white/80 hover:text-white transition-all active:scale-95 cursor-pointer"
      >
        <RotateCcw size={11} />
        <span className="hidden sm:inline">Rewind</span>
      </button>

      {/* Sound Toggle Keycap + Live Waveform */}
      <button
        type="button"
        onClick={() => toggleSfx()}
        title={soundOn ? "Mute UI Sound Effects" : "Enable UI Sound Effects"}
        aria-label={soundOn ? "Turn sound off" : "Turn sound on"}
        aria-pressed={soundOn}
        className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 hover:bg-white/20 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-white transition-all active:scale-95 cursor-pointer"
      >
        {soundOn ? <Volume2 size={11} /> : <VolumeX size={11} className="text-white/50" />}
        <canvas ref={canvasRef} width={24} height={14} className="block" aria-hidden="true" />
        <span className="hidden sm:inline">{soundOn ? "SFX ON" : "MUTED"}</span>
      </button>
    </div>
  );
};
