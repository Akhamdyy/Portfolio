import { GitHubCalendar } from 'react-github-calendar';
import { Activity, BookMarked } from 'lucide-react';
import { useReveal, useRevealGroup } from '../hooks/useReveal';

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
  const labelRef = useReveal();
  const leftRef  = useReveal();
  const rightRef = useReveal();
  const divesRef = useRevealGroup();

  return (
    <section className="py-28 px-8 md:px-24 bg-slate-900/60 relative overflow-hidden border-t border-slate-800/50">
      {/* Ambient blob */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/4 blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <p ref={labelRef} className="reveal section-label mb-12">05 // Beyond the Code</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: GitHub Activity */}
          <div ref={leftRef} className="reveal">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Activity size={16} />
              </span>
              Open Source Activity
            </h2>
            <div className="bg-slate-950/70 border border-slate-800/80 p-7 rounded-2xl overflow-x-auto glow-card">
              <GitHubCalendar
                username="Akhamdyy"
                colorScheme="dark"
                theme={{ dark: ['#0f172a', '#1e3a8a', '#2563eb', '#3b82f6', '#60a5fa'] }}
              />
            </div>
            <p className="text-slate-600 text-xs mt-3 font-mono">// Visualizing consistent delivery &amp; code frequency</p>
          </div>

          {/* Right: System Deep Dives */}
          <div ref={rightRef} className="reveal">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <BookMarked size={16} />
              </span>
              System Deep Dives
            </h2>
            <div ref={divesRef} className="reveal-group space-y-3">
              {systemDives.map((dive, index) => (
                <div
                  key={index}
                  className="reveal-item group bg-slate-950/60 border border-slate-800/80 p-6 rounded-xl transition-all duration-300 hover:border-purple-500/30 hover:translate-x-1.5 glow-card cursor-default"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-500 mb-2 block">
                    {dive.tag}
                  </span>
                  <h3 className="text-base font-semibold text-slate-200 group-hover:text-white mb-2 transition-colors">
                    {dive.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {dive.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
