import { motion } from 'framer-motion';

const skillCategories = [
  { title: "Languages", skills: ["Java", "C", "Dart", "C#", "TypeScript", "SQL"] },
  { title: "Frameworks", skills: ["Spring Boot", "Flutter", "Angular", "Express", "Node.js", "JavaFX"] },
  { title: "Tools & DBs", skills: ["PostgreSQL", "MongoDB", "Supabase", "Git", "Cisco Packet Tracer", "Wireshark"] }
];

export default function Skills() {
  return (
    <section className="py-20 px-8 md:px-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10">Technical Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-950 border border-slate-800 p-6 rounded-xl"
            >
              <h3 className="text-xl font-mono text-blue-400 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="bg-slate-800 text-slate-300 px-3 py-1 rounded-md text-sm font-medium">
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