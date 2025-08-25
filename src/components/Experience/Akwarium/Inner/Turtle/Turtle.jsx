import { Clone, useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
export default function Turtle() {
  const turtleModel = useGLTF("/models/turtle.glb");
  const turtleAnimations = useAnimations(turtleModel.animations, turtleModel.scene);
  const turtleRef = useRef();
  useEffect(() => {
    turtleAnimations.actions["Scene"].play();
  }, []);
  return (
    <>
      <primitive ref={turtleRef} object={turtleModel.scene} position={[13, 2, -24]} scale={0.41} />
      <Clone object={turtleModel.scene} scale={0.33} position={[13, 0.8, -24.3]} rotation-y={-Math.PI} />
    </>
  );
}
