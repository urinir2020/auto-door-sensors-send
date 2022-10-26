radio.setGroup(100)
basic.forever(function () {
    if (ModuleWorld_Digital.Button(ModuleWorld_Digital.mwDigitalNum.P0P1, ModuleWorld_Digital.enButton.Press)) {
        radio.sendNumber(1)
        basic.showArrow(ArrowNames.East)
    } else {
        radio.sendNumber(0)
        basic.showArrow(ArrowNames.West)
    }
})
