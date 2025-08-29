import Sharks from "../Sharks/Sharks";
import { useTexture } from "@react-three/drei";
import { useEffect, useRef, useContext } from "react";
import gsap from "gsap";
import { ViewContext } from "../../../providers/View.provider";

export default function WaterBall() {
  const [earthDay, earthNight] = useTexture(["/textures/earthDay.jpg", "/textures/eartNight.jpg"]);
  const { delayNodes } = useContext(ViewContext);

  const waterBallWithSharks = useRef();
  useEffect(() => {
    gsap.to(waterBallWithSharks.current.scale, {
      x: 1,
      y: 1,
      z: 1,
      delay: delayNodes * 0.1,
    });
    gsap.to(waterBallWithSharks.current.position, {
      x: 4,
      y: 25.3,
      z: -22,
      delay: delayNodes * 0.1 + 5,
      duration: 3.2,
    });
    gsap.to(waterBallWithSharks.current.position, {
      x: 5,
      y: 25,
      z: -25,
      delay: delayNodes * 0.1 + 7,
      duration: 3,
    });
    gsap.to(waterBallWithSharks.current.position, {
      x: 5,
      y: 10,
      z: -25,
      delay: delayNodes * 0.1 + 10,
      duration: 3,
    });
  }, []);

  return (
    <>
      <group ref={waterBallWithSharks} position={[-15, 25.3, -5]} scale={[0, 0, 0]}>
        <Sharks />
        <mesh rotation-x={-Math.PI * 0.25}>
          <sphereGeometry args={[7.9, 32, 32]} />
          <meshStandardMaterial
            transparent
            opacity={0.67}
            color={"#50affd"}
            metalness={1}
            roughness={0}
            map={earthDay}
            flatShading
          />
        </mesh>
      </group>
    </>
  );
}
