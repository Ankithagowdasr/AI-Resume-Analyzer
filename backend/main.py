from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import os
import shutil

from parser import extract_text_from_pdf, extract_text_from_docx
from resume_analyzer import analyze_resume
from jd_parser import clean_job_description
from skill_matcher import extract_skills, compare_skills
from resume_jd_analyzer import analyze_resume_with_jd
from ats_score import calculate_ats_score
from resume_tailor import tailor_resume
from cover_letter import generate_cover_letter
from resume_chat import ask_resume_chat

app = FastAPI(
    title="AI Resume Analyzer",
    version="1.0"
)

# -----------------------------
# CORS Configuration
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.get("/")
def home():
    return {
        "message": "Welcome to AI Resume Analyzer"
    }


# ==========================================
# Resume Analysis
# ==========================================

@app.post("/upload")
async def upload_resume(file: UploadFile = File(...)):

    if not (file.filename.endswith(".pdf") or file.filename.endswith(".docx")):
        return {
            "error": "Only PDF and DOCX files are allowed."
        }

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    if file.filename.endswith(".pdf"):
        extracted_text = extract_text_from_pdf(file_path)
    else:
        extracted_text = extract_text_from_docx(file_path)

    analysis = analyze_resume(extracted_text)

    return {
        "filename": file.filename,
        "status": "Resume uploaded successfully",
        "analysis": analysis
    }


# ==========================================
# Resume vs Job Description
# ==========================================

@app.post("/analyze-jd")
async def analyze_job_description(
    file: UploadFile = File(...),
    job_description: str = Form(None),
    jd_file: UploadFile = File(None)
):

    # -----------------------------
    # Validate Resume
    # -----------------------------
    if not (file.filename.endswith(".pdf") or file.filename.endswith(".docx")):
        return {
            "error": "Only PDF and DOCX resumes are allowed."
        }

    resume_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(resume_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # -----------------------------
    # Extract Resume Text
    # -----------------------------
    if file.filename.endswith(".pdf"):
        resume_text = extract_text_from_pdf(resume_path)
    else:
        resume_text = extract_text_from_docx(resume_path)

    # ===================================================
    # Get Job Description
    # ===================================================

    # Case 1 : User uploaded JD PDF
    if jd_file:

        if not jd_file.filename.endswith(".pdf"):
            return {
                "error": "Job Description must be a PDF."
            }

        jd_path = os.path.join(
            UPLOAD_FOLDER,
            "jd_" + jd_file.filename
        )

        with open(jd_path, "wb") as buffer:
            shutil.copyfileobj(jd_file.file, buffer)

        jd_text = extract_text_from_pdf(jd_path)

    # Case 2 : User pasted JD
    else:

        if not job_description:
            return {
                "error": "Please paste a Job Description or upload a JD PDF."
            }

        jd_text = job_description

    # -----------------------------
    # Clean JD
    # -----------------------------
    jd_text = clean_job_description(jd_text)

    # -----------------------------
    # Extract Skills
    # -----------------------------
    resume_skills = extract_skills(resume_text)
    jd_skills = extract_skills(jd_text)

    # -----------------------------
    # Skill Comparison
    # -----------------------------
    comparison = compare_skills(
        resume_skills,
        jd_skills
    )

    # -----------------------------
    # ATS Score
    # -----------------------------
    ats_result = calculate_ats_score(resume_text)

    # -----------------------------
    # AI Analysis
    # -----------------------------
    ai_analysis = analyze_resume_with_jd(
        resume_text,
        jd_text
    )

    # -----------------------------
    # Resume Tailoring
    # -----------------------------
    tailor_result = tailor_resume(
        resume_text,
        jd_text
    )

    # -----------------------------
    # Cover Letter
    # -----------------------------
    cover_letter = generate_cover_letter(
        resume_text,
        jd_text
    )

    return {
        "ats_score": ats_result["ats_score"],
        "resume_skills": resume_skills,
        "job_description_skills": jd_skills,
        **comparison,
        "ai_analysis": ai_analysis,
        "tailor": tailor_result,
        "cover_letter": cover_letter
    }

@app.post("/resume-chat")
async def resume_chat(
    file: UploadFile = File(...),
    job_description: str = Form(...),
    question: str = Form(...)
):

    resume_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(resume_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    if file.filename.endswith(".pdf"):
        resume_text = extract_text_from_pdf(resume_path)
    else:
        resume_text = extract_text_from_docx(resume_path)

    answer = ask_resume_chat(
        resume_text,
        job_description,
        question
    )

    return {
        "answer": answer
    }