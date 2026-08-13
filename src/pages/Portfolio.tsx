import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowDown, Brain, Code2, ExternalLink, FileDown,
  Github, KeyRound, Search, Shield, Trophy, Sparkles, Mail, Linkedin,
  Play, Pause, Volume2, VolumeX, CheckCircle2, ChevronRight, Terminal, User
} from "lucide-react";

/* ─────────────────────────────────────────
   Types & Interfaces
───────────────────────────────────────── */
type Project = {
  id: string;
  title: string;
  category: string;
  badge: string;
  problem: string;
  approach: string;
  whatIBuilt: string;
  outcome: string;
  techStack: string[];
  link?: string;
  github?: string;
  image: string;
};

type ContactLink = {
  name: string;
  url: string;
  download?: boolean;
  icon: React.ReactNode;
};

/* ─────────────────────────────────────────
   Floating Clay Decorator Blobs
───────────────────────────────────────── */
function ClayBlob({
  color,
  size,
  top,
  left,
  delay = 0,
}: {
  color: string;
  size: number;
  top: string;
  left: string;
  delay?: number;
}) {
  return (
    <div
      className="clay-blob pointer-events-none z-0"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        top,
        left,
        animationDelay: `${delay}s`,
        animationDuration: `${8 + delay}s`,
      }}
    />
  );
}

