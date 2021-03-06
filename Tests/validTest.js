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
        this.expectError('InvalidTypeError', function() {
            valid(123, 'string', 'undefined')
        })
        this.expectError('InvalidTypeError', function() {
            valid(0, 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'undefined')
        })
        this.expectError('InvalidTypeError', function() {
            valid(null, 'string', 'boolean', 'function', 'object', 'regexp', 'number', 'array', 'undefined')
        })
        this.expectError('InvalidTypeError', function() {
            valid(false, 'string', 'null', 'function', 'object', 'regexp', 'number', 'array', 'undefined')
        })
        this.expectError('InvalidTypeError', function() {
            valid(Object, 'string', 'boolean', 'null', 'object', 'regexp', 'number', 'array', 'undefined')
        })
        this.expectError('InvalidTypeError', function() {
            valid(new Object(), 'string', 'boolean', 'null', 'function', 'regexp', 'number', 'array', 'undefined')
        })
        this.expectError('InvalidTypeError', function() {
            valid([], 'string', 'boolean', 'null', 'object', 'regexp', 'number', 'function', 'undefined')
        })
        this.expectError('InvalidTypeError', function() {
            valid('', 'function', 'boolean', 'null', 'object', 'regexp', 'number', 'array', 'undefined')
        })
        this.expectError('InvalidTypeError', function() {
            valid(Symbol('foo'), 'function', 'boolean', 'null', 'object', 'regexp', 'number', 'array', 'undefined')
        })
        this.expectError('InvalidTypeError', function() {
            valid(undefined, 'function', 'boolean', 'null', 'object', 'regexp', 'number', 'array')
        })
    }

    testValidReturnsSame()
    {
        this.assertSame(123, valid(123, 'number'))
        this.assertSame('', valid('', 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'number', 'symbol', 'undefined'))
        this.assertSame(0, valid(0, 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'number', 'symbol', 'undefined'))
        this.assertSame(null, valid(null, 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'number', 'symbol', 'undefined'))
        this.assertSame(false, valid(false, 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'number', 'symbol', 'undefined'))
        this.assertSame(Object, valid(Object, 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'number', 'symbol', 'undefined'))
        this.assertSame(new Object(), valid(new Object(), 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'number', 'symbol', 'undefined'))
        this.assertSame([], valid([], 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'number', 'symbol', 'undefined'))
        this.assertSame(/^/, valid(/^/, 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'number', 'symbol', 'undefined'))
        this.assertSame(undefined, valid(undefined, 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'number', 'symbol', 'undefined'))
    }
}
