import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown, Brain, Code2, ExternalLink, FileDown,
  Github, Shield, Trophy, Sparkles, Mail, Linkedin,
  User, Pause, Play
} from "lucide-react";
import { TextRotate } from "../components/ui/text-rotate";
import { CollectionSurfer } from "../components/ui/collection-surfer";

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

export default function Portfolio() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showHeroText, setShowHeroText] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);

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

  /* Video load & timer logic for clean intro -> text appear -> vanish */
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }

    // Step 1: Video plays clean for 3.5s (you walk in and stand)
    const appearTimer = setTimeout(() => {
      setShowHeroText(true);
    }, 3500);

    // Step 2: Text stays visible for 6.5s (total 10s mark), then vanishes
    const vanishTimer = setTimeout(() => {
      setShowHeroText(false);
    }, 10000);

    return () => {
      clearTimeout(appearTimer);
      clearTimeout(vanishTimer);
    };
  }, []);

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
      color: "border-amber-500/30 bg-amber-500/5",
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
      color: "border-teal-500/30 bg-teal-500/5",
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
      color: "border-purple-500/30 bg-purple-500/5",
      Icon: Code2,
      items: [
        "React & TypeScript",
        "Tailwind CSS & Clay UI",
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
      desc: "Secured 2nd place overall competing against engineering teams across Bangalore.",
      num: "01",
      tag: "HACKATHON WINNER",
    },
    {
      title: "1st Place — Prompt to Product",
      desc: "Awarded 1st place for building a production-grade generative AI web application.",
      num: "02",
      tag: "AI INNOVATION",
    },
    {
      title: "2nd Place — Website & App Development",
      desc: "Recognized for innovation, UX/UI excellence, clean architecture, and technical execution.",
      num: "03",
      tag: "FULL STACK AWARD",
    },
  ];

  const contactLinks: ContactLink[] = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mohammed-ibrahim-b837812a4/", icon: <Linkedin size={16} /> },
    { name: "GitHub", url: "https://github.com/MDIbrahim08", icon: <Github size={16} /> },
    { name: "Download Resume", url: "/resume/mohammed_ibrahim_resume.html", download: true, icon: <FileDown size={16} /> },
    { name: "Email Ibrahim", url: "mailto:mi5062254@gmail.com", icon: <Mail size={16} /> },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <div className="relative min-h-screen text-white font-body bg-[#07080a] selection:bg-amber-400 selection:text-black">
      <div className="noise-overlay" />

      {/* ═══ SLEEK GLASS NAVBAR ════════════════════════════════ */}
      <nav className="fixed top-0 w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center backdrop-blur-md bg-[#07080a]/40 border-b border-white/5">
        <div className="clay-glass-pill px-4 py-2 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span className="font-display font-black text-xs md:text-sm tracking-tight text-white">
            MOHAMMED IBRAHIM
          </span>
          <span className="hidden sm:inline-block text-[9px] font-mono uppercase bg-amber-400/15 text-amber-300 border border-amber-400/20 px-2.5 py-0.5 rounded-full">
            AI & SECURITY
          </span>
        </div>

        <div className="hidden md:flex clay-glass-pill px-6 py-2.5 gap-8 text-[10px] tracking-[0.25em] font-bold uppercase text-white/70">
          {["Hero Reel", "About", "Projects", "Skills", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "")}`} className="hover:text-amber-400 transition-colors">
              {item}
            </a>
          ))}
        </div>

        <a href="mailto:mi5062254@gmail.com" className="clay-btn !py-2 !px-5 !text-[9px]">
          Hire Ibrahim
        </a>
      </nav>

      {/* ═══ STAGE 1: HERO VIDEO SECTION (Top Full Screen Page) ═══ */}
      <section id="heroreel" className="relative h-screen w-full flex items-center overflow-hidden bg-black">
        
        {/* Full Stage Video Container */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            src="/scene-hero.mp4"
            poster="/profile.png"
            loop
            muted
            autoPlay
            playsInline
            className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.02]"
          />
          {/* Subtle dark overlays to keep branding readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-black/20" />
        </div>

        {/* Premium Animated Text Block in Right Corner */}
        <div className="absolute top-24 md:top-28 right-6 md:right-12 z-20 max-w-sm md:max-w-md pointer-events-none text-right">
          <AnimatePresence>
            {showHeroText && (
              <motion.div
                initial={{ opacity: 0, x: 50, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 30, filter: "blur(8px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="clay-glass-card p-6 md:p-8 space-y-4 border-amber-400/20 text-left pointer-events-auto"
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-amber-400 animate-pulse" />
                  <span className="text-[9px] tracking-[0.25em] font-mono font-black text-amber-400 uppercase">
                    Interactive Introduction
                  </span>
                </div>
                <h1 className="font-display text-2xl md:text-3xl font-black leading-tight text-white">
                  MOHAMMED IBRAHIM
                </h1>
                <p className="text-xs text-white/80 font-light leading-relaxed flex flex-wrap items-center gap-1.5">
                  <span>Engineered to make it</span>
                  <TextRotate
                    texts={[
                      "work!",
                      "fancy ✽",
                      "right",
                      "fast",
                      "fun",
                      "rock",
                      "🕶️🕶️🕶️",
                    ]}
                    mainClassName="text-black font-bold px-2.5 py-0.5 bg-amber-400 rounded-md overflow-hidden inline-flex justify-center"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </p>
                <div className="flex gap-2">
                  <span className="clay-badge px-2.5 py-1 text-[8px] font-mono font-bold text-amber-300">
                    Data Science Major
                  </span>
                  <span className="clay-badge px-2.5 py-1 text-[8px] font-mono font-bold text-teal-300">
                    Cybersecurity Minor
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Control overlay */}
        <div className="absolute bottom-8 right-6 md:right-12 z-20 flex gap-2">
          <button
            onClick={togglePlay}
            className="clay-glass-pill w-10 h-10 flex items-center justify-center text-white hover:text-amber-400 transition-colors bg-black/40 backdrop-blur-md"
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
        </div>

        {/* Bottom Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-6 md:left-12 z-20"
        >
          <a href="#about" className="flex items-center gap-2.5 text-white/50 hover:text-amber-400 transition-colors">
            <span className="text-[9px] font-mono tracking-[0.3em] uppercase font-bold">SCROLL DOWN TO EXPLORE</span>
            <ArrowDown size={14} />
          </a>
        </motion.div>

      </section>

      {/* ═══ STAGE 2: PREMIUM BLACK CLAYMORPHISM CONTENT BELOW HERO ═══ */}
      <main className="relative z-10 bg-[#07080a]">

        {/* ═══ ABOUT SECTION ═══════════════════════════════════ */}
        <section id="about" className="py-28 px-6 md:px-12 border-t border-white/5">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left: Profile Glass Card */}
              <motion.div {...fadeUp} className="lg:col-span-5">
                <div className="clay-glass-card p-6 space-y-5 border-amber-400/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                      <User className="text-amber-400" size={20} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-black text-white">Mohammed Ibrahim</h3>
                      <p className="text-[11px] text-amber-400 font-mono uppercase tracking-wider font-bold">Chanakya University</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-2 text-xs font-mono">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-white/40">Degree</span>
                      <span className="text-white font-bold">BCA Honours</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-white/40">Major</span>
                      <span className="text-amber-300 font-bold">Data Science</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-white/40">Minor</span>
                      <span className="text-teal-300 font-bold">Cybersecurity</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/70 italic font-light">
                    "Verify before you trust. Self-validating multi-agent outputs and defense-in-depth security."
                  </div>
                </div>
              </motion.div>

              {/* Right: Bio Text */}
              <motion.div {...fadeUp} className="lg:col-span-7 space-y-5">
                <span className="text-[10px] tracking-[0.35em] font-mono font-bold text-amber-400 uppercase block">
                  About Ibrahim
                </span>
                <h2 className="font-display text-3xl sm:text-5xl font-black text-white">
                  Bridging AI Intelligence with Enterprise Security.
                </h2>
                
                <div className="space-y-4 text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                  <p>
                    I am an <strong className="text-white font-medium">AI Product Engineer & Security Specialist</strong> building production platforms that combine machine learning classification with multi-agent orchestration.
                  </p>
                  <p>
                    Built <strong className="text-amber-300 font-medium">PulseBLR</strong> (a 5-agent LLM routing engine) and <strong className="text-teal-300 font-medium">CYZEN AI</strong> (6-in-1 threat platform with 98.31% phishing detection accuracy trained on 164,000+ real emails).
                  </p>
                  <p>
                    My security focus includes SOC triage, threat investigation, IAM policy auditing, and web security posture hardening.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["Multi-Agent AI", "Threat Operations", "LightGBM ML", "SOC Triage", "IAM Security"].map((item) => (
                    <span key={item} className="clay-badge px-3 py-1 text-[9px] font-mono font-bold text-white/80">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ═══ PROJECTS SECTION ═════════════════════════════════ */}
        <section ref={projectsSectionRef} id="projects" className="relative border-t border-white/5 bg-black" style={{ minHeight: "220vh" }}>
          
          {/* Sticky 3D Showcase Viewport */}
          <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between py-24 px-6 md:px-12 z-20">
            
            {/* Header */}
            <div className="max-w-[1200px] w-full mx-auto flex justify-between items-end">
              <div>
                <span className="text-[10px] tracking-[0.35em] font-mono font-bold text-amber-400 uppercase mb-2 block">
                  3D Interactive Showcase
                </span>
                <h2 className="font-display text-3xl sm:text-5xl font-black text-white">
                  PROJECTS HUB.
                </h2>
              </div>
              <span className="text-[9px] font-mono tracking-widest text-white/40 hidden sm:block uppercase">
                [ Scroll to rotate track / Hover cards to scale ]
              </span>
            </div>

            {/* 3D Collection Surfer Track */}
            <div className="flex-1 w-full h-full relative flex items-center justify-center min-h-[65vh]">
              <CollectionSurfer
                items={projects.map((p, idx) => ({
                  id: idx + 1,
                  image: p.image,
                  title: p.title
                }))}
                variant="magnetic"
                sectionRef={projectsSectionRef}
              />
            </div>

            {/* Footer indicator */}
            <div className="max-w-[1200px] w-full mx-auto border-t border-white/10 pt-4 flex justify-between items-center text-[10px] text-white/45">
              <span>Scroll to view details below</span>
              <span className="font-mono uppercase tracking-[0.2em] animate-pulse">scroll down ↓</span>
            </div>

          </div>

        </section>

        {/* Detailed Specs list immediately following the 3D stage */}
        <section className="py-20 px-6 md:px-12 bg-[#07080a] relative z-20">
          <div className="max-w-[1200px] mx-auto space-y-8">
            <div className="border-b border-white/10 pb-6 mb-10">
              <span className="text-[9px] font-mono tracking-[0.35em] text-amber-400 uppercase font-bold block mb-1">Architecture & Details</span>
              <h3 className="font-display text-2xl font-black text-white uppercase">System Specifications</h3>
            </div>

            <div className="space-y-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  {...fadeUp}
                  className="clay-glass-card p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center hover:border-amber-400/30 transition-all duration-500"
                >
                  {/* Media */}
                  <div className={`lg:col-span-5 ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="clay-badge px-2.5 py-0.5 text-[9px] font-mono font-bold text-amber-300">{project.id}</span>
                        <span className="clay-badge px-2.5 py-0.5 text-[9px] font-mono font-bold text-white/90">{project.badge}</span>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className={`lg:col-span-7 space-y-4 ${index % 2 !== 0 ? "lg:text-right" : ""}`}>
                    <div>
                      <span className="text-[10px] font-mono text-amber-400 uppercase font-bold tracking-wider block mb-1">{project.category}</span>
                      <h3 className="font-display text-xl sm:text-2xl font-black text-white">{project.title}</h3>
                    </div>

                    <div className="space-y-2 text-xs text-white/65 leading-relaxed font-light">
                      <p><strong className="text-white">Problem:</strong> {project.problem}</p>
                      <p><strong className="text-amber-300">Solution:</strong> {project.whatIBuilt}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className={`flex flex-wrap gap-1.5 pt-1 ${index % 2 !== 0 ? "lg:justify-end" : ""}`}>
                      {project.techStack.map((tech) => (
                        <span key={tech} className="clay-badge px-2.5 py-0.5 text-[9px] font-mono text-white/70">{tech}</span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className={`flex flex-wrap gap-3 pt-2 ${index % 2 !== 0 ? "lg:justify-end" : ""}`}>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="clay-btn !py-2 !px-4 !text-[9px]">
                          Live Demo <ExternalLink size={11} />
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="clay-glass-pill px-4 py-2 text-[9px] font-mono font-bold uppercase tracking-wider text-white/80 hover:text-white flex items-center gap-1.5">
                          Code <Github size={11} />
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
        <section id="skills" className="py-28 px-6 md:px-12 border-t border-white/5">
          <div className="max-w-[1200px] mx-auto">
            
            <motion.div {...fadeUp} className="mb-14">
              <span className="text-[10px] tracking-[0.35em] font-mono font-bold text-amber-400 uppercase mb-2 block">
                Technical Stack
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-white">
                SKILLS MATRIX.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillGroups.map((group) => (
                <motion.div key={group.title} {...fadeUp} className={`clay-glass-card p-6 space-y-5 ${group.color}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                      <group.Icon className="text-amber-400" size={18} />
                    </div>
                    <h3 className="font-display text-base font-black text-white">{group.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span key={item} className="clay-badge px-3 py-1.5 text-[9px] font-mono font-bold text-white/80">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ═══ ACHIEVEMENTS SECTION ═════════════════════════════ */}
        <section className="py-28 px-6 md:px-12 border-t border-white/5">
          <div className="max-w-[1200px] mx-auto">
            
            <motion.div {...fadeUp} className="mb-14">
              <span className="text-[10px] tracking-[0.35em] font-mono font-bold text-amber-400 uppercase mb-2 block">
                Recognitions
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-white">
                ACHIEVEMENTS.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((a) => (
                <motion.div key={a.title} {...fadeUp} className="clay-glass-card p-6 space-y-3 border-amber-400/20">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-mono font-bold text-amber-300 bg-amber-400/15 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                      {a.tag}
                    </span>
                    <Trophy className="text-amber-400" size={18} />
                  </div>
                  <h3 className="font-display text-base font-black text-white">{a.title}</h3>
                  <p className="text-xs text-white/55 font-light leading-relaxed">{a.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ═══ CONTACT SECTION ══════════════════════════════════ */}
        <section id="contact" className="py-36 px-6 md:px-12 text-center border-t border-white/5">
          <div className="max-w-[1200px] mx-auto space-y-6">
            
            <motion.div {...fadeUp} className="space-y-3">
              <span className="text-[10px] tracking-[0.4em] font-mono font-bold text-amber-400 uppercase">
                GET IN TOUCH
              </span>
              <h2 className="font-display text-4xl sm:text-6xl font-black text-white">
                LET'S CONNECT.
              </h2>
              <p className="max-w-md mx-auto text-xs sm:text-sm text-white/50 font-light leading-relaxed">
                Open to AI Product Engineering, Multi-Agent research, and SOC / Threat Intelligence roles.
              </p>
            </motion.div>

            <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-3 pt-2">
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.download ? undefined : "_blank"}
                  rel={link.download ? undefined : "noopener noreferrer"}
                  download={link.download ? "mohammed_ibrahim_resume.html" : undefined}
                  className="clay-glass-pill px-6 py-3 inline-flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-white/80 hover:text-amber-300 hover:border-amber-400/40 transition-all duration-300"
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </motion.div>

          </div>
        </section>

        {/* ═══ FOOTER ═══════════════════════════════════════════ */}
        <footer className="py-8 px-6 border-t border-white/5 text-center bg-[#050608]">
          <p className="text-[9px] font-mono tracking-widest text-white/30 uppercase">
            © 2026 MOHAMMED IBRAHIM · AI PRODUCT & SECURITY ENGINEER · STAGE HERO REEL + CLAYMORPHISM
          </p>
        </footer>

      </main>
    </div>
  );
}
