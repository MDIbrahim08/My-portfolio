import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, MeshReflectorMaterial, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import skyboxUrl from '@assets/generated_images/stylized_pink_sunset_panorama_for_3d_skybox.png';

export function World() {
  const texture = useTexture(skyboxUrl);
  texture.mapping = THREE.EquirectangularReflectionMapping;

  return (
    <group>
      {/* Environment Background - Using the texture */}
      <primitive attach="background" object={texture} />
      
      {/* Ambient Light for base visibility */}
      <ambientLight intensity={0.7} color="#ffd1dc" />
      
      {/* Main Sun Light */}
      <directionalLight 
        position={[10, 20, 10]} 
        intensity={1.5} 
        color="#ffaa88" 
        castShadow 
        shadow-mapSize={[2048, 2048]}
      >
        <orthographicCamera attach="shadow-camera" args={[-20, 20, 20, -20]} />
      </directionalLight>

      {/* Fog for depth - Matches the pinkish hue of the skybox */}
      <fog attach="fog" args={['#ffdede', 5, 40]} />

      {/* Ground with Reflection */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#202020"
          metalness={0.5}
          mirror={0.5} 
        />
      </mesh>

      {/* City Elements */}
      <BuildingBlock position={[-5, 0, -8]} scale={[4, 10, 4]} color="#ff9eb5" label="ABOUT" />
      <BuildingBlock position={[6, 0, -5]} scale={[3, 7, 3]} color="#ffb7ce" label="PROJECTS" />
      <BuildingBlock position={[-2, 0, -15]} scale={[6, 15, 4]} color="#ff8fab" label="CONTACT" />
      <BuildingBlock position={[8, 0, -12]} scale={[3, 12, 3]} color="#ffc2d1" />
      
      {/* Decorative scattered blocks */}
      <BuildingBlock position={[-10, 0, 5]} scale={[2, 4, 2]} color="#ffffff" />
      <BuildingBlock position={[12, 0, 2]} scale={[2, 3, 2]} color="#ffffff" />
      
      {/* Floating 3D Text Header in the sky */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5} position={[0, 8, -20]}>
        <Text
          font="https://fonts.gstatic.com/s/syne/v16/8vII7w4yYyE4wyaV.woff"
          fontSize={8}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.2}
          outlineColor="#ff4d8d"
        >
          PORTFOLIO
        </Text>
      </Float>
      
       <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5} position={[0, 3, -15]}>
        <Text
          font="https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459Wlhyw.woff"
          fontSize={1.5}
          color="#333"
          anchorX="center"
          anchorY="middle"
        >
          Creative Developer
        </Text>
      </Float>

    </group>
  );
}

function BuildingBlock({ position, scale, color, label }: { position: [number, number, number], scale: [number, number, number], color: string, label?: string }) {
  return (
    <group position={position}>
      <mesh castShadow receiveShadow position={[0, scale[1] / 2, 0]}>
        <boxGeometry args={scale} />
        <meshStandardMaterial color={color} />
      </mesh>
      
      {label && (
        <Float speed={4} rotationIntensity={0.2} floatIntensity={0.5} position={[0, scale[1] + 1.5, 0]}>
          <Text
            font="https://fonts.gstatic.com/s/syne/v16/8vII7w4yYyE4wyaV.woff"
            fontSize={1}
            color="white"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.05}
            outlineColor={color}
          >
            {label}
          </Text>
           {/* Down Arrow */}
           <Text position={[0, -0.8, 0]} fontSize={0.8} color={color}>
            ▼
           </Text>
        </Float>
      )}
    </group>
  );
}
