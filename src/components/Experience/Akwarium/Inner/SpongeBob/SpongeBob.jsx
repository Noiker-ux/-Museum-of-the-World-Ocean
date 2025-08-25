import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function SpongeBob() {
  const spongeBobModel = useGLTF("/models/spongebob.glb");
  const spongeBobAnimations = useAnimations(spongeBobModel.animations, spongeBobModel.scene);
  console.log(spongeBobAnimations);
  useEffect(() => {
    spongeBobAnimations.actions["spongebob_jjk_spongebob_skeleton|Jump 2"].play();
  }, []);

  return <primitive object={spongeBobModel.scene} position={[5, 1, -30.5]} scale={0.8} />;
}
