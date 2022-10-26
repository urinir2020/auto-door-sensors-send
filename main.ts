radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        SuperBit.Servo2(SuperBit.enServo.S1, 220)
        basic.showArrow(ArrowNames.West)
    } else {
        SuperBit.Servo2(SuperBit.enServo.S1, 110)
        basic.showArrow(ArrowNames.East)
    }
})
SuperBit.Servo2(SuperBit.enServo.S1, 110)
radio.setGroup(100)
