import { Linkedin, Mail, ExternalLink, FileText, Globe, Github } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { useReveal, useRevealGroup } from '../hooks/useReveal';

const links = [
  {
    title: "GitHub",
    label: "@Akhamdyy",
    icon: Github,
    url: "https://github.com/Akhamdyy",
    border: 'hover:border-slate-500/50',
    glow: 'hover:shadow-[0_0_30px_rgba(148,163,184,0.08)]',
    iconBg: 'bg-slate-800/80 text-slate-300 group-hover:bg-slate-700 group-hover:text-white',
  },
  {
    title: "LinkedIn",
    label: "Ali Khaled",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/akhamdy/",
    border: 'hover:border-blue-500/50',
    glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]',
    iconBg: 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300',
  },
  {
    title: "Email",
    label: "alikhaledhamdy@gmail.com",
    icon: Mail,
    url: "mailto:alikhaledhamdy@gmail.com",
    border: 'hover:border-red-500/50',
    glow: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.08)]',
    iconBg: 'bg-red-500/10 text-red-400 group-hover:bg-red-500/20 group-hover:text-red-300',
  },
  {
    title: "Resume",
    label: "Download PDF",
    icon: FileText,
    url: "/resume.pdf",
    border: 'hover:border-emerald-500/50',
    glow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.08)]',
    iconBg: 'bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-300',
  },
  {
    title: "Portfolio",
    label: "alikhaled.dev",
    icon: Globe,
    url: "https://alikhaled.dev",
    border: 'hover:border-purple-500/50',
    glow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.08)]',
    iconBg: 'bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300',
  }
];

export default function Connect() {
  const headerRef = useReveal();
  const gridRef   = useRevealGroup();

  return (
    <section id="connect" className="py-28 px-8 md:px-24 bg-slate-950/95 relative overflow-hidden border-t border-slate-800/50">
      {/* Bottom ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/8 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-16">
          <p className="section-label mb-4">06 // Connect</p>
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Let's build something{' '}
            <span className="gradient-text italic">together.</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
            Available for software engineering roles and technical collaborations. Find me on any of these platforms.
          </p>
        </div>

        <div ref={gridRef} className="reveal-group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <div key={index} className="reveal-item h-full">
                <Tilt
                  tiltMaxAngleX={6}
                  tiltMaxAngleY={6}
                  scale={1.03}
                  glareEnable={false}
                  className="h-full"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`group flex flex-col items-center justify-center gap-4 p-8 bg-slate-900/50 border border-slate-800/80 rounded-2xl transition-all duration-300 ${link.border} ${link.glow} h-full`}
                  >
                    <div className={`p-4 rounded-2xl transition-all duration-300 ${link.iconBg}`}>
                      <Icon size={26} />
                    </div>
                    <div className="text-center">
                      <h3 className="text-base font-semibold text-white mb-1">{link.title}</h3>
                      <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">{link.label}</p>
                    </div>
                    <ExternalLink size={13} className="text-slate-700 group-hover:text-slate-400 transition-colors" />
                  </a>
                </Tilt>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
