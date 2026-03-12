import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    title: "PressurePal",
    description: "A cross-platform mobile application built for seamless blood pressure tracking and health data management.",
    techStack: ["Flutter", "Supabase", "Dart"],
    repoLink: "https://github.com/Akhamdyy/PressurePal"
  },
  {
    title: "AcquirerBank",
    description: "A robust payment processing system designed to handle transactions securely and efficiently.",
    techStack: ["Java", "Spring Boot", "PostgreSQL"],
    repoLink: "https://github.com/SuperPay-Internship-2025/AcquirerBank"
  },
  {
    title: "Operating System Simulator",
    description: "A low-level C program demonstrating core OS concepts including CPU scheduling algorithms and memory management.",
    techStack: ["C", "System Architecture", "OS Concepts"],
    repoLink: "https://github.com/Akhamdyy/OS-Process-Schedular"
  },
  {
    title: "Collaborative Text Editor",
    description: "A real-time text editing environment featuring live synchronization.",
    techStack: ["Java", "Spring Boot", "JavaFX", "WebSocket"],
    repoLink: "https://github.com/Akhamdyy/Collaborative-Text-Editor"
  },
  {
    title: "Microservice API Gateway",
    description: "A backend-only API gateway for microservices using Node.js, Express, and MongoDB. Features user authentication and a scalable product catalog.",
    techStack: ["Node.js", "Express", "MongoDB", "JWT"],
    repoLink: "https://github.com/Akhamdyy/Microservice-API-Gateway" // Update link
  },
  {
    title: "Credit Card Validation Form",
    description: "A reactive Angular form with built-in validations for credit card details using the Luhn algorithm. Designed for high accuracy and security.",
    techStack: ["Angular", "TypeScript", "Luhn Algorithm"],
    repoLink: "http://github.com/Akhamdyy/SuperPay-Validation-Form" // Update link
  },
  {
    title: "SuperPay Checkout Page",
    description: "A professional front-end checkout interface for SuperPay. Showcases responsive UI design, payment method handling, and integration-ready components.",
    techStack: ["Angular", "TypeScript", "UI/UX"],
    repoLink: "https://github.com/Akhamdyy/SuperPay-Checkout-Page" // Update link
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 md:px-24 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-10"
        >
          Featured Engineering
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <Tilt key={index} tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.1} glareColor="#ffffff" glarePosition="all" scale={1.02}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="h-full flex flex-col border border-slate-800 bg-slate-900 p-8 rounded-2xl shadow-2xl"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                
                <div className="space-y-4 flex-grow mb-6 text-sm">
                  <div>
                    <span className="font-bold text-blue-400 block mb-1">The Problem:</span>
                    <p className="text-slate-300">{project.problem}</p>
                  </div>
                  <div>
                    <span className="font-bold text-purple-400 block mb-1">The Challenge:</span>
                    <p className="text-slate-300">{project.challenge}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="bg-slate-950 border border-slate-700 text-slate-300 px-3 py-1 rounded-md text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto">
                  <a href={project.repoLink} target="_blank" rel="noreferrer" className="text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-md font-medium text-sm transition">
                    View Code
                  </a>
                  <a href={project.demoLink} target="_blank" rel="noreferrer" className="text-slate-300 border border-slate-700 hover:border-slate-500 px-4 py-2 rounded-md font-medium text-sm transition">
                    Live Demo
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