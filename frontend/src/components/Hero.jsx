import ThemeToggle from "./ThemeToggle";

function Hero() {
  return (
    <section className="relative overflow-hidden py-20 transition-colors duration-300">

      {/* Background Blur */}
      <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Theme Toggle */}
        <div className="flex justify-end mb-10">
          <ThemeToggle />
        </div>

        <div className="text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 dark:bg-slate-900/80 dark:border-slate-700 px-5 py-2 shadow-sm backdrop-blur transition-colors duration-300">
            <span>🚀</span>

            <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">
              AI Powered Resume Analysis
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight">

            <span className="text-slate-900 dark:text-white">
              AI Resume
            </span>

            <br />

            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Analyzer
            </span>

          </h1>

          {/* Description */}
          <p className="mt-8 mx-auto max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Analyze your resume with AI, compare it against any job description,
            improve ATS compatibility, tailor your resume, chat with your resume,
            and generate personalized cover letters in seconds.
          </p>

          {/* Feature Pills */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <div className="rounded-full bg-white dark:bg-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-5 py-3 shadow-md transition-all duration-300 hover:scale-105">
              📊 ATS Analysis
            </div>

            <div className="rounded-full bg-white dark:bg-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-5 py-3 shadow-md transition-all duration-300 hover:scale-105">
              ✨ Resume Tailoring
            </div>

            <div className="rounded-full bg-white dark:bg-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-5 py-3 shadow-md transition-all duration-300 hover:scale-105">
              💬 Resume Chat
            </div>

            <div className="rounded-full bg-white dark:bg-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-5 py-3 shadow-md transition-all duration-300 hover:scale-105">
              📄 Cover Letter
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;