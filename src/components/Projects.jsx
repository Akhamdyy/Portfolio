import Tilt from 'react-parallax-tilt';
import { Github, BookOpen, ArrowUpRight } from 'lucide-react';
import { useReveal, useRevealGroup } from '../hooks/useReveal';

const projects = [
  {
    title: "PressurePal",
    problem: "Chronic health conditions require consistent monitoring, but manual tracking is often tedious and error-prone for patients.",
    challenge: "Synchronizing real-time Flutter state with a Supabase backend while maintaining a clean, accessible UI for non-technical users.",
    techStack: ["Flutter", "Supabase", "Dart"],
    repoLink: "https://github.com/Akhamdyy/PressurePal",
    docsLink: "https://github.com/Akhamdyy/PressurePal#readme",
    accent: 'blue',
  },
  {
    title: "AcquirerBank",
    problem: "Modern fintech requires high-availability systems capable of processing sensitive transaction data without latency or security leaks.",
    challenge: "Implementing secure payment processing logic and relational data integrity using Spring Boot and PostgreSQL under ACID principles.",
    techStack: ["Java", "Spring Boot", "PostgreSQL"],
    repoLink: "https://github.com/SuperPay-Internship-2025/AcquirerBank",
    docsLink: "https://github.com/SuperPay-Internship-2025/AcquirerBank#readme",
    accent: 'indigo',
  },
  {
    title: "Operating System Simulator",
    problem: "Understanding low-level hardware abstraction and process scheduling is difficult without a controlled, observable environment.",
    challenge: "Manually managing memory allocation (MMU) and implementing pre-emptive CPU scheduling algorithms in pure C.",
    techStack: ["C", "System Architecture", "OS Concepts"],
    repoLink: "https://github.com/Akhamdyy/OS-Process-Schedular",
    docsLink: "https://github.com/Akhamdyy/OS-Process-Schedular#readme",
    accent: 'violet',
  },
  {
    title: "Collaborative Text Editor",
    problem: "Distributed teams need to edit documents simultaneously without version conflicts or noticeable lag.",
    challenge: "Handling complex concurrency issues and maintaining state synchronization across multiple clients using WebSockets.",
    techStack: ["Java", "Spring Boot", "JavaFX", "WebSocket"],
    repoLink: "https://github.com/Akhamdyy/Collaborative-Text-Editor",
    docsLink: "https://github.com/Akhamdyy/Collaborative-Text-Editor#readme",
    accent: 'cyan',
  },
  {
    title: "Microservice API Gateway",
    problem: "Managing communication, authentication, and routing across multiple microservices creates significant architectural overhead.",
    challenge: "Centralizing JWT authentication and implementing a scalable request-routing engine using Express and MongoDB.",
    techStack: ["Node.js", "Express", "MongoDB", "JWT"],
    repoLink: "https://github.com/Akhamdyy/Microservice-API-Gateway",
    docsLink: "https://github.com/Akhamdyy/Microservice-API-Gateway#readme",
    accent: 'sky',
  },
  {
    title: "Credit Card Validation Form",
    problem: "Invalid payment data entries lead to high transaction failure rates and poor user experience in checkout flows.",
    challenge: "Applying the Luhn Algorithm for real-time validation within a reactive Angular framework to ensure 100% data accuracy.",
    techStack: ["Angular", "TypeScript", "Luhn Algorithm"],
    repoLink: "http://github.com/Akhamdyy/SuperPay-Validation-Form",
    docsLink: "https://github.com/Akhamdyy/SuperPay-Validation-Form#readme",
    accent: 'purple',
  },
  {
    title: "SuperPay Checkout Page",
    problem: "E-commerce conversion rates drop significantly if the final checkout interface is slow, unresponsive, or confusing.",
    challenge: "Building a high-performance, responsive UI that handles complex payment states and integrates seamlessly with backend APIs.",
    techStack: ["Angular", "TypeScript", "UI/UX"],
    repoLink: "https://github.com/Akhamdyy/SuperPay-Checkout-Page",
    docsLink: "https://github.com/Akhamdyy/SuperPay-Checkout-Page#readme",
    accent: 'blue',
  }
];

