import { useGLTF } from "@react-three/drei";
import { useContext, useEffect } from "react";
import gsap from "gsap";
import { ViewContext } from "../../../providers/View.provider";

export default function City() {
  const { cityModel } = useContext(ViewContext);

  useEffect(() => {
    // Cтарт показа генерация
    Object.keys(cityModel.nodes)
      .filter((n) => {
        return Number(n) % 1 === 0;
      })
      .sort((a, b) => a - b)
      .map((m, idx) => {
        gsap.fromTo(cityModel.nodes[m].scale, { x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1, delay: idx * 0.1 });
      });
    //  Таймлайн крана
    gsap.fromTo(
      cityModel.nodes["34"].rotation,
      { y: -Math.PI * 0.5 },
      { y: 0.15, duration: 3, delay: (Object.keys(cityModel.nodes).length - 1) * 0.1 + 5 }
    );
    gsap.fromTo(
      cityModel.nodes["35"].rotation,
      { y: -Math.PI * 0.5 },
      { y: 0.15, duration: 3, delay: (Object.keys(cityModel.nodes).length - 1) * 0.1 + 5 }
    );

    gsap.to(cityModel.nodes["35"].position, {
      x: -11,
      z: -20.5,
      duration: 3,
      delay: (Object.keys(cityModel.nodes).length - 1) * 0.1 + 7,
    });
    gsap.fromTo(
      cityModel.nodes["36"].rotation,
      { y: -Math.PI * 0.5 },
      { y: 0.15, duration: 3, delay: (Object.keys(cityModel.nodes).length - 1) * 0.1 + 5 }
    );
    gsap.to(cityModel.nodes["36"].position, {
      x: -11,
      z: -20.5,
      duration: 3,
      delay: (Object.keys(cityModel.nodes).length - 1) * 0.1 + 7,
    });
    gsap.to(cityModel.nodes["36"].scale, {
      y: 4,
      duration: 3,
      delay: (Object.keys(cityModel.nodes).length - 1) * 0.1 + 10,
    });

    gsap.fromTo(
      cityModel.nodes["36"].position,
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
      cityModel.nodes["36"].scale,
      {
        y: 4,
      },
      {
        y: 1,
        duration: 3,
        delay: (Object.keys(cityModel.nodes).length - 1) * 0.1 + 13,
      }
    );

    gsap.to(cityModel.nodes["36"].position, {
      y: 35,
      duration: 3,
      delay: (Object.keys(cityModel.nodes).length - 1) * 0.1 + 13,
    });
  }, []);

  return <primitive object={cityModel.scene} />;
}
