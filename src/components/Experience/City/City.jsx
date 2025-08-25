import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import gsap from "gsap";

export default function City() {
  const cityModel = useGLTF("/models/city.glb");
  console.log(cityModel);

  useEffect(() => {
    // Cтарт показа генерация
    Object.keys(cityModel.nodes)
      .sort((a, b) => b - a)
      .map((m, idx) => {
        gsap.fromTo(cityModel.nodes[m].scale, { x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1, delay: idx * 0.1 });
      });
    //  Таймлайн крана
    gsap.fromTo(
      cityModel.nodes["crane_001001"].rotation,
      { y: -Math.PI * 0.5 },
      { y: 0.15, duration: 3, delay: (Object.keys(cityModel.nodes).length - 1) * 0.1 + 5 }
    );
    gsap.fromTo(
      cityModel.nodes["crane_001002"].rotation,
      { y: -Math.PI * 0.5 },
      { y: 0.15, duration: 3, delay: (Object.keys(cityModel.nodes).length - 1) * 0.1 + 5 }
    );

    gsap.to(cityModel.nodes["crane_001002"].position, {
      x: -11,
      z: -20.5,
      duration: 3,
      delay: (Object.keys(cityModel.nodes).length - 1) * 0.1 + 7,
    });
    gsap.fromTo(
      cityModel.nodes["crane_001003"].rotation,
      { y: -Math.PI * 0.5 },
      { y: 0.15, duration: 3, delay: (Object.keys(cityModel.nodes).length - 1) * 0.1 + 5 }
    );
    gsap.to(cityModel.nodes["crane_001003"].position, {
      x: -11,
      z: -20.5,
      duration: 3,
      delay: (Object.keys(cityModel.nodes).length - 1) * 0.1 + 7,
    });
    gsap.to(cityModel.nodes["crane_001003"].scale, {
      y: 4,
      duration: 3,
      delay: (Object.keys(cityModel.nodes).length - 1) * 0.1 + 10,
    });

    gsap.fromTo(
      cityModel.nodes["crane_001003"].position,
      {
        y: 35,
      },
      {
        y: 31,
        duration: 3,
        delay: (Object.keys(cityModel.nodes).length - 1) * 0.1 + 10,
      }
    );

    gsap.fromTo(
      cityModel.nodes["crane_001003"].scale,
      {
        y: 4,
      },
      {
        y: 1,
        duration: 3,
        delay: (Object.keys(cityModel.nodes).length - 1) * 0.1 + 13,
      }
    );

    gsap.to(cityModel.nodes["crane_001003"].position, {
      y: 35,
      duration: 3,
      delay: (Object.keys(cityModel.nodes).length - 1) * 0.1 + 13,
    });
  }, []);

  return <primitive object={cityModel.scene} />;
}
