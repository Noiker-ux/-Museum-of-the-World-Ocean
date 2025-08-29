import { Perf } from "r3f-perf";
import { OrbitControls, Environment, Float, Text } from "@react-three/drei";

import WaterBall from "./WaterBall/WaterBall";
import { useEffect, useRef, useContext } from "react";
import { useThree, extend } from "@react-three/fiber";
import SpongeBob from "./Akwarium/Inner/SpongeBob/SpongeBob";
import annotations from "../../data/annotations.json";
import City from "./City/City";
import Akwarium1 from "./Akwarium/Outer/Akwarium1";
import gsap from "gsap";
import * as THREE from "three";
extend(THREE);
import { ViewContext } from "../../providers/View.provider";
import Turtle from "./Akwarium/Inner/Turtle/Turtle";
import Jellyfish from "./Akwarium/Inner/Jellyfish/Jellyfish";
import Water from "./Water/Water";

export default function Experience() {
  const ref = useRef();
  const { setViewId, viewId } = useContext(ViewContext);
  const { camera, gl } = useThree();

  useEffect(() => {
    const currentAnnotation = annotations.find((e) => {
      return e.title === viewId;
    });

    gsap.to(camera.position, {
      x: currentAnnotation.position.x,
      y: currentAnnotation.position.y,
      z: currentAnnotation.position.z,
      duration: 2,
    });
    gsap.to(ref.current.target, {
      x: currentAnnotation.lookAt.x,
      y: currentAnnotation.lookAt.y,
      z: currentAnnotation.lookAt.z,
      duration: 2,
    });
  }, [viewId]);

  return (
    <>
      <OrbitControls ref={ref} />
      <Perf position="top-left" />
      <Environment
        files={["/environments/9a8c8a0184c211f0b8eaeaf520c1e6fb-1.hdr"]}
        background
        environmentIntensity={0.8}
      />
      {/* Scene */}

      {/* <WaterBall /> */}
      <City />
      {/* <Akwarium1 />
      <SpongeBob /> */}
      {/* <Turtle />
      <Jellyfish /> */}
      {/* <Water /> */}
      <Float position={[15, 23, -30]} rotation={[0, 0, 0]}>
        <Text fontSize={3.5} font="/fonts/bangers-v20-latin-regular.woff" color={"#9999ff"} maxWidth={20}>
          Museum of the World Ocean
        </Text>
      </Float>
    </>
  );
}
