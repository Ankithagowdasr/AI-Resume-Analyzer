import os
import json
from dotenv import load_dotenv
from groq import Groq

from prompt import generate_prompt
from ats_score import calculate_ats_score

# -----------------------------
# Load Environment Variables
# -----------------------------
load_dotenv()

api_key = os.getenv("GROQ_API_KEY")

# -----------------------------
# Create Groq Client
# -----------------------------
client = Groq(api_key=api_key)


def analyze_resume(resume_text):
    """
    Analyze the uploaded resume using:
    1. Rule-Based ATS Engine
    2. Groq AI Suggestions
    """

    # -----------------------------
    # Calculate ATS Score
    # -----------------------------
    ats_result = calculate_ats_score(resume_text)

    # -----------------------------
    # Generate Prompt
    # -----------------------------
    prompt = generate_prompt(resume_text)

    # -----------------------------
    # Groq Response
    # -----------------------------
    try:
        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.3,
            response_format={"type": "json_object"}
        )

        response_text = response.choices[0].message.content

        # Convert AI response into Python dictionary
        ai_result = json.loads(response_text)

    except Exception as e:
        print("\n========== GROQ ERROR ==========")
        print(e)
        print("================================\n")

        ai_result = {
            "resume_summary": "",
            "strengths": [],
            "weaknesses": [],
            "suggestions": [],
            "recommended_roles": [],
            "raw_response": str(e)
        }

    # -----------------------------
    # Merge ATS Results
    # -----------------------------
    final_result = {

        "our_ats_score": ats_result["ats_score"],

        "ats_breakdown": ats_result["breakdown"],

        "detected_skills": ats_result["detected_skills"],

        "resume_summary": ai_result.get("resume_summary", ""),

        "strengths": ai_result.get("strengths", []),

        "weaknesses": ai_result.get("weaknesses", []),

        "suggestions": ai_result.get("suggestions", []),

        "recommended_roles": ai_result.get("recommended_roles", [])
    }

    return final_result