import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useKeyboardControls, Html, Text } from '@react-three/drei';
import * as THREE from 'three';

interface CharacterProps {
  input: { x: number, y: number };
}

export function Character({ input }: CharacterProps) {
  const group = useRef<THREE.Group>(null);
  const bodyMesh = useRef<THREE.Mesh>(null);
  const { camera } = useThree();
  
  // Movement parameters
  const speed = 0.15;
  const rotationSpeed = 0.1;
  
  // Smooth follow camera
  const cameraOffset = new THREE.Vector3(0, 3, 6);
  const targetCameraPos = new THREE.Vector3();
  const currentVelocity = useRef(new THREE.Vector3());
  
  useFrame((state) => {
    if (!group.current) return;
    
    // 1. Handle Movement
    const moveX = input.x;
    const moveY = input.y; // This is actually Z in 3D space
    
    if (Math.abs(moveX) > 0.01 || Math.abs(moveY) > 0.01) {
      // Rotate character to face movement direction
      const angle = Math.atan2(moveX, moveY);
      
      // Smooth rotation
      const targetRotation = angle;
      // Simple lerp for rotation - in a real game use Quaternions
      group.current.rotation.y = targetRotation;
      
      // Move forward in the direction we are facing (or rather, just move based on input relative to world for simplicity first)
      // Actually, for a simple portfolio, direct mapping input to world movement is easier to control
      group.current.position.x += moveX * speed;
      group.current.position.z += moveY * speed;
      
      // Bobbing animation
      if (bodyMesh.current) {
        bodyMesh.current.position.y = 0.5 + Math.sin(state.clock.elapsedTime * 10) * 0.05;
      }
    } else {
       // Idle hover
       if (bodyMesh.current) {
        bodyMesh.current.position.y = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.02;
      }
    }

    // 2. Camera Follow Logic
    // Calculate target camera position based on character position
    targetCameraPos.copy(group.current.position).add(cameraOffset);
    
    // Smoothly interpolate camera position
    camera.position.lerp(targetCameraPos, 0.1);
    
    // Look at character (slightly above)
    const lookAtTarget = group.current.position.clone().add(new THREE.Vector3(0, 1, 0));
    camera.lookAt(lookAtTarget);
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      {/* Character Visual Representation - A cool floating drone/capsule */}
      <mesh ref={bodyMesh} position={[0, 0.5, 0]} castShadow>
        <capsuleGeometry args={[0.3, 0.6, 4, 8]} />
        <meshStandardMaterial color="#ff4d8d" emissive="#ff4d8d" emissiveIntensity={0.2} roughness={0.3} metalness={0.8} />
      </mesh>
      
      {/* Shadow blob */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.05, 0]}>
        <circleGeometry args={[0.3, 16]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.3} />
      </mesh>
      
      {/* Label above player */}
      <Html position={[0, 1.5, 0]} center distanceFactor={10}>
         <div className="bg-black/50 text-white px-2 py-1 rounded text-xs backdrop-blur-md font-bold whitespace-nowrap">
           YOU
         </div>
      </Html>
    </group>
  );
}
