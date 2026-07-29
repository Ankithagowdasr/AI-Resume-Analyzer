import os

from dotenv import load_dotenv
from groq import Groq

from prompt import COVER_LETTER_PROMPT

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def generate_cover_letter(resume_text, job_description):

    prompt = f"""
{COVER_LETTER_PROMPT}

Resume:

{resume_text}

----------------------------------------

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
            temperature=0.3
        )

        return {
            "cover_letter": response.choices[0].message.content
        }

    except Exception as e:

        print("\n======= COVER LETTER ERROR =======")
        print(e)
        print("==================================")

        return {
            "cover_letter": "Unable to generate cover letter."
        }