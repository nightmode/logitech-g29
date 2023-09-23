import { EventEmitter } from 'events';

export interface Option {
  autocenter?: boolean | number[];
  debug?: boolean;
  range?: number;
}

type Callback = (err: Error) => void;

export function connect(callback: Callback): void;
export function connect(options: Option, callback: Callback): void;

type Event =
  | 'wheel-turn'
  | 'wheel-shift_left'
  | 'wheel-shift_right'
  | 'wheel-dpad'
  | 'wheel-button_x'
  | 'wheel-button_square'
  | 'wheel-button_triangle'
  | 'wheel-button_circle'
  | 'wheel-button_l2'
  | 'wheel-button_r2'
  | 'wheel-button_l3'
  | 'wheel-button_r3'
  | 'wheel-button_plus'
  | 'wheel-button_minus'
  | 'wheel-spinner'
  | 'wheel-button_spinner'
  | 'wheel-button_share'
  | 'wheel-button_option'
  | 'wheel-button_playstation'
  | 'shifter-gear'
  | 'pedals-gas'
  | 'pedals-brake'
  | 'pedals-clutch';

type EventHandler = (value: number) => void;

/**
 *
 * @param event
 * @param handler
 *
 * Can be specified before or after a `connect(callback)`.
 *
 * @example
 * ```js
 * g.on('wheel-button_playstation', function(val) {
 *   if (val) {
 *     console.log('I really love it when you press my buttons.')
 *   }
 * })
 * ```
 */
export function on(event: Event, handler: EventHandler): EventEmitter;

/**
 *
 * @param event
 * @param handler
 *
 * Can be specified before or after a `connect(callback)`.
 *
 * @example
 * ```js
 * g.once('pedals-gas', function(val) {
 *   // the following message will only be displayed once
 *   console.log('Powered by dead dinosaur juice, your engine roars to life!')
 * })
 * ```
 */

export function once(event: Event, handler: EventHandler): EventEmitter;

/**
 *
 * @param number
 *
 * `forceConstant(number)` where number is 0 - 1 to indicate both direction and strength.
 *
 * @example
 * ```js
 * g.forceConstant()    // no force
 * g.forceConstant(0)   // full left
 * g.forceConstant(0.5) // no force
 * g.forceConstant(1)   // full right
 * ```
 */
export function forceConstant(number?: number): void;

/**
 *
 * @param number
 *
 * `forceFriction(number)` where number is 0 - 1 to indicate effect strength.
 * @example
 * ```js
 * g.forceFriction()    // no friction
 * g.forceFriction(0)   // no friction
 * g.forceFriction(0.5) // half strength
 * g.forceFriction(1)   // full strength
 * ```
 */
export function forceFriction(number?: number): void;

/**
 * Turn off all force effects except auto-centering.
 */
export function forceOff(): void;

/**
 *
 * @param value
 * `leds()` or `leds(number)` or `leds(string)` or `leds(array)`
 * The shift indicator LEDs can be interfaced with in a variety of ways.
 * `leds()` is the easiest way to turn off all LEDs.
 * `leds(number)` where number is between 0 - 1 to indicate a percent.
 * ```js
 * g.led(0.45) // the least accurate way to control LEDs since an arbitrary scale will be used for conversion
 * ```
 * `leds(string)` where string is zero to five characters of zeroes or ones.
 * ```js
 * g.leds('')      // all off
 * g.leds('1')     // green
 * g.leds('111')   // green, green, orange
 * g.leds('00001') // red only
 * ```
 * `leds(array)` where array is zero to five elements of zeroes or ones.
 * ```
 * g.leds([])          // all off
 * g.leds([1])         // green
 * g.leds([1,1,1])     // green, green, orange
 * g.leds([0,0,0,0,1]) // red onlyjs
 * ```
 */
export function leds(value: number | string | number[]): void;

/**
 * Disconnect in preparation to connect again or to allow other software to use the wheel.
 */
export function disconnect(): void;

/**
 * `emitter.` + nodejs.org/api/events.html
 * Exposes the EventEmitter that this library uses behind the scenes.
 */
export const emitter: EventEmitter;

/**
 *
 * @param data
 * Relay low level commands directly to the hardware.
 *
 * @example
 * ```js
 * // turn on all LEDs
 * g.relay([0x00, 0xf8, 0x12, 0x1f, 0x00, 0x00, 0x00, 0x01])
 * ```
 */
export function relay(data: number[]): void;

/**
 *
 * @param data
 * Relay low level commands directly to the hardware after applying OS specific tweaks, if needed.
 *
 * @example
 * ```js
 * // turn on all LEDs
 * g.relayOS([0xf8, 0x12, 0x1f, 0x00, 0x00, 0x00, 0x01])
 * ```
 */
export function relayOS(data: number[]): void;
