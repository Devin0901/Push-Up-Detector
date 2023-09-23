import cv2
import mediapipe as md

md_drawing = md.solutions.drawing_utils
md_drawing_styles = md.solutions.drawing_styles
md_pose = md.solutions.pose

count = 0

position = None

capture = cv2.VideoCapture(0)

with md_pose.Pose(
    min_detection_confidence = 0.7,
    min_tracking_confidence = 0.7) as pose:
    while capture.isOpened():
        success,image = capture.read()
        if not success:
            print("camera error")
            break

        image = cv2.cvtColor(cv2.flip(image,1), cv2.COLOR_BGR2RGB)
        result = pose.process(image)
        image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

        BodyCoordinates=[]

        if result.pose_landmarks:
            md_drawing.draw_landmarks(
                image,result.pose_landmarks,md_pose.POSE_CONNECTIONS)
            for id, im in enumerate(result.pose_landmarks.landmark):
                h,w,_ =image.shape
                X,Y = int (im.x*w), int(im.y*h)
                BodyCoordinates.append([id,X,Y])

        if len(BodyCoordinates) != 0:
            if ((BodyCoordinates[12][2] - BodyCoordinates[14][2])>=15 and (BodyCoordinates[11][2] - BodyCoordinates[13][2])>=15):
                position = "down"
            if ((BodyCoordinates[12][2] - BodyCoordinates[14][2])<=5 and (BodyCoordinates[11][2] - BodyCoordinates[13][2])<=5) and position == "down":
                position = "up"
                count+=1
                print(count)

        cv2.imshow("Push-Up Count", cv2.flip(image,1))
        key = cv2.waitKey(1)
        if key==ord('q'):
            break

cap.release()