/* ─────────────────────────────────────────
   Main Claymorphism Portfolio
───────────────────────────────────────── */
export default function Portfolio() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.95]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  /* ── Data ── */
  const projects: Project[] = [
    {
      id: "01",
      title: "CYZEN AI — Cybersecurity & Threat Platform",
      category: "AI & Security Systems",
      badge: "98.31% Accuracy ML Model",
      problem:
        "Everyday internet users and organization endpoints lack immediate, automated threat detection tools and real-time incident crisis response protocols.",
      approach:
        "Engineered a unified 6-in-1 cybersecurity awareness platform combining specialized LightGBM machine learning models with high-throughput LLaMA 3.3 70B (via Groq) and multi-layered breached record indexing.",
      whatIBuilt:
        "Built 6 integrated security tools: Phishing Detector (ML model trained on 164,972 real emails), Password Analyzer, Emergency Response Kit, 24/7 CYZEN Intelligence Advisor, Security Posture Analyzer, and Community Education Hub.",
      outcome:
        "Deployed a live, production-grade cybersecurity platform serving high-precision threat classification and sub-second crisis mitigation recommendations.",
      techStack: ["React", "LightGBM", "LLaMA 3.3 70B", "Groq", "Supabase", "Python"],
      link: "https://cyzenai.netlify.app",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "02",
      title: "PulseBLR — Real-Time AI Route Strategy Planner",
      category: "Multi-Agent LLM Orchestration",
      badge: "5-Agent LLM Pipeline",
      problem:
        "Standard navigation apps fail to synthesize dynamic, multi-modal routing strategies for complex urban traffic like Bangalore.",
      approach:
        "Architected a 5-agent LLM pipeline processing real-time city signals to generate a single, self-validated route strategy.",
      whatIBuilt:
        "Engineered dynamic multi-modal route strategy optimization, a multi-lingual voice-to-intent pipeline, and real-time aggregated cab fare comparisons.",
      outcome:
        "Launched an autonomous multi-agent urban mobility engine that delivers self-validating route strategies and voice interaction.",
      techStack: ["React", "TypeScript", "LLM Orchestration", "Python", "Node.js"],
      link: "https://pulseblr.netlify.app",
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "03",
      title: "Security Header & Web Posture Inspector",
      category: "Web Security & Posture Hardening",
      badge: "OWASP Baseline Scanner",
      problem:
        "Web applications frequently deploy with misconfigured HTTP security headers, leaving endpoints vulnerable.",
      approach:
        "Constructed an automated security header scanner evaluating HTTP response headers against OWASP baselines.",
      whatIBuilt:
        "Designed security header scoring logic, CSP parsing, HSTS validation, and automated remediation report generation.",
      outcome:
        "Empowers security teams to rapidly identify web posture weaknesses and enforce enterprise browser security controls.",
      techStack: ["Python", "Web Security", "OWASP", "REST API", "React"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "04",
      title: "MovieBuddy — Intelligent AI Recommendation Engine",
      category: "Machine Learning & Data Science",
      badge: "Personalized Content Indexing",
      problem:
        "High-volume media databases create decision fatigue without context-aware metadata filtering.",
      approach:
        "Applied content-filtering algorithms and natural language metadata indexing for personalized media recommendations.",
      whatIBuilt:
        "Developed data processing pipelines, user preference ranking logic, similarity algorithms, and an interactive frontend.",
      outcome:
        "Demonstrated applied data science and machine learning deployment in a live web application.",
      techStack: ["React", "Python", "Machine Learning", "Data Analytics"],
      link: "https://moviebuddy.lovable.app/",
      github: "https://github.com/MDIbrahim08/MovieBuddy",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200",
    },
  ];

  const skillGroups = [
    {
      title: "AI & Multi-Agent Engineering",
      color: "from-amber-500/15 via-orange-500/10 to-transparent",
      Icon: Brain,
      items: [
        "Multi-Agent Orchestration",
        "LLaMA 3.3 70B & Groq API",
        "LightGBM & ML Models",
        "AI System Architecture",
        "Python & Data Science",
        "Prompt Engineering",
        "Self-Verifying Outputs",
      ],
    },
    {
      title: "Cybersecurity & SOC Operations",
      color: "from-teal-500/15 via-emerald-500/10 to-transparent",
      Icon: Shield,
      items: [
        "Threat Triage & Investigation",
        "SOC Log Monitoring",
        "IAM & Access Governance",
        "Phishing Email Detection",
        "Web Posture (CSP / HSTS)",
        "Burp Suite & Nmap",
        "OWASP Hardening Rules",
      ],
    },
    {
      title: "Full-Stack & Cloud Systems",
      color: "from-purple-500/15 via-indigo-500/10 to-transparent",
      Icon: Code2,
      items: [
        "React & TypeScript",
        "Tailwind CSS v4 & Clay UI",
        "Node.js & REST APIs",
        "Supabase & PostgreSQL",
        "Git & Deployment Workflows",
        "Netlify & Production Hosting",
      ],
    },
  ];

  const achievements = [
    {
      title: "2nd Place Overall — GeeksforGeeks Hackathon, Bangalore",
      desc: "Represented Chanakya University and secured 2nd place overall among top engineering teams across Bangalore.",
      num: "01",
      tag: "HACKATHON WINNER",
    },
    {
      title: "1st Place — Prompt to Product",
      desc: "Awarded 1st place for rapidly transforming generative AI prompts into a fully functional, production-grade web application.",
      num: "02",
      tag: "AI INNOVATION",
    },
    {
      title: "2nd Place — Website & App Development",
      desc: "Recognized for innovation, UX/UI excellence, clean clay architecture, and technical execution.",
      num: "03",
      tag: "FULL STACK AWARD",
    },
  ];

  const contactLinks: ContactLink[] = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mohammed-ibrahim-b837812a4/", icon: <Linkedin size={18} /> },
    { name: "GitHub", url: "https://github.com/MDIbrahim08", icon: <Github size={18} /> },
    { name: "Download Resume", url: "/resume/mohammed_ibrahim_resume.html", download: true, icon: <FileDown size={18} /> },
    { name: "Email Ibrahim", url: "mailto:mi5062254@gmail.com", icon: <Mail size={18} /> },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <div className="min-h-screen text-white font-body overflow-x-hidden bg-[#0a0c10] selection:bg-amber-400 selection:text-black">
      <div className="noise-overlay" />

      {/* ═══ GOOGLE-STYLE CLAY NAVBAR ═══════════════════════════ */}
      <nav className="fixed top-0 w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center backdrop-blur-md bg-[#0a0c10]/40 border-b border-white/5">
        <div className="clay-card px-4 py-2 flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
          <span className="font-display font-black text-xs md:text-sm tracking-tight text-white">
            MOHAMMED IBRAHIM
          </span>
          <span className="hidden sm:inline-block text-[9px] font-mono uppercase bg-amber-400/10 text-amber-300 border border-amber-400/20 px-2 py-0.5 rounded-full">
            AI & SECURITY
          </span>
        </div>

        <div className="hidden md:flex clay-card px-6 py-2.5 gap-8 text-[10px] tracking-[0.25em] font-bold uppercase text-white/70">
          {["About", "Showcase", "Projects", "Skills", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-amber-400 transition-colors">
              {item}
            </a>
          ))}
        </div>

        <a href="mailto:mi5062254@gmail.com" className="clay-btn !py-2.5 !px-5 !text-[9px]">
          Hire Ibrahim
        </a>
      </nav>

      {/* ═══ HERO SECTION WITH SCENE 1 VIDEO REEL ═══════════════ */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden pt-28 pb-16">
        <ClayBlob color="#d97706" size={550} top="5%" left="55%" delay={0} />
        <ClayBlob color="#7c3aed" size={450} top="45%" left="-10%" delay={2} />

        <div className="max-w-[1400px] w-full mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text */}
          <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="lg:col-span-7 space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 clay-badge px-4 py-2">
              <Sparkles size={14} className="text-amber-400 animate-spin" style={{ animationDuration: "6s" }} />
              <span className="text-[10px] tracking-[0.25em] font-black text-amber-300 uppercase">
                GEN Z 3D CLAYMORPHISM EXPERIENCE
              </span>
            </motion.div>

            <h1 className="font-display text-5xl sm:text-7xl lg:text-[5.5rem] font-black leading-[1.02] tracking-tight clay-heading">
              Hi, I'm Ibrahim.<br />
              <span className="text-white">AI Product & Security Engineer.</span>
            </h1>

            <p className="max-w-xl text-base md:text-lg text-white/60 leading-relaxed font-light">
              BCA Honours (Data Science Major, Cybersecurity Minor) at Chanakya University. Building multi-agent AI frameworks, ML security detectors, and production-ready web systems.
            </p>

            {/* Quick Stat Badges */}
            <div className="grid grid-cols-3 gap-3 max-w-lg pt-2">
              <div className="clay-card p-3 text-center">
                <span className="text-xl md:text-2xl font-black text-amber-400 font-display block">98.3%</span>
                <span className="text-[9px] uppercase font-bold text-white/50 tracking-wider">ML Accuracy</span>
              </div>
              <div className="clay-card p-3 text-center">
                <span className="text-xl md:text-2xl font-black text-amber-400 font-display block">5-Agent</span>
                <span className="text-[9px] uppercase font-bold text-white/50 tracking-wider">LLM Engine</span>
              </div>
              <div className="clay-card p-3 text-center">
                <span className="text-xl md:text-2xl font-black text-amber-400 font-display block">Top 2</span>
                <span className="text-[9px] uppercase font-bold text-white/50 tracking-wider">GFG Hackathon</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#projects" className="clay-btn">
                Explore Projects →
              </a>
              <a href="#about" className="clay-card px-6 py-3.5 text-[11px] font-black tracking-widest uppercase text-white/80 hover:text-white transition-colors">
                About Me
              </a>
            </div>
          </motion.div>

          {/* Right Column: Google Flow Scene 1 Cinematic Reel */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="lg:col-span-5 relative">
            
            <div className="clay-card p-3 md:p-4 relative group">
              
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-teal-500/20 rounded-[32px] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000" />
              
              <div className="relative rounded-[24px] overflow-hidden bg-black aspect-[4/5] border border-white/10">
                
                {/* Video Component */}
                {!videoError ? (
                  <video
                    ref={videoRef}
                    src="/scene-hero.mp4"
                    poster="/profile.png"
                    loop
                    muted={isMuted}
                    autoPlay
                    playsInline
                    onError={() => setVideoError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full relative">
                    <img src="/profile.png" alt="Ibrahim" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                      <span className="text-xs text-amber-400 font-mono">PLACE YOUR VIDEO HERE:</span>
                      <span className="text-[10px] text-white/60 font-mono">public/scene-hero.mp4</span>
                    </div>
                  </div>
                )}

                {/* Video Glass HUD Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10 pointer-events-none">
                  <span className="text-[9px] font-mono tracking-widest bg-black/60 text-white/80 border border-white/15 px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    GOOGLE FLOW 3D REEL
                  </span>
                  <span className="text-[9px] font-mono tracking-widest bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full backdrop-blur-md">
                    1080P CINEMATIC
                  </span>
                </div>

                {/* Interactive Controls Bar */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10">
                  <div className="flex gap-2">
                    <button onClick={togglePlay} className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-amber-400 hover:text-black transition-all">
                      {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
                    </button>
                    <button onClick={toggleMute} className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-amber-400 hover:text-black transition-all">
                      {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    </button>
                  </div>

                  <span className="text-[10px] font-display font-bold text-white/90 bg-black/50 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
                    Spotlight Entrance
                  </span>
                </div>

              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* ═══ ABOUT SECTION ════════════════════════════════════ */}
      <section id="about" className="py-28 px-6 md:px-12 relative overflow-hidden bg-[#0d0f14]">
        <ClayBlob color="#0d9488" size={400} top="15%" left="75%" delay={1} />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Interactive Card */}
            <motion.div {...fadeUp} className="lg:col-span-5">
              <div className="clay-card p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                    <User className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-black text-white">Mohammed Ibrahim</h3>
                    <p className="text-xs text-amber-400/90 font-mono uppercase tracking-widest font-bold">Chanakya University</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-center text-xs border-b border-white/10 pb-2">
                    <span className="text-white/40 uppercase font-mono">Degree</span>
                    <span className="text-white font-bold">BCA Honours</span>
                  </div>
                  <div className="flex justify-between items-center text-xs border-b border-white/10 pb-2">
                    <span className="text-white/40 uppercase font-mono">Major</span>
                    <span className="text-amber-300 font-bold">Data Science</span>
                  </div>
                  <div className="flex justify-between items-center text-xs border-b border-white/10 pb-2">
                    <span className="text-white/40 uppercase font-mono">Minor</span>
                    <span className="text-teal-300 font-bold">Cybersecurity</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <span className="text-[9px] uppercase font-mono tracking-widest text-amber-400 block font-bold">Core Engineering Motto</span>
                  <p className="text-xs text-white/70 italic font-light">"Verify before you trust. Self-validating AI output & defense-in-depth security."</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Detailed Bio */}
            <motion.div {...fadeUp} className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[10px] tracking-[0.35em] font-black text-amber-400 uppercase mb-3 block">
                  Background & Philosophy
                </span>
                <h2 className="font-display text-4xl md:text-6xl font-black clay-heading">
                  WHO I AM.
                </h2>
              </div>

              <div className="space-y-4 text-base text-white/70 font-light leading-relaxed">
                <p>
                  I am a passionate <strong className="text-white font-medium">AI Product Engineer & Security Specialist</strong> focused on bridging machine intelligence with enterprise-grade protection.
                </p>
                <p>
                  My work centers around <strong className="text-amber-300 font-medium">Multi-Agent LLM Orchestration</strong> (building pipelines that cross-check their own decisions) and <strong className="text-teal-300 font-medium">Cybersecurity Threat Operations</strong> (ML-powered phishing detection, SOC triage, and posture audits).
                </p>
                <p>
                  Whether engineering <strong className="text-white">PulseBLR</strong> (a 5-agent urban routing engine) or <strong className="text-white">CYZEN AI</strong> (achieving 98.31% threat detection accuracy), I focus on real-world impact, high performance, and robust architecture.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="clay-card p-4 space-y-2">
                  <span className="text-[10px] font-mono text-amber-400 uppercase font-bold">PRIMARY FOCUS</span>
                  <p className="text-xs text-white/80 font-bold">Multi-Agent AI & Threat Detection</p>
                </div>
                <div className="clay-card p-4 space-y-2">
                  <span className="text-[10px] font-mono text-teal-400 uppercase font-bold">TARGET ROLES</span>
                  <p className="text-xs text-white/80 font-bold">AI Product Engineer / SOC Analyst</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══ PROJECTS SECTION ═════════════════════════════════ */}
      <section id="projects" className="py-28 px-6 md:px-12 relative overflow-hidden bg-[#0a0c10]">
        <ClayBlob color="#d97706" size={500} top="20%" left="-10%" delay={2} />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div {...fadeUp} className="mb-16">
            <span className="text-[10px] tracking-[0.35em] font-black text-amber-400 uppercase mb-3 block">
              Featured Systems & Applications
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-black clay-heading">
              PROJECTS HUB.
            </h2>
          </motion.div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                {...fadeUp}
                className="clay-card p-7 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group hover:border-amber-400/30 transition-all duration-500"
              >
                {/* Project Media */}
                <div className={`lg:col-span-6 ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-video rounded-[20px] overflow-hidden bg-white/5 border border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="clay-badge px-3 py-1 text-[9px] font-mono font-bold text-amber-400">
                        {project.id}
                      </span>
                      <span className="clay-badge px-3 py-1 text-[9px] font-mono font-bold text-white/90">
                        {project.badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`lg:col-span-6 space-y-5 ${index % 2 !== 0 ? "lg:text-right" : ""}`}>
                  <div>
                    <span className="text-[10px] tracking-[0.25em] font-mono font-bold uppercase text-amber-400 mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-white leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  <div className="space-y-3 text-xs text-white/65 leading-relaxed">
                    <p><strong className="text-white">Problem:</strong> {project.problem}</p>
                    <p><strong className="text-amber-300">Solution:</strong> {project.whatIBuilt}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className={`flex flex-wrap gap-2 pt-1 ${index % 2 !== 0 ? "lg:justify-end" : ""}`}>
                    {project.techStack.map((tech) => (
                      <span key={tech} className="clay-badge px-3 py-1 text-[9px] font-mono font-bold text-white/70">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className={`flex flex-wrap gap-3 pt-3 ${index % 2 !== 0 ? "lg:justify-end" : ""}`}>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="clay-btn !py-2.5 !px-5 !text-[9px] inline-flex items-center gap-2">
                        Live Demo <ExternalLink size={12} />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="clay-card px-5 py-2.5 text-[9px] font-mono font-bold uppercase tracking-wider text-white/80 hover:text-white flex items-center gap-2">
                        Source Code <Github size={12} />
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SKILLS SECTION ═══════════════════════════════════ */}
      <section id="skills" className="py-28 px-6 md:px-12 relative overflow-hidden bg-[#0d0f14]">
        <ClayBlob color="#7c3aed" size={450} top="20%" left="70%" delay={3} />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div {...fadeUp} className="mb-16">
            <span className="text-[10px] tracking-[0.35em] font-black text-amber-400 uppercase mb-3 block">
              Capabilities & Tools
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-black clay-heading">
              SKILLS MATRIX.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <motion.div key={group.title} {...fadeUp} className={`clay-card p-8 space-y-6 bg-gradient-to-b ${group.color}`}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                    <group.Icon className="text-amber-400" size={22} />
                  </div>
                  <h3 className="font-display text-lg font-black text-white">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="clay-badge px-3.5 py-2 text-[10px] font-mono font-bold uppercase text-white/80">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ACHIEVEMENTS ═════════════════════════════════════ */}
      <section className="py-28 px-6 md:px-12 relative overflow-hidden bg-[#0a0c10]">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div {...fadeUp} className="mb-16">
            <span className="text-[10px] tracking-[0.35em] font-black text-amber-400 uppercase mb-3 block">
              Honors & Certifications
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-black clay-heading">
              ACHIEVEMENTS.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((a) => (
              <motion.div key={a.title} {...fadeUp} className="clay-card p-8 space-y-4 hover:border-amber-400/40 transition-all">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                    {a.tag}
                  </span>
                  <Trophy className="text-amber-400" size={20} />
                </div>
                <h3 className="font-display text-xl font-black text-white leading-snug">{a.title}</h3>
                <p className="text-xs text-white/55 font-light leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT SECTION ══════════════════════════════════ */}
      <section id="contact" className="py-36 px-6 md:px-12 relative overflow-hidden bg-[#0d0f14]">
        <ClayBlob color="#d97706" size={550} top="20%" left="30%" delay={0} />
        
        <div className="max-w-[1400px] mx-auto relative z-10 text-center space-y-8">
          <motion.div {...fadeUp} className="space-y-4">
            <span className="text-[10px] tracking-[0.4em] font-black text-amber-400 uppercase">
              LET'S BUILD SOMETHING GREAT
            </span>
            <h2 className="font-display text-5xl md:text-8xl font-black clay-heading leading-tight">
              CONNECT WITH ME.
            </h2>
            <p className="max-w-md mx-auto text-sm text-white/50 font-light leading-relaxed">
              Open to AI Product Engineering, Multi-Agent research, and SOC / Threat Intelligence roles.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-4 pt-4">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.download ? undefined : "_blank"}
                rel={link.download ? undefined : "noopener noreferrer"}
                download={link.download ? "mohammed_ibrahim_resume.html" : undefined}
                className="clay-card px-8 py-4 inline-flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-wider text-white/80 hover:text-amber-300 hover:border-amber-400/40 transition-all duration-300"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ FOOTER ═══════════════════════════════════════════ */}
      <footer className="py-8 px-6 border-t border-white/5 text-center bg-[#07080b]">
        <p className="text-[10px] font-mono tracking-widest text-white/30 uppercase">
          © 2026 MOHAMMED IBRAHIM · AI PRODUCT & SECURITY ENGINEER · GOOGLE-STYLE CLAYMORPHISM
        </p>
      </footer>

    </div>
  );
}
