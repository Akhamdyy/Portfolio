import { useState, useEffect, Suspense, lazy } from 'react';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// ── Critical above-the-fold — eager ──────────────────────────────────────────
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// ── Background / UI chrome — deferred (not needed for FCP) ───────────────────
const PerspectiveGrid = lazy(() => import('./components/PerspectiveGrid'));
const Cursor         = lazy(() => import('./components/Cursor'));
const ScrollProgress = lazy(() => import('./components/ScrollProgress'));

// ── Below-the-fold sections — deferred ───────────────────────────────────────
const Skills      = lazy(() => import('./components/Skills'));
const Experience  = lazy(() => import('./components/Experience'));
const LogicLab    = lazy(() => import('./components/LogicLab'));
const Projects    = lazy(() => import('./components/Projects'));
const Extras      = lazy(() => import('./components/Extras'));
const Connect     = lazy(() => import('./components/Connect'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Footer      = lazy(() => import('./components/Footer'));

// ── Interaction-only — only loaded when first triggered ───────────────────────
const Terminal   = lazy(() => import('./components/Terminal'));
const MatrixRain = lazy(() => import('./components/MatrixRain'));

function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  // Track whether each interaction-only component has ever been triggered,
  // so its chunk is only loaded on first use — not on initial page load.
  const [terminalEverOpened, setTerminalEverOpened] = useState(false);
  const [matrixEverShown, setMatrixEverShown] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);

  const openTerminal = () => {
    setTerminalEverOpened(true);
    setIsTerminalOpen((prev) => !prev);
  };

  const triggerMatrix = () => {
    setMatrixEverShown(true);
    setShowMatrix(true);
    setTimeout(() => setShowMatrix(false), 8000);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '`') {
        e.preventDefault();
        openTerminal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    /* 1. The BASE LAYER: solid background color */
    <main className="relative min-h-screen w-full font-sans antialiased bg-slate-950 text-slate-200 selection:bg-blue-500/30 overflow-x-hidden">

      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}

      {/* Custom cursor — desktop only (CSS hides default cursor via @media pointer:fine) */}
      <Suspense fallback={null}>
        <Cursor />
      </Suspense>

      {/* Scroll progress bar */}
      <Suspense fallback={null}>
        <ScrollProgress />
      </Suspense>

      {/* Noise grain overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* 2. THE BACKGROUND ARCHITECTURE: Fixed and low z-index */}
      <div className="fixed inset-0 z-0">
        <Suspense fallback={null}>
          <PerspectiveGrid />
        </Suspense>
      </div>

      {/* MatrixRain chunk only loaded after first sudo trigger */}
      {matrixEverShown && (
        <Suspense fallback={null}>
          <MatrixRain isActive={showMatrix} />
        </Suspense>
      )}

      {/* 3. THE TERMINAL: chunk only loaded after first open */}
      {terminalEverOpened && (
        <Suspense fallback={null}>
          <Terminal
            isOpen={isTerminalOpen}
            setIsOpen={setIsTerminalOpen}
            onSudo={triggerMatrix}
          />
        </Suspense>
      )}

      {/* 4. THE CONTENT LAYER: Must be relative z-10 and bg-transparent */}
      <div className="relative z-10 bg-transparent">
        <Navbar onTerminalClick={openTerminal} />

        <Hero />

        <Suspense fallback={null}>
          <Skills />
          <Experience />
          <LogicLab />
          <Projects />
          <Extras />
          <Connect />
          <ContactForm />
          <Footer />
        </Suspense>
      </div>

      <Analytics />
      <SpeedInsights />
    </main>
  );
}

export default App;
