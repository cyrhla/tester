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
 * @return mixed
 *
 * @throws TypeError
 */
module.exports = function() {
    return Tester['valid'].apply(Tester['valid'], arguments)
}
