// src/context/themeContext.js
import { createContext } from "react";

export const themeContext = createContext();

// Optional: Create a named provider export (just for cleaner imports)
export const ThemeProvider = themeContext.Provider;