import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, ArrowDown, ExternalLink, Code2, Brain, Shield, Globe } from "lucide-react";

export default function Portfolio() {
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
      image: "https://images.unsplash.com/photo-1557426272-fc759fbb7a8d?auto=format&fit=crop&q=80&w=1200",
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

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black font-body overflow-x-hidden">
      <div className="noise-overlay" />
      
      {/* Premium Navigation */}
      <nav className="fixed top-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center mix-blend-difference">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-display font-black text-xl tracking-tighter"
        >
          M. IBRAHIM
        </motion.span>
        <div className="hidden md:flex gap-10 text-[9px] tracking-[0.3em] font-bold uppercase opacity-60">
          <a href="#work" className="hover:opacity-100 transition-opacity">Portfolio</a>
          <a href="#about" className="hover:opacity-100 transition-opacity">Vision</a>
          <a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a>
        </div>
        <a href="mailto:mi5062254@gmail.com" className="text-[10px] tracking-widest font-black uppercase bg-white text-black px-6 py-2 rounded-full border border-white/10 hover:bg-transparent hover:text-white transition-all">
          Hire Me
        </a>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[1400px] w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <span className="text-[9px] tracking-[0.4em] font-black text-white/30 uppercase mb-4 block">
              AI & CYBERSECURITY // MOHAMMED IBRAHIM
            </span>
            <h1 className="font-display text-[15vw] md:text-[10vw] font-black leading-[0.9] kerning-tight mb-8">
              DIGITAL<br/>
              <span className="text-white/20">PRESTIGE.</span>
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
              <p className="max-w-[200px] text-[10px] leading-relaxed text-white/30 uppercase tracking-[0.2em] font-bold">
                Building simple, smart, and human-centered technology.
              </p>
            </div>
            
            <div className="text-right hidden md:block">
              <p className="font-display text-2xl font-bold tracking-tighter">MOHAMMED IBRAHIM</p>
              <p className="text-[9px] tracking-widest text-white/10 uppercase mt-1">Archive // MMXXVI</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 bg-white text-black overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeInUp} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
               <h2 className="font-display text-5xl md:text-7xl font-black kerning-tight leading-none mb-6">
                 THE<br/>VISION.
               </h2>
               <div className="h-1 w-12 bg-black mt-4" />
            </div>
            <div className="md:col-span-8">
              <p className="text-xl md:text-3xl font-medium leading-tight mb-10 text-balance">
                Hi, I'm Mohammed Ibrahim — an AI & Cybersecurity learner who focuses on building simple, smart, and human-centered tech.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <h4 className="text-[10px] tracking-[0.3em] font-black uppercase opacity-40">Directives</h4>
                  <ul className="space-y-3 text-xs font-bold uppercase tracking-wider">
                    {['AI & Data Science', 'Cyber Threat Intelligence', 'Security Visualization'].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-black rounded-full" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-gray-50 border border-black/5">
                  <h4 className="text-[10px] tracking-[0.3em] font-black uppercase opacity-40 mb-3">Fun Fact</h4>
                  <p className="text-sm italic opacity-70 leading-relaxed font-medium text-balance">
                    "I debug faster when deadlines are close."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-32 px-6 md:px-12 border-y border-white/5">
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
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 p-8 border border-white/5 hover:border-white/20 transition-all duration-500 group"
              >
                <Icon className="mb-6 text-white/20 group-hover:text-white transition-colors" size={24} />
                <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
                <p className="text-[9px] tracking-widest text-white/40 uppercase font-bold">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="work" className="py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
            <h2 className="font-display text-5xl md:text-7xl font-black kerning-tight">ARCHIVE.</h2>
          </div>

          <div className="space-y-32">
            {projects.map((project, i) => (
              <motion.div 
                key={project.id}
                {...fadeInUp}
                className="group grid grid-cols-1 md:grid-cols-12 gap-10 items-center"
              >
                <div className={`md:col-span-7 ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block aspect-video overflow-hidden bg-white/5 border border-white/5 relative group-hover:border-white/20 transition-all duration-700">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 flex items-center justify-center opacity-0 group-hover:opacity-100">
                       <span className="bg-white text-black px-6 py-2 rounded-full font-black text-[10px] tracking-widest uppercase">Visit Project</span>
                    </div>
                  </a>
                </div>

                <div className={`md:col-span-5 ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                  <div className="flex items-center gap-3 mb-4 opacity-30 text-[9px] tracking-[0.3em] font-black uppercase md:justify-start group-even:md:justify-end">
                    <span>{project.category}</span>
                    <div className="w-1 h-1 bg-white rounded-full" />
                    <span className="text-accent">{project.status}</span>
                  </div>
                  <h3 className="font-display text-3xl md:text-5xl font-black mb-4 leading-none">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/40 mb-8 max-w-sm group-even:ml-auto">
                    {project.description}
                  </p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] group-hover:gap-5 transition-all duration-500">
                    EXPLORE <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Repositories */}
      <section className="py-32 px-6 md:px-12 bg-white text-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
            <h2 className="font-display text-5xl md:text-7xl font-black kerning-tight leading-none">SYSTEM<br/>LOGS.</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <a 
                key={repo.name}
                href={repo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 p-8 border border-black/5 hover:bg-black hover:text-white transition-all duration-500 group relative block"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[8px] tracking-[0.3em] font-black uppercase opacity-40 group-hover:opacity-100">{repo.type}</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="font-display font-bold text-lg mb-2 truncate">{repo.name}</h4>
                <p className="text-[9px] tracking-widest opacity-40 group-hover:opacity-60 uppercase font-bold">{repo.status}</p>
                <div className="absolute bottom-0 left-0 h-[2px] bg-black group-hover:bg-white w-0 group-hover:w-full transition-all duration-500" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 md:px-12 text-center bg-[#050505] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeInUp}>
            <span className="text-[9px] tracking-[0.5em] font-black text-white/20 uppercase mb-8 block">Project Inquiry</span>
            <h2 className="font-display text-[8vw] font-black kerning-tight leading-none mb-20 hover:text-white/40 transition-colors cursor-pointer uppercase">
              Let's Connect.
            </h2>
            <div className="flex flex-wrap justify-center gap-10 md:gap-20 text-[10px] font-black tracking-[0.3em] uppercase">
              <a href="https://www.linkedin.com/in/mohammed-ibrahim-b837812a4/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">LinkedIn</a>
              <a href="https://github.com/MDIbrahim08" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">Github</a>
              <a href="mailto:mi5062254@gmail.com" className="text-white/40 hover:text-white transition-colors">Email</a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">Instagram</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center text-[8px] tracking-[0.4em] font-black uppercase text-white/10 gap-6 text-center">
          <p>© 2026 Mohammed Ibrahim // Building Practical AI</p>
          <p>mi5062254@gmail.com</p>
          <p>Cyber Threat Intelligence — Data Science</p>
        </div>
      </footer>
    </div>
  );
}
