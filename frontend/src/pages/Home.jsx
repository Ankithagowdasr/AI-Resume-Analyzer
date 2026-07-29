import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRobot, FaArrowRight } from "react-icons/fa";
import API from "../services/api";

import Navbar from "../components/Navbar";
import UploadCard from "../components/UploadCard";
import JobDescription from "../components/JobDescription";
import AnalyzeButton from "../components/AnalyzeButton";

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [jdFile, setJdFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleAnalyze() {
    if (!selectedFile) {
      alert("Please upload your resume.");
      return;
    }

    if (!jobDescription.trim() && !jdFile) {
      alert("Please paste a Job Description or upload a JD PDF.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("file", selectedFile);

      if (jdFile) {
        formData.append("jd_file", jdFile);
      } else {
        formData.append("job_description", jobDescription);
      }

      const response = await API.post("/analyze-jd", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/analysis", {
        state: {
          result: response.data,
          file: selectedFile,
          jdFile,
          jobDescription,
        },
      });
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.error || "Backend Error");
      } else {
        alert("Unable to connect to the backend.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 transition-colors duration-300 dark:bg-slate-950">

      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Header */}
        <div className="mb-12 text-center">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
            <FaRobot className="text-2xl text-white" />
          </div>

          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            AI Resume Analyzer
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Upload your resume, compare it with a job description,
            improve ATS compatibility, tailor your resume,
            and generate a professional cover letter.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-2">

          <UploadCard
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />

          <JobDescription
            jobDescription={jobDescription}
            setJobDescription={setJobDescription}
            jdFile={jdFile}
            setJdFile={setJdFile}
          />

        </div>

        {/* Button */}
        <div className="mt-10">

          <AnalyzeButton
            loading={loading}
            onClick={handleAnalyze}
          />

        </div>

        {/* Features */}
        <div className="mt-20">

          <h2 className="mb-10 text-center text-3xl font-bold text-slate-900 dark:text-white">
            Everything You Need
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <FeatureCard
              title="ATS Score"
              description="Evaluate resume compatibility with Applicant Tracking Systems."
            />

            <FeatureCard
              title="Skill Matching"
              description="Compare resume skills against the job description."
            />

            <FeatureCard
              title="Resume Chat"
              description="Ask AI questions about your resume and receive suggestions."
            />

            <FeatureCard
              title="Cover Letter"
              description="Generate personalized cover letters instantly."
            />

          </div>

        </div>

      </div>

    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
        <FaArrowRight className="text-blue-600 dark:text-blue-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>

      <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
        {description}
      </p>

    </div>
  );
}

export default Home;