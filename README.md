## Face Verification Web App

Welcome to the Face Verification Web App project! This web app utilizes three techniques—KNN, Deep Face, and Siamese Network—for face verification. Follow the setup guide below to get started with your own model and run the web app.

### Project Description

This project is a web application designed for face verification. It incorporates three different techniques:

1. **KNN:** Utilizes the K-Nearest Neighbors algorithm for face verification.
2. **Deep Face:** Employs deep learning techniques for face recognition and verification.
3. **Siamese Network:** Uses a Siamese neural network architecture for face verification tasks.

### Setup Guide

0. **Prerequisites:** Ensure you have `Node.js`, `npm` and `python` (Node Package Manager) installed on your system.

Versions Used:
 `Python 3.11.0`
`Node 20.11.0`

1. **Create Your Database:**
   - Create a folder named `data`.
   - Inside the `data` folder, create three sub-directories:
     1. `anchor`: Contains images to be used as anchor images for verification.
     2. `positive`: Contains positive images (same person as anchor) for verification.
     3. `negative`: Contains negative images (different person than anchor) for verification.

2. **Update Path to Data:**
   - Update the path to your data in the notebook (`.ipynb file`) to reflect the structure of your dataset.

3. **Run the Notebook:**
   - Run the notebook to create and train your own face verification model using the specified techniques.

4. **Start the Server:**
   - Navigate to the root directory where `server.js` and `package.json` files are located.
   - Run `npm install` to install necessary dependencies.
   - Run `node server.js` to spin up the server.
   - Voilà! Your project is now running, and you can access the web app for face verification tasks.

### Additional Notes

- Make sure to have the required libraries and frameworks installed for running the notebook and the server.
- Customize the web app interface and functionalities as per your requirements.

Enjoy exploring face verification with your web app! If you need further assistance or have any questions, feel free to reach out.
