// Procedural Web Audio API SFX Engine (0 KB external assets)

type SfxListener = (enabled: boolean) => void;

let audioCtx: AudioContext | null = null;
let sfxEnabled = true;
const listeners = new Set<SfxListener>();

if (typeof window !== "undefined") {
  try {
    const saved = window.localStorage.getItem("portfolio_sfx_enabled");
    if (saved !== null) sfxEnabled = saved === "true";
  } catch {
    // ignore storage errors
  }
}

function getContext(): AudioContext | null {
  if (typeof window === "undefined" || !sfxEnabled) return null;
  if (!audioCtx) {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return null;
    audioCtx = new Ctx();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export function isSfxEnabled(): boolean {
  return sfxEnabled;
}

export function setSfxEnabled(enabled: boolean): void {
  sfxEnabled = enabled;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem("portfolio_sfx_enabled", String(enabled));
    } catch {
      // ignore storage errors
    }
  }
  listeners.forEach((fn) => fn(enabled));
  if (enabled) playChime();
}

export function toggleSfx(): boolean {
  setSfxEnabled(!sfxEnabled);
  return sfxEnabled;
}

export function subscribeSfx(fn: SfxListener): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

/** Crisp mechanical switch tick for nav links, pills, and hover/click */
export function playTick(freq = 920): void {
  const ctx = getContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(freq, now);
  osc.frequency.exponentialRampToValueAtTime(240, now + 0.032);
  gain.gain.setValueAtTime(0.06, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.04);
}

/** Tactile low-frequency mechanical thud for rewind, play/pause, and carousel */
export function playThunk(freq = 135, level = 0.14): void {
  const ctx = getContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, now);
  osc.frequency.exponentialRampToValueAtTime(48, now + 0.09);
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(360, now);
  gain.gain.setValueAtTime(level, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.095);
  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.1);
}

/** Mechanical split-flap clack for Achievements FlipGallery */
export function playFlap(): void {
  const ctx = getContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  // Two-stage flap snap
  [0, 0.045].forEach((offset, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "square";
    osc.frequency.setValueAtTime(idx === 0 ? 520 : 380, now + offset);
    osc.frequency.exponentialRampToValueAtTime(110, now + offset + 0.028);
    gain.gain.setValueAtTime(idx === 0 ? 0.045 : 0.055, now + offset);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + offset + 0.032);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now + offset);
    osc.stop(now + offset + 0.035);
  });
}

/** Subtle two-note confirmation chime for CTAs and unmuting */
export function playChime(): void {
  const ctx = getContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  [587.33, 880].forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now + i * 0.055);
    gain.gain.setValueAtTime(0.05, now + i * 0.055);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.055 + 0.16);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now + i * 0.055);
    osc.stop(now + i * 0.055 + 0.17);
  });
}
