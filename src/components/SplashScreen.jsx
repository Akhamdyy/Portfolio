import { useEffect, useRef } from 'react';

/**
 * SplashScreen — shown once on first load, then fades out.
 * No React state updates during animation; CSS handles everything.
 * `onDone` is called after the exit animation completes.
 */
export default function SplashScreen({ onDone }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    // bar finishes at 1.5s, pop animation runs 0.55s → exit at ~2.2s
    const exitTimer = setTimeout(() => {
      el.classList.add('splash-exit');
    }, 2200);

    // After exit transition (700ms), unmount
    const doneTimer = setTimeout(() => {
      onDone();
    }, 2200 + 700);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div ref={rootRef} className="splash-root">
      {/* Ambient glow behind logo */}
      <div className="splash-glow" />

      <div className="splash-content">
        <img
          src="/logo.png"
          alt="AK Logo"
          className="splash-logo"
          draggable={false}
        />
        {/* Subtle loading bar beneath logo */}
        <div className="splash-bar-track">
          <div className="splash-bar-fill" />
        </div>
      </div>
    </div>
  );
}
