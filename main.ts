let 方がく = 0
basic.forever(function () {
    方がく = input.compassHeading()
    if (方がく < 45) {
        basic.showArrow(ArrowNames.North)
    } else if (方がく < 135) {
        basic.showArrow(ArrowNames.West)
    } else if (方がく < 225) {
        basic.showArrow(ArrowNames.South)
    } else if (方がく < 315) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
