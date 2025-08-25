import { Perf } from "r3f-perf";
import { OrbitControls, Environment } from "@react-three/drei";

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

export default function Experience() {
  const ref = useRef();
  const { setViewId, viewId } = useContext(ViewContext);
  const { camera } = useThree();

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
      <OrbitControls ref={ref} enableRotate={false} enableZoom={false} />
      <Perf position="top-left" />
      <Environment files={["/environments/citrus_orchard_puresky_4k.hdr"]} background environmentIntensity={0.8} />
      {/* Scene */}

      <WaterBall />
      <City />
      <Akwarium1 />
      <SpongeBob />
      <Turtle />
      <Jellyfish />
    </>
  );
}
