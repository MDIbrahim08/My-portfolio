import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Brain, Code2, ExternalLink, FileDown, Github, KeyRound, Search, Shield, Trophy } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";

type Project = {
  id: string;
  title: string;
  category: string;
  problem: string;
  approach: string;
  whatIBuilt: string;
  outcome: string;
  techStack?: string[];
  link?: string;
  github?: string;
  image: string;
};

type ContactLink = {
  name: string;
  url: string;
  download?: boolean;
};

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const projects: Project[] = [
    {
      id: "01",
      title: "CYZEN AI — Cybersecurity & Threat Awareness Platform",
      category: "AI & Security Systems Platform",
      problem: "Everyday internet users and organization endpoints lack immediate, automated threat detection tools and real-time incident crisis response protocols.",
      approach: "Engineered a unified 6-in-1 cybersecurity awareness platform combining specialized LightGBM machine learning models with high-throughput LLaMA 3.3 70B (via Groq) and multi-layered breached record indexing.",
      whatIBuilt: "Built 6 integrated security tools: Phishing Detector (ML model trained on 164,972 real emails with 98.31% accuracy), Password Analyzer (5-layer deep inspection against 12 billion breached records), Emergency Response Kit (AI crisis plan generated in <1.5s), 24/7 CYZEN Intelligence Advisor, Security Posture Analyzer, and Community Education Hub.",
      outcome: "Deployed a live, production-grade cybersecurity platform serving high-precision threat classification and sub-second crisis mitigation recommendations.",
      techStack: ["React", "LightGBM", "LLaMA 3.3 70B", "Groq", "Supabase", "Tailwind CSS", "Python", "Netlify"],
      link: "https://cyzenai.netlify.app",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "02",
      title: "PulseBLR — Real-Time AI Commute & Route Strategy Planner",
      category: "Multi-Agent LLM Orchestration",
      problem: "Standard navigation apps present basic traffic congestion maps but fail to synthesize dynamic, multi-modal routing strategies customized for complex urban traffic like Bangalore.",
      approach: "Architected a 5-agent LLM pipeline (Weather, Traffic, Transit, and Temporal-Risk Advisors) that processes real-time city signals to generate a single, validated route strategy.",
      whatIBuilt: "Engineered dynamic multi-modal route strategy optimization, a multi-lingual voice-to-intent pipeline (English, Kannada, Hindi), and real-time aggregated cab fare comparisons (Ola, Uber, Auto) to eliminate surge pricing surprises.",
      outcome: "Launched an autonomous multi-agent urban mobility engine that delivers self-validating route strategies and voice interaction.",
      techStack: ["React", "TypeScript", "LLM Orchestration", "Python", "Node.js", "Tailwind CSS"],
      link: "https://pulseblr.netlify.app",
      image: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "03",
      title: "Security Header & Web Posture Inspector",
      category: "Web Security & Posture Hardening",
      problem: "Web applications frequently deploy with misconfigured or missing HTTP security headers, leaving endpoints vulnerable to XSS, Clickjacking, and MIME-sniffing exploits.",
      approach: "Constructed an automated security header scanner that evaluates HTTP response headers against OWASP secure configuration baselines and compliance requirements.",
      whatIBuilt: "Designed security header scoring logic, CSP parsing, HSTS validation, X-Frame-Options checking, and automated remediation report generation.",
      outcome: "Empowers security teams and web developers to rapidly identify web posture weaknesses and enforce enterprise browser security controls.",
      techStack: ["Python", "Web Security", "OWASP", "REST API", "React"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "04",
      title: "MovieBuddy — Intelligent AI Recommendation Engine",
      category: "Machine Learning & Data Science",
      problem: "High-volume media databases create decision fatigue for users without context-aware metadata filtering and personalized preference ranking.",
      approach: "Applied content-filtering algorithms and natural language metadata indexing to generate context-aware, personalized media recommendations.",
      whatIBuilt: "Developed data processing pipelines, user preference ranking logic, similarity algorithms, and an interactive frontend for instant discovery.",
      outcome: "Demonstrated applied data science, interactive UI design, and machine learning deployment in a live web application.",
      techStack: ["React", "Python", "Machine Learning", "Data Analytics", "Tailwind CSS"],
      link: "https://moviebuddy.lovable.app/",
      github: "https://github.com/MDIbrahim08/MovieBuddy",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "05",
      title: "Client & Enterprise Tech Consulting Builds",
      category: "Full-Stack & Systems Engineering",
      problem: "Local businesses and client organizations require robust, secure web platforms and digital systems tailored to operational goals.",
      approach: "Gathered technical requirements, architected cloud database schemas, and delivered high-performance web systems under project constraints.",
      whatIBuilt: "Delivered web applications, AI-assisted prototype workflows, custom user portals, and client digital infrastructure.",
      outcome: "Strengthened full-cycle software delivery, technical consulting, client engagement, and production deployment reliability.",
      techStack: ["React", "Node.js", "Python", "Supabase", "Cloud Hosting"],
      github: "https://github.com/MDIbrahim08",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
    }
  ];

  const focusAreas = [
    {
      Icon: Brain,
      title: "Multi-Agent AI Systems",
      desc: "Architecting self-correcting multi-LLM pipelines and autonomous advisor agents with output verification protocols."
    },
    {
      Icon: Search,
      title: "Threat Investigation & SOC",
      desc: "Analyzing security logs, threat intelligence signals, anomaly detection, phishing triage, and web posture auditing."
    },
    {
      Icon: KeyRound,
      title: "IAM & Security Architecture",
      desc: "Evaluating identity governance, access control frameworks, privilege management, and enterprise security readiness."
    }
  ];

  const experienceHighlights = [
    "Gathered technical requirements and translated complex business needs into scalable web and AI systems.",
    "Engineered and deployed production web platforms, multi-agent AI tools, and ML security solutions.",
    "Managed end-to-end project execution, architecture design, and client stakeholder communications.",
    "Resolved critical system performance bottlenecks and provided ongoing infrastructure maintenance.",
    "Gained practical experience delivering real-world engineering projects under strict production timelines."
  ];

  const achievements = [
    {
      title: "2nd Place Overall — GeeksforGeeks Hackathon, Bangalore",
      desc: "Represented university and secured 2nd place overall among competing engineering teams across Bangalore for multi-agent system innovation."
    },
    {
      title: "1st Place — Prompt to Product",
      desc: "Awarded 1st place for rapidly transforming generative AI prompts into a fully functional, production-ready application."
    },
    {
      title: "2nd Place — Website & App Development",
      desc: "Recognized for innovation, UX/UI excellence, clean code architecture, and technical execution in application development."
    }
  ];

  const certificationBullets = [
    "Completed the Tata Cybersecurity Analyst Job Simulation on Forage, specializing in Identity & Access Management (IAM).",
    "Evaluated enterprise IAM readiness, access management policies, and security strategy alignment for corporate systems.",
    "Mastered IAM principles, least-privilege enforcement, security architecture, and audit risk reduction.",
    "Formulated professional security documentation and access policy recommendations for executive stakeholders."
  ];

  const skillGroups = [
    {
      title: "AI & Systems Engineering",
      items: [
        "Multi-Agent Orchestration",
        "LLaMA 3.3 70B",
        "Groq API",
        "LightGBM",
        "Machine Learning",
        "Python",
        "Prompt Engineering",
        "Multi-Model Verification"
      ]
    },
    {
      title: "Cybersecurity & Threat Ops",
      items: [
        "Threat Investigation",
        "SOC Operations",
        "Identity & Access Management (IAM)",
        "Phishing Analysis",
        "Log Anomaly Detection",
        "Web Security (CSP/HSTS)",
        "Burp Suite",
        "Nmap",
        "Wireshark"
      ]
    },
    {
      title: "Full-Stack & Cloud Architecture",
      items: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Node.js",
        "REST APIs",
        "Git & GitHub",
        "Security Automation",
        "Netlify Deployment"
      ]
    }
  ];

  const contactLinks: ContactLink[] = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mohammed-ibrahim-b837812a4/" },
    { name: "GitHub", url: "https://github.com/MDIbrahim08" },
    { name: "Portfolio Resume Download", url: "/resume/mohammed_ibrahim_resume.html", download: true },
    { name: "Email", url: "mailto:mi5062254@gmail.com" }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black font-body overflow-x-hidden">
      <div className="noise-overlay" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center mix-blend-difference">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-display font-black text-xl tracking-tighter"
        >
          M. IBRAHIM
        </motion.span>
        <div className="hidden md:flex gap-10 text-[9px] tracking-[0.3em] font-bold uppercase opacity-60">
          {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:opacity-100 transition-opacity">
              {item}
            </a>
          ))}
        </div>
        <a
          href="mailto:mi5062254@gmail.com"
          className="text-[10px] tracking-widest font-black uppercase bg-white text-black px-6 py-2 rounded-full border border-white/10 hover:bg-transparent hover:text-white transition-all"
        >
          Contact
        </a>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[1400px] w-full mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ y }}
          >
            <h1 className="font-display text-[11vw] md:text-[6.5vw] font-black leading-[0.95] kerning-tight mb-8 max-w-5xl">
              AI Product & Security Engineer
            </h1>
            <span className="text-[10px] md:text-xs font-black text-white/35 uppercase tracking-[0.35em] mb-6 block">
              Multi-Agent AI Systems &bull; Threat Investigation &bull; High-Accuracy ML (98.31%) &bull; SOC & IAM
            </span>
            <p className="max-w-xl text-lg text-white/40 leading-relaxed">
              BCA Honours Student (Data Science Major, Cybersecurity Minor) at Chanakya University. Engineering self-validating multi-agent LLM systems, production AI security platforms, and automated threat triage tools.
            </p>
          </motion.div>

          <div className="mt-12 flex items-center gap-6">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10"
            >
              <ArrowDown size={16} className="text-white/40" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 bg-white text-black rounded-t-[40px] relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="font-display text-5xl md:text-7xl font-black kerning-tight leading-none">
                ABOUT.
              </h2>
              <div className="h-1 w-12 bg-black mt-6" />
            </div>
            <div className="md:col-span-8">
              <div className="space-y-6 text-xl md:text-2xl font-light leading-relaxed mb-12 text-black/80">
                <p>
                  I am an AI Product Engineer & Security Specialist building AI-powered products with a primary focus on security. I am currently pursuing a BCA Honours degree with a Major in Data Science and a Minor in Cybersecurity at Chanakya University.
                </p>
                <p>
                  I design multi-agent AI systems that validate and cross-check their own outputs rather than trusting a single model blindly. Built <strong>PulseBLR</strong>, a live commute-planning application for Bangalore that orchestrates a 5-agent LLM pipeline (weather, traffic, transit, and temporal-risk advisors) into a single validated recommendation.
                </p>
                <p>
                  My approach to security follows the exact same engineering principle: <em>"Verify before you trust."</em> I bring data-driven, pattern-based reasoning to threat investigation, log analysis, and anomaly detection, backed by structured SOC training and production builds like <strong>CYZEN AI</strong> (6 security tools in one platform with 98.31% phishing detection accuracy).
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <h4 className="text-[10px] tracking-[0.3em] font-black uppercase opacity-40">Core Focus</h4>
                  <ul className="space-y-3 text-xs font-bold uppercase tracking-wider">
                    {['Multi-Agent AI', 'Threat Investigation', 'IAM & SOC Automation'].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-black rounded-full" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 bg-gray-50 border border-black/5">
                  <h4 className="text-[10px] tracking-[0.3em] font-black uppercase opacity-40 mb-4">Current Direction</h4>
                  <p className="text-sm opacity-70 leading-relaxed font-medium">
                    Open to AI Product Engineer and SOC Analyst / Cybersecurity Analyst roles in top tech companies and IT enterprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-32 px-6 md:px-12 bg-[#0A0A0A] relative z-10 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-black mb-8">EXPERIENCE.</h2>
            <p className="max-w-2xl text-white/40 text-lg leading-relaxed">
              Practical client work gave me a strong foundation in understanding requirements, building digital systems, communicating clearly, and solving problems under real project constraints.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.div {...fadeInUp} className="lg:col-span-7">
              <SpotlightCard className="p-10 bg-white/5 border-white/10 h-full">
                <Shield className="mb-6 text-white/20" size={32} />
                <span className="text-[10px] tracking-[0.3em] font-black uppercase text-white/25 mb-4 block">
                  Freelance Technology Consultant
                </span>
                <h3 className="text-2xl md:text-4xl font-black mb-6">
                  Websites, digital solutions, and online systems for local clients.
                </h3>
                <p className="text-sm text-white/45 leading-relaxed mb-8">
                  Worked with local businesses and clients to design and deploy websites, digital solutions, and online systems.
                </p>
                <ul className="space-y-4 text-sm text-white/55 leading-relaxed">
                  {experienceHighlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-8">
              {focusAreas.map((item, i) => (
              <motion.div key={i} {...fadeInUp}>
                <SpotlightCard className="p-10 bg-white/5 border-white/10 h-full">
                  <item.Icon className="mb-6 text-white/20" size={32} />
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                </SpotlightCard>
              </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements and Certifications */}
      <section className="py-32 px-6 md:px-12 bg-[#050505] relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <h2 className="font-display text-4xl md:text-6xl font-black mb-12">ACHIEVEMENTS.</h2>
              <div className="grid grid-cols-1 gap-6">
                {achievements.map((achievement, i) => (
                  <motion.div key={achievement.title} {...fadeInUp}>
                    <SpotlightCard className="p-8 bg-white/5 border-white/10 h-full">
                      <div className="flex items-start gap-5">
                        <Trophy className="text-white/25 shrink-0" size={28} />
                        <div>
                          <span className="text-[10px] tracking-[0.3em] font-black uppercase text-accent mb-3 block">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-xl font-black mb-3">{achievement.title}</h3>
                          <p className="text-sm text-white/45 leading-relaxed">{achievement.desc}</p>
                        </div>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl md:text-6xl font-black mb-12">SIMULATION.</h2>
              <motion.div {...fadeInUp}>
                <SpotlightCard className="p-10 bg-white/5 border-white/10 h-full">
                  <FileDown className="mb-6 text-white/20" size={32} />
                  <span className="text-[10px] tracking-[0.3em] font-black uppercase text-white/25 mb-4 block">
                    June 2026
                  </span>
                  <h3 className="text-2xl font-black mb-6">
                    Tata Cybersecurity Security Analyst Job Simulation (Forage)
                  </h3>
                  <ul className="space-y-4 text-sm text-white/50 leading-relaxed">
                    {certificationBullets.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6 md:px-12 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-display text-5xl md:text-7xl font-black mb-24">PROJECTS.</h2>
          
          <div className="space-y-40">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                {...fadeInUp}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
              >
                <div className={`lg:col-span-6 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                    />
                  </div>
                </div>

                <div className={`lg:col-span-6 space-y-8 ${i % 2 !== 0 ? 'lg:text-right' : ''}`}>
                  <div>
                    <span className="text-[10px] tracking-[0.3em] font-black uppercase text-accent mb-4 block">
                      {project.category}
                    </span>
                    <h3 className="font-display text-4xl md:text-5xl font-black mb-4">{project.title}</h3>
                    {project.techStack && (
                      <div className={`flex flex-wrap gap-2 my-4 ${i % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                        {project.techStack.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-white/10 border border-white/10 text-white/80 rounded-full text-[10px] font-bold uppercase tracking-wider">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 text-left ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-black uppercase opacity-30 tracking-widest">Problem</h4>
                      <p className="text-sm text-white/60 leading-relaxed">{project.problem}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-black uppercase opacity-30 tracking-widest">Approach</h4>
                      <p className="text-sm text-white/60 leading-relaxed">{project.approach}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-black uppercase opacity-30 tracking-widest">What I Built</h4>
                      <p className="text-sm text-white/60 leading-relaxed">{project.whatIBuilt}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-black uppercase opacity-30 tracking-widest">Outcome</h4>
                      <p className="text-sm text-white/60 leading-relaxed">{project.outcome}</p>
                    </div>
                  </div>

                  {(project.link || project.github) && (
                    <div className={`flex flex-wrap gap-4 pt-6 ${i % 2 !== 0 ? 'justify-end' : ''}`}>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-transform"
                        >
                          View Project <ExternalLink size={12} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-colors"
                        >
                          View Code <Github size={12} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-32 px-6 md:px-12 bg-white text-black rounded-t-[40px] relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-black">SKILLS.</h2>
            <p className="max-w-xl text-sm md:text-base text-black/50 leading-relaxed">
              An enterprise stack spanning multi-agent AI engineering, high-accuracy machine learning, threat investigation, SOC operations, and web/cloud architecture.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <div key={group.title} className="p-8 border border-black/10 bg-gray-50">
                <div className="flex items-center gap-3 mb-6">
                  {group.title.includes("Cybersecurity") && <Shield size={22} className="text-black/40" />}
                  {group.title.includes("Full-Stack") && <Code2 size={22} className="text-black/40" />}
                  {group.title.includes("AI") && <Brain size={22} className="text-black/40" />}
                  <h3 className="text-xl font-black">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border border-black/10 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-widest text-black/55"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 md:px-12 text-center bg-[#050505] relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[9px] tracking-[0.5em] font-black text-white/20 uppercase mb-8 block">Get In Touch</span>
          <h2 className="font-display text-[8vw] font-black kerning-tight leading-none mb-20 uppercase text-white/10">
            Let's Connect.
          </h2>
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 text-[10px] font-black tracking-[0.3em] uppercase">
            {contactLinks.map(link => (
              <a
                key={link.name}
                href={link.url}
                target={link.download ? undefined : "_blank"}
                rel={link.download ? undefined : "noopener noreferrer"}
                download={link.download ? "mohammed_ibrahim_resume.html" : undefined}
                className="text-white/40 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 relative z-10 bg-black">
        <div className="flex flex-col md:flex-row justify-between items-center text-[8px] tracking-[0.4em] font-black uppercase text-white/10 gap-6 text-center">
          <p>© 2026 Mohammed Ibrahim // AI Product & Security Engineer Portfolio</p>
          <p>mi5062254@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}
