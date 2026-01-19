import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useCallback } from 'react';
import { Character } from './Character';
import { World } from './World';
import { Joystick } from './Joystick';
import { Loader } from '@react-three/drei';

export default function Scene3D() {
  // Input state
  const [joystickInput, setJoystickInput] = useState({ x: 0, y: 0 });
  const [keyboardInput, setKeyboardInput] = useState({ x: 0, y: 0 });

  // Joystick handlers
  const handleJoystickMove = useCallback((x: number, y: number) => {
    setJoystickInput({ x, y });
  }, []);

  const handleJoystickStop = useCallback(() => {
    setJoystickInput({ x: 0, y: 0 });
  }, []);

  // Keyboard handlers (simple implementation)
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch(e.key) {
      case 'ArrowUp': case 'w': setKeyboardInput(prev => ({ ...prev, y: -1 })); break;
      case 'ArrowDown': case 's': setKeyboardInput(prev => ({ ...prev, y: 1 })); break;
      case 'ArrowLeft': case 'a': setKeyboardInput(prev => ({ ...prev, x: -1 })); break;
      case 'ArrowRight': case 'd': setKeyboardInput(prev => ({ ...prev, x: 1 })); break;
    }
  }, []);

  const handleKeyUp = useCallback((e: React.KeyboardEvent) => {
    switch(e.key) {
      case 'ArrowUp': case 'w': case 'ArrowDown': case 's': setKeyboardInput(prev => ({ ...prev, y: 0 })); break;
      case 'ArrowLeft': case 'a': case 'ArrowRight': case 'd': setKeyboardInput(prev => ({ ...prev, x: 0 })); break;
    }
  }, []);

  // Merge inputs
  const input = {
    x: joystickInput.x || keyboardInput.x,
    y: joystickInput.y || keyboardInput.y
  };

  return (
    <div 
      className="w-full h-full relative" 
      onKeyDown={handleKeyDown} 
      onKeyUp={handleKeyUp} 
      tabIndex={0} // Make div focusable for keyboard events
    >
      <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
        <Suspense fallback={null}>
          <World />
          <Character input={input} />
        </Suspense>
      </Canvas>
      <Loader />

      {/* UI Overlay */}
      <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between">
        {/* Header */}
        <div className="flex justify-between items-start pointer-events-auto">
          <div>
            <h1 className="font-display text-4xl text-white drop-shadow-md font-bold tracking-tighter">HI!</h1>
            <p className="font-body text-white/90 text-sm max-w-[200px] mt-2 drop-shadow-sm">
              Welcome to my digital space. Explore the world to see my work.
            </p>
          </div>
          <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-white/20 transition-colors">
            MENU
          </button>
        </div>

        {/* Footer / Controls */}
        <div className="flex justify-between items-end">
           <div className="pointer-events-auto">
             <Joystick onMove={handleJoystickMove} onStop={handleJoystickStop} />
             <p className="text-white/50 text-xs mt-2 ml-4">DRAG TO MOVE</p>
           </div>
           
           <div className="flex gap-4 pointer-events-auto">
              <div className="text-right text-white/80 text-sm">
                <p>SOUND</p>
                <div className="flex gap-1 justify-end mt-1">
                  <div className="w-1 h-4 bg-white rounded-full animate-pulse"></div>
                  <div className="w-1 h-6 bg-white rounded-full animate-pulse delay-75"></div>
                  <div className="w-1 h-3 bg-white rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
