import { useState, useEffect, useRef } from 'react';

interface JoystickProps {
  onMove: (x: number, y: number) => void;
  onStop: () => void;
}

export function Joystick({ onMove, onStop }: JoystickProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const knobRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleStart = (e:  MouseEvent | TouchEvent) => {
      setActive(true);
      updatePosition(e);
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!active) return;
      updatePosition(e);
    };

    const handleEnd = () => {
      setActive(false);
      setPosition({ x: 0, y: 0 });
      onStop();
    };

    const updatePosition = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      const rect = container.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      let clientX, clientY;
      
      if ('touches' in e) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }

      const dx = clientX - rect.left - centerX;
      const dy = clientY - rect.top - centerY;
      
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = rect.width / 2;
      
      let x = dx;
      let y = dy;
      
      if (distance > maxDistance) {
        x = (dx / distance) * maxDistance;
        y = (dy / distance) * maxDistance;
      }
      
      setPosition({ x, y });
      
      // Normalize output -1 to 1
      onMove(x / maxDistance, y / maxDistance);
    };

    container.addEventListener('mousedown', handleStart);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    
    container.addEventListener('touchstart', handleStart, { passive: false });
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', handleEnd);

    return () => {
      container.removeEventListener('mousedown', handleStart);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      
      container.removeEventListener('touchstart', handleStart);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [active, onMove, onStop]);

  return (
    <div 
      ref={containerRef}
      className="w-32 h-32 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm relative touch-none pointer-events-auto"
      style={{ boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}
    >
      <div 
        ref={knobRef}
        className="w-12 h-12 rounded-full bg-white/80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{ 
          transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
          boxShadow: '0 0 10px rgba(255,255,255,0.5)'
        }}
      />
    </div>
  );
}
