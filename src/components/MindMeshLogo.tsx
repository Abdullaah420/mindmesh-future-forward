import React from 'react';

interface MindMeshLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const MindMeshLogo: React.FC<MindMeshLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Animated Logo Icon */}
      <div className={`relative ${sizeClasses[size]} animate-pulse-glow`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Ring */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth="2"
            className="animate-spin"
            style={{ animationDuration: '20s' }}
          />
          
          {/* Inner Mesh Pattern */}
          <g className="opacity-80">
            <path
              d="M20 20 L80 20 L80 80 L20 80 Z"
              fill="none"
              stroke="url(#gradient2)"
              strokeWidth="1"
              opacity="0.6"
            />
            <path
              d="M20 50 L80 50 M50 20 L50 80"
              stroke="url(#gradient2)"
              strokeWidth="1"
              opacity="0.8"
            />
            <path
              d="M30 30 L70 70 M70 30 L30 70"
              stroke="url(#gradient2)"
              strokeWidth="1"
              opacity="0.4"
            />
          </g>
          
          {/* Central Node */}
          <circle
            cx="50"
            cy="50"
            r="8"
            fill="url(#gradient3)"
            className="animate-pulse"
          />
          
          {/* Connection Points */}
          <circle cx="30" cy="30" r="3" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="70" cy="30" r="3" fill="hsl(var(--secondary))" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <circle cx="70" cy="70" r="3" fill="hsl(var(--accent))" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
          <circle cx="30" cy="70" r="3" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="50%" stopColor="hsl(var(--secondary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--secondary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
            <radialGradient id="gradient3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      
      {/* Logo Text */}
      <div className="flex flex-col">
        <span className={`font-orbitron font-bold gradient-text ${textSizeClasses[size]} leading-none`}>
          MindMesh
        </span>
        <span className="text-xs text-muted-foreground font-inter tracking-widest uppercase">
          Software House
        </span>
      </div>
    </div>
  );
};

export default MindMeshLogo;