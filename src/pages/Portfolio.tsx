import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown, Brain, Code2, ExternalLink, FileDown,
  Github, Shield, Trophy, Sparkles, Mail, Linkedin,
  User, Pause, Play, Copy, Check, Send, Globe,
  Clock, ArrowUpRight, MapPin, ArrowUp
} from "lucide-react";
import { TextRotate } from "../components/ui/text-rotate";
import { CollectionSurfer } from "../components/ui/collection-surfer";
import { BlurText } from "../components/ui/portfolio-hero";
import { ConnoisseurStackInteractor, MenuItem } from "../components/ui/connoisseur-stack-interactor";
import FlipGallery, { FlipImageItem } from "../components/ui/flip-gallery";
import { LiquidMetalButton } from "../components/ui/liquid-metal-button";
import { cn } from "@/lib/utils";

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

  /* Video playback & timeupdate sync so text reliably shows in every loop and on scroll */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.play().catch(() => {});

    const checkTime = () => {
      if (!video) return;
      const t = video.currentTime;
      const shouldShow = t >= 3.0 && t <= 7.2;
      setShowHeroText((prev) => (prev !== shouldShow ? shouldShow : prev));
    };

    video.addEventListener("timeupdate", checkTime);
    video.addEventListener("seeked", checkTime);

    // Fallback: check interval every 200ms to ensure smooth updates even on background tabs
    const interval = setInterval(checkTime, 200);

    return () => {
      video.removeEventListener("timeupdate", checkTime);
      video.removeEventListener("seeked", checkTime);
      clearInterval(interval);
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

  const skillMenuItems: MenuItem[] = [
    {
      num: "01",
      name: "AI & MULTI-AGENT",
      clipId: "clip-original",
      image: "/clay-ai-brain.jpg",
      skills: [
        "Multi-Agent LLM Pipelines",
        "LLaMA 3.3 70B & Groq API",
        "LightGBM Classification (98.31%)",
        "Self-Verifying AI Agents",
        "Python & Applied Data Science",
      ]
    },
    {
      num: "02",
      name: "CYBER SECURITY",
      clipId: "clip-hexagons",
      image: "/clay-cyber-shield.jpg",
      skills: [
        "Threat Triage & SOC Operations",
        "IAM & Cloud Access Governance",
        "Phishing Detection Models",
        "Web Posture Hardening (CSP/HSTS)",
        "OWASP Baselines & Burp Suite",
      ]
    },
    {
      num: "03",
      name: "CLOUD & SYSTEMS",
      clipId: "clip-pixels",
      image: "/clay-cloud-system.jpg",
      skills: [
        "React 19 & TypeScript",
        "Modern Claymorphism UI",
        "Node.js & Express REST APIs",
        "PostgreSQL & Supabase",
        "Vite & CI/CD Cloud Deployments",
      ]
    }
  ];

  const achievements = [
    {
      title: "2nd Place Overall — GeeksforGeeks Hackfest, Bangalore",
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

  const achievementImages: FlipImageItem[] = [
    {
      title: "GeeksforGeeks Hackfest — 2nd Place Overall",
      subtitle: "Hackfest Powered by GeeksforGeeks Classroom Program · ₹15,000 Award",
      tag: "HACKATHON WINNER",
      url: "/achievements/award-geeksforgeeks-hackfest.png",
    },
    {
      title: "Ticket to Finale — GeeksforGeeks Hackfest",
      subtitle: "2nd Runner-Up Prize & Finale Qualification · Bangalore",
      tag: "FINALE QUALIFIER",
      url: "/achievements/award-geeksforgeeks-finale.png",
    },
    {
      title: "1st Place — Prompt to Product (OJAS 2K26)",
      subtitle: "Chanakya University Intra-University Fest · School of Engineering",
      tag: "AI INNOVATION",
      url: "/achievements/award-prompt-to-product.png",
    },
    {
      title: "2nd Place — Website & App Development",
      subtitle: "OJAS 2K26 Technical Competition · Chanakya University",
      tag: "FULL STACK AWARD",
      url: "/achievements/award-app-dev.png",
    },
    {
      title: "OJAS 2K26 University Championship Trophy",
      subtitle: "Chanakya University Engineering Recognition & Celebration",
      tag: "ACADEMIC EXCELLENCE",
      url: "/achievements/award-ojas-trophy.png",
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
          <div className="w-2 h-2 rounded-full bg-white animate-ping" />
          <span className="font-display font-black text-xs md:text-sm tracking-tight text-white">
            MOHAMMED IBRAHIM
          </span>
          <span className="hidden sm:inline-block text-[9px] font-mono uppercase bg-white/10 text-white/80 border border-white/20 px-2.5 py-0.5 rounded-full">
            AI & SECURITY
          </span>
        </div>

        <div className="hidden md:flex clay-glass-pill px-6 py-2.5 gap-8 text-[10px] tracking-[0.25em] font-bold uppercase text-white/70">
          {["Hero Reel", "About", "Projects", "Skills", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "")}`} className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>

        <LiquidMetalButton
          label="Hire Ibrahim"
          href="mailto:mi5062254@gmail.com"
        />
      </nav>

      {/* ═══ STAGE 1: HERO VIDEO SECTION (Top Full Screen Page) ═══ */}
      <section id="heroreel" className="relative h-screen w-full flex items-center overflow-hidden bg-black">
        
        {/* Full Stage Video Container */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            src="/scene-hero.mp4"
            loop
            muted
            autoPlay
            playsInline
            preload="auto"
            className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.02]"
          />
          {/* Subtle dark overlays to keep branding readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-black/20" />
        </div>

        {/* Premium Animated Text Block in Right Corner */}
        <div className="absolute top-24 md:top-28 right-4 sm:right-8 md:right-14 lg:right-20 z-20 max-w-[92vw] sm:max-w-md md:max-w-lg pointer-events-none text-right">
          <AnimatePresence>
            {showHeroText && (
              <motion.div
                initial={{ opacity: 0, x: 25, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 15, scale: 0.85, filter: "blur(10px)" }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="text-left pointer-events-auto space-y-3 pr-3 sm:pr-6 overflow-visible"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="text-[10px] tracking-[0.3em] font-mono font-black text-white/60 uppercase">
                    AI & SECURITY
                  </span>
                </div>
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black leading-[0.92] tracking-tight text-white uppercase overflow-visible">
                  MOHAMMED<br />IBRAHIM
                </h1>
                <p className="text-xs md:text-sm text-white/80 font-light tracking-wide flex items-center gap-1.5">
                  <span>Building systems that</span>
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
                    mainClassName="text-black px-2.5 py-0.5 bg-white rounded-md overflow-hidden inline-flex justify-start font-mono font-bold"
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Video Control Overlay (Sleek circular obsidian glass button positioned over watermark) */}
        <div className="absolute bottom-5 sm:bottom-7 right-12 sm:right-16 md:right-20 z-20 flex items-center justify-center">
          <button
            onClick={togglePlay}
            title={isPlaying ? "Pause Stage Reel" : "Play Stage Reel"}
            className="clay-glass-pill w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white hover:text-white transition-all cursor-pointer shadow-2xl bg-[#090b0e] border border-white/25 hover:border-white/50 hover:scale-110 backdrop-blur-2xl group"
          >
            {isPlaying ? (
              <Pause size={20} className="text-white fill-white group-hover:scale-110 transition-transform" />
            ) : (
              <Play size={20} className="text-white fill-white ml-0.5 group-hover:scale-110 transition-transform" />
            )}
          </button>
        </div>

        {/* Bottom Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-6 md:left-12 z-20"
        >
          <a href="#about" className="flex items-center gap-2.5 text-white/50 hover:text-white transition-colors">
            <span className="text-[9px] font-mono tracking-[0.3em] uppercase font-bold">SCROLL DOWN TO EXPLORE</span>
            <ArrowDown size={14} />
          </a>
        </motion.div>

      </section>

      {/* ═══ STAGE 2: PREMIUM BLACK CLAYMORPHISM CONTENT BELOW HERO ═══ */}
      <main className="relative z-10 bg-[#07080a]">

        {/* ═══ ABOUT SECTION (Typography + Pill Portrait Hero Style) ═══ */}
        <section id="about" className="py-28 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto text-center">
            
            {/* Header Tag */}
            <motion.div {...fadeUp} className="mb-4">
              <span className="text-[10px] tracking-[0.35em] font-mono font-bold text-white/60 uppercase">
                About Ibrahim
              </span>
            </motion.div>

            {/* Giant Name with Centered Pill Portrait */}
            <motion.div {...fadeUp} className="relative my-6 sm:my-10 flex items-center justify-center select-none">
              
              {/* Giant Background Typography */}
              <div className="w-full text-center space-y-1 sm:space-y-2">
                <div>
                  <BlurText
                    text="MOHAMMED"
                    delay={60}
                    animateBy="letters"
                    direction="top"
                    className="font-display font-black text-[55px] sm:text-[100px] md:text-[145px] lg:text-[180px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap text-white"
                  />
                </div>
                <div>
                  <BlurText
                    text="IBRAHIM"
                    delay={60}
                    animateBy="letters"
                    direction="bottom"
                    className="font-display font-black text-[55px] sm:text-[100px] md:text-[145px] lg:text-[180px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap text-white"
                  />
                </div>
              </div>

              {/* Floating Pill Profile Photo (User's Original Photo) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-[75px] h-[125px] sm:w-[105px] sm:h-[175px] md:w-[130px] md:h-[215px] lg:w-[150px] lg:h-[250px] rounded-full overflow-hidden shadow-2xl border-2 border-white/20 transition-transform duration-500 hover:scale-110 cursor-pointer bg-neutral-900">
                  <img
                    src="/profile.png"
                    alt="Mohammed Ibrahim"
                    className="w-full h-full object-cover brightness-95 hover:brightness-105 transition-all"
                  />
                </div>
              </div>

            </motion.div>

            {/* Tagline Below Portrait */}
            <motion.div {...fadeUp} className="max-w-2xl mx-auto my-8">
              <BlurText
                text="Bridging AI Intelligence with Enterprise Security."
                delay={80}
                animateBy="words"
                direction="top"
                className="text-base sm:text-xl md:text-2xl font-bold tracking-tight text-white justify-center"
              />
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mt-3">
                AI Product Engineer & Security Specialist building production platforms that combine machine learning classification with multi-agent orchestration.
              </p>
            </motion.div>

            {/* Academic & Skill Badges */}
            <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto pt-2">
              <span className="clay-badge px-3.5 py-1.5 text-[10px] font-mono font-bold text-white">
                BCA Honours · Data Science Major
              </span>
              <span className="clay-badge px-3.5 py-1.5 text-[10px] font-mono font-bold text-zinc-300">
                Cybersecurity Minor · Chanakya University
              </span>
              {["Multi-Agent AI", "Threat Operations", "LightGBM ML", "SOC Triage", "IAM Security"].map((item) => (
                <span key={item} className="clay-badge px-3 py-1.5 text-[9px] font-mono text-white/70">
                  {item}
                </span>
              ))}
            </motion.div>

          </div>
        </section>

        {/* ═══ PROJECTS SECTION ═════════════════════════════════ */}
        <section ref={projectsSectionRef} id="projects" className="relative border-t border-white/5 bg-black" style={{ minHeight: "220vh" }}>
          
          {/* Sticky 3D Showcase Viewport */}
          <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between py-24 px-6 md:px-12 z-20">
            
            {/* Header */}
            <div className="max-w-[1200px] w-full mx-auto flex justify-between items-end">
              <div>
                <span className="text-[10px] tracking-[0.35em] font-mono font-bold text-white/60 uppercase mb-2 block">
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
                  title: p.title,
                  link: p.link || p.github
                }))}
                variant="magnetic"
                sectionRef={projectsSectionRef}
              />
            </div>

            {/* Footer indicator */}
            <div className="max-w-[1200px] w-full mx-auto border-t border-white/10 pt-4 flex justify-between items-center text-[10px] text-white/45">
              <span>Mohammed Ibrahim · AI & Security</span>
              <span className="font-mono uppercase tracking-[0.2em] animate-pulse">scroll down to continue ↓</span>
            </div>

          </div>

        </section>

        {/* ═══ SKILLS SECTION (GSAP Interactive SVG Morphing Showcase) ═══ */}
        <section id="skills" className="py-24 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto">
            
            <motion.div {...fadeUp} className="mb-10">
              <span className="text-[10px] tracking-[0.35em] font-mono font-bold text-white/60 uppercase mb-2 block">
                Interactive Stack & Domains
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-white">
                SKILLS MATRIX.
              </h2>
            </motion.div>

            <motion.div {...fadeUp} className="clay-glass-card border-white/10 overflow-hidden">
              <ConnoisseurStackInteractor items={skillMenuItems} />
            </motion.div>

          </div>
        </section>

        {/* ═══ ACHIEVEMENTS SECTION (3D Split FlipGallery) ═══ */}
        <section id="achievements" className="py-24 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto">
            
            <motion.div {...fadeUp} className="mb-10 text-center">
              <span className="text-[10px] tracking-[0.35em] font-mono font-bold text-white/60 uppercase mb-2 block">
                Verified Recognitions & Certificates
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-white">
                ACHIEVEMENTS & AWARDS.
              </h2>
            </motion.div>

            <motion.div {...fadeUp}>
              <FlipGallery images={achievementImages} />
            </motion.div>

          </div>
        </section>

        {/* ═══ CONTACT SECTION ══════════════════════════════════ */}
        <section id="contact" className="py-36 px-6 md:px-12 text-center border-t border-white/5">
          <div className="max-w-[1200px] mx-auto space-y-6">
            
            <motion.div {...fadeUp} className="space-y-3">
              <span className="text-[10px] tracking-[0.4em] font-mono font-bold text-white/60 uppercase">
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
                  className="clay-glass-pill px-6 py-3 inline-flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-white/80 hover:text-white hover:border-white/30 transition-all duration-300"
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
