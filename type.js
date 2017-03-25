/**
 * @package @cyrhla/tester
 * @license MIT
 * @copyright Krystian Pietruszka <kpietru@cyrhla.com>
 * @see http://www.cyrhla.com
 */

'use strict'

const Tester = require('@cyrhla/tester/Tester')

/**
 * Gets the type.
 *
 * Defined types: array, boolean, function, number,
 * null, object, regexp, symbol, string,
 * undefined
 *
 * @author Krystian Pietruszka <kpietru@cyrhla.com>
 *
 * @param mixed arg
 *
 * @return string
 */
module.exports = function(arg) {
    return Tester.type(arg)
}
