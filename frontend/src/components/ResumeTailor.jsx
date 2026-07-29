import {
  FiUser,
  FiCode,
  FiFolder,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";

function ResumeTailor({ result }) {
  const tailor = result.tailor;

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 dark:bg-indigo-900/30">
            <FiTrendingUp className="text-2xl text-indigo-600 dark:text-indigo-400" />
          </div>

          <div>

            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              AI Resume Tailoring
            </h1>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Personalized recommendations to improve your resume for this job description.
            </p>

          </div>

        </div>

      </div>

      {/* Professional Summary */}

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">

        <div className="mb-5 flex items-center gap-3">

          <div className="rounded-xl bg-blue-100 p-3 dark:bg-blue-900/30">
            <FiUser className="text-xl text-blue-600 dark:text-blue-400" />
          </div>

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Professional Summary
          </h2>

        </div>

        <div className="rounded-xl bg-slate-50 p-6 leading-8 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
          {tailor.professional_summary}
        </div>

      </div>

      {/* Skills */}

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">

        <div className="mb-5 flex items-center gap-3">

          <div className="rounded-xl bg-green-100 p-3 dark:bg-green-900/30">
            <FiCode className="text-xl text-green-600 dark:text-green-400" />
          </div>

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Skills to Add
          </h2>

        </div>

        <div className="flex flex-wrap gap-3">

          {tailor.skills_to_add.length === 0 ? (

            <p className="text-slate-500 dark:text-slate-400">
              No additional skills suggested.
            </p>

          ) : (

            tailor.skills_to_add.map((skill, index) => (

              <span
                key={index}
                className="rounded-full bg-green-100 px-4 py-2 font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300"
              >
                {skill}
              </span>

            ))

          )}

        </div>

      </div>

      {/* Project Improvements */}

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">

        <div className="mb-6 flex items-center gap-3">

          <div className="rounded-xl bg-purple-100 p-3 dark:bg-purple-900/30">
            <FiFolder className="text-xl text-purple-600 dark:text-purple-400" />
          </div>

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Project Improvements
          </h2>

        </div>

        <div className="space-y-4">

          {tailor.project_improvements.length === 0 ? (

            <p className="text-slate-500 dark:text-slate-400">
              No project improvements suggested.
            </p>

          ) : (

            tailor.project_improvements.map((item, index) => (

              <div
                key={index}
                className="flex gap-4 rounded-xl border border-purple-200 bg-purple-50 p-5 dark:border-purple-800 dark:bg-purple-900/20"
              >

                <FiCheckCircle className="mt-1 text-purple-600 dark:text-purple-400" />

                <p className="leading-7 text-slate-700 dark:text-slate-300">
                  {item}
                </p>

              </div>

            ))

          )}

        </div>

      </div>

      {/* ATS Tips */}

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">

        <div className="mb-6 flex items-center gap-3">

          <div className="rounded-xl bg-orange-100 p-3 dark:bg-orange-900/30">
            <FiTrendingUp className="text-xl text-orange-600 dark:text-orange-400" />
          </div>

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            ATS Improvement Tips
          </h2>

        </div>

        <div className="space-y-4">

          {tailor.resume_tips.length === 0 ? (

            <p className="text-slate-500 dark:text-slate-400">
              No suggestions available.
            </p>

          ) : (

            tailor.resume_tips.map((tip, index) => (

              <div
                key={index}
                className="flex gap-4 rounded-xl border border-orange-200 bg-orange-50 p-5 dark:border-orange-800 dark:bg-orange-900/20"
              >

                <FiCheckCircle className="mt-1 text-orange-600 dark:text-orange-400" />

                <p className="leading-7 text-slate-700 dark:text-slate-300">
                  {tip}
                </p>

              </div>

            ))

          )}

        </div>

      </div>

    </div>
  );
}

export default ResumeTailor;