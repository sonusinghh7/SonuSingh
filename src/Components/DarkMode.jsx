import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkMode = ({ className = "" }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`w-16 h-8 flex items-center px-1 rounded-full transition-colors duration-300 ${
        darkMode ? "bg-gray-300" : "bg-gray-800"
      } ${className}`}
    >
      <div
        className={`w-6 h-6 flex items-center justify-center rounded-full shadow-md transform transition-transform duration-300 ${
          darkMode ? "translate-x-8 bg-gray-800" : "bg-white"
        }`}
      >
        {darkMode ? (
          <FaMoon className="text-white text-sm" />
        ) : (
          <FaSun className="text-gray-800 text-sm" />
        )}
      </div>
    </button>
  );
};

export default DarkMode;
