import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      id: "01",
      title: "LUXE ECOSYSTEM",
      category: "CREATIVE ENGINEERING",
      year: "2024",
      image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "02",
      title: "SPATIAL ARCH",
      category: "INTERFACE DESIGN",
      year: "2023",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "03",
      title: "CORE INTELLIGENCE",
      category: "FULL STACK",
      year: "2024",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
    }
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-white selection:text-black">
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
              DESIGN ENGINEER // ARCHITECTING THE FUTURE
            </span>
            <h1 className="font-display text-[14vw] md:text-[12vw] font-black leading-[0.8] kerning-tight mb-16">
              DIGITAL<br/>
              <span className="text-white/20">PRESTIGE.</span>
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
                Scroll to explore a world where aesthetics meets absolute performance.
              </p>
            </div>
            
            <div className="text-right">
              <p className="font-display text-4xl font-bold kerning-tight">Archive // 01</p>
              <p className="text-[10px] tracking-widest text-white/20 uppercase mt-2">Volume 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Works - Large Format */}
      <section id="work" className="py-48 px-8 md:px-16 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-32 flex justify-between items-baseline">
            <h2 className="font-display text-7xl font-black kerning-tight">WORKS.</h2>
            <span className="text-[10px] tracking-widest text-white/20 uppercase font-black">Selected Pieces</span>
          </div>

          <div className="space-y-64">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative grid grid-cols-12 gap-8 items-center"
              >
                <div className={`col-span-12 md:col-span-7 ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="aspect-[16/10] overflow-hidden bg-white/5 relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
                  </div>
                </div>

                <div className={`col-span-12 md:col-span-5 ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                  <span className="font-display text-6xl md:text-8xl font-black text-white/5 absolute -top-12 left-0 pointer-events-none">
                    {project.id}
                  </span>
                  <p className="text-[10px] tracking-[0.4em] text-white/40 font-black uppercase mb-4">{project.category}</p>
                  <h3 className="font-display text-5xl md:text-6xl font-black kerning-tight mb-8 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <button className="inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-widest group-hover:gap-6 transition-all duration-500">
                    Discover Case <ArrowUpRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Vision Statement */}
      <section id="about" className="py-64 px-8 md:px-16 bg-white text-black">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-display text-7xl md:text-[10vw] font-black leading-[0.9] kerning-tight mb-16">
              BEYOND<br/>INTERFACES.
            </h2>
            <p className="max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed opacity-70">
              Mohammed Ibrahim orchestrates digital symphonies where brutalist functionality meets ethereal aesthetics. Every pixel is a calculated move toward a more sophisticated digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - High Contrast */}
      <section id="contact" className="py-48 px-8 md:px-16 relative overflow-hidden bg-[#080808]">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          <motion.h2 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="font-display text-[15vw] font-black kerning-tight leading-none text-center mb-32 hover:opacity-20 transition-opacity cursor-none"
          >
            INQUIRE.
          </motion.h2>

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 border-t border-white/10 pt-24">
            <div className="flex gap-16 text-[10px] font-black tracking-[0.4em] uppercase text-white/40">
              <a href="#" className="hover:text-white transition-colors">Github</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
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
          <p>© 2026 Mohammed Ibrahim // All Rights Reserved</p>
          <p>London — Dubai — New York</p>
          <p>Precision Built v4.2.0</p>
        </div>
      </footer>
    </div>
  );
}
