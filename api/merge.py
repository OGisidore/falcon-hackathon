import os
import requests
import cv2
import pandas as pd
import numpy as np
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Set up OpenAI client
api_key = os.getenv("API_KEY")
API_URL = "https://api-inference.huggingface.co/models/facebook/detr-resnet-50"
headers = {"Authorization": f"Bearer {api_key}"}

# Function to query the model
def query(filename):
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
image_path = "image.jpeg"  # Change this to the path of your image
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

# Process each detected object
for label, box in object_info:
    x1, y1, x2, y2 = box['xmin'], box['ymin'], box['xmax'], box['ymax']
    
    # Ensure coordinates are within image bounds
    x1, y1, x2, y2 = max(0, x1), max(0, y1), min(img.shape[1], x2), min(img.shape[0], y2)

    roi = img[y1:y2, x1:x2]

    color_count = detect_colors_in_roi(roi, csv)

    print(f"Object: {label}")
    print("Detected Colors:")
    for color, count in color_count.items():
        print(f"{color}")
    print()
