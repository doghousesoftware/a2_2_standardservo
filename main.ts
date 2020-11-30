input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    pins.servoWritePin(AnalogPin.P2, 0)
    basic.pause(1000)
})
