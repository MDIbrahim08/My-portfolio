import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useCallback } from 'react';
import { Character } from './Character';
import { World } from './World';
import { Joystick } from './Joystick';
import { Loader } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, ChromaticAberration, Noise } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

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
      className="w-full h-full relative outline-none bg-black cursor-crosshair" 
      onKeyDown={handleKeyDown} 
      onKeyUp={handleKeyUp} 
      tabIndex={0}
    >
      <Canvas shadows camera={{ position: [0, 5, 10], fov: 40 }}>
        <Suspense fallback={null}>
          <World />
          <Character input={input} />
          <EffectComposer>
            <Bloom luminanceThreshold={1} intensity={1.5} levels={9} mipmapBlur />
            <ChromaticAberration offset={[0.002, 0.002]} blendFunction={BlendFunction.NORMAL} />
            <Noise opacity={0.05} />
            <Vignette eskil={false} offset={0.1} darkness={1.2} />
          </EffectComposer>
        </Suspense>
      </Canvas>
      <Loader />

      {/* Unique Avant-Garde UI */}
      <div className="absolute inset-0 pointer-events-none p-12 flex flex-col justify-between overflow-hidden">
        {/* Top Navigation / Branding */}
        <div className="flex justify-between items-start">
          <div className="animate-in slide-in-from-left duration-700">
            <h1 className="font-display text-2xl font-black tracking-tighter text-white mix-blend-difference">
              SÉBASTIEN<br/>LEMPENS
            </h1>
            <div className="h-px w-12 bg-primary mt-4"></div>
          </div>
          
          <div className="flex items-center gap-8 pointer-events-auto">
            <span className="text-[10px] tracking-[0.3em] text-white/40 font-bold uppercase">Archive // 2026</span>
            <button className="group relative">
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-4 h-0.5 bg-white mb-1 transition-all group-hover:bg-primary"></div>
                <div className="w-4 h-0.5 bg-white transition-all group-hover:bg-primary"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Center Minimalist Title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none opacity-20">
          <h2 className="font-display text-[20vw] font-black tracking-tightest leading-none text-white/5 select-none">
            VOID
          </h2>
        </div>

        {/* Bottom Status / Controls */}
        <div className="flex justify-between items-end">
           <div className="pointer-events-auto">
             <div className="mb-4 text-[10px] tracking-widest text-primary font-black uppercase flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
                Navigation Active
             </div>
             <Joystick onMove={handleJoystickMove} onStop={handleJoystickStop} />
           </div>
           
           <div className="flex flex-col items-end gap-6 pointer-events-auto">
              <div className="text-right">
                <p className="text-[10px] tracking-widest text-white/30 font-bold uppercase mb-2">Technical Engine</p>
                <p className="font-display text-lg text-white font-bold leading-none">R3F_v4.0.1</p>
              </div>
              
              <div className="flex gap-4 items-center">
                 <div className="h-12 w-[1px] bg-white/10"></div>
                 <div className="text-right">
                    <p className="text-white text-lg font-black tracking-tighter">PLAY</p>
                    <p className="text-primary text-[10px] font-bold tracking-widest uppercase">Audio Module</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
