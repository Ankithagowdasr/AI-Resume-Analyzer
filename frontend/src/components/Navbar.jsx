import ThemeToggle from "./ThemeToggle";
import { FaRobot } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
            <FaRobot size={20} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">
              AI Resume Analyzer
            </h1>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              AI-powered resume optimization
            </p>
          </div>

        </div>

        <ThemeToggle />

      </div>
    </nav>
  );
}