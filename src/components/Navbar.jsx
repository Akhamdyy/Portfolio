import { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Connect',    href: '#connect'    },
  { label: 'Contact',    href: '#contact'    },
];

export default function Navbar({ onTerminalClick }) {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled]           = useState(false);
  const [menuOpen, setMenuOpen]           = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');

    const sectionIds = ['experience', 'projects', 'connect', 'contact'];

    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 640) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-800/60 shadow-[0_1px_30px_rgba(0,0,0,0.4)]'
          : 'border-b border-transparent'
      }`}
      style={{
        backgroundColor: `rgba(2, 6, 23, ${scrolled ? 0.92 : 0.7})`,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-4 flex justify-between items-center">

        {/* Branding */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative h-9 w-9 overflow-hidden rounded-lg border border-slate-700/60 bg-slate-900 transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.25)]">
            <img src="/logo.png" alt="AK Logo" className="h-full w-full object-contain p-1" />
          </div>
          <span className="text-base font-semibold text-slate-100 tracking-tight hidden sm:block group-hover:text-white transition-colors">
            Ali Khaled
          </span>
          <span className="hidden md:block text-slate-600 text-xs font-mono mt-0.5">
            /software-engineer
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden sm:flex items-center gap-1">
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-lg bg-white/8 border border-slate-700/50"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </a>
            );
          })}

          <div className="w-px h-5 bg-slate-800 mx-2" />

          <button
            onClick={onTerminalClick}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/80 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 border border-slate-800 hover:border-blue-500/40 transition-all duration-200 text-xs font-mono"
            title="Open Console (Key: `)"
          >
            <TerminalIcon size={14} />
            <span className="hidden md:inline">console</span>
          </button>
        </div>

        {/* Mobile: terminal + hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onTerminalClick}
            className="p-2 rounded-lg text-blue-400 hover:bg-blue-500/10 border border-slate-800 transition-colors"
            title="Open Console"
          >
            <TerminalIcon size={16} />
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 border border-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="sm:hidden border-t border-slate-800/60 px-6 py-3 flex flex-col gap-1"
            style={{ backgroundColor: 'rgba(2, 6, 23, 0.97)' }}
          >
            {navLinks.map(({ label, href }) => {
              const id = href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white bg-white/8 border border-slate-700/50'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
