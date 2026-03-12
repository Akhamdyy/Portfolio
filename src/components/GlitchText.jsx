import React from 'react';

export default function GlitchText({ text, className = "" }) {
  return (
    <div className={`relative inline-block group cursor-default ${className}`}>
      {/* 1. Main Text */}
      <span className="relative z-10">{text}</span>

      {/* 2. Cyan Glitch Layer (Left/Up) */}
      <span 
        className="absolute top-0 left-0 -z-10 text-cyan-400 opacity-0 group-hover:opacity-70 animate-none group-hover:animate-glitch-1 transition-opacity select-none"
        aria-hidden="true"
      >
        {text}
      </span>

      {/* 3. Magenta Glitch Layer (Right/Down) */}
      <span 
        className="absolute top-0 left-0 -z-10 text-rose-500 opacity-0 group-hover:opacity-70 animate-none group-hover:animate-glitch-2 transition-opacity select-none"
        aria-hidden="true"
      >
        {text}
      </span>
    </div>
  );
}