import Sharks from "../Sharks/Sharks";
import { useControls } from "leva";
import { useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function WaterBall() {
  const [earthDay, earthNight] = useTexture(["/textures/earthDay.jpg", "/textures/eartNight.jpg"]);
  const { metallness, roughness, opacity } = useControls("Sphere options", {
    metallness: { value: 1, min: 0, max: 1, step: 0.01 },
    roughness: { value: 0, min: 0, max: 1, step: 0.01 },
    opacity: { value: 0.67, min: 0, max: 1, step: 0.01 },
  });

  const waterBallWithSharks = useRef();
  useEffect(() => {
    gsap.to(waterBallWithSharks.current.position, { x: 3, y: 25, z: -25, delay: 13.5, duration: 3 });
    gsap.to(waterBallWithSharks.current.position, { x: 5, y: 25, z: -25, delay: 14.5, duration: 3 });
    gsap.to(waterBallWithSharks.current.position, { x: 5, y: 10, z: -25, delay: 18.3, duration: 3 });
  }, []);

  return (
    <>
      <group ref={waterBallWithSharks} position={[-15, 23.9, -5]}>
        <Sharks />
        <mesh rotation-x={-Math.PI * 0.25}>
          <sphereGeometry args={[7.9, 32, 32]} />
          <meshStandardMaterial
            transparent
            opacity={opacity}
            color={"#50affd"}
            metalness={metallness}
            roughness={roughness}
            map={earthDay}
            flatShading
          />
        </mesh>
      </group>
    </>
  );
}
