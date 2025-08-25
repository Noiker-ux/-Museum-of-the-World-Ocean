import { createContext, useState } from "react";

export const ViewContext = createContext("Museam");

export default function ViewContextProvider({ children }) {
  const [viewId, setViewId] = useState("Museam");
  return <ViewContext.Provider value={{ viewId, setViewId }}>{children}</ViewContext.Provider>;
}
