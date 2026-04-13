import { useEffect, useRef } from 'react';

/**
 * Observe a single element and add `.is-visible` when it enters the viewport.
 * Use with `.reveal` CSS class for fade-up, or `.reveal-left` for slide-in-left.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.05, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

/**
 * Observe a parent container and add `.is-visible` to it when it enters the viewport.
 * Children should have `.reveal-item` class; nth-child CSS delays handle staggering.
 * Use `.reveal-group` on the container for fade-up children,
 * or `.reveal-group-left` for slide-in-left children.
 */
export function useRevealGroup(options = {}) {
  return useReveal(options);
}
