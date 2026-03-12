import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Extras from './components/Extras';
import Connect from './components/Connect';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Terminal from './components/Terminal';
import MatrixRain from './components/MatrixRain';
import PerspectiveGrid from './components/PerspectiveGrid'; 
import LogicLab from './components/LogicLab'; 

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);

  const triggerMatrix = () => {
    setShowMatrix(true);
    setTimeout(() => setShowMatrix(false), 8000);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '`') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    /* 1. The BASE LAYER: This is the only place with a solid background color */
    <main className="relative min-h-screen w-full font-sans antialiased bg-slate-950 text-slate-200 selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* 2. THE BACKGROUND ARCHITECTURE: Fixed and low z-index */}
      <div className="fixed inset-0 z-0">
        <PerspectiveGrid />
      </div>
      
      <MatrixRain isActive={showMatrix} />

      {/* 3. THE TERMINAL: High z-index to stay above everything when open */}
      <Terminal 
        isOpen={isTerminalOpen} 
        setIsOpen={setIsTerminalOpen} 
        onSudo={triggerMatrix} 
      />

      {/* 4. THE CONTENT LAYER: Must be relative z-10 and bg-transparent */}
      <div className="relative z-10 bg-transparent">
        <Navbar onTerminalClick={() => setIsTerminalOpen(true)} />
        
        {/* All these children MUST have 'bg-transparent' or no bg class at all */}
        <Hero />
        <Skills />
        <Experience />
        <LogicLab /> 
        <Projects />
        <Extras />
        <Connect />
        <ContactForm />
        <Footer />
      </div>

      <Analytics />
      <SpeedInsights />
    </main>
  );
}

export default App;