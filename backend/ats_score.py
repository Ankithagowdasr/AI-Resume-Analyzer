import re

# ==========================
# Skill Database
# ==========================

TECHNICAL_SKILLS = [
    "java", "python", "c", "c++", "javascript", "typescript",
    "html", "css", "bootstrap", "tailwind",
    "react", "angular", "vue",
    "node", "express",
    "spring", "spring boot",
    "django", "flask", "fastapi",
    "mysql", "postgresql", "mongodb", "oracle", "sqlite",
    "git", "github",
    "docker", "kubernetes", "jenkins",
    "aws", "azure", "gcp",
    "linux", "postman", "rest api"
]

ACTION_KEYWORDS = [
    "developed",
    "designed",
    "implemented",
    "created",
    "built",
    "optimized",
    "collaborated",
    "led",
    "managed",
    "improved",
    "tested",
    "deployed",
    "integrated",
    "engineered",
    "maintained"
]


# ==========================
# Contact Score (10)
# ==========================

def check_contact(text):
    score = 0

    email_pattern = r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"

    phone_pattern = r"\+?\d[\d\s-]{9,14}"

    if re.search(email_pattern, text):
        score += 4

    if re.search(phone_pattern, text):
        score += 4

    if "linkedin.com" in text.lower() or "github.com" in text.lower():
        score += 2

    return score


# ==========================
# Skills Score (20)
# ==========================

def check_skills(text):

    text = text.lower()

    found = []

    for skill in TECHNICAL_SKILLS:
        if skill in text:
            found.append(skill)

    score = min(len(found) * 2, 20)

    return score, found


# ==========================
# Education Score (15)
# ==========================

def check_education(text):

    text = text.lower()

    score = 0

    education_keywords = [
        "b.e",
        "b.tech",
        "bachelor",
        "computer science",
        "engineering",
        "cgpa",
        "university",
        "college"
    ]

    for word in education_keywords:
        if word in text:
            score += 2

    return min(score, 15)


# ==========================
# Project Score (20)
# ==========================

def check_projects(text):

    text = text.lower()

    score = 0

    project_keywords = [
        "project",
        "developed",
        "built",
        "created",
        "implemented",
        "designed"
    ]

    for word in project_keywords:
        if word in text:
            score += 3

    return min(score, 20)


# ==========================
# Experience Score (15)
# ==========================

def check_experience(text):

    text = text.lower()

    score = 0

    experience_keywords = [
        "intern",
        "internship",
        "experience",
        "worked",
        "software engineer",
        "developer"
    ]

    for word in experience_keywords:
        if word in text:
            score += 3

    return min(score, 15)


# ==========================
# Formatting Score (10)
# ==========================

def check_formatting(text):

    text = text.lower()

    score = 0

    headings = [
        "education",
        "skills",
        "projects",
        "experience"
    ]

    for heading in headings:
        if heading in text:
            score += 2

    return min(score, 10)


# ==========================
# Action Keywords (10)
# ==========================

def check_keywords(text):

    text = text.lower()

    score = 0

    for word in ACTION_KEYWORDS:
        if word in text:
            score += 1

    return min(score, 10)


# ==========================
# Main ATS Function
# ==========================

def calculate_ats_score(resume_text):

    contact_score = check_contact(resume_text)

    skill_score, detected_skills = check_skills(resume_text)

    education_score = check_education(resume_text)

    project_score = check_projects(resume_text)

    experience_score = check_experience(resume_text)

    formatting_score = check_formatting(resume_text)

    keyword_score = check_keywords(resume_text)

    total = (
        contact_score
        + skill_score
        + education_score
        + project_score
        + experience_score
        + formatting_score
        + keyword_score
    )

    return {

        "ats_score": total,

        "detected_skills": detected_skills,

        "breakdown": {

            "contact": contact_score,

            "skills": skill_score,

            "education": education_score,

            "projects": project_score,

            "experience": experience_score,

            "formatting": formatting_score,

            "keywords": keyword_score
        }
    }