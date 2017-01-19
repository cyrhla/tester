/**
 * @package @cyrhla/tester
 * @license MIT
 * @copyright Krystian Pietruszka <kpietru@cyrhla.com>
 * @see http://www.cyrhla.com
 */

'use strict'

const Tester = require('@cyrhla/tester/Tester')
const is = require('../is')

/**
 * isTest
 *
 * @author Krystian Pietruszka <kpietru@cyrhla.com>
 */
module.exports = class isTest extends Tester
{
    testIsReturnsBoolean()
    {
        this.assertSame(true, is(0, 'string', '*'))
        this.assertSame(true, is('', 'mixed'))

        this.assertSame(true, is(123, 'number'))
        this.assertSame(true, is('', 'boolean', 'array', 'string'))
        this.assertSame(true, is(Symbol('foo'), 'boolean', 'array', 'string', 'symbol'))
        this.assertSame(true, is(new Object(), 'function', 'object', 'string'))
        this.assertSame(true, is(undefined, 'function', 'undefined', 'string'))

        this.assertSame(false, is(Object, 'boolean', 'string'))
        this.assertSame(false, is([], 'boolean', 'string'))
        this.assertSame(false, is(/^/, 'function', 'object'))
    }
}
