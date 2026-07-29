import { useRef } from "react";
import {
  FiUploadCloud,
  FiFileText,
  FiCheckCircle,
} from "react-icons/fi";

function UploadCard({ selectedFile, setSelectedFile }) {
  const fileInputRef = useRef(null);

  function handleFileChange(event) {
    const file = event.target.files[0];

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Please upload only PDF or DOCX files.");
      return;
    }

    setSelectedFile(file);
  }

  function openFilePicker() {
    fileInputRef.current.click();
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">

      {/* Header */}

      <div className="mb-8 flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30">
          <FiFileText className="text-2xl text-blue-600 dark:text-blue-400" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Upload Resume
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Upload your resume in PDF or DOCX format
          </p>
        </div>

      </div>

      {/* Upload Area */}

      <div
        onClick={openFilePicker}
        className="cursor-pointer rounded-2xl border-2 border-dashed border-blue-300 bg-slate-50 p-10 text-center transition-all duration-300 hover:border-blue-600 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
      >

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">

          <FiUploadCloud
            size={42}
            className="text-blue-600 dark:text-blue-400"
          />

        </div>

        <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">
          Drag & Drop Resume
        </h3>

        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Click anywhere to browse your files
        </p>

        <p className="mt-1 text-sm text-slate-400">
          Supported formats: PDF, DOCX
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.docx"
          className="hidden"
          onChange={handleFileChange}
        />

        <button
          type="button"
          className="mt-8 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Browse Resume
        </button>

      </div>

      {/* Uploaded File */}

      {selectedFile && (

        <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5 dark:border-green-800 dark:bg-green-900/20">

          <div className="flex items-start gap-4">

            <div className="mt-1">
              <FiCheckCircle
                size={28}
                className="text-green-600"
              />
            </div>

            <div className="flex-1">

              <p className="font-semibold text-green-700 dark:text-green-400">
                Resume Uploaded Successfully
              </p>

              <p className="mt-1 break-all text-slate-700 dark:text-slate-200">
                {selectedFile.name}
              </p>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Your resume is ready for AI analysis.
              </p>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default UploadCard;