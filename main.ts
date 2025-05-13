input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Surprised)
    basic.pause(30)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.pause(30)
    basic.showString("That tickles!")
    basic.pause(100)
    Happiness += 2
    basic.pause(100)
    basic.showIcon(IconNames.Happy)
    basic.pause(100)
    basic.clearScreen()
})
let Poop = 0
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
basic.pause(1)
basic.showString("Hi!")
let Timer = 0
let BOOOOORINNNNG = 0
let Sickness = 0
let Cleanliness = 10
let Happiness = 10
let Hunger = 0
basic.forever(function () {
    if (Hunger == 6) {
        basic.showIcon(IconNames.Confused)
        basic.pause(200)
        basic.showString("Hungry!")
    }
    if (Hunger == 9) {
        basic.showIcon(IconNames.Angry)
        basic.pause(200)
        basic.showString("...")
    }
    if (Hunger == 16) {
        basic.showIcon(IconNames.No)
        basic.pause(200)
        basic.showString("Passed out.")
    }
    if (Hunger == 6 && input.logoIsPressed()) {
        basic.showIcon(IconNames.Happy)
        basic.pause(200)
        basic.showString("Yay!")
    }
    if (Hunger == 9 && input.logoIsPressed()) {
        basic.showIcon(IconNames.Happy)
        basic.pause(200)
        basic.showString("Yay!")
    }
    if (Hunger == 16 && input.logoIsPressed()) {
        basic.showIcon(IconNames.Happy)
        basic.pause(200)
        basic.showString("Yay!")
    }
})
basic.forever(function () {
    if (Poop == 4) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            # # # # #
            `)
        basic.pause(200)
        basic.showString("Poop!")
    }
    if (Poop == 8) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            # # # # #
            `)
        basic.pause(200)
        basic.showString("It smells!")
    }
    if (Poop == 12) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # . # .
            # . # . #
            `)
        basic.pause(200)
        basic.showString("Passed Out...")
        basic.pause(200)
        basic.clearScreen()
    }
    if (Poop == 4 && input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
        basic.clearScreen()
    }
    if (Poop == 8 && input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
        basic.clearScreen()
    }
    if (Poop == 12 && input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        basic.pause(100)
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
        Poop = 0
        basic.pause(100)
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (Poop == 4 && input.logoIsPressed()) {
        Poop = 0
        basic.pause(200)
        basic.showIcon(IconNames.Happy)
        basic.pause(200)
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (Timer == 20) {
        BOOOOORINNNNG += 2
        Cleanliness += -1
        Hunger += 1.5
        Poop += 2
    }
})
basic.forever(function () {
    basic.pause(1000)
    Timer += 1
})
basic.forever(function () {
    if (Sickness < 6) {
        Happiness += -2
        BOOOOORINNNNG += -2
        Cleanliness += -2
    }
    if (Sickness < 12) {
        Happiness += -2
        BOOOOORINNNNG += -2
        Cleanliness += -2
        if (Sickness < 24) {
            Happiness += -2
            BOOOOORINNNNG += -2
            Cleanliness += -2
        }
    }
})
