import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-12 w-24 items-center rounded-full border border-slate-300 bg-white px-1 shadow-md transition-all duration-300 hover:scale-105 dark:border-slate-700 dark:bg-slate-900"
    >
      <div
        className={`absolute flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transition-all duration-300 ${
          darkMode ? "translate-x-12" : "translate-x-0"
        }`}
      >
        {darkMode ? <FaMoon size={18} /> : <FaSun size={18} />}
      </div>

      <div className="flex w-full justify-between px-2 text-lg">
        <FaSun className="text-yellow-500" />
        <FaMoon className="text-slate-400 dark:text-slate-300" />
      </div>
    </button>
  );
}