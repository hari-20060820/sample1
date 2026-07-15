"use client";
import { useEffect, useState } from "react";

export function ColorShiftShoe({ src }: { src: string }) {
  const [hue, setHue] = useState(0);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    let previous = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking || Math.abs(window.scrollY - previous) < 40) return;
      ticking = true;
      requestAnimationFrame(() => {
        previous = window.scrollY;
        setHue(Math.floor(Math.random() * 360));
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    setRotation({ x, y });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      className="relative h-full w-full"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.02)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.1s ease-out"
        }}
      >
        <img 
          src={src} 
          alt="Stride Lab performance shoe" 
          className="relative h-full w-full object-contain transition-[filter] duration-500 motion-reduce:transition-none drop-shadow-2xl" 
          style={{ 
            filter: `hue-rotate(${hue}deg) saturate(1.45) contrast(1.05) drop-shadow(0 20px 40px rgba(0,0,0,0.4))`,
            textShadow: "0 20px 40px rgba(0,0,0,0.3)"
          }} 
        />
      </div>
    </div>
  );
}
