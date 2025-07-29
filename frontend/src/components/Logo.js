import React from 'react';

const Logo = ({ className = "w-8 h-8" }) => {
  return (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Outer tire ring */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#dc2626"
          strokeWidth="8"
          className="animate-pulse-slow"
        />
        
        {/* Inner rim */}
        <circle
          cx="50"
          cy="50"
          r="25"
          fill="#1a1a1a"
          stroke="#ffffff"
          strokeWidth="2"
        />
        
        {/* Tire tread pattern */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
          <line
            key={index}
            x1={50 + 35 * Math.cos(angle * Math.PI / 180)}
            y1={50 + 35 * Math.sin(angle * Math.PI / 180)}
            x2={50 + 45 * Math.cos(angle * Math.PI / 180)}
            y2={50 + 45 * Math.sin(angle * Math.PI / 180)}
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
        
        {/* Center hub */}
        <circle
          cx="50"
          cy="50"
          r="8"
          fill="#dc2626"
          className="animate-pulse-slow"
        />
        
        {/* Spokes */}
        {[0, 60, 120, 180, 240, 300].map((angle, index) => (
          <line
            key={index}
            x1={50 + 8 * Math.cos(angle * Math.PI / 180)}
            y1={50 + 8 * Math.sin(angle * Math.PI / 180)}
            x2={50 + 20 * Math.cos(angle * Math.PI / 180)}
            y2={50 + 20 * Math.sin(angle * Math.PI / 180)}
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        ))}
      </svg>
    </div>
  );
};

export default Logo;