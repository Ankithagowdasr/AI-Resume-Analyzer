import { useLocation, useNavigate } from "react-router-dom";
import Tabs from "../components/Tabs";
import Dashboard from "../components/Dashboard";
import ResumeTailor from "../components/ResumeTailor";
import ResumeChat from "../components/ResumeChat";
import CoverLetter from "../components/CoverLetter";

function Analysis() {
  const location = useLocation();
  const navigate = useNavigate();

  const { result, jobDescription, file } = location.state || {};

  // If user directly opens /analysis without data
  if (!result) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">
          No Analysis Found
        </h1>

        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-center mb-10">
          AI Resume Analysis
        </h1>

        <Tabs
          dashboard={<Dashboard result={result} />}
          tailor={<ResumeTailor result={result} />}
          chat={
            <ResumeChat
              result={result}
              file={file}
              jobDescription={jobDescription}
            />
          }
          cover={<CoverLetter result={result} />}
        />
      </div>
    </div>
  );
}

export default Analysis;