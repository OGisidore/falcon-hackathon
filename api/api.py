from flask import Flask, request, jsonify
import requests
from dotenv import load_dotenv
import os
import assemblyai as aai
import base64
import io
import cv2
import numpy as np
import pandas as pd




import tempfile
from flask_cors import CORS




# Load environment variables from .env file
load_dotenv()

# Set up OpenAI client
api_key = os.getenv("API_KEY")
aai.settings.api_key = os.getenv("ASSEMBLYAI_API_KEY")

app = Flask(__name__)
cors = CORS(app)


def query(filename):
    API_URL = "https://api-inference.huggingface.co/models/facebook/detr-resnet-50"
    headers = {"Authorization": f"Bearer {api_key}"}
    with open(filename, "rb") as f:
        data = f.read()
    response = requests.post(API_URL, headers=headers, data=data)
    return response.json()

# Function to calculate minimum distance from all colors and get the most matching color
def getColorName(R, G, B, csv):
    minimum = 10000
    cname = ""
    for i in range(len(csv)):
        d = abs(R - int(csv.loc[i, "R"])) + abs(G - int(csv.loc[i, "G"])) + abs(B - int(csv.loc[i, "B"]))
        if d <= minimum:
            minimum = d
            cname = csv.loc[i, "color_name"]
    return cname

   

    # Load the image

def detect_colors_in_roi(roi, csv, num_samples=10):
    height, width, _ = roi.shape
    color_count = {}

    for _ in range(num_samples):
        x = np.random.randint(0, width)
        y = np.random.randint(0, height)
        b, g, r = roi[y, x]
        color_name = getColorName(r, g, b, csv)

        if color_name in color_count:
            color_count[color_name] += 1
        else:
            color_count[color_name] = 1

    return color_count
   



@app.route("/api/step1", methods=['POST'])
def object_detection():
    

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

        
     

    image_path = img_save_path  # Change this to the path of your image
    img = cv2.imread(image_path)

# Check if the image was successfully loaded
    if img is None:
        print("Error: Image not found or unable to open.")
        exit()

# Perform the object detection query
    output = query(image_path)

# Display the object detection output
    if 'error' in output:
        print("Error in object detection:", output['error'])
        exit()

# Extract object names and bounding boxes
    object_info = [(obj['label'], obj['box']) for obj in output]

# Reading CSV file with pandas and giving names to each column
    index = ["color", "color_name", "hex", "R", "G", "B"]
    csv = pd.read_csv('colors.csv', names=index, header=None)

# Function to detect colors in the region of interest (ROI)

# Process each detected object
    results =[]
    for label, box in object_info:
        x1, y1, x2, y2 = box['xmin'], box['ymin'], box['xmax'], box['ymax']
    
    # Ensure coordinates are within image bounds
        x1, y1, x2, y2 = max(0, x1), max(0, y1), min(img.shape[1], x2), min(img.shape[0], y2)

        roi = img[y1:y2, x1:x2]

        color_count = detect_colors_in_roi(roi, csv)
        color_details = [{'color': color, 'count': count} for color, count in color_count.items()]
        results.append({
            'label': label,
            'DetectedColor': color_details
        })
    
    return jsonify({'objects': results})

        # print(f"Object: {label}")
        # print("Detected Colors:")
        # for color, count in color_count.items():
        #     print(f"{color}")
        # print()


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