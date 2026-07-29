import json
import os

from dotenv import load_dotenv
from groq import Groq

from prompt import RESUME_TAILOR_PROMPT

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def tailor_resume(resume_text, job_description):

    prompt = f"""
{RESUME_TAILOR_PROMPT}

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

        text = response.choices[0].message.content.strip()

        # Remove markdown if AI returns it
        text = text.replace("```json", "")
        text = text.replace("```", "").strip()

        print("\n===== GROQ RESPONSE =====\n")
        print(text)
        print("\n=========================\n")

        return json.loads(text)

    except Exception as e:

        print("\n========== RESUME TAILOR ERROR ==========")
        print(e)

        try:
            print("\nRaw Response:\n")
            print(response.choices[0].message.content)
        except Exception:
            pass

        print("=========================================\n")

        return {
            "professional_summary": "",
            "skills_to_add": [],
            "project_improvements": [],
            "resume_tips": [
                "Unable to generate suggestions."
            ]
        }