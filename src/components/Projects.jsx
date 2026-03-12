import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    title: "PressurePal",
    problem: "Chronic health conditions require consistent monitoring, but manual tracking is often tedious and error-prone for patients.",
    challenge: "Synchronizing real-time Flutter state with a Supabase backend while maintaining a clean, accessible UI for non-technical users.",
    techStack: ["Flutter", "Supabase", "Dart"],
    repoLink: "https://github.com/Akhamdyy/PressurePal",
    demoLink: "https://github.com/Akhamdyy/PressurePal#readme"
  },
  {
    title: "AcquirerBank",
    problem: "Modern fintech requires high-availability systems capable of processing sensitive transaction data without latency or security leaks.",
    challenge: "Implementing secure payment processing logic and relational data integrity using Spring Boot and PostgreSQL under ACID principles.",
    techStack: ["Java", "Spring Boot", "PostgreSQL"],
    repoLink: "https://github.com/SuperPay-Internship-2025/AcquirerBank",
    demoLink: "https://github.com/SuperPay-Internship-2025/AcquirerBank#readme"
  },
  {
    title: "Operating System Simulator",
    problem: "Understanding low-level hardware abstraction and process scheduling is difficult without a controlled, observable environment.",
    challenge: "Manually managing memory allocation (MMU) and implementing pre-emptive CPU scheduling algorithms in pure C.",
    techStack: ["C", "System Architecture", "OS Concepts"],
    repoLink: "https://github.com/Akhamdyy/OS-Process-Schedular",
    demoLink: "https://github.com/Akhamdyy/OS-Process-Schedular#readme"
  },
  {
    title: "Collaborative Text Editor",
    problem: "Distributed teams need to edit documents simultaneously without version conflicts or noticeable lag.",
    challenge: "Handling complex concurrency issues and maintaining state synchronization across multiple clients using WebSockets.",
    techStack: ["Java", "Spring Boot", "JavaFX", "WebSocket"],
    repoLink: "https://github.com/Akhamdyy/Collaborative-Text-Editor",
    demoLink: "https://github.com/Akhamdyy/Collaborative-Text-Editor#readme"
  },
  {
    title: "Microservice API Gateway",
    problem: "Managing communication, authentication, and routing across multiple microservices creates significant architectural overhead.",
    challenge: "Centralizing JWT authentication and implementing a scalable request-routing engine using Express and MongoDB.",
    techStack: ["Node.js", "Express", "MongoDB", "JWT"],
    repoLink: "https://github.com/Akhamdyy/Microservice-API-Gateway",
    demoLink: "https://github.com/Akhamdyy/Microservice-API-Gateway#readme"
  },
  {
    title: "Credit Card Validation Form",
    problem: "Invalid payment data entries lead to high transaction failure rates and poor user experience in checkout flows.",
    challenge: "Applying the Luhn Algorithm for real-time validation within a reactive Angular framework to ensure 100% data accuracy.",
    techStack: ["Angular", "TypeScript", "Luhn Algorithm"],
    repoLink: "http://github.com/Akhamdyy/SuperPay-Validation-Form",
    demoLink: "https://github.com/Akhamdyy/SuperPay-Validation-Form#readme"
  },
  {
    title: "SuperPay Checkout Page",
    problem: "E-commerce conversion rates drop significantly if the final checkout interface is slow, unresponsive, or confusing.",
    challenge: "Building a high-performance, responsive UI that handles complex payment states and integrates seamlessly with backend APIs.",
    techStack: ["Angular", "TypeScript", "UI/UX"],
    repoLink: "https://github.com/Akhamdyy/SuperPay-Checkout-Page",
    demoLink: "https://github.com/Akhamdyy/SuperPay-Checkout-Page#readme"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 md:px-24 bg-slate-950 relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Engineering</h2>
          <p className="text-slate-400 max-w-2xl font-light">A collection of systems-level projects, fintech solutions, and architectural challenges I've tackled.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <Tilt 
              key={index} 
              tiltMaxAngleX={3} 
              tiltMaxAngleY={3} 
              glareEnable={true} 
              glareMaxOpacity={0.05} 
              scale={1.01}
            >
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.1 }}
                className="h-full flex flex-col border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-10 rounded-3xl transition-colors hover:border-blue-500/30"
              >
                <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">{project.title}</h3>
                
                <div className="space-y-6 flex-grow mb-10">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 block mb-2">The Problem</span>
                    <p className="text-slate-400 leading-relaxed font-light">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-500 block mb-2">The Engineering Challenge</span>
                    <p className="text-slate-400 leading-relaxed font-light">{project.challenge}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="bg-slate-950 border border-slate-800 text-slate-500 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-6">
                  <a href={project.repoLink} target="_blank" rel="noreferrer" className="text-white text-sm font-bold border-b-2 border-blue-600 pb-1 hover:text-blue-400 transition-colors">
                    Source Code
                  </a>
                  <a href={project.demoLink} target="_blank" rel="noreferrer" className="text-slate-400 text-sm font-medium hover:text-white transition-colors flex items-center gap-2">
                    {project.demoLink.includes("readme") ? "Technical Docs" : "Live Simulation"} <span>→</span>
                  </a>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}