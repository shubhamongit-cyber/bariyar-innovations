import React, { useEffect, useRef } from 'react';

export const AnimatedCounter = ({ 
  target, 
  decimals = 0, 
  duration = 1800, 
  prefix = '', 
  suffix = '',
  className = ''
}) => {
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const format = (num) => {
      const val = decimals > 0 ? num.toFixed(decimals) : Math.floor(num).toString();
      return `${prefix}${val}${suffix}`;
    };

    // Set initial target text to avoid layout jumps
    node.textContent = format(target);

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const startTime = performance.now();
          const startVal = 0;
          const endVal = target;

          const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);

          let rafId;
          const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuart(progress);
            
            const currentVal = startVal + (endVal - startVal) * easedProgress;
            if (node) {
              node.textContent = format(currentVal);
            }

            if (progress < 1) {
              rafId = requestAnimationFrame(updateCount);
            } else if (node) {
              node.textContent = format(endVal);
            }
          };

          rafId = requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [target, decimals, duration, prefix, suffix]);

  const initialVal = decimals > 0 ? target.toFixed(decimals) : Math.floor(target).toString();

  return (
    <span ref={elementRef} className={`animated-counter-value ${className}`}>
      {prefix}{initialVal}{suffix}
    </span>
  );
};
