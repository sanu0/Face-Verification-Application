from deepface import DeepFace
import cv2

ref = cv2.imread('input/0.jpg')
test = cv2.imread('input/1.jpg')


flag = False


try :
  result  = DeepFace.verify(ref, test)
  if result["verified"]:
    flag = True
    # print("Matched")
  # else :
    # print("Not Matched")
except ValueError:
  pass
  # print("Not Matched")

print(flag)