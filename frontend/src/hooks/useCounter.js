import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number from 0 to `end` over `duration` ms when element enters viewport.
 * Returns [ref, value]. Attach ref to the element you want to observe.
 */
export default function useCounter(end, { duration = 1800, decimals = 0, suffix = '', prefix = '' } = {}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const startTime = performance.now();
          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutCubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(end * eased);
            if (progress < 1) requestAnimationFrame(animate);
            else setValue(end);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  const formatted = `${prefix}${value.toFixed(decimals)}${suffix}`;
  return [ref, formatted, value];
}
