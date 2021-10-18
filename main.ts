input.onButtonPressed(Button.A, function () {
    basic.showString("BENTORNATA")
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.clearScreen()
})
