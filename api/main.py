import cv2
import pandas as pd
import argparse
import numpy as np

# Creating argument parser to take image path from command line
# ap = argparse.ArgumentParser()
# ap.add_argument('-i', '--image', required=True, help="Image Path")
# args = vars(ap.parse_args())
# img_path = args['image']

# Reading the image with OpenCV
img = cv2.imread(input("Enter image path: "))

# Check if the image was successfully loaded
if img is None:
    print("Error: Image not found or unable to open.")
    exit()

# Function to calculate minimum distance from all colors and get the most matching color
def getColorName(R, G, B):
    minimum = 10000
    cname = ""
    for i in range(len(csv)):
        d = abs(R - int(csv.loc[i, "R"])) + abs(G - int(csv.loc[i, "G"])) + abs(B - int(csv.loc[i, "B"]))
        if d <= minimum:
            minimum = d
            cname = csv.loc[i, "color_name"]
    return cname

# Reading CSV file with pandas and giving names to each column
index = ["color", "color_name", "hex", "R", "G", "B"]
csv = pd.read_csv('colors.csv', names=index, header=None)

# Number of colors to sample
num_samples = 10  # Adjust this number as needed

# Initialize a dictionary to count color occurrences
color_count = {}

# Sample random pixels in the image
height, width, _ = img.shape

for _ in range(num_samples):
    # Generate random coordinates within the image dimensions
    x = np.random.randint(0, width)
    y = np.random.randint(0, height)
    
    # Get the RGB values from the image
    b, g, r = img[y, x]
    b = int(b)
    g = int(g)
    r = int(r)
    
    # Get the color name
    color_name = getColorName(r, g, b)
    
    # Count the occurrences of each color name
    if color_name in color_count:
        color_count[color_name] += 1
    else:
        color_count[color_name] = 1

# Print the results
print("Detected Colors:")
for color, count in color_count.items():
    print(f"{color}")
