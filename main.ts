input.onButtonPressed(Button.A, function () {
	
})
max7219_matrix.setup(
2,
DigitalPin.P16,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13
)
max7219_matrix.brightnessAll(0)
max7219_matrix.for_4_in_1_modules(
rotation_direction.counterclockwise,
false
)
basic.forever(function () {
    max7219_matrix.scrollText(
    "Joshua, Good Boy",
    75,
    500
    )
})
