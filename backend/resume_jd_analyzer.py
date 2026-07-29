import json
import os

from dotenv import load_dotenv
from groq import Groq

from prompt import JD_ANALYSIS_PROMPT

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def analyze_resume_with_jd(resume_text, job_description):

    prompt = f"""
{JD_ANALYSIS_PROMPT}

Resume:

{resume_text}

---------------------------------------

Job Description:

{job_description}
"""

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

        return json.loads(response.choices[0].message.content)

    except Exception as e:

        print("\n========== GROQ ERROR ==========")
        print(e)
        print("================================\n")

        return {
            "overall_fit": "Unavailable",
            "summary": "Groq AI is temporarily unavailable.",
            "strengths": [],
            "gaps": [],
            "recommendations": [
                "Please try again after a few minutes."
            ]
        }