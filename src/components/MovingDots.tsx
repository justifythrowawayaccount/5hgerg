import React from 'react';

const MovingDots = () => {
  // Generate random positions and animation delays for dots
  const dots = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2, // 2-6px
    left: Math.random() * 100,
    top: Math.random() * 100,
    animationDelay: Math.random() * 20,
    animationDuration: Math.random() * 10 + 15, // 15-25s
    opacity: Math.random() * 0.6 + 0.2, // 0.2-0.8
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      {/* Animated dots */}
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full bg-green-400 animate-float"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            opacity: dot.opacity,
            animationDelay: `${dot.animationDelay}s`,
            animationDuration: `${dot.animationDuration}s`,
          }}
        />
      ))}
      
      {/* Additional larger dots with different colors */}
      {Array.from({ length: 20 }, (_, i) => {
        const colors = ['bg-green-400', 'bg-cyan-400', 'bg-purple-400', 'bg-gray-500'];
        const color = colors[i % colors.length];
        return (
          <div
            key={`large-${i}`}
            className={`absolute rounded-full ${color} animate-pulse-slow`}
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        );
      })}

      {/* Connecting lines that appear occasionally */}
      <svg className="absolute inset-0 w-full h-full">
        {Array.from({ length: 15 }, (_, i) => (
          <line
            key={i}
            x1={`${Math.random() * 100}%`}
            y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`}
            y2={`${Math.random() * 100}%`}
            stroke="rgba(74, 222, 128, 0.2)"
            strokeWidth="0.5"
            className="animate-fade-in-out"
            style={{
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 5 + 3}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default MovingDots;