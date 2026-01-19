import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, MeshReflectorMaterial, useTexture, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import skyboxUrl from '@assets/generated_images/abstract_obsidian_and_gold_landscape_panorama_skybox.png';

export function World() {
  const texture = useTexture(skyboxUrl);
  texture.mapping = THREE.EquirectangularReflectionMapping;

  return (
    <group>
      <primitive attach="background" object={texture} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#ffd700" />
      <spotLight 
        position={[0, 20, 0]} 
        intensity={5} 
        color="#ffd700" 
        angle={0.5} 
        penumbra={1} 
        castShadow 
      />
      <fog attach="fog" args={['#000', 5, 45]} />

      {/* Obsidian Mirror Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[400, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={100}
          roughness={1}
          depthScale={1.5}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#0a0a0a"
          metalness={1}
        />
      </mesh>

      {/* Floating Monoliths (The Portals) */}
      <PortalMonolith position={[-8, 0, -10]} label="THE VISION" sub="ABOUT ME" color="#ffd700" />
      <PortalMonolith position={[8, 0, -5]} label="THE WORKS" sub="PORTFOLIO" color="#fff" />
      <PortalMonolith position={[0, 0, -20]} label="THE LINK" sub="CONTACT" color="#ffd700" />

      {/* Atmospheric Particles */}
      <Float speed={5} rotationIntensity={2} floatIntensity={10}>
        <mesh position={[10, 5, -15]}>
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshBasicMaterial color="#ffd700" />
        </mesh>
      </Float>
    </group>
  );
}

function PortalMonolith({ position, label, sub, color }: any) {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.y = Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  return (
    <group position={position}>
      <mesh ref={mesh} castShadow>
        <boxGeometry args={[4, 12, 0.5]} />
        <MeshDistortMaterial
          color="#111"
          speed={2}
          distort={0.2}
          metalness={1}
          roughness={0}
        />
      </mesh>
      
      {/* Glow Edge */}
      <mesh position={[0, 0, 0.3]}>
        <planeGeometry args={[4.1, 12.1]} />
        <meshBasicMaterial color={color} transparent opacity={0.05} />
      </mesh>

      <group position={[0, 14, 0]}>
        <Text 
          fontSize={0.4} 
          color={color} 
          letterSpacing={0.5}
        >
          {sub}
        </Text>
        <Text 
          position={[0, -0.8, 0]} 
          fontSize={1.2} 
          color="white" 
          fontWeight="bold"
        >
          {label}
        </Text>
      </group>
    </group>
  );
}
