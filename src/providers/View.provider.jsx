import { createContext, useState } from "react";
import { useGLTF } from "@react-three/drei";

export const ViewContext = createContext("Museam");

export default function ViewContextProvider({ children }) {
  const [viewId, setViewId] = useState("Museam");
  const cityModel = useGLTF("/models/city.glb");
  const delayNodes = Object.keys(cityModel.nodes).length - 1;
  return <ViewContext.Provider value={{ viewId, setViewId, cityModel, delayNodes }}>{children}</ViewContext.Provider>;
}
