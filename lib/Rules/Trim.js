/**
 *  ____            __        __
 * /\  _`\         /\ \__  __/\ \__
 * \ \ \L\_\    ___\ \ ,_\/\_\ \ ,_\  __  __
 *  \ \  _\L  /' _ `\ \ \/\/\ \ \ \/ /\ \/\ \
 *   \ \ \L\ \/\ \/\ \ \ \_\ \ \ \ \_\ \ \_\ \
 *    \ \____/\ \_\ \_\ \__\\ \_\ \__\\/`____ \
 *     \/___/  \/_/\/_/\/__/ \/_/\/__/ `/___/> \
 *                                        /\___/
 *                                        \/__/
 *
 * Entity Core
 */

/**
 * The trim sanitizer rule.
 *
 * @author Orgun109uk <orgun109uk@gmail.com>
 */

var loader = require('nsloader'),
    EInvalidValue = loader('Entity/Sanitizers/Errors/EInvalidValue');

/**
 * Trim sanitizer.
 *
 * @param {Mixed} orig The original value.
 * @param {Mixed} value The value to sanitize.
 * @param {Object} options The options passed to the sanitizer.
 * @param {Function} next The next callback.
 * @param {Error} next.err Any raised errors.
 * @throws {EInvalidValue} Thrown if the value is not a string.
 */
module.exports = function sanitizeTrim (orig, value, options, next) {
  'use strict';

  if (typeof value !== 'string') {
    return next(new EInvalidValue(value), value);
  }

  next(null, value.trim());
};
