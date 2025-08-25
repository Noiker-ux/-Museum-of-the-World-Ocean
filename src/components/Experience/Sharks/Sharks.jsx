import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Sharks() {
  const sharkModel = useGLTF("/models/sharksVals.glb");
  const sharkAnimations = useAnimations(sharkModel.animations, sharkModel.scene);

  useEffect(() => {
    sharkAnimations.actions["Take 001"].play();
  }, []);

  return <primitive object={sharkModel.scene} scale={0.36} />;
}
