
import React, { useState } from 'react';
import { Gift } from 'lucide-react';

interface GiftBoxProps {
  onOpen: () => void;
}

const GiftBox: React.FC<GiftBoxProps> = ({ onOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative cursor-pointer group flex flex-col items-center justify-center py-12"
      onClick={onOpen}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>{`
        @keyframes wobble {
          0%, 100% { transform: rotate(-3deg) scale(1); }
          50% { transform: rotate(3deg) scale(1.05); }
        }
        .animate-wobble {
          animation: wobble 0.5s ease-in-out infinite;
        }
        .gift-shadow {
          filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.5));
        }
      `}</style>

      {/* Decorative Glow behind the box */}
      <div className={`absolute w-64 h-64 bg-violet-500/20 rounded-full blur-3xl transition-all duration-700 ${isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-50'}`}></div>

      {/* 2D Gift Box Illustration */}
      <div className={`relative z-10 transition-transform duration-500 ${isHovered ? 'animate-wobble' : 'hover:scale-105'}`}>
        <div className="relative w-48 h-48 md:w-56 md:h-56">
          {/* The Box Body */}
          <div className="absolute bottom-0 w-full h-4/5 bg-gradient-to-br from-violet-600 to-violet-800 rounded-xl shadow-2xl border-t-4 border-violet-500/30 overflow-hidden">
            {/* Vertical Ribbon */}
            <div className="absolute left-1/2 -translate-x-1/2 w-10 h-full bg-yellow-400 shadow-inner"></div>
            {/* Texture/Pattern */}
            <div className="absolute inset-0 opacity-10 flex flex-wrap gap-4 p-4">
               {[...Array(12)].map((_, i) => (
                 <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
               ))}
            </div>
          </div>

          {/* The Lid */}
          <div className={`absolute top-1/5 -left-2 -right-2 h-14 bg-gradient-to-br from-violet-500 to-violet-700 rounded-lg shadow-xl z-20 border-b-4 border-black/10 transition-transform duration-300 ${isHovered ? '-translate-y-4' : 'translate-y-0'}`}>
            {/* Lid Ribbon */}
            <div className="absolute left-1/2 -translate-x-1/2 w-12 h-full bg-yellow-400"></div>
          </div>

          {/* The Bow */}
          <div className={`absolute -top-6 left-1/2 -translate-x-1/2 flex justify-center items-center z-30 transition-transform duration-300 ${isHovered ? '-translate-y-6 scale-110' : 'translate-y-0'}`}>
             <div className="relative">
                {/* Left Loop */}
                <div className="absolute right-1 w-14 h-10 border-8 border-yellow-400 rounded-full -rotate-12 shadow-lg bg-yellow-400/10"></div>
                {/* Right Loop */}
                <div className="absolute left-1 w-14 h-10 border-8 border-yellow-400 rounded-full rotate-12 shadow-lg bg-yellow-400/10"></div>
                {/* Center Knot */}
                <div className="relative w-8 h-8 bg-yellow-500 rounded-lg shadow-md z-40 border border-yellow-300"></div>
             </div>
          </div>
        </div>
      </div>

      {/* Hint Text */}
      <div className={`mt-8 text-violet-200 font-medium tracking-widest uppercase text-sm transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-2'}`}>
        Click to Unbox
      </div>

      {/* Bursting Sparkles (shown on hover) */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1.5 h-1.5 bg-yellow-200 rounded-full animate-ping"
            style={{
              top: '40%',
              left: '50%',
              transform: `rotate(${i * 45}deg) translateY(-100px)`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: '1.5s'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GiftBox;
