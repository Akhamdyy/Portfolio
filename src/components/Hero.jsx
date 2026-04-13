import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download } from 'lucide-react';
import GlitchText from './GlitchText';

const techStack = [
  "Spring Boot", "Flutter", "Angular", "Node.js", "Express", "Java", "C++", "Python",
  "PostgreSQL", "MongoDB", "Supabase", "REST APIs", "JWT", "JWE/JWS", "RSA", "3D Secure"
];

// CSS animation variants cycling through float-a / float-b / float-c
const floatAnims = [
  { anim: 'float-a', dur: '12s', delay: '0s' },
  { anim: 'float-b', dur: '20s', delay: '2s' },
  { anim: 'float-a', dur: '16s', delay: '4s' },
  { anim: 'float-c', dur: '22s', delay: '1s' },
  { anim: 'float-b', dur: '18s', delay: '5s' },
  { anim: 'float-c', dur: '25s', delay: '3s' },
  { anim: 'float-a', dur: '19s', delay: '2.5s' },
];

const logoParticles = [
  { top: '15%', left: '55%', size: 'h-14', opacity: 0.18, ...floatAnims[0] },
  { top: '10%', left: '80%', size: 'h-8',  opacity: 0.12, ...floatAnims[1] },
  { top: '40%', left: '70%', size: 'h-20', opacity: 0.15, ...floatAnims[2] },
  { top: '65%', left: '60%', size: 'h-10', opacity: 0.20, ...floatAnims[3] },
  { top: '75%', left: '85%', size: 'h-12', opacity: 0.10, ...floatAnims[4] },
  { top: '30%', left: '50%', size: 'h-6',  opacity: 0.08, ...floatAnims[5] },
  { top: '50%', left: '82%', size: 'h-16', opacity: 0.16, ...floatAnims[6] },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start px-8 md:px-24 bg-transparent text-white overflow-hidden z-0">

      {/* Decorative background — hidden on mobile to prevent overflow and save GPU */}
      <div className="absolute inset-0 pointer-events-none -z-10 hidden md:block">
        {/* Ambient glow blobs */}
        <div className="absolute top-[20%] right-[15%] w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[300px] h-[300px] bg-indigo-600/6 rounded-full blur-[80px]" />

        {/* Ghost logo — CSS float animation, no JS */}
        <img
          src="/logo.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute right-0 top-[10%] w-[min(700px,55vw)] h-auto grayscale [mask-image:linear-gradient(to_left,black_55%,transparent_100%)]"
          style={{ opacity: 0.45, animation: 'float-b 10s ease-in-out infinite' }}
        />

        {/* Scattered particles — CSS float animations */}
        {logoParticles.map((p, i) => (
          <img
            key={i}
            src="/logo.png"
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className={`absolute ${p.size} grayscale drop-shadow-[0_0_8px_rgba(59,130,246,0.2)]`}
            style={{
              top: p.top,
              left: p.left,
              opacity: p.opacity,
              animation: `${p.anim} ${p.dur} ${p.delay} ease-in-out infinite`,
              willChange: 'transform',
            }}
          />
        ))}
      </div>

      {/* Mobile-only subtle glow (no heavy elements) */}
      <div className="absolute inset-0 pointer-events-none -z-10 md:hidden">
        <div className="absolute top-[10%] right-0 w-[250px] h-[250px] bg-blue-600/8 rounded-full blur-[80px]" />
      </div>

      {/* Main content — staggered reveal */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 relative max-w-3xl"
      >
        {/* Label badge */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
          <span className="w-6 h-px bg-blue-500" />
          <span className="font-mono text-blue-400 tracking-[0.25em] uppercase text-xs">
            Systems Engineer // Fintech &amp; AI Architecture
          </span>
        </motion.div>

        {/* Name — responsive sizes: 48px → 72px → 96px */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl sm:text-7xl md:text-9xl font-bold mb-4 tracking-tighter leading-[0.9]"
        >
          Ali <GlitchText text="Khaled." className="text-slate-500" />
        </motion.h1>

        {/* Animated role */}
        <motion.div
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-4xl font-semibold mb-8 h-12 md:h-14 flex items-center"
        >
          <span className="gradient-text">
            <TypeAnimation
              sequence={[
                'I build scalable backend systems.', 1500,
                'I build fintech architectures.', 1500,
                'I build low-level simulators.', 1500,
                'I engineer the future.', 2500,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
            />
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="max-w-lg text-sm sm:text-base text-slate-400 mb-10 pl-4 border-l border-blue-600/40 leading-relaxed"
        >
          Senior Software Engineering Student at{' '}
          <span className="text-slate-200 font-medium">Cairo University</span>.{' '}
          Expertise in secure payment processing, distributed systems, and real-time infrastructure.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
          >
            Explore My Work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium rounded-full border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <Download size={16} />
            Download CV
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div variants={itemVariants} className="flex gap-6 sm:gap-8 mt-12 pt-8 border-t border-slate-800/60">
          {[
            { value: '3+', label: 'Years Coding' },
            { value: '7+', label: 'Projects Shipped' },
            { value: '2',  label: 'Internships' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="text-xs text-slate-500 font-mono mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Tech ribbon */}
      <div className="absolute bottom-20 left-0 w-full overflow-hidden whitespace-nowrap py-3 border-y border-white/5 bg-slate-950/30 backdrop-blur-sm">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-10 w-max items-center"
        >
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="text-slate-600 font-mono text-[10px] tracking-[0.2em] hover:text-blue-400 transition-colors uppercase">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40"
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-slate-500" />
        <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-slate-500">scroll</span>
      </motion.div>
    </section>
  );
}
