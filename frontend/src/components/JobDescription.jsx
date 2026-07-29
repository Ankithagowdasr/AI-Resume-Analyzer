import { useRef, useState } from "react";
import {
  FiFileText,
  FiUploadCloud,
  FiCheckCircle,
} from "react-icons/fi";

function JobDescription({
  jobDescription,
  setJobDescription,
  jdFile,
  setJdFile,
}) {
  const [activeTab, setActiveTab] = useState("paste");

  const fileInputRef = useRef(null);

  function handleFileChange(e) {
    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload only a PDF Job Description.");
      return;
    }

    setJdFile(file);
  }

  function openFilePicker() {
    fileInputRef.current.click();
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">

      {/* Header */}

      <div className="mb-8 flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 dark:bg-purple-900/30">
          <FiFileText className="text-2xl text-purple-600 dark:text-purple-400" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Job Description
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Paste the job description or upload a PDF
          </p>
        </div>

      </div>

      {/* Tabs */}

      <div className="mb-6 flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800">

        <button
          onClick={() => setActiveTab("paste")}
          className={`flex-1 rounded-lg py-3 font-semibold transition-all duration-300 ${
            activeTab === "paste"
              ? "bg-white text-blue-600 shadow dark:bg-slate-900"
              : "text-slate-600 dark:text-slate-300"
          }`}
        >
          Paste JD
        </button>

        <button
          onClick={() => setActiveTab("upload")}
          className={`flex-1 rounded-lg py-3 font-semibold transition-all duration-300 ${
            activeTab === "upload"
              ? "bg-white text-blue-600 shadow dark:bg-slate-900"
              : "text-slate-600 dark:text-slate-300"
          }`}
        >
          Upload PDF
        </button>

      </div>

      {/* Paste JD */}

      {activeTab === "paste" && (

        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Paste the complete Job Description here..."
          className="h-80 w-full rounded-2xl border border-slate-300 bg-white p-5 text-slate-900 placeholder:text-slate-400 resize-none transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
        />

      )}

      {/* Upload PDF */}

      {activeTab === "upload" && (

        <div
          onClick={openFilePicker}
          className="cursor-pointer rounded-2xl border-2 border-dashed border-purple-300 bg-slate-50 p-10 text-center transition-all duration-300 hover:border-purple-600 hover:bg-purple-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
        >

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">

            <FiUploadCloud
              size={42}
              className="text-purple-600 dark:text-purple-400"
            />

          </div>

          <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">
            Upload Job Description
          </h3>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Click anywhere to browse your PDF
          </p>

          <p className="mt-1 text-sm text-slate-400">
            Supported format: PDF
          </p>

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleFileChange}
          />

          <button
            type="button"
            className="mt-8 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Browse PDF
          </button>

        </div>

      )}

      {/* Uploaded PDF */}

      {jdFile && activeTab === "upload" && (

        <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5 dark:border-green-800 dark:bg-green-900/20">

          <div className="flex items-start gap-4">

            <FiCheckCircle
              size={28}
              className="mt-1 text-green-600"
            />

            <div>

              <p className="font-semibold text-green-700 dark:text-green-400">
                Job Description Uploaded
              </p>

              <p className="mt-1 break-all text-slate-700 dark:text-slate-200">
                {jdFile.name}
              </p>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Ready for AI comparison.
              </p>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default JobDescription;