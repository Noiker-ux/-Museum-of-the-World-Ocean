import { Clone, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useContext } from "react";
import { ViewContext } from "../../../../../providers/View.provider";
import gsap from "gsap";

export default function Jellyfish() {
  const JellyfishModel = useGLTF("/models/bfbbr_-_jellyfish_blue/scene.gltf");
  const JellyfishRef1 = useRef();
  const JellyfishRef2 = useRef();
  const JellyfishRef3 = useRef();
  const groupRef = useRef();
  useFrame((state, delta) => {
    JellyfishRef1.current.position.y = 3.5 + Math.sin(state.clock.getElapsedTime() * 0.2);
    JellyfishRef2.current.position.y = 3.5 + Math.cos(state.clock.getElapsedTime() * 0.3);
    JellyfishRef3.current.position.y = 3.5 + Math.sin(state.clock.getElapsedTime() * 0.4);
  });
  const { delayNodes } = useContext(ViewContext);
  useEffect(() => {
    gsap.to(groupRef.current.scale, { x: 1, y: 1, z: 1, delay: delayNodes * 0.1 });
  }, []);

  return (
    <group ref={groupRef}>
      <primitive ref={JellyfishRef1} object={JellyfishModel.scene} position={[5, 2, -18]} scale={0.5} />
      <Clone ref={JellyfishRef2} object={JellyfishModel.scene} position={[6.6, 3, -18.3]} scale={0.55} />
      <Clone ref={JellyfishRef3} object={JellyfishModel.scene} position={[3.6, 3, -18.1]} scale={0.55} />
    </group>
  );
}
