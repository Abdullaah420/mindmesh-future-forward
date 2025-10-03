import React, { useEffect, useState } from 'react';

const ScrollBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity1 = Math.max(0, 1 - scrollY / 800);
  const opacity2 = Math.max(0, Math.min(1, (scrollY - 400) / 800));
  const opacity3 = Math.max(0, Math.min(1, (scrollY - 1200) / 800));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Layer 1 - Hero Section */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: opacity1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div 
          className="absolute top-20 right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-40 left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
      </div>

      {/* Layer 2 - Services/Portfolio Section */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: opacity2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 via-background to-accent/20" />
        <div 
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl"
          style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.2}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          style={{ transform: `translate(-${scrollY * 0.15}px, ${scrollY * 0.25}px)` }}
        />
      </div>

      {/* Layer 3 - Contact Section */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: opacity3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-bl from-accent/20 via-background to-primary/20" />
        <div 
          className="absolute top-1/3 right-1/3 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${(i * 23) % 100}%`,
              top: `${(i * 17) % 100}%`,
              transform: `translateY(${scrollY * (0.1 + (i % 5) * 0.05)}px)`,
              animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.1}px)`
        }}
      />
    </div>
  );
};

export default ScrollBackground;