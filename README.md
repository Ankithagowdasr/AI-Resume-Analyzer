# 🤖 AI Resume Analyzer

An AI-powered Resume Analyzer that helps job seekers improve their resumes by comparing them with job descriptions. The application provides ATS scoring, skill matching, resume tailoring, AI-powered resume chat, and cover letter generation.

## 🚀 Features

- 📄 Upload Resume (PDF/DOCX)
- 📝 Paste or Upload Job Description
- 🎯 ATS Score Analysis
- 🔍 Resume vs Job Description Analysis
- 💡 Skill Matching
- ✨ AI Resume Tailoring
- 💬 AI Resume Chat
- 📧 AI Cover Letter Generator
- 🌙 Dark/Light Mode
- 📱 Responsive UI

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios

### Backend
- FastAPI
- Python
- Groq LLM API
- PyPDF2
- python-docx

---

## 📂 Project Structure

```
AI-Resume-Analyzer
│
├── backend
│   ├── main.py
│   ├── parser.py
│   ├── resume_analyzer.py
│   ├── ats_score.py
│   ├── resume_chat.py
│   ├── resume_tailor.py
│   ├── cover_letter.py
│   └── ...
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/Ankithagowdasr/AI-Resume-Analyzer.git
cd AI-Resume-Analyzer
```

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
GROQ_API_KEY=your_groq_api_key
```

---

## 📸 Screenshots

> Add screenshots of:
- Home Page
- Resume Analysis
- ATS Score
- Resume Chat
- Cover Letter

---

## 🎯 Future Enhancements

- User Authentication
- Resume History
- PDF Export
- Multiple Resume Support
- Interview Question Generator
- Resume Version Comparison

---

## 👩‍💻 Author

**Ankitha S R**

GitHub: https://github.com/Ankithagowdasr
