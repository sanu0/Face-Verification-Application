
import cv2
import numpy as np
import os

def distance(x, X):
    return np.sqrt(np.sum((x - X)**2))

def knn(X, Y, x, K=3):
    m = X.shape[0]
    x = x.reshape((10000,))
    val = []
    for i in range(m):
        xi = X[i]
        xi = xi.reshape((10000,))
        dist = distance(x, xi)
        val.append((dist, Y[i]))
    val = sorted(val, key=lambda x: x[0])[:K]
    val = np.asarray([item[1] for item in val])  # Extract only labels (second element of each tuple)

    new_vals = np.unique(val, return_counts=True)
    index = new_vals[1].argmax()
    output = new_vals[0][index]
    return output

path = "haarcascade_frontalface_alt.xml"
dirpath = "data"
face_cascade = cv2.CascadeClassifier(path)

face_data = []
labels = []
names = {}
class_id = 0

for file in os.listdir(dirpath):
    if file.endswith(".npy"):
        data_item = np.load(dirpath + "\\" + file)
        names[class_id] = file[:-4]
        face_data.append(data_item)
        target = class_id * np.ones((data_item.shape[0],))
        class_id += 1
        labels.append(target)

face_dataset = np.concatenate(face_data, axis=0)
face_labels = np.concatenate(labels, axis=0).reshape((-1, 1))





# Load the two photos you want to compare
# ---------------------------------------------------------------Here put your image files --------------------------------------------------------
photo1 = cv2.imread("input/1.jpg", cv2.IMREAD_GRAYSCALE)
photo2 = cv2.imread("input/0.jpg", cv2.IMREAD_GRAYSCALE)
# -------------------------------------------------------------------------------------------------------------------------------------------------



# Detect faces in the photos
faces1 = face_cascade.detectMultiScale(photo1, 1.3, 5)
faces2 = face_cascade.detectMultiScale(photo2, 1.3, 5)

if len(faces1) > 0 and len(faces2) > 0:
    # Assume only one face in each photo for simplicity
    x1, y1, w1, h1 = faces1[0]
    x2, y2, w2, h2 = faces2[0]

    face_section1 = cv2.resize(photo1[y1:y1+h1, x1:x1+w1], (100, 100))
    face_section2 = cv2.resize(photo2[y2:y2+h2, x2:x2+w2], (100, 100))

    pred1 = knn(face_dataset, face_labels, face_section1)
    pred2 = knn(face_dataset, face_labels, face_section2)

    if pred1 == pred2:
        print(True)
    else:
        print(False)
else:
    print(False)
