import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let mx = -200, my = -200; // real mouse coords
    let rx = -200, ry = -200; // ring lerped coords
    let ringSize = 36;
    let rafId;

    const lerp = (a, b, n) => a + (b - a) * n;

    // RAF only moves the RING (lerped lag effect)
    const tick = () => {
      rx = lerp(rx, mx, 0.18);
      ry = lerp(ry, my, 0.18);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - ringSize / 2}px, ${ry - ringSize / 2}px)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;

      // DOT snaps instantly — update synchronously in the event handler
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
      }

      const isHovered = !!e.target.closest(
        'a, button, [role="button"], input, textarea, label, select'
      );
      const newSize = isHovered ? 52 : 36;
      if (newSize !== ringSize) {
        ringSize = newSize;
        if (ringRef.current) {
          ringRef.current.style.width  = `${ringSize}px`;
          ringRef.current.style.height = `${ringSize}px`;
          ringRef.current.style.borderColor = isHovered
            ? 'rgba(96,165,250,0.8)'
            : 'rgba(96,165,250,0.35)';
        }
        if (dotRef.current) {
          dotRef.current.style.backgroundColor = isHovered ? '#60a5fa' : '#94a3b8';
        }
      }
    };

    const onLeave = () => {
      if (dotRef.current)  dotRef.current.style.opacity  = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };
    const onEnter = () => {
      if (dotRef.current)  dotRef.current.style.opacity  = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };
    const onDown = () => { if (ringRef.current) ringRef.current.style.scale = '0.82'; };
    const onUp   = () => { if (ringRef.current) ringRef.current.style.scale = '1'; };

    rafId = requestAnimationFrame(tick);
    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  return (
    <>
      {/* Ring — lags via lerp */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 36, height: 36,
          borderRadius: '50%',
          border: '1px solid rgba(96,165,250,0.35)',
          pointerEvents: 'none',
          zIndex: 9998,
          willChange: 'transform',
          transition: 'width 0.18s ease, height 0.18s ease, border-color 0.18s ease, scale 0.12s ease',
        }}
      />
      {/* Dot — instant */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 6, height: 6,
          borderRadius: '50%',
          backgroundColor: '#94a3b8',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          transition: 'background-color 0.15s ease',
        }}
      />
    </>
  );
}
