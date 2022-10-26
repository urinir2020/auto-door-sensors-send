SuperBit.Servo2(SuperBit.enServo.S1, 110)
radio.setGroup(100)
basic.forever(function () {
    if (receivedNumber == 0) {
        SuperBit.Servo2(SuperBit.enServo.S1, 110)
    } else {
        SuperBit.Servo2(SuperBit.enServo.S1, 220)
    }
})
