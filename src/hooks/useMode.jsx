import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";

export default function useMode() {
  return useContext(ModeContext);
}
