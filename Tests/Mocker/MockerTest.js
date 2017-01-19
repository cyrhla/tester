/**
 * @package @cyrhla/tester
 * @license MIT
 * @copyright Krystian Pietruszka <kpietru@cyrhla.com>
 * @see http://www.cyrhla.com
 */

'use strict'

const Tester = require('@cyrhla/tester/Tester')
const Mocker = require('../../Mocker/Mocker')

/**
 * MockerTest
 *
 * @author Krystian Pietruszka <kpietru@cyrhla.com>
 */
module.exports = class MockerTest extends Tester
{
    testConstructorArgumentTypeError()
    {
        // Invalid baseClass.
        this.expectError('TypeError', function() {
            new Mocker('')
        })
        this.expectError('TypeError', function() {
            new Mocker(null)
        })
        this.expectError('TypeError', function() {
            new Mocker(0)
        })
        this.expectError('TypeError', function() {
            new Mocker(false)
        })
        this.expectError('TypeError', function() {
            new Mocker(new Object())
        })
        this.expectError('TypeError', function() {
            new Mocker([])
        })
        this.expectError('TypeError', function() {
            new Mocker(Symbol('foo'))
        })

        // Invalid args.
        this.expectError('TypeError', function() {
            new Mocker(Object, '')
        })
        this.expectError('TypeError', function() {
            new Mocker(Object, null)
        })
        this.expectError('TypeError', function() {
            new Mocker(Object, 0)
        })
        this.expectError('TypeError', function() {
            new Mocker(Object, false)
        })
        this.expectError('TypeError', function() {
            new Mocker(Object, new Object())
        })
    }

    testSetPropertyReturnsInvokedObject()
    {
        var obj = new Mocker(Tester)

        this.assertInstanceOf(Mocker, obj.setProperty('', ''))
        this.assertInstanceOf(Mocker, obj.setProperty(0, 0))
        this.assertInstanceOf(Mocker, obj.setProperty(null, null))
        this.assertInstanceOf(Mocker, obj.setProperty(false, false))
        this.assertInstanceOf(Mocker, obj.setProperty(Object, Object))
        this.assertInstanceOf(Mocker, obj.setProperty(new Object(), new Object()))
        this.assertInstanceOf(Mocker, obj.setProperty(Symbol('foo'), Symbol('foo')))
        this.assertInstanceOf(Mocker, obj.setProperty([], []))
        this.assertInstanceOf(Mocker, obj.setProperty(undefined, undefined))
    }

    testSetMethodReturnsInvokedObject()
    {
        var obj = new Mocker(Tester)

        this.assertInstanceOf(Mocker, obj.setMethod('', function() {
            return ''
        }))
        this.assertInstanceOf(Mocker, obj.setMethod(0, function() {
            return 0
        }))
        this.assertInstanceOf(Mocker, obj.setMethod(null, function() {
            return null
        }))
        this.assertInstanceOf(Mocker, obj.setMethod(false, function() {
            return false
        }))
        this.assertInstanceOf(Mocker, obj.setMethod(Object, function() {
            return Object
        }))
        this.assertInstanceOf(Mocker, obj.setMethod(new Object(), function() {
            return new Object()
        }))
        this.assertInstanceOf(Mocker, obj.setMethod(Symbol('foo'), function() {
            return Symbol('foo')
        }))
        this.assertInstanceOf(Mocker, obj.setMethod([], function() {
            return []
        }))
        this.assertInstanceOf(Mocker, obj.setMethod(undefined, function() {
            return undefined
        }))
    }

    testSetMethodArgumentTypeError()
    {
        var obj = new Mocker(Tester)

        this.expectError('TypeError', function() {
            obj.setMethod('abc', '')
        })
        this.expectError('TypeError', function() {
            obj.setMethod('abc', 0)
        })
        this.expectError('TypeError', function() {
            obj.setMethod('abc', null)
        })
        this.expectError('TypeError', function() {
            obj.setMethod('abc', new Object())
        })
        this.expectError('TypeError', function() {
            obj.setMethod('abc', false)
        })
        this.expectError('TypeError', function() {
            obj.setMethod('abc', Symbol('foo'))
        })
        this.expectError('TypeError', function() {
            obj.setMethod('abc', [])
        })
        this.expectError('TypeError', function() {
            obj.setMethod('abc', undefined)
        })
    }

    testCompileReturnsObject()
    {
        var mocker = new Mocker(Map, [])

        mocker.setProperty('someProperty1', 123)
        mocker.setProperty('someProperty2', '')

        mocker.setMethod('someMethod1', function() {
            return 1
        })
        mocker.setMethod('someMethod2', function() {
            return '2'
        })
        mocker.setMethod('someMethod3', function() {
            return false
        })

        var obj = mocker.compile()

        this.assertInstanceOf(Map, obj)

        this.assertSame(123, obj.someProperty1)
        this.assertSame('', obj.someProperty2)

        this.assertSame(1, obj.someMethod1())
        this.assertSame('2', obj.someMethod2())
        this.assertSame(false, obj.someMethod3())
    }
}

