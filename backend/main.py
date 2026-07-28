from fastapi import FastAPI, UploadFile, File
import os
import shutil

app = FastAPI(
    title="AI Resume Analyzer",
    version="1.0"
)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.get("/")
def home():
    return {
        "message": "Welcome to AI Resume Analyzer"
    }


@app.post("/upload")
async def upload_resume(file: UploadFile = File(...)):
    # Check file type
    if not (file.filename.endswith(".pdf") or file.filename.endswith(".docx")):
        return {
            "error": "Only PDF and DOCX files are allowed."
        }

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        "filename": file.filename,
        "status": "Resume uploaded successfully"
    }