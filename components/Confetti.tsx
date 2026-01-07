
import React, { useEffect } from 'react';
import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const ConfettiEffect: React.FC = () => {
  useEffect(() => {
    const duration = 7 * 1000;
    const animationEnd = Date.now() + duration;
    // Theme colors: Violet, Lavender, Indigo, White
    const colors = ['#7c3aed', '#a78bfa', '#c4b5fd', '#ffffff', '#ddd6fe'];
    const defaults = { startVelocity: 35, spread: 360, ticks: 100, zIndex: 50, colors: colors };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 60 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default ConfettiEffect;
