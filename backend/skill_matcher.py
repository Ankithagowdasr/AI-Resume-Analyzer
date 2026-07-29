import json
import re


# ================================
# Load Skills from skills.json
# ================================

with open("skills.json", "r", encoding="utf-8") as file:
    SKILLS_DATABASE = json.load(file)


# ================================
# Extract Skills
# ================================

def extract_skills(text):
    """
    Extract technical skills from resume/JD.
    """

    text = text.lower()

    found_skills = []

    for category in SKILLS_DATABASE:

        for skill in SKILLS_DATABASE[category]:

            pattern = r"\b" + re.escape(skill.lower()) + r"\b"

            if re.search(pattern, text):
                found_skills.append(skill)

    return sorted(list(set(found_skills)))


# ================================
# Categorize Skills
# ================================

def categorize_skills(skills):

    categorized = {}

    for category in SKILLS_DATABASE:

        category_skills = []

        for skill in SKILLS_DATABASE[category]:

            if skill in skills:
                category_skills.append(skill)

        if category_skills:
            categorized[category] = category_skills

    return categorized


# ================================
# Compare Resume and JD
# ================================

def compare_skills(resume_skills, jd_skills):

    resume_set = set(skill.lower() for skill in resume_skills)

    jd_set = set(skill.lower() for skill in jd_skills)

    matched = sorted(list(resume_set & jd_set))

    missing = sorted(list(jd_set - resume_set))

    if len(jd_set) == 0:
        match_percentage = 0
    else:
        match_percentage = round(
            (len(matched) / len(jd_set)) * 100,
            2
        )

    return {

        "matched_skills": matched,

        "missing_skills": missing,

        "job_match_percentage": match_percentage
    }