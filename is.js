/**
 * @package @cyrhla/tester
 * @license MIT
 * @copyright Krystian Pietruszka <kpietru@cyrhla.com>
 * @see http://www.cyrhla.com
 */

'use strict'

const Tester = require('@cyrhla/tester/Tester')

/**
 * Checks the type by using the logical operator "or".
 *
 * @author Krystian Pietruszka <kpietru@cyrhla.com>
 *
 * @param mixed arguments
 *
 * @return boolean
 */
module.exports = function() {
    return Tester['is'].apply(Tester['is'], arguments)
}
