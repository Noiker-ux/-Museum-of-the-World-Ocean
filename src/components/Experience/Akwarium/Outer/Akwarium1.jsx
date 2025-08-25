import { Clone, useGLTF } from "@react-three/drei";
import { useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Akwarium1() {
  // Refs
  const carpRef = useRef();
  const guppieRef = useRef();
  // Models
  const carpFish = useGLTF("/models/carp.glb");
  const guppieFish = useGLTF("/models/guppie2.glb");

  // Animations
  const carpAnimate = useAnimations(carpFish.animations, carpFish.scene);
  const guppieAnimate = useAnimations(guppieFish.animations, guppieFish.scene);
  useEffect(() => {
    carpAnimate.actions["MorphBake"].play();
    guppieAnimate.actions["Take 001"].play();
  }, []);

  let carpDirection = "right";
  let guppieDirection = "right";
  let prevPosition = 0;
  useFrame((state) => {
    const ElapsedTime = state.clock.getElapsedTime();
    const rangeTime = Math.sin(ElapsedTime * 0.2);
    changeDirection(rangeTime, prevPosition);

    if (carpDirection === "right") {
      gsap.fromTo(carpRef.current.rotation, { y: carpRef.current.rotation.y }, { y: 0, duration: 1 });
    } else {
      gsap.fromTo(carpRef.current.rotation, { y: carpRef.current.rotation.y }, { y: -Math.PI, duration: 1 });
    }

    if (guppieDirection === "right") {
      gsap.fromTo(guppieRef.current.rotation, { y: guppieRef.current.rotation.y }, { y: 0, duration: 1 });
    } else {
      gsap.fromTo(guppieRef.current.rotation, { y: guppieRef.current.rotation.y }, { y: Math.PI, duration: 1 });
    }

    carpRef.current.position.x = 5 - rangeTime * 1.9;

    guppieRef.current.position.x = 5 + rangeTime * 1.9;
    prevPosition = rangeTime;
  });

  function changeDirection(position, prevPosition) {
    if (position > prevPosition) {
      carpDirection = "left";
      guppieDirection = "right";
    } else {
      carpDirection = "right";
      guppieDirection = "left";
    }
  }

  return (
    <>
      <primitive ref={carpRef} object={carpFish.scene} position={[5, 3, -17.3]} scale={0.05} />
      <primitive
        ref={guppieRef}
        object={guppieFish.scene}
        position={[5, 3, -17.3]}
        scale={0.0025}
        rotation-y={-Math.PI}
      />
      {[...Array(5).keys()].map((_, idx) => (
        <Clone
          key={idx}
          object={carpFish.scene}
          scale={Math.random() * 0.2}
          position={[5 + (Math.random() - 0.5) * 4, 3 + (Math.random() - 0.5) * 3 * idx, -17.3]}
        />
      ))}
    </>
  );
}
