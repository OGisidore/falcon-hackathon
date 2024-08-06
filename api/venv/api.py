from flask import Flask, request, jsonify
import requests
from dotenv import load_dotenv
import os
import assemblyai as aai
import base64
import io

import tempfile
from flask_cors import CORS




# Load environment variables from .env file
load_dotenv()

# Set up OpenAI client
api_key = os.getenv("API_KEY")
aai.settings.api_key = os.getenv("ASSEMBLYAI_API_KEY")

app = Flask(__name__)
cors = CORS(app)


@app.route("/api/step1", methods=['POST'])
def object_detection():
    API_URL = "https://api-inference.huggingface.co/models/facebook/detr-resnet-50"
    headers = {"Authorization": f"Bearer {api_key}"}

    data = request.json
    if 'image' not in data:
        return jsonify({'error': 'No image provided'}), 400
    
    # Extraire l'image en base64
    image_base64 = data['image']
    
    # Décoder la chaîne base64
    image_data = base64.b64decode(image_base64.split(',')[1])
    
    with tempfile.NamedTemporaryFile(suffix='.jpeg', delete=False) as temp_file:
        temp_file.write(image_data)
        img_save_path = temp_file.name

        
    img = img_save_path

    if img is not None:
        # Save the captured image to a file
        # with open("captured_image.png", "wb") as f:
        #     f.write(img.getbuffer())

        # Function to query the model
        def query(filename):
            with open(filename, "rb") as f:
                data = f.read()
            response = requests.post(API_URL, headers=headers, data=data)
            return response.json()

        # Perform the object detection query
        output = query(img  )
        return output
    
@app.route("/api/step2",  methods=['POST'])
def speech_recognitione():

    # Replace with your API key
    # aai.settings.api_key = "71abafd79449452cae0bc43adab9eadf"

    # URL of the file to transcribe
    # FILE_URL = ""
    if 'audio' not in request.files:
        return jsonify({'error': 'Aucun fichier audio fourni'}), 400
    
    # Obtenir le fichier audio depuis la requête
    audio_file = request.files['audio']
    
    # Sauvegarder le fichier audio temporairement
    with tempfile.NamedTemporaryFile(suffix='.mp3', delete=False) as temp_file:
        audio_file.save(temp_file.name)
        audio_file_path = temp_file.name

    # You can also transcribe a local file by passing in a file path
    # FILE_URL = './path/to/file.mp3'

    transcriber = aai.Transcriber()
    transcript = transcriber.transcribe(audio_file_path         )

    if transcript.status == aai.TranscriptStatus.error:
        output = jsonify({'error': transcript.error})
    else:
        output = jsonify({'transcript': transcript.text})

    return output

app.run(debug=True)