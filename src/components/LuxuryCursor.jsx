import React, { useState, useEffect, useRef } from 'react';

const LuxuryCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  // Position data
  const mousePos = useRef({ x: 0, y: 0 }); // Real-time mouse
  const ringPos = useRef({ x: 0, y: 0 }); // Lagging aura

  useEffect(() => {
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setIsHidden(false);
      
      // Check if hovering over a clickable element
      const target = e.target;
      const isClickable = target.closest('button, a, .group, .cursor-pointer');
      setIsHovering(!!isClickable);
    };

    const onMouseLeave = () => setIsHidden(true);

    // THE BUTTER LOOP for the cursor
    const render = () => {
      // Linear Interpolation (Lerp) for the ring lag
      // ring = ring + (target - ring) * ease
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    const raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <style>{`
        body { cursor: none !important; }
        button, a { cursor: none !important; }
      `}</style>
      
      {/* 1. THE PRECISION DOT */}
      <div 
        ref={dotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 bg-[rgb(209,167,67)] rounded-full pointer-events-none z-[999] transition-opacity duration-300 ${isHidden ? 'opacity-0' : 'opacity-100'}`}
        style={{ transform: 'translate3d(-100%, -100%, 0)' }}
      />

      {/* 2. THE LAGGING AURA (RING) */}
      <div 
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[998] transition-all duration-500 ease-out border rounded-full ${
          isHidden ? 'opacity-0' : 'opacity-100'
        } ${
          isHovering 
          ? 'w-16 h-16 -ml-8 -mt-8 border-[rgb(209,167,67)] bg-[rgb(209,167,67)]/10 scale-100' 
          : 'w-10 h-10 -ml-5 -mt-5 border-white/30 scale-100'
        }`}
        style={{ 
          transform: 'translate3d(-100%, -100%, 0)',
        }}
      />
    </>
  );
};

export default LuxuryCursor;