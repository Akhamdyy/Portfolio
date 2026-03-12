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
import Terminal from './components/Terminal'; // Ensure you created this file!

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Global listener for the ` key to toggle the terminal
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
    <main className="font-sans antialiased bg-slate-950 selection:bg-blue-500/30">
      {/* Terminal Overlay */}
      <Terminal isOpen={isTerminalOpen} setIsOpen={setIsTerminalOpen} />

      {/* Pass the toggle function to Navbar for the icon click */}
      <Navbar onTerminalClick={() => setIsTerminalOpen(true)} />

      <div>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Extras />
        <Connect />
        <ContactForm />
      </div>

      <Footer />
      
      {/* Monitoring */}
      <Analytics />
      <SpeedInsights />
    </main>
  );
}

export default App;