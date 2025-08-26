import { createContext, useState } from "react";
import { useGLTF } from "@react-three/drei";

export const ViewContext = createContext("Museam");

export default function ViewContextProvider({ children }) {
  const [viewId, setViewId] = useState("Museam");
  const cityModel = useGLTF("/models/city.glb");
  return <ViewContext.Provider value={{ viewId, setViewId, cityModel }}>{children}</ViewContext.Provider>;
}
