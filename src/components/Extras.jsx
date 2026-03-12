import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';

const systemDives = [
  {
    title: "Signal Digitization & ADM Logic",
    tag: "Telecommunications",
    description: "Architectural analysis of Adaptive Delta Modulation systems, focusing on reducing slope overload distortion and improving signal-to-noise ratios.",
  },
  {
    title: "PLL Control System Stability",
    tag: "Control Engineering",
    description: "Designing Lead-Lag compensators for 2nd order Phase-Locked Loops to ensure high-frequency stability and lock-in range optimization.",
  },
  {
    title: "Low-Level Memory Virtualization",
    tag: "Operating Systems",
    description: "A deep dive into address translation logic, page table structures, and the implementation of a software-based Memory Management Unit.",
  }
];

export default function Extras() {
  return (
    <section className="py-24 px-8 md:px-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Side: GitHub Activity */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-blue-500"></span>
            Open Source Activity
          </h2>
          <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl overflow-x-auto">
            <GitHubCalendar 
              username="Akhamdyy" 
              colorScheme="dark"
              theme={{
                dark: ['#0f172a', '#1e3a8a', '#2563eb', '#3b82f6', '#60a5fa']
              }}
            />
          </div>
          <p className="text-slate-500 text-xs mt-4 font-mono">// Visualizing consistent delivery & code frequency</p>
        </div>

        {/* Right Side: Engineering Deep Dives */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-purple-500"></span>
            System Deep Dives
          </h2>
          <div className="space-y-4">
            {systemDives.map((dive, index) => (
              <motion.div 
                key={index}
                whileHover={{ x: 10 }}
                className="group bg-slate-950 border border-slate-800 p-6 rounded-xl transition-all hover:border-blue-500/40 cursor-default"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-2 block">
                  {dive.tag}
                </span>
                <h3 className="text-lg font-bold text-slate-200 group-hover:text-white mb-2 transition-colors">
                  {dive.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  {dive.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}