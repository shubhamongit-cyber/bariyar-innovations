import React, { useEffect, useState, useRef } from 'react';

export const AnimatedCounter = ({ 
  target, 
  decimals = 0, 
  duration = 2000, 
  prefix = '', 
  suffix = '',
  className = ''
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const startTime = performance.now();
          const startVal = 0;
          const endVal = target;

          // Smooth exponential ease-out curve
          const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);

          const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuart(progress);
            
            const currentVal = startVal + (endVal - startVal) * easedProgress;
            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setCount(endVal);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [target, duration]);

  const formattedValue = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toString();

  return (
    <span ref={elementRef} className={`animated-counter-value ${className}`}>
      {prefix}{formattedValue}{suffix}
    </span>
  );
};
