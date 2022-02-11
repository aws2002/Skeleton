import React from "react";
export default function useDarkMode() {
  const [theme, setTheme] = React.useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.theme;
    }
  });
  const colorTheme = theme == "dark" ? "light" : "dark";
  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);
  return [colorTheme, setTheme];
}
