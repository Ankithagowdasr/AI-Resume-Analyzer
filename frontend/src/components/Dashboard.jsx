import {
  FiTarget,
  FiAward,
  FiCheckCircle,
  FiAlertCircle,
  FiTrendingUp,
  FiFileText,
  FiActivity,
  FiStar,
} from "react-icons/fi";

function Dashboard({ result }) {
  const {
    ats_score = 0,
    job_match_percentage = 0,
    resume_skills = [],
    matched_skills = [],
    missing_skills = [],
    ai_analysis = {},
  } = result;

  const {
    overall_fit = "N/A",
    summary = "",
    strengths = [],
    gaps = [],
    recommendations = [],
  } = ai_analysis;

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="text-center">

        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          AI Resume Analysis
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Complete ATS & Job Match Report
        </p>

      </div>

      {/* Score Cards */}

      <div className="grid gap-6 md:grid-cols-3">

        {/* ATS */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-500">
                ATS Score
              </p>

              <h2 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
                {ats_score}%
              </h2>

            </div>

            <div className="rounded-xl bg-blue-100 p-3 dark:bg-blue-900/30">
              <FiActivity className="text-2xl text-blue-600 dark:text-blue-400" />
            </div>

          </div>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">

            <div
              className="h-full rounded-full bg-blue-600"
              style={{ width: `${ats_score}%` }}
            />

          </div>

        </div>

        {/* Job Match */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-500">
                Job Match
              </p>

              <h2 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
                {job_match_percentage}%
              </h2>

            </div>

            <div className="rounded-xl bg-green-100 p-3 dark:bg-green-900/30">
              <FiTarget className="text-2xl text-green-600 dark:text-green-400" />
            </div>

          </div>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">

            <div
              className="h-full rounded-full bg-green-600"
              style={{ width: `${job_match_percentage}%` }}
            />

          </div>

        </div>

        {/* Overall */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-500">
                Overall Fit
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
                {overall_fit}
              </h2>

            </div>

            <div className="rounded-xl bg-purple-100 p-3 dark:bg-purple-900/30">
              <FiAward className="text-2xl text-purple-600 dark:text-purple-400" />
            </div>

          </div>

        </div>

      </div>

      {/* Skills */}

      <div className="grid gap-6 lg:grid-cols-3">

        {/* Resume Skills */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">

          <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-blue-600">
            <FiFileText />
            Resume Skills
          </h2>

          <div className="flex flex-wrap gap-2">

            {resume_skills.length ? (
              resume_skills.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-slate-500">No skills found.</p>
            )}

          </div>

        </div>

        {/* Matched */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">

          <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-green-600">
            <FiCheckCircle />
            Matched Skills
          </h2>

          <div className="flex flex-wrap gap-2">

            {matched_skills.length ? (
              matched_skills.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-slate-500">No matched skills.</p>
            )}

          </div>

        </div>

        {/* Missing */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">

          <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-red-600">
            <FiAlertCircle />
            Missing Skills
          </h2>

          <div className="flex flex-wrap gap-2">

            {missing_skills.length ? (
              missing_skills.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-green-600 font-medium">
                No missing skills 🎉
              </p>
            )}

          </div>

        </div>

      </div>

      {/* Summary */}

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">

        <h2 className="mb-5 flex items-center gap-2 text-2xl font-semibold text-yellow-600">
          <FiStar />
          AI Summary
        </h2>

        <p className="leading-8 text-slate-700 dark:text-slate-300">
          {summary}
        </p>

      </div>

      {/* Strengths & Gaps */}

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">

          <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-green-600">
            <FiCheckCircle />
            Strengths
          </h2>

          <ul className="space-y-3">

            {strengths.length ? (
              strengths.map((item, index) => (
                <li
                  key={index}
                  className="rounded-xl bg-green-50 p-4 dark:bg-green-900/20 dark:text-slate-200"
                >
                  {item}
                </li>
              ))
            ) : (
              <li className="text-slate-500">
                No strengths available.
              </li>
            )}

          </ul>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">

          <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-red-600">
            <FiAlertCircle />
            Skill Gaps
          </h2>

          <ul className="space-y-3">

            {gaps.length ? (
              gaps.map((item, index) => (
                <li
                  key={index}
                  className="rounded-xl bg-red-50 p-4 dark:bg-red-900/20 dark:text-slate-200"
                >
                  {item}
                </li>
              ))
            ) : (
              <li className="text-slate-500">
                No skill gaps identified.
              </li>
            )}

          </ul>

        </div>

      </div>

      {/* Recommendations */}

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">

        <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-orange-600">
          <FiTrendingUp />
          Recommendations
        </h2>

        <ul className="space-y-3">

          {recommendations.length ? (
            recommendations.map((item, index) => (
              <li
                key={index}
                className="rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20 dark:text-slate-200"
              >
                {item}
              </li>
            ))
          ) : (
            <li className="text-slate-500">
              No recommendations available.
            </li>
          )}

        </ul>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-3xl font-bold text-blue-600">
            {resume_skills.length}
          </h3>
          <p className="mt-2 text-slate-500">
            Resume Skills
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-3xl font-bold text-green-600">
            {matched_skills.length}
          </h3>
          <p className="mt-2 text-slate-500">
            Matched Skills
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-3xl font-bold text-red-600">
            {missing_skills.length}
          </h3>
          <p className="mt-2 text-slate-500">
            Missing Skills
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-3xl font-bold text-purple-600">
            {job_match_percentage}%
          </h3>
          <p className="mt-2 text-slate-500">
            Job Match
          </p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;