import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, ArrowDown, ExternalLink, Code2, Brain, Shield, Globe } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      id: "01",
      title: "Mental Health App",
      category: "Python, JS",
      description: "Exercises, mood tracking, clean UI",
      status: "Complete",
      image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "02",
      title: "Smack-the-Snacc",
      category: "JS, GPT",
      description: "Fast-paced mini game",
      status: "Live",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "03",
      title: "Audio Visualizer",
      category: "p5.js",
      description: "Dynamic visuals from audio",
      status: "Done",
      image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=1200",
    }
  ];

  const repos = [
    { name: "career-compass-ai", type: "Private", status: "Updated 2 weeks ago" },
    { name: "SPACE-JUNK-COLLECTER", type: "Public", status: "Updated last month" },
    { name: "mindcompass", type: "Private", status: "Updated on Dec 18, 2025" },
    { name: "coldcraft-ai", type: "Private", status: "Updated on Dec 17, 2025" },
    { name: "ColdCraft", type: "Public", status: "Updated on Dec 17, 2025" },
    { name: "moviebuddy", type: "Public", status: "Updated on Oct 24, 2025" },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-white selection:text-black font-body">
      <div className="noise-overlay" />
      
      {/* Premium Navigation */}
      <nav className="fixed top-0 w-full z-50 py-10 px-8 md:px-16 flex justify-between items-center mix-blend-difference">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-display font-black text-2xl kerning-tight"
        >
          M. IBRAHIM
        </motion.span>
        <div className="hidden md:flex gap-16 text-[10px] tracking-[0.4em] font-bold uppercase opacity-60">
          <a href="#work" className="hover:opacity-100 transition-opacity">Portfolio</a>
          <a href="#about" className="hover:opacity-100 transition-opacity">Vision</a>
          <a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a>
        </div>
        <button className="text-[10px] tracking-widest font-black uppercase border-b border-white/20 pb-1">
          Menu
        </button>
      </nav>

      {/* Ultra-Premium Hero Section */}
      <section className="h-screen flex flex-col justify-end pb-24 px-8 md:px-16 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-l from-white/10 to-transparent" />
        </div>

        <div className="max-w-[1400px] w-full mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] tracking-[0.6em] font-black text-white/40 uppercase mb-8 block">
              AI & CYBERSECURITY // HUMAN-CENTERED TECH
            </span>
            <h1 className="font-display text-[14vw] md:text-[12vw] font-black leading-[0.8] kerning-tight mb-16">
              SMART.<br/>
              <span className="text-white/20">SIMPLE.</span>
            </h1>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="flex items-center gap-8">
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="p-4 rounded-full border border-white/10"
              >
                <ArrowDown size={20} className="text-white/40" />
              </motion.div>
              <p className="max-w-xs text-[11px] leading-relaxed text-white/40 uppercase tracking-widest font-bold">
                Exploring AI, Data Science & Cyber Threat Intelligence. Scroll to explore.
              </p>
            </div>
            
            <div className="text-right">
              <p className="font-display text-4xl font-bold kerning-tight">MOHAMMED IBRAHIM</p>
              <p className="text-[10px] tracking-widest text-white/20 uppercase mt-2">Archive // 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Prestige Format */}
      <section id="about" className="py-48 px-8 md:px-16 border-t border-white/5 bg-white text-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-12 items-start">
            <div className="col-span-12 md:col-span-5">
               <span className="text-[10px] tracking-[0.4em] font-black opacity-40 uppercase mb-8 block">About Me</span>
               <h2 className="font-display text-6xl md:text-8xl font-black kerning-tight leading-[0.9] mb-12">
                 THE<br/>LEARNER.
               </h2>
            </div>
            <div className="col-span-12 md:col-span-7 pt-4">
              <p className="text-2xl md:text-3xl font-medium leading-tight mb-8">
                Hi, I'm Mohammed Ibrahim — an AI & Cybersecurity learner who focuses on building simple, smart, and human-centered tech.
              </p>
              <p className="text-lg opacity-70 leading-relaxed mb-12">
                I like creating small but meaningful projects that teach me something new every week. 
                Currently exploring p5.js for creative tech and building practical AI-powered mini apps.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-16 border-t border-black/5">
                <div>
                  <h4 className="font-display font-bold text-sm tracking-widest uppercase mb-4 opacity-40">Currently Learning</h4>
                  <ul className="space-y-2 text-sm font-bold uppercase tracking-wider">
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-black rounded-full" /> AI & Data Science</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Cyber Threat Intelligence</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Security Visualization</li>
                  </ul>
                </div>
                <div>
                   <h4 className="font-display font-bold text-sm tracking-widest uppercase mb-4 opacity-40">Fun Fact</h4>
                   <p className="text-sm italic opacity-60">"I debug faster when deadlines are close."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Technical Grid */}
      <section className="py-48 px-8 md:px-16 bg-[#080808]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-24">
            <h2 className="font-display text-7xl font-black kerning-tight">ENGINE.</h2>
            <p className="text-[10px] tracking-widest text-white/20 uppercase font-black mt-4">Skills & Tools</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            <div className="bg-[#080808] p-12 hover:bg-white/5 transition-colors group">
              <Code2 className="mb-8 text-white/20 group-hover:text-white transition-colors" size={32} />
              <h3 className="font-display font-bold text-xl mb-4 tracking-tight">Programming</h3>
              <p className="text-[10px] tracking-widest text-white/40 uppercase font-bold">Python, JS, TS</p>
            </div>
            <div className="bg-[#080808] p-12 hover:bg-white/5 transition-colors group">
              <Brain className="mb-8 text-white/20 group-hover:text-white transition-colors" size={32} />
              <h3 className="font-display font-bold text-xl mb-4 tracking-tight">AI & Data</h3>
              <p className="text-[10px] tracking-widest text-white/40 uppercase font-bold">ML, Data Analytics</p>
            </div>
            <div className="bg-[#080808] p-12 hover:bg-white/5 transition-colors group">
              <Shield className="mb-8 text-white/20 group-hover:text-white transition-colors" size={32} />
              <h3 className="font-display font-bold text-xl mb-4 tracking-tight">Cybersecurity</h3>
              <p className="text-[10px] tracking-widest text-white/40 uppercase font-bold">Threat Intelligence</p>
            </div>
            <div className="bg-[#080808] p-12 hover:bg-white/5 transition-colors group">
              <Globe className="mb-8 text-white/20 group-hover:text-white transition-colors" size={32} />
              <h3 className="font-display font-bold text-xl mb-4 tracking-tight">Development</h3>
              <p className="text-[10px] tracking-widest text-white/40 uppercase font-bold">React, Vite, Node</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="work" className="py-48 px-8 md:px-16 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-32 flex justify-between items-baseline">
            <h2 className="font-display text-7xl font-black kerning-tight">ARCHIVE.</h2>
            <span className="text-[10px] tracking-widest text-white/20 uppercase font-black">Featured Projects</span>
          </div>

          <div className="space-y-48">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative grid grid-cols-12 gap-8 items-center"
              >
                <div className={`col-span-12 md:col-span-7 ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="aspect-[16/9] overflow-hidden bg-white/5 relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
                  </div>
                </div>

                <div className={`col-span-12 md:col-span-5 ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                  <span className="font-display text-6xl md:text-8xl font-black text-white/5 absolute -top-12 left-0 pointer-events-none">
                    {project.id}
                  </span>
                  <div className="flex items-center gap-4 mb-4 opacity-40 text-[10px] tracking-widest font-black uppercase">
                    <span>{project.category}</span>
                    <div className="w-1 h-1 bg-white rounded-full" />
                    <span className="text-accent">{project.status}</span>
                  </div>
                  <h3 className="font-display text-5xl md:text-6xl font-black kerning-tight mb-4 group-hover:text-white transition-colors leading-none">
                    {project.title}
                  </h3>
                  <p className="text-white/40 mb-8 max-w-sm group-hover:text-white/60 transition-colors">
                    {project.description}
                  </p>
                  <button className="inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-widest group-hover:gap-6 transition-all duration-500">
                    View Project <ArrowUpRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Repositories - Clean List */}
      <section className="py-48 px-8 md:px-16 bg-white text-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-24">
            <h2 className="font-display text-7xl font-black kerning-tight leading-none">V0.2<br/>REPOS.</h2>
            <p className="text-[10px] tracking-widest opacity-40 uppercase font-black mt-4">Development Log</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 border border-black/5">
            {repos.map((repo, i) => (
              <div key={i} className="bg-white p-12 hover:bg-black hover:text-white transition-all group relative overflow-hidden">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[9px] tracking-[0.3em] font-black uppercase opacity-40 group-hover:opacity-100">{repo.type}</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="font-display font-bold text-xl mb-2 tracking-tight">{repo.name}</h4>
                <p className="text-[10px] tracking-widest opacity-40 group-hover:opacity-60 uppercase font-bold">{repo.status}</p>
                <div className="absolute bottom-0 left-0 h-1 bg-black group-hover:bg-white w-0 group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - High Contrast */}
      <section id="contact" className="py-48 px-8 md:px-16 relative overflow-hidden bg-[#080808]">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          <motion.h2 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-[15vw] font-black kerning-tight leading-none text-center mb-32 hover:opacity-20 transition-opacity cursor-none"
          >
            CONNECT.
          </motion.h2>

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 border-t border-white/10 pt-24">
            <div className="flex gap-16 text-[10px] font-black tracking-[0.4em] uppercase text-white/40">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Github</a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-[10px] tracking-widest text-white/20 uppercase font-bold mb-4">Availability</p>
              <p className="font-display text-2xl font-bold uppercase">Open for Commissions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fine Print Footer */}
      <footer className="py-12 px-8 border-t border-white/5 bg-[#080808]">
        <div className="flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.4em] font-black uppercase text-white/20 gap-8">
          <p>© 2026 Mohammed Ibrahim // Building Practical AI</p>
          <p>Cyber Threat Intelligence — Data Science</p>
          <p>v4.5.0 // AI Powered</p>
        </div>
      </footer>
    </div>
  );
}
