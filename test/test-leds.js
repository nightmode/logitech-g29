//----------
// Includes
//----------
var color = require('../code/color.js')
var g     = require('../code/index.js')

//-----------
// Variables
//-----------
displayNone  = color.black('*****')
displayOne   = color.green('*') + color.black('****')
displayTwo   = color.green('**') + color.black('***')
displayThree = color.green('**') + color.yellow('*') + color.black('**')
displayFour  = color.green('**') + color.yellow('**') + color.black('*')
displayFive  = color.green('**') + color.yellow('**') + color.red('*')

//-----------
// Functions
//-----------
function display(val) {
    val  = Math.round(val * 100)

    if (val > 84) {
        console.log(displayFive)
    } else if (val > 69) {
        console.log(displayFour)
    } else if (val > 39) {
        console.log(displayThree)
    } else if (val > 19) {
        console.log(displayTwo)
    } else if (val > 4) {
        console.log(displayOne)
    } else {
        console.log(displayNone)
    }
}

//----------------------------------
// Distract the humans for a moment
//----------------------------------
console.log(color.cyan('Setting up wheel.'))
console.log(color.cyan('One moment please.'))
console.log(color.gray('If nothing happens, try moving the wheel.'))

//-----------------------------------
// Connect to Wheel and Setup Events
//-----------------------------------
g.connect(function(err) {
    g.on('pedals-gas', function(val) {
        display(val)
        g.leds(val)
    })

    console.log(color.cyan('Wheel ready.'))
    console.log(color.green('Press the gas pedal to see if your wheel LEDs animate.'))
})