/**
 * @package @cyrhla/tester
 * @license MIT
 * @copyright Krystian Pietruszka <kpietru@cyrhla.com>
 * @see http://www.cyrhla.com
 */

'use strict'

const Tester = require('@cyrhla/tester/Tester')
const valid = require('../valid')

/**
 * validTest
 *
 * @author Krystian Pietruszka <kpietru@cyrhla.com>
 */
module.exports = class validTest extends Tester
{
    testValidInvalidTypeError()
    {
        this.expectError('TypeError', function() {
            valid(123, 'string')
        })
        this.expectError('TypeError', function() {
            valid(0, 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array')
        })
        this.expectError('TypeError', function() {
            valid(null, 'string', 'boolean', 'function', 'object', 'regexp', 'number', 'array')
        })
        this.expectError('TypeError', function() {
            valid(false, 'string', 'null', 'function', 'object', 'regexp', 'number', 'array')
        })
        this.expectError('TypeError', function() {
            valid(Object, 'string', 'boolean', 'null', 'object', 'regexp', 'number', 'array')
        })
        this.expectError('TypeError', function() {
            valid(new Object(), 'string', 'boolean', 'null', 'function', 'regexp', 'number', 'array')
        })
        this.expectError('TypeError', function() {
            valid([], 'string', 'boolean', 'null', 'object', 'regexp', 'number', 'function')
        })
        this.expectError('TypeError', function() {
            valid('', 'function', 'boolean', 'null', 'object', 'regexp', 'number', 'array')
        })
    }

    testValidReturnsSame()
    {
        this.assertSame(123, valid(123, 'number'))
        this.assertSame('', valid('', 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'number', 'symbol'))
        this.assertSame(0, valid(0, 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'number', 'symbol'))
        this.assertSame(null, valid(null, 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'number', 'symbol'))
        this.assertSame(false, valid(false, 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'number', 'symbol'))
        this.assertSame(Object, valid(Object, 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'number', 'symbol'))
        this.assertSame(new Object(), valid(new Object(), 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'number', 'symbol'))
        this.assertSame([], valid([], 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'number', 'symbol'))
        this.assertSame(/^/, valid(/^/, 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'number', 'symbol'))
    }
}
