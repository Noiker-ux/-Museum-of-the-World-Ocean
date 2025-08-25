import { Clone, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Jellyfish() {
  const JellyfishModel = useGLTF("/models/jellyfish/scene.gltf");
  const JellyfishRef1 = useRef();
  const JellyfishRef2 = useRef();
  const JellyfishRef3 = useRef();
  useFrame((state, delta) => {
    JellyfishRef1.current.position.y = 3.5 + Math.sin(state.clock.getElapsedTime() * 0.2);
    JellyfishRef2.current.position.y = 3.5 + Math.cos(state.clock.getElapsedTime() * 0.3);
    JellyfishRef3.current.position.y = 3.5 + Math.sin(state.clock.getElapsedTime() * 0.4);
  });
  return (
    <>
      <primitive ref={JellyfishRef1} object={JellyfishModel.scene} position={[5, 2, -18]} scale={0.3} />
      <Clone ref={JellyfishRef2} object={JellyfishModel.scene} position={[6.6, 3, -18.3]} />
      <Clone ref={JellyfishRef3} object={JellyfishModel.scene} position={[3.6, 3, -18.1]} />
    </>
  );
}
