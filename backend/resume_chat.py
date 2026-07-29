import os
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def ask_resume_chat(resume_text, job_description, question):

    prompt = f"""
You are an expert Career Coach.

Use ONLY the resume and job description below to answer the user's question.

Resume
-------
{resume_text}

Job Description
---------------
{job_description}

User Question
-------------
{question}

Rules:
- Answer only using the resume and job description.
- Be concise and professional.
- If the information isn't available, clearly say so.
- Give interview-oriented suggestions whenever appropriate.
"""

    try:
        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "system",
                    "content": "You are an expert Resume and Career Coach."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.3
        )

        # Return ONLY the string
        return response.choices[0].message.content

    except Exception as e:
        print("\n========== RESUME CHAT ERROR ==========")
        print(e)
        print("=======================================\n")

        return "Unable to answer right now."