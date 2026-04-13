import { GraduationCap, Banknote, Building2 } from 'lucide-react';
import { useReveal, useRevealGroup } from '../hooks/useReveal';

const experiences = [
  {
    role: "Senior-1 CCE-C Student",
    company: "Cairo University",
    date: "June 2022 – June 2027",
    type: "Education",
    icon: GraduationCap,
    accent: 'blue',
    description: "Focusing on advanced software engineering concepts, operating systems, and building scalable applications.",
  },
  {
    role: "FinTech Software Engineering Intern",
    company: "SuperPay",
    date: "August 2025 – October 2025",
    type: "Internship",
    icon: Banknote,
    accent: 'indigo',
    description: "Contributed to backend architecture and system optimization during the 2025 internship program. Built secure payment processing flows using Spring Boot and PostgreSQL.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "e& Egypt",
    date: "August 2024 – September 2024",
    type: "Internship",
    icon: Building2,
    accent: 'violet',
    description: "Built and deployed a scalable microservice API gateway using MongoDB, Express, Angular, and Node.js. Developed secure APIs and dynamic UIs for real-world fintech applications, applying principles of JWT, 3D Secure, and frontend validations.",
  }
];

const accentMap = {
  blue:   { ring: 'ring-blue-500/30',   icon: 'bg-blue-500/10 text-blue-400 border-blue-500/20',   badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20'   },
  indigo: { ring: 'ring-indigo-500/30', icon: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20', badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' },
  violet: { ring: 'ring-violet-500/30', icon: 'bg-violet-500/10 text-violet-400 border-violet-500/20', badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20' },
};

export default function Experience() {
  const headerRef   = useReveal();
  const timelineRef = useRevealGroup();

  return (
    <section id="experience" className="py-28 px-8 md:px-24 bg-slate-900/60 relative overflow-hidden border-t border-slate-800/50">
      {/* Ambient blob */}
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-indigo-600/4 blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="reveal mb-16">
          <p className="section-label mb-3">02 // Career</p>
          <h2 className="text-4xl font-bold text-white tracking-tight">Experience &amp; Education</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-slate-700 via-slate-800 to-transparent" />

          <div ref={timelineRef} className="reveal-group-left space-y-10">
            {experiences.map((exp, index) => {
              const a = accentMap[exp.accent];
              const Icon = exp.icon;
              return (
                <div key={index} className="reveal-item relative flex gap-8 pl-14">
                  {/* Timeline icon */}
                  <div className={`absolute left-0 top-1 w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${a.icon}`}>
                    <Icon size={16} />
                  </div>

                  {/* Card */}
                  <div className={`flex-1 bg-slate-900/50 border border-slate-800/80 rounded-2xl p-7 transition-all duration-300 hover:border-slate-700 glow-card ring-0 hover:ring-1 ${a.ring}`}>
                    <div className="flex flex-wrap items-start gap-3 mb-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-white leading-snug">{exp.role}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm font-medium text-slate-300">{exp.company}</span>
                          <span className="text-slate-700">·</span>
                          <span className="text-xs font-mono text-slate-500">{exp.date}</span>
                        </div>
                      </div>
                      <span className={`shrink-0 text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border ${a.badge}`}>
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
