**This software is no longer being tested or updated.**

# Logitech G29 Racing Wheel for Node

Bring your Logitech G29 Racing Wheel into the wonderful world of [Node](https://nodejs.org/en/).

* Subscribe to wheel, pedal, and shifter events.
* Activate simple force feedback effects.
* Set wheel auto-centering and range.
* Customize shift indicator LEDs.

## Requirements

Node version 10.16 or the Node version required by any dependency, whichever is greater.

Make sure the Logitech G29 mode switch is set to PS3. The switch is located above the middle of the steering wheel.

## Install

This library uses node-hid behind the scenes. Depending on your OS and Node version, you may have an effortless install. If not, you may want to consult node-hid's compiling from source guide for assistance.

```
npm install
```

Windows users who are having trouble connecting to a wheel may need to run the Logitech G Hub software one time to setup drivers.

Ubuntu users will most likely want to remove the `sudo` requirement of interfacing with the wheel. This can be accomplished by creating a file at `/etc/udev/rules.d/99-hidraw-permissions.rules` with the following code. After saving the file, reboot and then you can move on to more fun tasks.

```
KERNEL=="hidraw*", SUBSYSTEM=="hidraw", MODE="0664", GROUP="plugdev"
```

## Example

Let's have some fun and make our wheel LEDs light up when we press the gas pedal.

```js
const g = require('logitech-g29')

g.connect(function(err) {
    g.on('pedals-gas', function(val) {
        g.leds(val)
    })
})
```

Vroom vroom sounds optional but encouraged. ^\_^

## API

* [connect](docs/api.md#connect)
  * [options](docs/api.md#options)
* [events](docs/api.md#events)
  * [event map](docs/api.md#event-map)
  * [on](docs/api.md#on)
  * [once](docs/api.md#once)
* [force](docs/api.md#force)
  * [forceConstant](docs/api.md#forceconstant)
  * [forceFriction](docs/api.md#forcefriction)
  * [forceOff](docs/api.md#forceoff)
* [leds](docs/api.md#leds)
* [disconnect](docs/api.md#disconnect)
* [advanced](docs/api.md#advanced)
  * [emitter](docs/api.md#emitter)
  * [relay](docs/api.md#relay)
  * [relayOS](docs/api.md#relayos)

## License

[CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)

This work has been marked as dedicated to the public domain.