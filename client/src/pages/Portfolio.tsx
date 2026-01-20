import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, ArrowDown, ExternalLink, Code2, Brain, Shield, Globe, MapPin } from "lucide-react";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { SpotlightCard } from "@/components/SpotlightCard";

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const projects = [
    {
      id: "01",
      title: "Resumend AI",
      category: "AI, TypeScript",
      description: "AI-powered resume optimization and career guidance platform.",
      status: "Live",
      link: "https://rsumend.lovable.app",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "02",
      title: "ColdCraft AI",
      category: "AI, Next.js",
      description: "Sophisticated AI agent for personalized cold outreach at scale.",
      status: "Live",
      link: "https://coldcraft-ai.vercel.app/",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "03",
      title: "W-Wear",
      category: "E-Commerce, React",
      description: "Modern fashion platform with seamless user experience and clean aesthetics.",
      status: "Live",
      link: "https://w-wear.netlify.app/",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "04",
      title: "Movie Buddy",
      category: "Entertainment, API",
      description: "Intelligent movie discovery and recommendation engine.",
      status: "Live",
      link: "https://moviebuddy.lovable.app/",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "05",
      title: "Smack the Snack",
      category: "Gaming, JavaScript",
      description: "Fast-paced mini game built for pure interactive fun.",
      status: "Live",
      link: "https://smack-the-snacc.lovable.app/",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1200",
    }
  ];

  const repos = [
    { name: "Resumend-AI", type: "Public", status: "Updated 2 weeks ago", link: "https://rsumend.lovable.app" },
    { name: "ColdCraft-AI", type: "Public", status: "Updated on Dec 17, 2025", link: "https://coldcraft-ai.vercel.app/" },
    { name: "W-Wear", type: "Public", status: "Updated on Nov 4, 2025", link: "https://w-wear.netlify.app/" },
    { name: "MovieBuddy", type: "Public", status: "Updated on Oct 24, 2025", link: "https://moviebuddy.lovable.app/" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const textVariant = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  // Text Reveal Animation
  const revealText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black font-body overflow-x-hidden cursor-none">
      <div className="noise-overlay" />
      <NeuralNetworkBackground />

      {/* Premium Navigation */}
      <nav className="fixed top-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center mix-blend-difference">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="font-display font-black text-xl tracking-tighter"
        >
          M. IBRAHIM
        </motion.span>
        <div className="hidden md:flex gap-10 text-[9px] tracking-[0.3em] font-bold uppercase opacity-60">
          {['Portfolio', 'Vision', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="transition-opacity"
            >
              {item}
            </motion.a>
          ))}
        </div>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:mi5062254@gmail.com"
          className="text-[10px] tracking-widest font-black uppercase bg-white text-black px-6 py-2 rounded-full border border-white/10 hover:bg-transparent hover:text-white transition-all z-[100]"
        >
          Hire Me
        </motion.a>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[1400px] w-full mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
            style={{ y }}
          >
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.4em" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-[9px] font-black text-white/30 uppercase mb-4 block"
            >
              AI & CYBERSECURITY // MOHAMMED IBRAHIM
            </motion.span>
            <h1 className="font-display text-[15vw] md:text-[10vw] font-black leading-[0.9] kerning-tight mb-8 overflow-hidden">
              <span className="block overflow-hidden">
                {revealText("DIGITAL")}
              </span>
              <br />
              <motion.span
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 0.2, filter: "blur(0px)" }}
                transition={{ duration: 1.5, delay: 1.2 }}
                className="text-white block"
              >
                PRESTIGE.
              </motion.span>
            </h1>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-12">
            <div className="flex items-center gap-6">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10"
              >
                <ArrowDown size={18} className="text-white/40" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="max-w-[200px] text-[10px] leading-relaxed text-white/30 uppercase tracking-[0.2em] font-bold"
              >
                Building simple, smart, and human-centered technology.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="vision" className="py-32 px-6 md:px-12 bg-white text-black overflow-hidden relative z-10 rounded-t-[40px] shadow-2xl">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-4"
            >
              <h2 className="font-display text-5xl md:text-7xl font-black kerning-tight leading-none mb-6">
                THE<br />VISION.
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                className="h-1 bg-black mt-4"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-12 relative group max-w-xs mx-auto md:mx-0"
              >
                <div className="absolute -inset-2 bg-gradient-to-br from-black/20 to-transparent rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-black/5">

                  <img
                    src="/profile.png"
                    alt="Mohammed Ibrahim"
                    className="w-full h-auto object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 relative z-0"
                  />

                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                      <MapPin size={10} className="text-white drop-shadow-md" />
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest drop-shadow-md">Bangalore, India</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <div className="md:col-span-8">
              <motion.p
                {...textVariant}
                className="text-lg md:text-2xl font-light leading-relaxed mb-10 text-black/80 text-balance"
              >
                I am a multidisciplined engineer bridging the gap between Artificial Intelligence and Cybersecurity. Currently advancing my expertise through a BCA Honours in Data Science (3rd Year), my focus is on engineering resilient, intelligent systems that not only solve complex problems but also prioritize data integrity and user trust.
              </motion.p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <motion.div {...fadeInUp} className="space-y-4">
                  <h4 className="text-[10px] tracking-[0.3em] font-black uppercase opacity-40">Core Competencies</h4>
                  <ul className="space-y-3 text-xs font-bold uppercase tracking-wider">
                    {['Generative AI Engineering', 'Rapid Innovation', 'Emerging Tech Adaptation'].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-black rounded-full" /> {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div {...fadeInUp} className="p-6 bg-gray-50 border border-black/5 hover:bg-black hover:text-white transition-all duration-500">
                  <h4 className="text-[10px] tracking-[0.3em] font-black uppercase opacity-40 mb-3">Philosophy</h4>
                  <p className="text-sm italic opacity-70 leading-relaxed font-medium text-balance">
                    "Innovation without security is merely a vulnerability. I build systems that are as safe as they are smart."
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-32 px-6 md:px-12 border-y border-white/5 relative z-10 bg-[#0A0A0A]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Code2, title: "Programming", tech: "Python, JS, TS" },
              { Icon: Brain, title: "AI & Data", tech: "ML, Analytics" },
              { Icon: Shield, title: "Cybersecurity", tech: "Threat Intel" },
              { Icon: Globe, title: "Development", tech: "React, Node" }
            ].map(({ Icon, title, tech }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <SpotlightCard className="p-8 h-full bg-white/5 backdrop-blur-sm">
                  <Icon className="mb-6 text-white/20 group-hover:text-white transition-colors" size={24} />
                  <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
                  <p className="text-[9px] tracking-widest text-white/40 uppercase font-bold">{tech}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="portfolio" className="py-32 px-6 md:px-12 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display text-5xl md:text-7xl font-black kerning-tight"
            >
              ARCHIVE.
            </motion.h2>
          </div>

          <div className="space-y-32">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group grid grid-cols-1 md:grid-cols-12 gap-10 items-center"
              >
                <div className={`md:col-span-7 ${i % 2 !== 0 ? 'md:order-2' : ''} relative`}>
                  <div className="absolute -inset-4 bg-gradient-to-r from-white/5 to-transparent rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 1 : -1 }}
                    className="block aspect-video overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 relative group-hover:border-white/30 transition-all duration-700 rounded-lg shadow-2xl"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-[2px] group-hover:backdrop-blur-none">
                      <span className="bg-white text-black px-6 py-2 rounded-full font-black text-[10px] tracking-widest uppercase hover:scale-105 transition-transform">Visit Project</span>
                    </div>
                  </motion.a>
                </div>

                <div className={`md:col-span-5 ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                  <motion.div {...fadeInUp}>
                    <div className="flex items-center gap-3 mb-4 opacity-50 text-[9px] tracking-[0.3em] font-black uppercase md:justify-start group-even:md:justify-end text-accent">
                      <span>{project.category}</span>
                    </div>
                    <h3 className="font-display text-3xl md:text-5xl font-black mb-4 leading-none group-hover:translate-x-2 transition-transform">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/40 mb-8 max-w-sm group-even:ml-auto">
                      {project.description}
                    </p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] group-hover:gap-5 transition-all duration-500 hover:text-accent">
                      EXPLORE <ArrowUpRight size={14} />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Repositories */}
      <section className="py-32 px-6 md:px-12 bg-white text-black relative z-10 rounded-t-[40px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-5xl md:text-7xl font-black kerning-tight leading-none"
            >
              SYSTEM<br />LOGS.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, backgroundColor: "#000", color: "#fff" }}
                className="bg-gray-50 p-8 border border-black/5 transition-all duration-500 group relative block overflow-hidden"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[8px] tracking-[0.3em] font-black uppercase opacity-40 group-hover:opacity-100">{repo.type}</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="font-display font-bold text-lg mb-2 truncate relative z-10">{repo.name}</h4>
                <p className="text-[9px] tracking-widest opacity-40 group-hover:opacity-60 uppercase font-bold relative z-10">{repo.status}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 md:px-12 text-center bg-[#050505] relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[9px] tracking-[0.5em] font-black text-white/20 uppercase mb-8 block">Project Inquiry</span>
            <motion.h2
              whileHover={{ scale: 0.95, opacity: 0.5 }}
              className="font-display text-[8vw] font-black kerning-tight leading-none mb-20 transition-all cursor-pointer uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50"
            >
              Let's Connect.
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-10 md:gap-20 text-[10px] font-black tracking-[0.3em] uppercase">
              {[
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mohammed-ibrahim-b837812a4/' },
                { name: 'Github', url: 'https://github.com/MDIbrahim08' },
                { name: 'Email', url: 'mailto:mi5062254@gmail.com' }
              ].map(link => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: "#fff" }}
                  className="text-white/40 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 relative z-10 bg-black">
        <div className="flex flex-col md:flex-row justify-between items-center text-[8px] tracking-[0.4em] font-black uppercase text-white/10 gap-6 text-center">
          <p>© 2026 Mohammed Ibrahim // Building Practical AI</p>
          <p>mi5062254@gmail.com</p>
          <p>Cyber Threat Intelligence — Data Science</p>
        </div>
      </footer>
    </div>
  );
}
