import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Extras from './components/Extras';
import Footer from './components/Footer';

function App() {
  // We've enforced a dark theme for the high-tech look throughout the new components
  return (
    <main className="font-sans antialiased bg-slate-950 selection:bg-blue-500/30">
      <Navbar />
      <div>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Extras />
      </div>
      <Footer />
    </main>
  );
}

export default App;