import google.generativeai as genai
import os
from dotenv import load_dotenv
from .prompt_engineering import build_prompt

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")

def generate_content(request):
    prompt = build_prompt(request.topic, request.platform, request.tone)
    
    response = model.generate_content(prompt)
    return response.text
