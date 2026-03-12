import { useState, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react'; // Import the icon
import { motion } from 'framer-motion';

export default function Navbar({ onTerminalClick }) {
  const [isDark, setIsDark] = useState(true); // Default to dark for systems engineer brand

  useEffect(() => {
    // Force dark mode class on root for consistent branding
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
        
        {/* Branding */}
        <a href="#" className="flex items-center gap-4 group">
          <div className="relative h-12 w-12 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-transform group-hover:scale-105">
            <img 
              src="/logo.png" 
              alt="AK Logo" 
              className="h-full w-full object-contain p-1 invert dark:invert-0 transition-all" 
            />
          </div>
          <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-tighter hidden sm:block">
            Ali Khaled
          </span>
        </a>

        {/* Navigation Links & Terminal Toggle */}
        <div className="flex items-center gap-6">
          <a href="#experience" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Experience</a>
          <a href="#projects" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a>
          <a href="#connect" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Connect</a>
          <a href="#contact" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
          
          {/* Terminal Toggle Button */}
          <button 
            onClick={onTerminalClick}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-blue-400 hover:bg-blue-500/10 hover:scale-110 border border-transparent dark:hover:border-blue-500/30 transition-all"
            title="Open Console (Key: `)"
          >
            <TerminalIcon size={18} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}