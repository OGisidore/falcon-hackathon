from flask import Flask
import requests
from dotenv import load_dotenv
import os
import assemblyai as aai

# Load environment variables from .env file
load_dotenv()

# Set up OpenAI client
api_key = os.getenv("API_KEY")
aai.settings.api_key = os.getenv("ASSEMBLYAI_API_KEY")

app = Flask(__name__)

@app.route("/api/step1")
def object_detection():
    API_URL = "https://api-inference.huggingface.co/models/facebook/detr-resnet-50"
    headers = {"Authorization": f"Bearer {api_key}"}

    img = ""

    if img is not None:
        # Save the captured image to a file
        with open("captured_image.png", "wb") as f:
            f.write(img.getbuffer())

        # Function to query the model
        def query(filename):
            with open(filename, "rb") as f:
                data = f.read()
            response = requests.post(API_URL, headers=headers, data=data)
            return response.json()

        # Perform the object detection query
        output = query("captured_image.png")
        return output
    
@app.route("/api/step2")
def speech_recognitione():

    # Replace with your API key
    # aai.settings.api_key = "71abafd79449452cae0bc43adab9eadf"

    # URL of the file to transcribe
    FILE_URL = ""

    # You can also transcribe a local file by passing in a file path
    # FILE_URL = './path/to/file.mp3'

    transcriber = aai.Transcriber()
    transcript = transcriber.transcribe(FILE_URL)

    if transcript.status == aai.TranscriptStatus.error:
        output = transcript.error
    else:
        output = transcript.text

    return output

app.run(debug=True)