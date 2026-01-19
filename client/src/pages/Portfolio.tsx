import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Digital Ecosystem",
      category: "Creative Engineering",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Spatial Interfaces",
      category: "UX / UI Design",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Core Architecture",
      category: "Full Stack Development",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference py-8 px-12 flex justify-between items-center">
        <span className="font-display font-black text-xl tracking-tighter text-white">MOHAMMED IBRAHIM</span>
        <div className="flex gap-12 text-[10px] tracking-[0.3em] font-bold text-white uppercase">
          <a href="#work" className="hover:opacity-50 transition-opacity">Work</a>
          <a href="#about" className="hover:opacity-50 transition-opacity">About</a>
          <a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center px-12 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="z-10"
        >
          <span className="text-[10px] tracking-[0.5em] font-bold text-black/40 uppercase mb-6 block">Creative Engineer // Based in 2026</span>
          <h1 className="font-display text-[12vw] font-black leading-[0.85] tracking-tighter mb-12">
            CRAFTING<br/>DIGITAL<br/>VISIONS.
          </h1>
          <div className="flex items-center gap-8">
            <button className="bg-black text-white px-10 py-5 rounded-full font-bold text-sm tracking-widest hover:scale-105 transition-transform flex items-center gap-4 group">
              VIEW WORK <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <div className="h-px w-32 bg-black/10"></div>
          </div>
        </motion.div>

        {/* Decorative Background Element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-gray-50 -z-10"></div>
      </section>

      {/* Work Grid */}
      <section id="work" className="py-32 px-12 bg-white">
        <div className="flex justify-between items-end mb-24">
          <h2 className="font-display text-6xl font-black tracking-tighter">SELECTED<br/>WORKS</h2>
          <p className="max-w-xs text-sm text-black/60 leading-relaxed font-medium">
            A curation of projects focusing on high-performance web architecture and immersive user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden mb-6 relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ExternalLink className="text-white" size={32} />
                </div>
              </div>
              <span className="text-[10px] tracking-widest font-bold text-black/40 uppercase block mb-2">{project.category}</span>
              <h3 className="font-display text-2xl font-bold tracking-tight">{project.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About / Manifesto */}
      <section id="about" className="py-32 px-12 bg-gray-50 flex flex-col md:flex-row gap-24 items-center">
        <div className="w-full md:w-1/2">
          <div className="aspect-square bg-gray-200 grayscale overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover"
              alt="Mohammed Ibrahim"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="font-display text-6xl font-black tracking-tighter mb-12">THE VISION</h2>
          <p className="text-xl text-black/80 leading-relaxed mb-12 font-medium">
            Mohammed Ibrahim is a creative engineer dedicated to bridging the gap between high-level design and robust technical implementation. With a focus on performance and spatial computing, he crafts digital products that leave a lasting impact.
          </p>
          <div className="flex gap-8">
            <a href="#" className="p-4 rounded-full border border-black/10 hover:bg-black hover:text-white transition-all"><Github size={20} /></a>
            <a href="#" className="p-4 rounded-full border border-black/10 hover:bg-black hover:text-white transition-all"><Linkedin size={20} /></a>
            <a href="#" className="p-4 rounded-full border border-black/10 hover:bg-black hover:text-white transition-all"><Mail size={20} /></a>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="py-24 px-12 bg-black text-white text-center">
        <span className="text-[10px] tracking-[0.5em] font-bold text-white/40 uppercase mb-8 block">Project Inquiry</span>
        <h2 className="font-display text-8xl font-black tracking-tighter mb-16 hover:text-gray-400 transition-colors cursor-pointer">
          LET'S TALK.
        </h2>
        <div className="pt-24 border-t border-white/10 flex justify-between items-center text-[10px] tracking-widest font-bold text-white/40 uppercase">
          <p>© 2026 Mohammed Ibrahim</p>
          <p>Local Time // 12:44 PM</p>
          <p>Built with Precision</p>
        </div>
      </footer>
    </div>
  );
}
