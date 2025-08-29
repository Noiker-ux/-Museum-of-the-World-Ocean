import { Canvas } from "@react-three/fiber";
import Experience from "./Experience/Experience";

export default function CanvasExperience() {
  return (
    <div>
      <Canvas
        antialias={false}
        style={{ width: "100vw", height: "100vh" }}
        camera={{
          near: 0.1,
          far: 500,
          fov: 75,
          position: [30, 15, 40],
        }}
      >
        <Experience />
      </Canvas>
    </div>
  );
}
