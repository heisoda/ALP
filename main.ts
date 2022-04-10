let accomplishment = 0
let melody = 0
input.onButtonPressed(Button.A, function () {
    accomplishment += 1
    if (accomplishment == 10) {
        soundExpression.happy.playUntilDone()
    } else if (accomplishment == 20) {
        soundExpression.twinkle.playUntilDone()
    } else if (accomplishment == 25) {
        soundExpression.spring.playUntilDone()
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            basic.showIcon(IconNames.Heart)
            basic.pause(100)
            basic.showIcon(IconNames.SmallHeart)
            basic.pause(200)
            basic.showString("THANK YOU :D")
        }
        basic.clearScreen()
    }
    basic.showNumber(randint(0, 100))
    melody += 1
    if (melody == 4) {
        music.playMelody("E D E D E D E D ", 120)
    } else if (melody == 8) {
        music.playMelody("D E D F D G D C5 ", 120)
    } else if (melody == 12) {
        music.playMelody("D F D F E - D E ", 120)
    } else if (melody == 16) {
        music.playMelody("C C D E A G A E ", 120)
    } else if (melody == 18) {
        music.playMelody("D D C F F G A C5 ", 120)
    } else if (melody == 20) {
        music.playMelody("D E D E E F E C5 ", 120)
    } else if (melody == 24) {
        music.playMelody("F G F E D G A A ", 120)
    }
})
