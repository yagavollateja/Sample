import { createContext, useContext } from "react";

// Create Context
export const ThemeContext = createContext();

// Custom Hook
export const useTheme = () => useContext(ThemeContext);