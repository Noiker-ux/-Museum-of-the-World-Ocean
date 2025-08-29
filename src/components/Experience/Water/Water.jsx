import vertexShader from "../../../shaders/water/vertex.glsl";
import fragmentShader from "../../../shaders/water/fragment.glsl";
import * as THREE from "three";
import { extend, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";
extend(THREE);
export default function Water() {
  const waterMaterial = useRef();
  const waterTexture = useTexture("/textures/water.jpg");
  waterTexture.repeat.set(51, 51);
  waterTexture.wrapS = THREE.RepeatWrapping;
  waterTexture.wrapT = THREE.RepeatWrapping;
  useFrame((state, delta) => {
    waterMaterial.current.uniforms.uTime.value = state.clock.getElapsedTime();
  });

  return (
    <mesh rotation-x={-Math.PI * 0.5} position-y={-0.74} scale={30}>
      <planeGeometry args={[5, 5, 256, 256]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uColorA: { value: new THREE.Color("#3b6deb") },
          uColorB: { value: new THREE.Color("#80c5f2") },
          uWaterTexture: { value: waterTexture },
        }}
        ref={waterMaterial}
        color={"red"}
      />
    </mesh>
  );
}
