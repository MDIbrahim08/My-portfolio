import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useCallback } from 'react';
import { Character } from './Character';
import { World } from './World';
import { Joystick } from './Joystick';
import { Loader } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, DepthOfField } from '@react-three/postprocessing';

export default function Scene3D() {
  const [joystickInput, setJoystickInput] = useState({ x: 0, y: 0 });
  const [keyboardInput, setKeyboardInput] = useState({ x: 0, y: 0 });

  const handleJoystickMove = useCallback((x: number, y: number) => {
    setJoystickInput({ x, y });
  }, []);

  const handleJoystickStop = useCallback(() => {
    setJoystickInput({ x: 0, y: 0 });
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch(e.key.toLowerCase()) {
      case 'arrowup': case 'w': setKeyboardInput(prev => ({ ...prev, y: -1 })); break;
      case 'arrowdown': case 's': setKeyboardInput(prev => ({ ...prev, y: 1 })); break;
      case 'arrowleft': case 'a': setKeyboardInput(prev => ({ ...prev, x: -1 })); break;
      case 'arrowright': case 'd': setKeyboardInput(prev => ({ ...prev, x: 1 })); break;
    }
  }, []);

  const handleKeyUp = useCallback((e: React.KeyboardEvent) => {
    switch(e.key.toLowerCase()) {
      case 'arrowup': case 'w': case 'arrowdown': case 's': setKeyboardInput(prev => ({ ...prev, y: 0 })); break;
      case 'arrowleft': case 'a': case 'arrowright': case 'd': setKeyboardInput(prev => ({ ...prev, x: 0 })); break;
    }
  }, []);

  const input = {
    x: joystickInput.x || keyboardInput.x,
    y: joystickInput.y || keyboardInput.y
  };

  return (
    <div 
      className="w-full h-full relative outline-none bg-black" 
      onKeyDown={handleKeyDown} 
      onKeyUp={handleKeyUp} 
      tabIndex={0}
    >
      <Canvas shadows camera={{ position: [0, 5, 10], fov: 45 }}>
        <Suspense fallback={null}>
          <World />
          <Character input={input} />
          <EffectComposer>
            <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
            <Bloom luminanceThreshold={1} luminanceSmoothing={0.9} height={300} intensity={0.5} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>
        </Suspense>
      </Canvas>
      <Loader />

      {/* Immersive UI Overlay matching reference */}
      <div className="absolute inset-0 pointer-events-none p-8 flex flex-col justify-between">
        <div className="flex justify-between items-start pointer-events-auto">
          <div className="animate-in slide-in-from-top duration-1000">
            <h1 className="font-display text-8xl text-white font-extrabold tracking-tighter leading-none">HI!</h1>
            <div className="mt-4 max-w-sm bg-black/20 backdrop-blur-xl border border-white/10 p-6 rounded-lg">
              <p className="font-body text-white/90 text-lg leading-relaxed">
                I'm Sébastien, a creative engineer. Explore this world to discover my work.
              </p>
            </div>
          </div>
          <button className="bg-white/5 backdrop-blur-2xl border border-white/20 text-white w-12 h-12 rounded-full flex flex-col items-center justify-center gap-1 hover:bg-white/10 transition-all">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>

        <div className="flex justify-between items-end">
           <div className="pointer-events-auto opacity-80 hover:opacity-100 transition-opacity">
             <Joystick onMove={handleJoystickMove} onStop={handleJoystickStop} />
           </div>
           
           <div className="flex flex-col items-end gap-2 text-white/40 font-bold tracking-widest text-xs pointer-events-auto">
              <div className="flex gap-1 h-8 items-end">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1 bg-white rounded-full animate-pulse" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 100}ms` }}></div>
                ))}
              </div>
              <p>SOUND ON</p>
           </div>
        </div>
      </div>
    </div>
  );
}
