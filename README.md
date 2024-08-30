# Face Verification App

  

Welcome to the **Face Verification App**! This project utilizes cutting-edge machine learning models for face recognition to verify if two images are of the same person. Our goal is to leverage one-shot learning to achieve accurate face verification with minimal data. The app allows users to upload two images and choose from three different models to verify if the two images belong to the same person.

  

## Why Face Verification?

  

Face verification is a key technology in modern security systems, social media applications, and personal device authentication. Traditional methods often require extensive datasets and computational resources. However, with advancements in deep learning, particularly one-shot learning, we can achieve accurate face verification using minimal data. This app demonstrates how state-of-the-art models like Siamese Networks, K-Nearest Neighbors (KNN), and Facebook's DeepFace can be applied to face verification tasks.

  

## One-Shot Learning with Siamese Networks

  

One-shot learning aims to train a model that can learn information about object categories from one or very few training images. The Siamese Neural Network, as described in the paper "Siamese Neural Networks for One-shot Image Recognition", is designed for this purpose. It consists of two identical subnetworks that share parameters and are trained to minimize a distance function that differentiates between similar and dissimilar pairs of images.

  

### How It Works

  

1.  **Model Selection**: Choose from three models:

-  **K-Nearest Neighbors (KNN)**: A simple, yet effective, model that classifies images based on their nearest neighbors.

-  **Siamese Network**: A more complex model designed for one-shot learning, which excels when data is limited.

-  **DeepFace**: A state-of-the-art model developed by Facebook, which uses deep learning techniques for face verification.

  

2.  **Image Upload**: Users can upload two images to the app.

  

3.  **Verification**: The selected model compares the two images and determines if they are of the same person.

  

## Project Setup

  

To run this project locally, follow these steps:

  

### Prerequisites

  

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

# Setup Guide

## Prerequisites

Before you begin, ensure that you have the following installed on your system:

- **Node.js** 
- **npm** (Node Package Manager)
- **Python**

### Versions Used:

- **Python**: 3.11.0
- **Node.js**: 20.11.0

## Database Setup

1. **Create a Data Directory**:
   - Make a new folder named `data`.

2. **Create Subdirectories** inside the `data` folder:
   - **anchor**: This directory will store anchor images used for face verification.
   - **positive**: Place images here that are considered positive matches (same person as in the anchor images).
   - **negative**: Store images here that are considered negative matches (different person than in the anchor images).

## Update Data Path

Ensure that the path to your dataset in the notebook (`.ipynb` file) aligns with the structure of your newly created directories.

## Running the Notebook

Execute the notebook to build and train your face verification model using the provided methods.
After that save the trained model in the models directory

## Starting the Server

1. **Navigate to the Root Directory**:
   - This is where the `requirements.txt` and `package.json` files are located.

2. **Install Python Packages**:
   - Run the following command to install necessary Python packages:
   ```bash
   pip install -r requirements.txt
  

### Installation

  

1.  **Clone the repository**:


    git clone https://github.com/sanu0/Face-Verification-App.git
    
    cd Face-Verification-App

2.  **Install the Dependencies**:

    npm install

3.  **Start The Server**

    node server.js

4.  **Access the App**

    Open your web browser and go to http://localhost:3000.
    
    You will see the face verification interface.

  

### How to Use App
Upload Images: Click on the "Choose File" buttons to upload two images that you want to verify.

Select Model: Choose from the dropdown menu to select the model you want to use for verification (KNN, Siamese, or DeepFace).

Verify: Click the "Verify" button. The app will analyze the images and display whether they are of the same person or not.

![Starting Image - 1](https://drive.google.com/uc?export=view&id=1lRxWhF6Ottb1OB7OlLFBtuRb7C74CaQQ)

![Selecting the desired Model for Evaluation](https://drive.google.com/uc?export=view&id=1qUmO4r-3K0G2yXq5TBbLpsIUTqQHhhgw)

![Example -1](https://drive.google.com/uc?export=view&id=1mjVUNbgc-uuLah361g5lXWumzmDrq8Mf)

![Example - 2](https://drive.google.com/uc?export=view&id=1l2NMwwzIgUJU3DhWuZ6ccC1nMxGs3Ub4)

![Example - 3](https://drive.google.com/uc?export=view&id=1CcyIfnrTSj010oC8gJjoVieCuGBZS9Hy)


## Model Used

### K-Nearest Neighbour(KNN)

A classic algorithm used for simple and effective classification tasks. It works by calculating the closest neighbors to a query image and classifying it based on the majority label of those neighbors.

### Siamese Network

A deep learning model that uses twin neural networks to find the similarity between two images. It is especially effective in one-shot learning scenarios where each class has only one or a few examples. Siamese networks are robust in situations where data is scarce and perform well in various image recognition tasks.

### DeepFace

Developed by Facebook, DeepFace is a deep learning facial recognition system that closely matches human-level performance. It leverages a deep neural network trained on a vast dataset to recognize and verify faces with high accuracy.

## Conclusion

This Face Verification App demonstrates the power of modern machine learning techniques, particularly in scenarios where data is limited. By integrating various models like KNN, Siamese Networks, and DeepFace, this app provides a versatile and powerful tool for face verification tasks. We encourage you to try the app, explore different models, and see firsthand how advanced these technologies have become!

Feel free to contribute to this project by submitting issues or pull requests. I welcome any feedback or suggestions to improve the app!
=======