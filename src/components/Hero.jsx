import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start px-8 md:px-24 bg-slate-950 text-white overflow-hidden z-0">
      
      {/* Moving Grid Background */}
      <div className="absolute inset-0 z-[-1] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-blue-400 font-mono tracking-wider mb-4">Hello, World. I am</p>
        <h1 className="text-6xl md:text-8xl font-extrabold mb-4 tracking-tight text-white">
          Ali Khaled.
        </h1>
        
        {/* Hacker Typing Effect */}
        <div className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 h-12">
          <TypeAnimation
            sequence={[
              'I build scalable backend systems.', 1000,
              'I build cross-platform applications.', 1000,
              'I build low-level simulators.', 1000,
              'I engineer complete systems.', 2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        
        <p className="max-w-2xl text-lg text-slate-400 mb-10 leading-relaxed font-light">
          Software Engineering Senior focusing on robust API gateways, real-time synchronization, and complex database architectures. I don't just write code; I build infrastructure.
        </p>
        
        <div className="flex gap-6 items-center">
          <a href="#projects" className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-105 transition-transform duration-300">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#8b5cf6_50%,#3b82f6_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              View My Work
            </span>
          </a>
          <a href="/resume.pdf" download className="text-slate-300 hover:text-white font-medium hover:underline underline-offset-8 transition-all">
            Download CV &rarr;
          </a>
        </div>
      </motion.div>
    </section>
  );
}