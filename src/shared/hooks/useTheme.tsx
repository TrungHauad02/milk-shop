import { useColorScheme } from "@mui/material";
import { useEffect } from "react";

type Mode = "light" | "dark";

export function useTheme() {
  const { mode, setMode } = useColorScheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      setMode(savedTheme as Mode);
    } else {
      setMode("light");
    }
  }, []);

  const toggleTheme = () => {
    const newMode: Mode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  return {
    themeLight: mode === "light",
    toggleTheme,
  };
}
