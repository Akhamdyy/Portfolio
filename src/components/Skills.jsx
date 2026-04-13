import { Code2, Globe, Database, Cpu, Smartphone, Wrench } from 'lucide-react';
import { useReveal, useRevealGroup } from '../hooks/useReveal';

const skillCategories = [
  {
    title: "Coding & Languages",
    icon: Code2,
    accent: 'blue',
    skills: ["Java", "C++", "C", "Python", "Dart", "MATLAB", "SQL", "TypeScript", "8086 Assembly"]
  },
  {
    title: "Web & Fintech",
    icon: Globe,
    accent: 'indigo',
    skills: ["Spring Boot", "Hibernate/JPA", "Node.js", "Express.js", "Angular", "React", "REST APIs", "JWT", "JWE/JWS", "RSA", "3D Secure", "Payment Processing"]
  },
  {
    title: "Databases",
    icon: Database,
    accent: 'cyan',
    skills: ["MySQL", "PostgreSQL", "MongoDB", "H2 DB", "Supabase"]
  },
  {
    title: "Systems & Infrastructure",
    icon: Cpu,
    accent: 'violet',
    skills: ["Operating Systems", "Scheduling/MMU", "System Simulation", "Microprocessor Systems", "Intel ARM", "TCP/UDP", "WebSockets"]
  },
  {
    title: "Mobile & AI",
    icon: Smartphone,
    accent: 'purple',
    skills: ["Flutter", "Google Gemini API", "Machine Learning (OCR)", "Speech-to-Text", "Biometric Security"]
  },
  {
    title: "Tools & Principles",
    icon: Wrench,
    accent: 'sky',
    skills: ["Git BASH", "GitHub", "VS Code", "Postman API", "DevOps", "Software Testing", "SOLID", "DDD", "OOP"]
  }
];

const accentMap = {
  blue:   { border: 'hover:border-blue-500/40',   glow: 'group-hover:bg-blue-500/5',   dot: 'bg-blue-500 shadow-[0_0_8px_#3b82f6]',   icon: 'text-blue-400',   pill: 'hover:text-blue-400 hover:border-blue-400/30' },
  indigo: { border: 'hover:border-indigo-500/40', glow: 'group-hover:bg-indigo-500/5', dot: 'bg-indigo-500 shadow-[0_0_8px_#6366f1]', icon: 'text-indigo-400', pill: 'hover:text-indigo-400 hover:border-indigo-400/30' },
  cyan:   { border: 'hover:border-cyan-500/40',   glow: 'group-hover:bg-cyan-500/5',   dot: 'bg-cyan-500 shadow-[0_0_8px_#06b6d4]',   icon: 'text-cyan-400',   pill: 'hover:text-cyan-400 hover:border-cyan-400/30' },
  violet: { border: 'hover:border-violet-500/40', glow: 'group-hover:bg-violet-500/5', dot: 'bg-violet-500 shadow-[0_0_8px_#8b5cf6]', icon: 'text-violet-400', pill: 'hover:text-violet-400 hover:border-violet-400/30' },
  purple: { border: 'hover:border-purple-500/40', glow: 'group-hover:bg-purple-500/5', dot: 'bg-purple-500 shadow-[0_0_8px_#a855f7]', icon: 'text-purple-400', pill: 'hover:text-purple-400 hover:border-purple-400/30' },
  sky:    { border: 'hover:border-sky-500/40',    glow: 'group-hover:bg-sky-500/5',    dot: 'bg-sky-500 shadow-[0_0_8px_#0ea5e9]',    icon: 'text-sky-400',    pill: 'hover:text-sky-400 hover:border-sky-400/30' },
};

export default function Skills() {
  const headerRef = useReveal();
  const gridRef   = useRevealGroup();

  return (
    <section className="py-28 px-8 md:px-24 bg-slate-950/95 relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/4 blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="reveal flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="section-label mb-3">01 // Skills</p>
            <h2 className="text-4xl font-bold text-white tracking-tight">Technical Arsenal</h2>
            <p className="text-slate-400 max-w-lg mt-3 text-sm leading-relaxed">
              A comprehensive breakdown of my competencies across software engineering, fintech architecture, and low-level systems.
            </p>
          </div>
          <div className="text-slate-600 font-mono text-xs">{skillCategories.reduce((a, c) => a + c.skills.length, 0)} technologies</div>
        </div>

        <div ref={gridRef} className="reveal-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => {
            const a = accentMap[category.accent];
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`reveal-item group relative bg-slate-900/50 border border-slate-800/80 p-7 rounded-2xl transition-all duration-300 ${a.border} glow-card`}
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 ${a.glow}`} />

                {/* Header */}
                <div className="flex items-center gap-3 mb-5 relative z-10">
                  <div className={`p-2 rounded-lg bg-slate-800/80 ${a.icon}`}>
                    <Icon size={16} />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-200">{category.title}</h3>
                  <span className="ml-auto text-slate-700 text-xs font-mono">{category.skills.length}</span>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-1.5 relative z-10">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`bg-slate-950/80 border border-slate-800/80 text-slate-500 px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${a.pill}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
