input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    servos.P0.setAngle(180)
    basic.pause(1000)
    servos.P0.stop()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    servos.P0.setAngle(0)
    basic.pause(1000)
    servos.P0.stop()
})
