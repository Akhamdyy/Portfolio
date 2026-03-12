import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, FileText, Globe } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const links = [
  {
    title: "GitHub",
    label: "@Akhamdyy",
    icon: <Github size={32} />,
    url: "https://github.com/Akhamdyy",
    color: "hover:border-slate-400"
  },
  {
    title: "LinkedIn",
    label: "Ali Khaled",
    icon: <Linkedin size={32} />,
    url: "https://www.linkedin.com/in/akhamdy/",
    color: "hover:border-blue-500"
  },
  {
    title: "Email",
    label: "alikhaledhamdy@gmail.com",
    icon: <Mail size={32} />,
    url: "mailto:alikhaledhamdy@gmail.com",
    color: "hover:border-red-400"
  },
  {
    title: "Resume",
    label: "Download PDF",
    icon: <FileText size={32} />,
    url: "/resume.pdf",
    color: "hover:border-green-400"
  },
  {
    title: "Portfolio",
    label: "alikhaled.dev",
    icon: <Globe size={32} />,
    url: "https://alikhaled.dev",
    color: "hover:border-purple-500"
  }
];

export default function Connect() {
  return (
    <section id="connect" className="py-24 px-8 md:px-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 italic">Let's build something together.</h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Available for software engineering roles and technical collaborations. Find me on any of these platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <Tilt 
              key={index} 
              tiltMaxAngleX={10} 
              tiltMaxAngleY={10} 
              scale={1.05}
              glareEnable={true}
              glareMaxOpacity={0.2}
              className="h-full"
            >
              <motion.a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col items-center justify-center p-8 bg-slate-900/50 border border-slate-800 rounded-2xl transition-all duration-300 ${link.color} group h-full`}
              >
                <div className="text-slate-400 group-hover:text-white transition-colors mb-4">
                  {link.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{link.title}</h3>
                <p className="text-sm text-slate-500 group-hover:text-slate-300 mb-4">{link.label}</p>
                <ExternalLink size={16} className="text-slate-600 group-hover:text-blue-400" />
              </motion.a>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}