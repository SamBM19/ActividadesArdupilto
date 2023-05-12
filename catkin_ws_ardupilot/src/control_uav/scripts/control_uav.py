# /usr/bin/env python3

import rospy
from geometry_msgs.msg import PoseStamped
from mavros_msgs.msg import State, ManualControl, OverrideRCIn
from mavros_msgs.srv import CommandBool, CommandBoolRequest, SetMode, SetModeRequest, CommandTOL
import time

current_state = State ()

def state_cb(msg):
    global current_state
    current_state = msg

def setArm():
    rospy.wait_for_service('/mavros/cmd/arming')
    try:
        armService = rospy.ServiceProxy('/mavros/cmd/arming', CommandBool)
        armService(True)
    except rospy.ServiceException as e:
        print("Arm failed")

def setTakeofMode():
    rospy.wait_for_service('/mavros/cmd/takeoff')
    try:
        takeoffService = rospy.ServiceProxy('/mavros/cmd/takeoff', CommandTOL)
        takeoffService(altitude = 2, latitude = 0, longitude = 0, min_pitch = 0, yaw = 0)
    except:
        print("Takeoff failed")

def setMode(mode):
    rospy.wait_for_service('/mavros/set_mode')
    try:
        flightModeService = rospy.ServiceProxy('/mavros/set_mode', SetMode)
        isModeChanged = flightModeService(custom_mode = mode)
        print(isModeChanged, mode)
    except:
        print("The mode can't be changed")

def setLandMode () :
    rospy.wait_for_service('/mavros/cmd/land')
    try:
        landService = rospy. ServiceProxy ('/mavros/cmd/land' , CommandTOL)
        isLanding = landService(altitude = 0, latitude = 0, longitude = 0, min_pitch = 0, yaw = 1)
    except rospy. ServiceException as e:
       print ("Takeoff failed")

def manual_control():
    rospy.wait_for_service('/mavros/cmd/land')
    try:
        landService = rospy. ServiceProxy('/mavros/cmd/land', ManualControl)
        isLanding = landService(altitude = 0, latitude = 0, longitude = 0, min_pitch = 0, yaw = 1)
    except rospy.ServiceException as e:
        print("Takeoff failed")

if __name__ == "__main__":
    rospy.init_node("PIMEX")
    # Set mode
    setMode("GUIDED")
    time.sleep(2)
    # Arming UAV
    setArm()
    time.sleep(2)
    # UAV takeoff
    setTakeofMode()
    time.sleep(10)
    # Landing UAV
    setLandMode()
