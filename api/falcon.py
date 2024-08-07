import requests
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Set up OpenAI client
api_key = os.getenv("API_KEY")

if not api_key:
    raise ValueError("API_KEY is missing. Please set it in your .env file.")

API_URL = "https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct"
headers = {"Authorization": f"Bearer {api_key}"}

def query(payload):
    try:
        response = requests.post(API_URL, headers=headers, json=payload)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        return {"error": str(e)}

question = "What is the shape of the football?"
output = query({
    "inputs": question,
})

for seq in output:
    print(f"Result: {seq['generated_text']}")

 