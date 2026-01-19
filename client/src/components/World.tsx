import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, MeshReflectorMaterial, useTexture, Detailed } from '@react-three/drei';
import * as THREE from 'three';
import skyboxUrl from '@assets/generated_images/realistic_parisian_sunset_panorama_skybox.png';

export function World() {
  const texture = useTexture(skyboxUrl);
  texture.mapping = THREE.EquirectangularReflectionMapping;

  return (
    <group>
      <primitive attach="background" object={texture} />
      <ambientLight intensity={0.4} color="#ffd1dc" />
      <directionalLight 
        position={[20, 30, 10]} 
        intensity={2} 
        color="#ffaa88" 
        castShadow 
        shadow-mapSize={[4096, 4096]}
      />
      <fog attach="fog" args={['#ffaa88', 10, 50]} />

      {/* Realistic Parisian Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[200, 200]} />
        <MeshReflectorMaterial
          blur={[400, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={60}
          roughness={1}
          depthScale={1}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#151515"
          metalness={0.6}
        />
      </mesh>

      {/* Parisian Buildings */}
      <ParisianBuilding position={[-12, 0, -15]} height={12} width={6} color="#e8d1c5" label="ABOUT" />
      <ParisianBuilding position={[15, 0, -10]} height={10} width={5} color="#d9c5b2" label="PROJECTS" />
      <ParisianBuilding position={[0, 0, -25]} height={20} width={10} color="#f2e3d5" label="EXPERIENCE" />
      <ParisianBuilding position={[-20, 0, -5]} height={8} width={4} color="#c5b2a0" />
      
      {/* Decorative Assets */}
      <Float speed={2} floatIntensity={0.5} position={[0, 15, -40]}>
        <Text fontSize={15} color="white" outlineWidth={0.1} outlineColor="#ff4d8d">
          PARIS
        </Text>
      </Float>
    </group>
  );
}

function ParisianBuilding({ position, height, width, color, label }: any) {
  return (
    <group position={position}>
      {/* Main Structure */}
      <mesh castShadow receiveShadow position={[0, height / 2, 0]}>
        <boxGeometry args={[width, height, width]} />
        <meshStandardMaterial color={color} roughness={0.7} />
      </mesh>
      
      {/* Roof (Mansard style) */}
      <mesh castShadow position={[0, height + 1, 0]}>
        <coneGeometry args={[width * 0.7, 2, 4]} />
        <meshStandardMaterial color="#334" />
      </mesh>

      {/* Windows (simple emissive planes) */}
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[0, (i + 1) * (height / 6), width / 2 + 0.01]}>
          <planeGeometry args={[width * 0.6, 0.8]} />
          <meshStandardMaterial color="#fff" emissive="#ffaa00" emissiveIntensity={0.5} />
        </mesh>
      ))}

      {label && (
        <Float speed={3} position={[0, height + 4, 0]}>
          <Text fontSize={1.2} color="white" font="https://fonts.gstatic.com/s/syne/v16/8vII7w4yYyE4wyaV.woff">
            {label}
          </Text>
        </Float>
      )}
    </group>
  );
}
