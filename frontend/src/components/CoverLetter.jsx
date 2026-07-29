import {
  FiFileText,
  FiCheckCircle,
  FiBriefcase,
} from "react-icons/fi";

function CoverLetter({ result }) {
  const letter = result.cover_letter?.cover_letter || "";

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 dark:bg-purple-900/30">
            <FiFileText className="text-2xl text-purple-600 dark:text-purple-400" />
          </div>

          <div>

            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              AI Generated Cover Letter
            </h1>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Personalized cover letter generated using your resume and the job description.
            </p>

          </div>

        </div>

      </div>

      {/* Info Cards */}

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">

          <div className="flex items-center gap-3">

            <FiCheckCircle className="text-2xl text-green-600" />

            <div>

              <h3 className="font-semibold text-slate-900 dark:text-white">
                ATS Friendly
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400">
                Uses professional keywords.
              </p>

            </div>

          </div>

        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">

          <div className="flex items-center gap-3">

            <FiBriefcase className="text-2xl text-blue-600" />

            <div>

              <h3 className="font-semibold text-slate-900 dark:text-white">
                Job Specific
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400">
                Tailored to the uploaded JD.
              </p>

            </div>

          </div>

        </div>

        <div className="rounded-2xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">

          <div className="flex items-center gap-3">

            <FiFileText className="text-2xl text-purple-600" />

            <div>

              <h3 className="font-semibold text-slate-900 dark:text-white">
                Professional Tone
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400">
                Suitable for applications.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Letter */}

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

        <div className="border-b border-slate-200 px-8 py-5 dark:border-slate-800">

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Cover Letter Preview
          </h2>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Review the AI-generated cover letter before using it in your application.
          </p>

        </div>

        <div className="p-8">

          {letter ? (

            <div className="rounded-xl bg-slate-50 p-8 leading-9 whitespace-pre-line text-slate-700 dark:bg-slate-800 dark:text-slate-300">

              {letter}

            </div>

          ) : (

            <div className="py-20 text-center">

              <FiFileText className="mx-auto mb-4 text-5xl text-slate-400" />

              <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300">
                No Cover Letter Generated
              </h3>

              <p className="mt-2 text-slate-500">
                Generate a cover letter by analyzing a resume first.
              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default CoverLetter;