<img src="https://raw.githubusercontent.com/ForestMist/logitech-g29/master/images/header.png" width="888" alt="">

# Logitech G29 Racing Wheel for Node

Bring your [Logitech G29 Racing Wheel](http://gaming.logitech.com/en-us/product/g29-driving-force) into the wonderful world of [Node](https://nodejs.org/en/).

* Subscribe to wheel, pedal, and shifter events.
* Activate simple force feedback effects.
* Set wheel auto-centering and range.
* Customize shift indicator LEDs.

## Requirements

[Node](https://nodejs.org/en/) version 4.0.0 or greater.

Make sure your wheel's [platform mode switch](http://support.logitech.com/en_us/article/Set-the-G29-racing-wheel-for-Playstation-4-Playstation-3-or-PC-platforms?product=a0qi0000006PmxKAAS) is set to PS3.

## Install

This library uses [node-hid](https://github.com/node-hid/node-hid) behind the scenes. Node 4 users should have an effortless install. Node 5 users may want to consult node-hid's [compiling from source](https://github.com/node-hid/node-hid#compiling-from-source) guide for anything more serious than a warning.

```
npm install logitech-g29
```

## Example

Let's have some fun and make our wheel LEDs light up when we press the gas pedal.

```js
var g = require('logitech-g29')

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

## Contribute

Just by using this library, you are making the world a neater place. ^\_^

Want to help even more? Here are some ideas to get you started.

* [Report any issues](https://github.com/ForestMist/logitech-g29/issues) on GitHub.
* Donate [hamburgers and root beer](https://cash.me/$ForestMist).
* Share this library with other Logitech loving folks.
* Contact [Daniel](https://forestmist.org/about/) with improvement ideas and/or send a [pull request](https://github.com/ForestMist/feri/pulls).
* Hook up your G29 wheel to something on the internet and wow the IoT community.
* Offer Daniel a full-time position which will help fund this and future open source projects.

Cheers!

## License

MIT © [Daniel Gagan](https://forestmist.org)
