import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-800/60 bg-slate-950">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="AK" className="h-7 w-7 opacity-60" />
          <div>
            <p className="text-sm font-semibold text-slate-300">Ali Khaled</p>
            <p className="text-xs text-slate-600 font-mono mt-0.5">Software Engineer · Cairo, Egypt</p>
          </div>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3">
          {[
            { href: "https://github.com/Akhamdyy", icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/akhamdy/", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:alikhaledhamdy@gmail.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-300 hover:bg-white/5 transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-700 font-mono">
          &copy; {currentYear} · Built with React &amp; Vite
        </p>
      </div>
    </footer>
  );
}
