import { useState, useRef, useEffect } from "react";
import { FiSend, FiUser, FiCpu } from "react-icons/fi";
import API from "../services/api";

function ResumeChat({ file, jobDescription }) {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text:
        "👋 Hello! I'm your AI Resume Assistant.\n\nAsk me anything about your resume, ATS score, missing skills, interview preparation, or how to improve your profile.",
    },
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function askQuestion(customQuestion) {
    const currentQuestion = customQuestion || question;

    if (!currentQuestion.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: currentQuestion,
      },
    ]);

    setQuestion("");

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("file", file);
      formData.append("job_description", jobDescription);
      formData.append("question", currentQuestion);

      const response = await API.post("/resume-chat", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: response.data.answer,
        },
      ]);
    } catch (err) {
      console.error(err);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Sorry, I couldn't generate a response. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const suggestedQuestions = [
    "What skills am I missing?",
    "How can I improve my ATS score?",
    "Explain my strongest project.",
    "Which skills should I learn next?",
    "What interview questions should I prepare?",
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

      {/* Header */}

      <div className="border-b border-slate-200 p-6 dark:border-slate-800">

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          AI Resume Assistant
        </h2>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Ask anything about your resume, projects, ATS score, skills, or interview preparation.
        </p>

      </div>

      {/* Suggested Questions */}

      <div className="px-6 pt-6">

        <p className="mb-3 font-semibold text-slate-700 dark:text-slate-300">
          Suggested Questions
        </p>

        <div className="mb-6 flex flex-wrap gap-3">

          {suggestedQuestions.map((q) => (
            <button
              key={q}
              onClick={() => askQuestion(q)}
              className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300"
            >
              {q}
            </button>
          ))}

        </div>

      </div>

      {/* Chat */}

      <div className="h-[500px] space-y-6 overflow-y-auto px-6">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`flex ${
              msg.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`flex max-w-[80%] gap-3 ${
                msg.sender === "user"
                  ? "flex-row-reverse"
                  : ""
              }`}
            >

              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-white"
                }`}
              >
                {msg.sender === "user" ? (
                  <FiUser />
                ) : (
                  <FiCpu />
                )}
              </div>

              <div
                className={`rounded-2xl px-5 py-4 whitespace-pre-line ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200"
                }`}
              >
                {msg.text}
              </div>

            </div>
          </div>

        ))}

        {loading && (

          <div className="flex justify-start">

            <div className="rounded-2xl bg-slate-100 px-5 py-4 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              AI is thinking...
            </div>

          </div>

        )}

        <div ref={bottomRef} />

      </div>

      {/* Input */}

      <div className="border-t border-slate-200 p-6 dark:border-slate-800">

        <div className="flex gap-4">

          <textarea
            rows={2}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                askQuestion();
              }
            }}
            placeholder="Ask anything about your resume..."
            className="flex-1 resize-none rounded-xl border border-slate-300 bg-white p-4 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

          <button
            onClick={() => askQuestion()}
            disabled={loading}
            className="rounded-xl bg-blue-600 px-6 text-white transition hover:bg-blue-700 disabled:opacity-60"
          >
            <FiSend size={20} />
          </button>

        </div>

      </div>

    </div>
  );
}

export default ResumeChat;