import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Senior-1 CCE-C Student",
    company: "Cairo University",
    date: "June 2022 - June 2027",
    description: "Focusing on advanced software engineering concepts, operating systems, and building scalable applications.",
  },
  {
    role: "FinTech Software Engineering Intern",
    company: "SuperPay",
    date: "August 2025 - October 2025",
    description: "Contributed to backend architecture and system optimization during the 2025 internship program.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "e& Egypt",
    date: "August 2024 - September 2024",
    description: "Built and deployed a scalable microservice API gateway using MongoDB, Express, Angular, and Node.js. Developed secure APIs and dynamic UIs for real-world fintech applications, applying principles of JWT, 3D Secure, and frontend validations.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-8 md:px-24 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Experience & Education
        </motion.h2>

        <div className="space-y-8 border-l-2 border-blue-600 dark:border-blue-500 pl-6 ml-3">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <span className="absolute -left-[35px] top-1.5 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500 ring-4 ring-slate-50 dark:ring-slate-900"></span>
              
              <h3 className="text-xl font-bold">{exp.role}</h3>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2 font-medium">
                <span>{exp.company}</span>
                <span>•</span>
                <span>{exp.date}</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 max-w-2xl">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}