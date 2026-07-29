import { createContext, useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";

export const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    const initialTheme = (saved === "dark" || saved === "light") ? saved : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    return initialTheme;
  });

  const handleToggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (isLoading) {
    return <LoadingScreen theme={theme} isLoading={isLoading} setIsLoading={setIsLoading} />;
  }

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
