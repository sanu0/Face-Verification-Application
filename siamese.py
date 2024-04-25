import cv2
import os
import random
import numpy as np
from matplotlib import pyplot as plt

from tensorflow.keras.models import Model
from tensorflow.keras.layers import Layer, Conv2D, Dense, MaxPooling2D, Input, Flatten
import tensorflow as tf

class L1Dist(Layer):

    # Init method - inheritance
    def __init__(self, **kwargs):
        super().__init__()

    # Magic happens here - similarity calculation
    def call(self, input_embedding, validation_embedding):
        return tf.math.abs(input_embedding - validation_embedding)
    
model_path = os.path.join('models/siamese1.keras')

model = tf.keras.models.load_model(model_path, custom_objects={'L1Dist': L1Dist})

def preprocess(file_path):

    # Read in image from file path
    byte_img = tf.io.read_file(file_path)
    # Load in the image
    img = tf.io.decode_jpeg(byte_img)

    # Preprocessing steps - resizing the image to be 100x100x3
    img = tf.image.resize(img, (100,100))
    # Scale image to be between 0 and 1
    img = img / 255.0

    # Return image
    return img

# --------------------------------------------------Image Upload path --------------------------------------------------------------------------
img1 = preprocess('input/0.jpg')
img2 = preprocess('input/1.jpg')
# ----------------------------------------------------------------------------------------------------------------------------------------------

def preprocess_twin(input_img, validation_img, label):
    return(preprocess(input_img), preprocess(validation_img), label)

comb = [img1, img2]
inp1 = [np.expand_dims(img1, axis=0)]
inp2 = [np.expand_dims(img2, axis=0)]
# model_input = [comb]
model_input = [np.expand_dims(image, axis=0) for image in comb]
prediction = model([inp1, inp2])

# print(prediction.numpy()[0][0])
print(True if prediction.numpy()[0][0] > 0.5 else False)
