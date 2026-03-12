import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import GlitchText from './GlitchText'; // Make sure this is imported

const techStack = [
  "Spring Boot", "Flutter", "Angular", "Node.js", "Express", "Java", "C++", "Python", 
  "PostgreSQL", "MongoDB", "Supabase", "REST APIs", "JWT", "JWE/JWS", "RSA", "3D Secure"
];

const logoParticles = [
  { top: '15%', left: '55%', size: 'h-14', delay: 0, duration: 12, opacity: 0.2 },
  { top: '10%', left: '80%', size: 'h-8', delay: 2, duration: 20, opacity: 0.15 },
  { top: '40%', left: '70%', size: 'h-20', delay: 4, duration: 16, opacity: 0.18 },
  { top: '65%', left: '60%', size: 'h-10', delay: 1, duration: 22, opacity: 0.25 },
  { top: '75%', left: '85%', size: 'h-12', delay: 5, duration: 18, opacity: 0.12 },
  { top: '30%', left: '50%', size: 'h-6', delay: 3, duration: 25, opacity: 0.1 },
  { top: '50%', left: '82%', size: 'h-16', delay: 2.5, duration: 19, opacity: 0.2 },
];

export default function Hero() {
  return (
    /* Removed solid bg-slate-950 and changed to bg-transparent to show PerspectiveGrid */
    <section className="relative min-h-screen flex flex-col justify-center items-start px-8 md:px-24 bg-transparent text-white overflow-hidden z-0">
      
      {/* 1. Enhanced Particle Field Container */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        
        {/* Main Large Ghost Logo */}
        <motion.img 
          src="/logo.png" 
          alt="Watermark" 
          initial={{ opacity: 0.03 }}
          animate={{ opacity: 0.5, y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[0%] top-[10%] w-[750px] h-auto grayscale [mask-image:linear-gradient(to_left,black_60%,transparent_100%)] opacity-20"
        />

        {/* Scattered Particles */}
        {logoParticles.map((p, i) => (
          <motion.img
            key={i}
            src="/logo.png"
            className={`absolute ${p.size} grayscale drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]`}
            style={{ top: p.top, left: p.left, opacity: p.opacity }}
            animate={{ 
              y: [0, -40, 0], 
              x: [0, 20, 0], 
              rotate: [0, 15, 0],
              scale: [1, 1.1, 1] 
            }}
            transition={{ 
              duration: p.duration, 
              delay: p.delay, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        ))}
      </div>

      {/* 2. Main Content */}
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="z-10 relative">
        <p className="text-blue-400 font-mono tracking-[0.3em] uppercase text-sm mb-4">Systems Engineer // Fintech & AI Architecture</p>
        
        {/* Integrated GlitchText for the Wow Factor */}
        <h1 className="text-7xl md:text-9xl font-black mb-4 tracking-tighter leading-none">
          Ali <GlitchText text="Khaled." className="text-slate-500" />
        </h1>
        
        <div className="text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 mb-8 h-16">
          <TypeAnimation 
            sequence={[
              'I build scalable backend systems.', 1500, 
              'I build fintech architectures.', 1500, 
              'I build low-level simulators.', 1500, 
              'I engineer the future.', 2500
            ]} 
            wrapper="span" 
            speed={50} 
            repeat={Infinity} 
          />
        </div>
        
        <p className="max-w-xl text-lg text-slate-400 mb-12 border-l-2 border-blue-600/30 pl-6 font-light">
          Senior Software Engineering Student at <span className="text-white font-medium">Cairo University</span>. 
          Expertise in secure payment processing, distributed systems, and real-time infrastructure.
        </p>
        
        <div className="flex flex-wrap gap-6 items-center mb-16">
          <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full transition-all hover:bg-blue-600 hover:text-white overflow-hidden">
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          <a href="/resume.pdf" download className="group flex items-center gap-2 text-slate-300 hover:text-white font-medium transition-all">
            <span className="underline underline-offset-8 decoration-slate-700 group-hover:decoration-blue-500">Download CV</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </motion.div>

      {/* 3. Infinite Tech Ribbon */}
      <div className="absolute bottom-20 left-0 w-full overflow-hidden whitespace-nowrap py-4 bg-slate-900/10 backdrop-blur-sm border-y border-white/5">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="flex gap-12 w-max items-center">
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="text-slate-600 font-mono text-xs tracking-widest hover:text-blue-400 transition-colors uppercase">{tech}</span>
          ))}
        </motion.div>
      </div>

      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-600 text-[10px] font-mono tracking-widest uppercase opacity-50">Scroll to explore</motion.div>
    </section>
  );
}