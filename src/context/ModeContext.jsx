import { createContext, useState } from "react";

export const ModeContext = createContext(null);

export function ModeProvider({ children }) {
  const [mode, setMode] = useState("hard");
  function toggleMode() {
    if (mode === "hard") {
      setMode("easy");
    }
    if (mode === "easy") {
      setMode("hard");
    }
  }
  return <ModeContext.Provider value={{ mode, toggleMode }}>{children}</ModeContext.Provider>;
}