const accentMap = {
  blue:   { bar: 'from-blue-500 to-blue-600',     problem: 'text-blue-400',   challenge: 'text-blue-300',   border: 'hover:border-blue-500/30',   num: 'text-blue-500/30' },
  indigo: { bar: 'from-indigo-500 to-indigo-600', problem: 'text-indigo-400', challenge: 'text-indigo-300', border: 'hover:border-indigo-500/30', num: 'text-indigo-500/30' },
  violet: { bar: 'from-violet-500 to-violet-600', problem: 'text-violet-400', challenge: 'text-violet-300', border: 'hover:border-violet-500/30', num: 'text-violet-500/30' },
  cyan:   { bar: 'from-cyan-500 to-cyan-600',     problem: 'text-cyan-400',   challenge: 'text-cyan-300',   border: 'hover:border-cyan-500/30',   num: 'text-cyan-500/30' },
  sky:    { bar: 'from-sky-500 to-sky-600',       problem: 'text-sky-400',    challenge: 'text-sky-300',    border: 'hover:border-sky-500/30',    num: 'text-sky-500/30' },
  purple: { bar: 'from-purple-500 to-purple-600', problem: 'text-purple-400', challenge: 'text-purple-300', border: 'hover:border-purple-500/30', num: 'text-purple-500/30' },
};

export default function Projects() {
  const headerRef = useReveal();
  const gridRef   = useRevealGroup();

  return (
    <section id="projects" className="py-28 px-8 md:px-24 bg-slate-950/95 relative overflow-hidden">
      {/* Top separator line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      {/* Ambient blob */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[600px] bg-blue-600/4 blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="reveal mb-16">
          <p className="section-label mb-3">04 // Work</p>
          <div className="flex flex-col md:flex-row md:items-end gap-4 justify-between">
            <div>
              <h2 className="text-4xl font-bold text-white tracking-tight">Featured Engineering</h2>
              <p className="text-slate-400 mt-2 text-sm max-w-lg leading-relaxed">
                Systems-level projects, fintech solutions, and architectural challenges — each solving a real problem.
              </p>
            </div>
            <span className="text-slate-600 font-mono text-xs">{projects.length} projects</span>
          </div>
        </div>

        {/* Cards — reveal-group handles stagger via CSS nth-child */}
        <div ref={gridRef} className="reveal-group grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const a = accentMap[project.accent];
            return (
              <div key={index} className="reveal-item">
                <Tilt
                  tiltMaxAngleX={3}
                  tiltMaxAngleY={3}
                  glareEnable={false}
                  scale={1.01}
                  className="h-full"
                >
                  <div className={`h-full flex flex-col border border-slate-800/80 bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 ${a.border} glow-card`}>
                    {/* Gradient top bar */}
                    <div className={`h-px w-full bg-gradient-to-r ${a.bar} opacity-60`} />

                    <div className="p-8 flex flex-col flex-grow">
                      {/* Title row */}
                      <div className="flex items-start justify-between mb-6 gap-4">
                        <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
                        <span className={`text-4xl font-black leading-none mt-1 ${a.num} select-none`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <div className="space-y-5 flex-grow mb-7">
                        <div>
                          <span className={`text-[10px] font-black uppercase tracking-[0.2em] block mb-1.5 ${a.problem}`}>
                            The Problem
                          </span>
                          <p className="text-slate-400 text-sm leading-relaxed">{project.problem}</p>
                        </div>
                        <div>
                          <span className={`text-[10px] font-black uppercase tracking-[0.2em] block mb-1.5 ${a.challenge}`}>
                            The Engineering Challenge
                          </span>
                          <p className="text-slate-400 text-sm leading-relaxed">{project.challenge}</p>
                        </div>
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5 mb-7">
                        {project.techStack.map((tech, i) => (
                          <span key={i} className="bg-slate-950/70 border border-slate-800 text-slate-500 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-5 pt-5 border-t border-slate-800/60">
                        <a
                          href={project.repoLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                          <Github size={14} />
                          Source Code
                        </a>
                        <a
                          href={project.docsLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-300 transition-colors ml-auto"
                        >
                          <BookOpen size={14} />
                          Docs
                          <ArrowUpRight size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
