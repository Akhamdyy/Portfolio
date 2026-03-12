import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <p className="font-semibold text-slate-900 dark:text-slate-100">Ali Khaled</p>
          <p className="text-sm mt-1">Software Engineer based in Egypt.</p>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/Akhamdyy" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/akhamdy/" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:alikhaledhamdy@gmail.com" 
            className="hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="text-sm text-center md:text-right">
          <p>&copy; {currentYear} All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}