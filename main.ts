let que = 0
input.onButtonPressed(Button.A, function () {
    que = input.lightLevel()
})
input.onButtonPressed(Button.B, function () {
    que = input.temperature()
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("" + (input.lightLevel()))
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showString("" + (input.temperature()))
    }
})
basic.forever(function () {
    que = input.lightLevel()
    que = input.temperature()
})
