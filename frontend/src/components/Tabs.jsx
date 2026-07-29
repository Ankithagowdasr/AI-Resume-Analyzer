import { useState } from "react";
import {
  FiBarChart2,
  FiEdit3,
  FiMessageSquare,
  FiFileText,
} from "react-icons/fi";

function Tabs({ dashboard, tailor, chat, cover }) {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <FiBarChart2 size={18} />,
    },
    {
      id: "tailor",
      label: "Resume Tailor",
      icon: <FiEdit3 size={18} />,
    },
    {
      id: "chat",
      label: "Resume Chat",
      icon: <FiMessageSquare size={18} />,
    },
    {
      id: "cover",
      label: "Cover Letter",
      icon: <FiFileText size={18} />,
    },
  ];

  return (
    <div className="mt-10">

      {/* Navigation */}

      <div className="overflow-x-auto">

        <div className="flex w-max min-w-full gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900">

          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}

        </div>

      </div>

      {/* Content */}

      <div className="mt-8 animate-fade-in">

        {activeTab === "dashboard" && dashboard}
        {activeTab === "tailor" && tailor}
        {activeTab === "chat" && chat}
        {activeTab === "cover" && cover}

      </div>

    </div>
  );
}

export default Tabs;