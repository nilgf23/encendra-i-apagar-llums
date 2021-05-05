input.onButtonPressed(Button.A, function () {
    led.plot(x, y)
    x += 1
    if (x == 5) {
        x = -1
        y += 1
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    x += -1
    if (x == -1) {
        x = 5
        y += -1
    }
})
let y = 0
let x = 0
x = -1
y = 0
