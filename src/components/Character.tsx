import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

interface CharacterProps {
  input: { x: number, y: number };
}

export function Character({ input }: CharacterProps) {
  const group = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Group>(null);
  const { camera } = useThree();
  
  const speed = 0.12;
  const cameraOffset = new THREE.Vector3(0, 2.5, 5);
  const targetCameraPos = new THREE.Vector3();
  
  useFrame((state) => {
    if (!group.current || !bodyRef.current) return;
    
    const moveX = input.x;
    const moveZ = input.y;
    
    if (Math.abs(moveX) > 0.01 || Math.abs(moveZ) > 0.01) {
      const angle = Math.atan2(moveX, moveZ);
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, angle, 0.1);
      
      group.current.position.x += moveX * speed;
      group.current.position.z += moveZ * speed;
      
      // Walking bob
      bodyRef.current.position.y = Math.sin(state.clock.elapsedTime * 8) * 0.05;
      bodyRef.current.rotation.x = 0.1; // Lean forward
    } else {
      bodyRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.02;
      bodyRef.current.rotation.x = 0;
    }

    targetCameraPos.copy(group.current.position).add(cameraOffset);
    camera.position.lerp(targetCameraPos, 0.08);
    const lookAtTarget = group.current.position.clone().add(new THREE.Vector3(0, 1.2, 0));
    camera.lookAt(lookAtTarget);
  });

  return (
    <group ref={group}>
      <group ref={bodyRef}>
        {/* Stylized Humanoid - Better than a capsule */}
        {/* Head */}
        <mesh position={[0, 1.6, 0]} castShadow>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#333" roughness={0.3} />
        </mesh>
        {/* Torso */}
        <mesh position={[0, 1.1, 0]} castShadow>
          <capsuleGeometry args={[0.2, 0.6, 4, 8]} />
          <meshStandardMaterial color="#222" roughness={0.5} />
        </mesh>
        {/* Legs */}
        <mesh position={[-0.1, 0.4, 0]} castShadow>
          <capsuleGeometry args={[0.07, 0.6, 4, 8]} />
          <meshStandardMaterial color="#111" />
        </mesh>
        <mesh position={[0.1, 0.4, 0]} castShadow>
          <capsuleGeometry args={[0.07, 0.6, 4, 8]} />
          <meshStandardMaterial color="#111" />
        </mesh>
      </group>
      
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <circleGeometry args={[0.4, 32]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}
