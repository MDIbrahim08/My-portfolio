import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function NeuralNetwork() {
  const { mouse, viewport } = useThree();
  const count = 80;
  const meshRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Generate random particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 25
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        )
      });
    }
    return temp;
  }, [count]);

  const positions = useMemo(() => new Float32Array(count * 3), [count]);
  const linePositions = useMemo(() => new Float32Array(count * count * 6), [count]);

  useFrame((state) => {
    // Update particle positions
    particles.forEach((p, i) => {
      p.position.add(p.velocity);

      // Boundary check
      if (Math.abs(p.position.x) > 12) p.velocity.x *= -1;
      if (Math.abs(p.position.y) > 12) p.velocity.y *= -1;
      if (Math.abs(p.position.z) > 12) p.velocity.z *= -1;

      // Mouse attraction/repulsion
      const mouseVec = new THREE.Vector3(mouse.x * viewport.width / 2, mouse.y * viewport.height / 2, 0);
      const distToMouse = p.position.distanceTo(mouseVec);
      if (distToMouse < 4) {
        const dir = p.position.clone().sub(mouseVec).normalize();
        p.position.add(dir.multiplyScalar(0.05));
      }

      positions[i * 3] = p.position.x;
      positions[i * 3 + 1] = p.position.y;
      positions[i * 3 + 2] = p.position.z;
    });

    if (meshRef.current) {
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Dynamic lines based on proximity
    let lineCount = 0;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dist = particles[i].position.distanceTo(particles[j].position);
        if (dist < 4) {
          linePositions[lineCount * 6] = particles[i].position.x;
          linePositions[lineCount * 6 + 1] = particles[i].position.y;
          linePositions[lineCount * 6 + 2] = particles[i].position.z;
          linePositions[lineCount * 6 + 3] = particles[j].position.x;
          linePositions[lineCount * 6 + 4] = particles[j].position.y;
          linePositions[lineCount * 6 + 5] = particles[j].position.z;
          lineCount++;
        }
      }
    }

    if (linesRef.current) {
      linesRef.current.geometry.setDrawRange(0, lineCount * 2);
      linesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.08} color="#ffffff" transparent opacity={0.4} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count * count}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#ffffff" transparent opacity={0.1} />
      </lineSegments>
    </group>
  );
}

export function NeuralNetworkBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <NeuralNetwork />
      </Canvas>
    </div>
  );
}
