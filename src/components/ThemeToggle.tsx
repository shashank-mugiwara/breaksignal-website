import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("theme");
    } catch {
      // Gracefully ignore local storage restrictions in sandboxed/private browsers
    }
    const currentTheme = saved === "dark" ? "dark" : "light";
    setTheme(currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute(
        "content",
        currentTheme === "dark" ? "#0d0f12" : "#ffffff"
      );
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);

    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // Gracefully ignore local storage restrictions in sandboxed/private browsers
    }

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute(
        "content",
        nextTheme === "dark" ? "#0d0f12" : "#ffffff"
      );
    }
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <span className="theme-toggle-indicator" aria-hidden="true">
        {isDark ? "Dark" : "Light"}
      </span>
      <span className="theme-toggle-label">
        {isDark ? "Switch to light theme" : "Switch to dark theme"}
      </span>
    </button>
  );
}
