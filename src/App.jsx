import { Analytics } from "@vercel/analytics/react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Extras from './components/Extras';
import Connect from './components/Connect';
import ContactForm from './components/ContactForm'; // New Import
import Footer from './components/Footer';

function App() {
  return (
    <main className="font-sans antialiased bg-slate-950 selection:bg-blue-500/30">
      <Navbar />
      <div>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Extras />
        <Connect />
        <ContactForm /> {/* Rendered here */}
      </div>
      <Footer />
      <Analytics />
    </main>
  );
}

export default App;