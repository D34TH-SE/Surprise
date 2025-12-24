
import React from 'react';

export const HangingLights: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-24 overflow-hidden pointer-events-none z-10 flex justify-around px-4">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="relative flex flex-col items-center">
          <div className="w-0.5 h-8 bg-slate-800"></div>
          <div 
            className={`w-4 h-6 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-pulse`}
            style={{
              backgroundColor: i % 3 === 0 ? '#ef4444' : i % 3 === 1 ? '#eab308' : '#22c55e',
              animationDelay: `${i * 0.2}s`,
              animationDuration: '1.5s'
            }}
          />
        </div>
      ))}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-slate-800/50"></div>
    </div>
  );
};

export const CornerDecorations: React.FC = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-32 h-32 md:w-48 md:h-48 text-green-700/40 pointer-events-none z-0">
        <svg viewBox="0 0 200 200" fill="currentColor">
          <path d="M0,0 Q50,0 70,70 Q0,50 0,0 M20,0 Q60,10 80,80 Q10,60 20,0" />
          <circle cx="15" cy="15" r="8" fill="#ef4444" className="opacity-60" />
          <circle cx="35" cy="10" r="6" fill="#ef4444" className="opacity-60" />
        </svg>
      </div>
      <div className="fixed bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 text-green-700/40 pointer-events-none z-0 rotate-180">
        <svg viewBox="0 0 200 200" fill="currentColor">
          <path d="M0,0 Q50,0 70,70 Q0,50 0,0 M20,0 Q60,10 80,80 Q10,60 20,0" />
          <circle cx="15" cy="15" r="8" fill="#ef4444" className="opacity-60" />
          <circle cx="35" cy="10" r="6" fill="#ef4444" className="opacity-60" />
        </svg>
      </div>
    </>
  );
};

export const FloatingSparkles: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-yellow-200 rounded-full opacity-40 animate-float-up"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            bottom: `-20px`,
            animation: `floatUp ${Math.random() * 10 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.6; }
          100% { transform: translateY(-110vh) scale(0.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
};
