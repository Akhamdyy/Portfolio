import { motion } from 'framer-motion';

const skillCategories = [
  { 
    title: "Coding & Languages", 
    skills: ["Java", "C++", "C", "Python", "Dart", "MATLAB", "SQL", "TypeScript", "8086 Assembly"] 
  },
  { 
    title: "Web & Fintech", 
    skills: ["Spring Boot", "Hibernate/JPA", "Node.js", "Express.js", "Angular", "React", "REST APIs", "JWT", "JWE/JWS", "RSA", "3D Secure", "Payment Processing"] 
  },
  { 
    title: "Databases", 
    skills: ["MySQL", "PostgreSQL", "MongoDB", "H2 DB", "Supabase"] 
  },
  { 
    title: "Systems & Infrastructure", 
    skills: ["Operating Systems", "Scheduling/MMU", "System Simulation", "Microprocessor Systems", "Intel ARM", "TCP/UDP", "WebSockets"] 
  },
  { 
    title: "Mobile & AI", 
    skills: ["Flutter", "Google Gemini API", "Machine Learning (OCR)", "Speech-to-Text", "Biometric Security"] 
  },
  { 
    title: "Tools & Principles", 
    skills: ["Git BASH", "GitHub", "VS Code", "Postman API", "DevOps", "Software Testing", "SOLID", "DDD", "OOP"] 
  }
];

export default function Skills() {
  return (
    <section className="py-24 px-8 md:px-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
            <p className="text-slate-400 max-w-xl">A comprehensive breakdown of my competencies in software engineering, fintech architecture, and low-level systems.</p>
          </div>
          <div className="text-blue-500 font-mono text-sm tracking-widest uppercase">Expertise Stack</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-500"
            >
              {/* Subtle Glow Effect on Hover */}
              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
              
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></span>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="bg-slate-950 border border-slate-800 text-slate-400 px-3 py-1.5 rounded-lg text-xs font-medium hover:text-blue-400 hover:border-blue-400/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}