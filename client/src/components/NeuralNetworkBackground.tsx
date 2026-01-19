import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles() {
  const count = 100;
  const meshRef = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        sizeAttenuation={true}
        transparent
        opacity={0.2}
      />
    </points>
  );
}

function Lines() {
  const count = 40;
  const lines = useMemo(() => {
    return Array.from({ length: count }, () => {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      return { start, end };
    });
  }, []);

  return (
    <group>
      {lines.map((line, i) => (
        <line key={i}>
          <bufferGeometry attach="geometry" onUpdate={(self) => self.setFromPoints([line.start, line.end])} />
          <lineBasicMaterial attach="material" color="#ffffff" transparent opacity={0.05} />
        </line>
      ))}
    </group>
  );
}

export function NeuralNetworkBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Particles />
        <Lines />
      </Canvas>
    </div>
  );
}
