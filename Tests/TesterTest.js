/**
 * @package @cyrhla/tester
 * @license MIT
 * @copyright Krystian Pietruszka <kpietru@cyrhla.com>
 * @see http://www.cyrhla.com
 */

'use strict'

const _Tester = require('@cyrhla/tester/Tester')
const Tester = require('../Tester')

/**
 * TesterTest
 *
 * @author Krystian Pietruszka <kpietru@cyrhla.com>
 */
module.exports = class TesterTest extends _Tester
{
    before()
    {
        this.beforeAfterTest = 3
    }

    beforeEach()
    {
        this.beforeAfterTest++
    }

    afterEach()
    {
        this.beforeAfterTest++
    }

    testConstructorArgumentTypeError()
    {
        var stopOnError = false,
            showOk      = false,
            colorize    = true,
            output      = null,
            mocker      = Object

        // Invalid stopOnError.
        this.expectError('TypeError', function() {
            new Tester('', showOk, colorize, output, mocker)
        })
        this.expectError('TypeError', function() {
            new Tester(null, showOk, colorize, output, mocker)
        })
        this.expectError('TypeError', function() {
            new Tester(0, showOk, colorize, output, mocker)
        })
        this.expectError('TypeError', function() {
            new Tester(Object, showOk, colorize, output, mocker)
        })
        this.expectError('TypeError', function() {
            new Tester(new Object(), showOk, colorize, output, mocker)
        })
        this.expectError('TypeError', function() {
            new Tester(function() {}, showOk, colorize, output, mocker)
        })
        this.expectError('TypeError', function() {
            new Tester([], showOk, colorize, output, mocker)
        })

        // Invalid showOk.
        this.expectError('TypeError', function() {
            new Tester(stopOnError, '', colorize, output, mocker)
        })
        this.expectError('TypeError', function() {
            new Tester(stopOnError, null, colorize, output, mocker)
        })
        this.expectError('TypeError', function() {
            new Tester(stopOnError, 0, colorize, output, mocker)
        })
        this.expectError('TypeError', function() {
            new Tester(stopOnError, Object, colorize, output, mocker)
        })
        this.expectError('TypeError', function() {
            new Tester(stopOnError, new Object(), colorize, output, mocker)
        })
        this.expectError('TypeError', function() {
            new Tester(stopOnError, function() {}, colorize, output, mocker)
        })
        this.expectError('TypeError', function() {
            new Tester(stopOnError, [], colorize, output, mocker)
        })

        // Invalid colorize.
        this.expectError('TypeError', function() {
            new Tester(stopOnError, showOk, '', output, mocker)
        })
        this.expectError('TypeError', function() {
            new Tester(stopOnError, showOk, null, output, mocker)
        })
        this.expectError('TypeError', function() {
            new Tester(stopOnError, showOk, 0, output, mocker)
        })
        this.expectError('TypeError', function() {
            new Tester(stopOnError, showOk, Object, output, mocker)
        })
        this.expectError('TypeError', function() {
            new Tester(stopOnError, showOk, new Object(), output, mocker)
        })
        this.expectError('TypeError', function() {
            new Tester(stopOnError, showOk, function() {}, output, mocker)
        })
        this.expectError('TypeError', function() {
            new Tester(stopOnError, showOk, [], output, mocker)
        })

        // Invalid output.
        this.expectError('TypeError', function() {
            new Tester(stopOnError, showOk, colorize, '', mocker)
        })
        this.expectError('TypeError', function() {
            new Tester(stopOnError, showOk, colorize, 0, mocker)
        })
        this.expectError('TypeError', function() {
            new Tester(stopOnError, showOk, colorize, false, mocker)
        })
        this.expectError('TypeError', function() {
            new Tester(stopOnError, showOk, colorize, new Object(), mocker)
        })
        this.expectError('TypeError', function() {
            new Tester(stopOnError, showOk, colorize, [], mocker)
        })

        // Invalid mocker.
        this.expectError('TypeError', function() {
            new Tester(stopOnError, showOk, colorize, output, '')
        })
        this.expectError('TypeError', function() {
            new Tester(stopOnError, showOk, colorize, output, null)
        })
        this.expectError('TypeError', function() {
            new Tester(stopOnError, showOk, colorize, output, 0)
        })
        this.expectError('TypeError', function() {
            new Tester(stopOnError, showOk, colorize, output, false)
        })
        this.expectError('TypeError', function() {
            new Tester(stopOnError, showOk, colorize, output, new Object())
        })
        this.expectError('TypeError', function() {
            new Tester(stopOnError, showOk, colorize, output, [])
        })
    }

    testToStringReturnsString()
    {
        var stopOnError = false,
            showOk      = false,
            colorize    = true,
            output      = null

        var a = {
            "info": "",
            "ok": "",
            "errors": "",
            "all": "",
            "className": "",
            "assertionsCounter": "",
            "testsCounter": "",
            "timeMiliseconds": "",
            "formatTime": "",
            "memoryBytes": "",
            "formatMemory": "",
            "from": ""
        }
        var b = JSON.parse(new Tester(stopOnError, showOk, colorize, output).toString())

        this.assertEqual(a, b)
    }

    testGetResultsJsonReturnsJson()
    {
        var stopOnError = false,
            showOk      = false,
            colorize    = true,
            output      = null

        var a = {
            "info": "",
            "ok": "",
            "errors": "",
            "all": "",
            "className": "",
            "assertionsCounter": "",
            "testsCounter": "",
            "timeMiliseconds": "",
            "formatTime": "",
            "memoryBytes": "",
            "formatMemory": "",
            "from": ""
        }
        var b = new Tester(stopOnError, showOk, colorize, output).getResultsJson()

        this.assertEqual(a, b)
    }

    testBeforeAfterEachReturnsUndefined()
    {
        var stopOnError = false,
            showOk      = false,
            colorize    = true,
            output      = null

        var obj = new Tester(stopOnError, showOk, colorize, output)

        this.assertSame(undefined, obj.before())
        this.assertSame(undefined, obj.after())
        this.assertSame(undefined, obj.beforeEach())
        this.assertSame(undefined, obj.afterEach())
    }

    testBeforeAfterEachExecute()
    {
        this.assertSame(12, this.beforeAfterTest)
    }

    testAssertSameReturnsUndefined()
    {
        var stopOnError = false,
            showOk      = false,
            colorize    = true,
            output      = null

        var obj = new Tester(stopOnError, showOk, colorize, output)

        this.assertSame(0, 0)
        this.assertSame('', '')
        this.assertSame(true, true)
        this.assertSame(null, null)
        this.assertSame(false, false)
        this.assertSame(undefined, undefined)
        this.assertSame(123, 123)
        this.assertSame(-123, -123)
        this.assertSame(1.23, 1.23)
        this.assertSame(-.23, -.23)
        this.assertSame(-0, -0)
        this.assertSame(0.0000000000000000000000000000000000000000000000009, 0.0000000000000000000000000000000000000000000000009)
        this.assertSame(new Object(), new Map())
        this.assertSame(function() {return 1}, function() {return 1})
        this.assertSame({}, {})
        this.assertSame({0:0}, {0:0})
        this.assertSame([], [])
        this.assertSame([1, 2, 3], [1, 2, 3])

        this.assertSame(undefined, obj.assertSame('', ''))
        this.assertSame(undefined, obj.assertSame(null, null))
        this.assertSame(undefined, obj.assertSame(false, false))
        this.assertSame(undefined, obj.assertSame(new Object(), new Map()))
        this.assertSame(undefined, obj.assertSame(function() {}, function() {}))
        this.assertSame(undefined, obj.assertSame([], []))
    }

    testAssertEqualReturnsUndefined()
    {
        var stopOnError = false,
            showOk      = false,
            colorize    = true,
            output      = null

        var obj = new Tester(stopOnError, showOk, colorize, output)

        this.assertEqual(0, '0')
        this.assertEqual('', '')
        this.assertEqual(true, 1)
        this.assertEqual(false, 0)
        this.assertEqual(false, '0')
        this.assertEqual(false, '')
        this.assertEqual(null, null)
        this.assertEqual(false, false)
        this.assertEqual(undefined, undefined)
        this.assertEqual(123, 123)
        this.assertEqual(-123, -123)
        this.assertEqual(1.23, 1.23)
        this.assertEqual(-.23, -.23)
        this.assertEqual(-0, -0)
        this.assertEqual(-0, '-0')
        this.assertEqual(0.0000000000000000000000000000000000000000000000009, 0.0000000000000000000000000000000000000000000000009)
        this.assertEqual(new Object(), new Map())
        this.assertEqual(function() {return 1}, function() {return 1})
        this.assertEqual({}, {})
        this.assertEqual({0:0}, {0:0})
        this.assertEqual({0:0}, {0:1})
        this.assertEqual([], [])
        this.assertEqual([1, 2, 3], [4, 5, 6])

        this.assertEqual(undefined, obj.assertEqual('', ''))
        this.assertEqual(undefined, obj.assertEqual(null, null))
        this.assertEqual(undefined, obj.assertEqual(false, false))
        this.assertEqual(undefined, obj.assertEqual(new Object(), new Map()))
        this.assertEqual(undefined, obj.assertEqual(function() {}, function() {}))
        this.assertEqual(undefined, obj.assertEqual([], []))
    }

    testAssertTypeReturnsUndefined()
    {
        var stopOnError = false,
            showOk      = false,
            colorize    = true,
            output      = null

        var obj = new Tester(stopOnError, showOk, colorize, output)

        this.assertType('string', '0')
        this.assertType('string', '')
        this.assertType('number', 1)
        this.assertType('null', null)
        this.assertType('boolean', false)
        this.assertType('undefined', undefined)
        this.assertType('object', new Map())
        this.assertType('function', function() {return 1})
        this.assertType('object', {})
        this.assertType('array', [])
        this.assertType('symbol', Symbol('foo'))

        this.assertSame(undefined, obj.assertType('string', ''))
        this.assertSame(undefined, obj.assertType('object', null))
        this.assertSame(undefined, obj.assertType('boolean', false))
        this.assertSame(undefined, obj.assertType('object', new Map()))
        this.assertSame(undefined, obj.assertType('object', []))
        this.assertSame(undefined, obj.assertType('function', function() {}))
    }

    testAssertTypeArgumentTypeError()
    {
        var stopOnError = false,
            showOk      = false,
            colorize    = true,
            output      = null

        var obj = new Tester(stopOnError, showOk, colorize, output)

        // Invalid expected.
        this.expectError('TypeError', function() {
            obj.assertType(0, 0)
        })
        this.expectError('TypeError', function() {
            obj.assertType(null, 0)
        })
        this.expectError('TypeError', function() {
            obj.assertType(false, 0)
        })
        this.expectError('TypeError', function() {
            obj.assertType(Object, 0)
        })
        this.expectError('TypeError', function() {
            obj.assertType(new Object(), 0)
        })
        this.expectError('TypeError', function() {
            obj.assertType(function() {}, 0)
        })
        this.expectError('TypeError', function() {
            obj.assertType([], 0)
        })
    }

    testAssertInstanceOfArgumentTypeError()
    {
        var stopOnError = false,
            showOk      = false,
            colorize    = true,
            output      = null

        var obj = new Tester(stopOnError, showOk, colorize, output)

        // Invalid expected.
        this.expectError('TypeError', function() {
            obj.assertInstanceOf('', Object)
        })
        this.expectError('TypeError', function() {
            obj.assertInstanceOf(0, Object)
        })
        this.expectError('TypeError', function() {
            obj.assertInstanceOf(null, Object)
        })
        this.expectError('TypeError', function() {
            obj.assertInstanceOf(false, Object)
        })
        this.expectError('TypeError', function() {
            obj.assertInstanceOf(undefined, Object)
        })
        this.expectError('TypeError', function() {
            obj.assertInstanceOf(new Object(), Object)
        })
        this.expectError('TypeError', function() {
            obj.assertInstanceOf(Symbol('foo'), Object)
        })
        this.expectError('TypeError', function() {
            obj.assertInstanceOf([], Object)
        })

        // Invalid actual.
        this.expectError('TypeError', function() {
            obj.assertInstanceOf(Object, '')
        })
        this.expectError('TypeError', function() {
            obj.assertInstanceOf(Object, 0)
        })
        this.expectError('TypeError', function() {
            obj.assertInstanceOf(Object, null)
        })
        this.expectError('TypeError', function() {
            obj.assertInstanceOf(Object, false)
        })
        this.expectError('TypeError', function() {
            obj.assertInstanceOf(Object, undefined)
        })
        this.expectError('TypeError', function() {
            obj.assertInstanceOf(Object, Symbol('foo'))
        })
        this.expectError('TypeError', function() {
            obj.assertInstanceOf(Object, [])
        })
    }

    testAssertInstanceOfReturnsUndefined()
    {
        var stopOnError = false,
            showOk      = false,
            colorize    = true,
            output      = null

        var obj = new Tester(stopOnError, showOk, colorize, output)

        this.assertInstanceOf(Object, Map)
        this.assertInstanceOf(Object, Function)
        this.assertInstanceOf(Object, Tester)
        this.assertInstanceOf(Object, Object)
        this.assertInstanceOf(Object, new Object())
        this.assertInstanceOf(Map, new Map())

        this.assertSame(undefined, obj.assertInstanceOf(Tester, this))
        this.assertSame(undefined, obj.assertInstanceOf(_Tester, Tester))
        this.assertSame(undefined, obj.assertInstanceOf(Object, Map))
        this.assertSame(undefined, obj.assertInstanceOf(Object, Function))
        this.assertSame(undefined, obj.assertInstanceOf(Number, Tester))
    }

    testExpectErrorArgumentTypeError()
    {
        var stopOnError = false,
            showOk      = false,
            colorize    = true,
            output      = null

        var obj = new Tester(stopOnError, showOk, colorize, output)

        // Invalid errorName.
        this.expectError('TypeError', function() {
            obj.expectError(0)
        })
        this.expectError('TypeError', function() {
            obj.expectError(null)
        })
        this.expectError('TypeError', function() {
            obj.expectError(false)
        })
        this.expectError('TypeError', function() {
            obj.expectError(Object)
        })
        this.expectError('TypeError', function() {
            obj.expectError(new Object())
        })
        this.expectError('TypeError', function() {
            obj.expectError(Symbol('abc'))
        })
        this.expectError('TypeError', function() {
            obj.expectError(function() {})
        })
        this.expectError('TypeError', function() {
            obj.expectError([])
        })

        // Invalid callback.
        this.expectError('TypeError', function() {
            obj.expectError('', '')
        })
        this.expectError('TypeError', function() {
            obj.expectError('', 0)
        })
        this.expectError('TypeError', function() {
            obj.expectError('', null)
        })
        this.expectError('TypeError', function() {
            obj.expectError('', false)
        })
        this.expectError('TypeError', function() {
            obj.expectError('', new Object())
        })
        this.expectError('TypeError', function() {
            obj.expectError('', Symbol('abc'))
        })
        this.expectError('TypeError', function() {
            obj.expectError('', [])
        })
    }

    testExpectError()
    {
        this.expectError('Error', function() {
            throw new Error('Hi')
        })
        this.expectError('TypeError', function() {
            throw new TypeError('Hi')
        })
        this.expectError('SyntaxError', function() {
            throw new SyntaxError('Hi')
        })
    }

    testCreateMockerReturnsObject()
    {
        var stopOnError = false,
            showOk      = false,
            colorize    = true,
            output      = null

        var obj = new Tester(stopOnError, showOk, colorize, output)

        this.assertType('object', obj.createMocker(Object, []))
        this.assertSame('Mocker', obj.createMocker(Object, []).constructor.name)
    }

    test_runReturnsUndefined()
    {
        var stopOnError = false,
            showOk      = false,
            colorize    = true,
            output      = null

        var obj = new Tester(stopOnError, showOk, colorize, output)

        this.assertSame(undefined, obj._run())
    }

    test_runTestMethodsReturnsUndefined()
    {
        var stopOnError = false,
            showOk      = false,
            colorize    = true,
            output      = null

        var obj = new Tester(stopOnError, showOk, colorize, output)

        this.assertSame(undefined, obj._runTestMethods())
    }

    test_getInfoFromPackageJsonReturnsObject()
    {
        var stopOnError = false,
            showOk      = false,
            colorize    = true,
            output      = null

        var obj = new Tester(stopOnError, showOk, colorize, output)

        this.assertSame('object', typeof obj._getInfoFromPackageJson())
    }

    testBacktraceArgumentTypeError()
    {
        // Invalid error.
        this.expectError('TypeError', function() {
            Tester.getBacktrace(Error)
        })
        this.expectError('TypeError', function() {
            Tester.getBacktrace(SyntaxError)
        })
        this.expectError('TypeError', function() {
            Tester.getBacktrace('')
        })
        this.expectError('TypeError', function() {
            Tester.getBacktrace(null)
        })
        this.expectError('TypeError', function() {
            Tester.getBacktrace(false)
        })
        this.expectError('TypeError', function() {
            Tester.getBacktrace(0)
        })
        this.expectError('TypeError', function() {
            Tester.getBacktrace(Object)
        })
        this.expectError('TypeError', function() {
            Tester.getBacktrace(new Object())
        })
        this.expectError('TypeError', function() {
            Tester.getBacktrace([])
        })

        // Invalid back.
        this.expectError('TypeError', function() {
            Tester.getBacktrace(new Error(), '')
        })
        this.expectError('TypeError', function() {
            Tester.getBacktrace(new Error(), false)
        })
        this.expectError('TypeError', function() {
            Tester.getBacktrace(new Error(), Object)
        })
        this.expectError('TypeError', function() {
            Tester.getBacktrace(new Error(), new Object())
        })
        this.expectError('TypeError', function() {
            Tester.getBacktrace(new Error(), [])
        })
    }

    testBacktraceBackError()
    {
        this.expectError('Error', function() {
            var back = 123
            Tester.getBacktrace(new Error(), back)
        })
    }

    testBacktraceReturnsString()
    {
        this.assertSame('string', typeof Tester.getBacktrace(new Error()))
        this.assertSame('string', typeof Tester.getBacktrace(new Error(), 10))
    }

    testFormatBytesArgumentTypeError()
    {
        var bytes = 123,
            decimals = 1,
            separator = '.',
            kilo = 1000,
            units = []

        // Invalid bytes.
        this.expectError('TypeError', function() {
            Tester.formatBytes('123', decimals, separator, kilo, units)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(null, decimals, separator, kilo, units)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(false, decimals, separator, kilo, units)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(Object, decimals, separator, kilo, units)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(new Object(), decimals, separator, kilo, units)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(function() {}, decimals, separator, kilo, units)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes([], decimals, separator, kilo, units)
        })

        // Invalid decimals.
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, '123', separator, kilo, units)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, null, separator, kilo, units)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, false, separator, kilo, units)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, Object, separator, kilo, units)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(new Object(), decimals, separator, kilo, units)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, function() {}, separator, kilo, units)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, [], separator, kilo, units)
        })

        // Invalid separator.
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, decimals, null, kilo, units)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, decimals, false, kilo, units)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, decimals, Object, kilo, units)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, decimals, new Object(), kilo, units)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, decimals, function() {}, kilo, units)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, decimals, 123, kilo, units)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, decimals, [], kilo, units)
        })

        // Invalid kilo.
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, decimals, separator, '123', units)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, decimals, separator, null, units)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, decimals, separator, false, units)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, decimals, separator, Object, units)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, decimals, separator, new Object(), units)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, decimals, separator, function() {}, units)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, decimals, separator, [], units)
        })

        // Invalid units.
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, decimals, separator, kilo, '123')
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, decimals, separator, kilo, null)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, decimals, separator, kilo, false)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, decimals, separator, kilo, Object)
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, decimals, separator, kilo, new Object())
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, decimals, separator, kilo, function() {})
        })
        this.expectError('TypeError', function() {
            Tester.formatBytes(bytes, decimals, separator, kilo, '123')
        })
    }

    testFormatBytesDecimalsRangeError()
    {
        this.expectError('RangeError', function() {
            var decimals = 21
            Tester.formatBytes(1234, decimals)
        })
    }

    testFormatBytesNumbersReturnsString()
    {
        this.assertSame('1 Bytes',     Tester.formatBytes(1))
        this.assertSame('1 KB',        Tester.formatBytes(1000))
        this.assertSame('1 MB',        Tester.formatBytes(1000000))
        this.assertSame('1 GB',        Tester.formatBytes(1000000000))
        this.assertSame('1 TB',        Tester.formatBytes(1000000000000))
        this.assertSame('1 PB',        Tester.formatBytes(1000000000000000))
        this.assertSame('1 EB',        Tester.formatBytes(1000000000000000000))
        this.assertSame('1 ZB',        Tester.formatBytes(1000000000000000000000))
        this.assertSame('1 YB',        Tester.formatBytes(1000000000000000000000000))
        this.assertSame('1 undefined', Tester.formatBytes(1000000000000000000000000000))

        this.assertSame('1.2 GB',         Tester.formatBytes(1234567890, 1))
        this.assertSame('1.234567890 GB', Tester.formatBytes(1234567890, 9))

        this.assertSame('1.111 Bytes', Tester.formatBytes(1.111, 1.1))

        this.assertSame('1.23399999999999998579 KB', Tester.formatBytes(1234, 20))
    }

    testFormatBytesSeparatorReturnsString()
    {
        this.assertSame('1,2 KB',        Tester.formatBytes(1234, 1, ','))
        this.assertSame('1,1 undefined', Tester.formatBytes(1111111111111111111111111111, 1, ','))
    }

    testFormatBytesKiloReturnsString()
    {
        this.assertSame('1.234000000 KB', Tester.formatBytes(1234, 9, '.', 1000))
        this.assertSame('1.205078125 KB', Tester.formatBytes(1234, 9, '.', 1024))
    }

    testFormatBytesUnitsReturnsString()
    {
        var units = ['foo', 'bar', 'baz']

        this.assertSame('1 foo', Tester.formatBytes(1,       1, '.', 1000, units))
        this.assertSame('1 bar', Tester.formatBytes(1000,    1, '.', 1000, units))
        this.assertSame('1 baz', Tester.formatBytes(1000000, 1, '.', 1000, units))
    }

    testTypeReturnsString()
    {
        // array
        this.assertSame('array', Tester.type([]))
        this.assertSame('array', Tester.type([1, 2, 3]))
        this.assertSame('array', Tester.type(new Array()))
        this.assertSame('array', Tester.type(new Array(1, 2, 3)))

        // boolean
        this.assertSame('boolean', Tester.type(false))
        this.assertSame('boolean', Tester.type(true))
        this.assertSame('boolean', Tester.type(new Boolean()))
        this.assertSame('boolean', Tester.type(new Boolean(-1)))
        this.assertSame('boolean', Tester.type(new Boolean(true)))

        // function
        this.assertSame('function', Tester.type(function() {}))
        this.assertSame('function', Tester.type(function() { return 1 }))
        this.assertSame('function', Tester.type(new Function()))
        this.assertSame('function', Tester.type(new Function(' return 1 ')))
        this.assertSame('function', Tester.type(Object))

        // number
        this.assertSame('number', Tester.type(0))
        this.assertSame('number', Tester.type(.0))
        this.assertSame('number', Tester.type(-0.1))
        this.assertSame('number', Tester.type(new Number()))
        this.assertSame('number', Tester.type(new Number(123)))

        // null
        this.assertSame('null', Tester.type(null))

        // object
        this.assertSame('object', Tester.type({}))
        this.assertSame('object', Tester.type(new Object()))

        // regexp
        this.assertSame('regexp', Tester.type(/^[0-9]+$/))
        this.assertSame('regexp', Tester.type(new RegExp('^[0-9]+$')))
        this.assertSame('regexp', Tester.type(new RegExp(new RegExp('^[0-9]+$'))))
        this.assertSame('regexp', Tester.type(new RegExp(/^[0-9]+$/)))

        // symbol
        this.assertSame('symbol', Tester.type(Symbol()))
        this.assertSame('symbol', Tester.type(Symbol('foo')))
        this.assertSame('symbol', Tester.type(Symbol(null)))
        this.assertSame('symbol', Tester.type(Symbol(false)))
        this.assertSame('symbol', Tester.type(Symbol(Object)))
        this.assertSame('symbol', Tester.type(Symbol(new Object())))

        // string
        this.assertSame('string', Tester.type(''))
        this.assertSame('string', Tester.type('0'))
        this.assertSame('string', Tester.type(new String()))
        this.assertSame('string', Tester.type(new String(null)))
        this.assertSame('string', Tester.type(new String('abc')))
    }

    testValidInvalidTypeError()
    {
        this.expectError('TypeError', function() {
            Tester.valid(123, 'string')
        })
        this.expectError('TypeError', function() {
            Tester.valid(0, 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array')
        })
        this.expectError('TypeError', function() {
            Tester.valid(null, 'string', 'boolean', 'function', 'object', 'regexp', 'number', 'array')
        })
        this.expectError('TypeError', function() {
            Tester.valid(false, 'string', 'null', 'function', 'object', 'regexp', 'number', 'array')
        })
        this.expectError('TypeError', function() {
            Tester.valid(Object, 'string', 'boolean', 'null', 'object', 'regexp', 'number', 'array')
        })
        this.expectError('TypeError', function() {
            Tester.valid(new Object(), 'string', 'boolean', 'null', 'function', 'regexp', 'number', 'array')
        })
        this.expectError('TypeError', function() {
            Tester.valid([], 'string', 'boolean', 'null', 'object', 'regexp', 'number', 'function')
        })
        this.expectError('TypeError', function() {
            Tester.valid('', 'function', 'boolean', 'null', 'object', 'regexp', 'number', 'array')
        })
    }

    testValidReturnsSame()
    {
        this.assertSame(123, Tester.valid(123, 'number'))
        this.assertSame('', Tester.valid('', 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'number', 'symbol'))
        this.assertSame(0, Tester.valid(0, 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'number', 'symbol'))
        this.assertSame(null, Tester.valid(null, 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'number', 'symbol'))
        this.assertSame(false, Tester.valid(false, 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'number', 'symbol'))
        this.assertSame(Object, Tester.valid(Object, 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'number', 'symbol'))
        this.assertSame(new Object(), Tester.valid(new Object(), 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'number', 'symbol'))
        this.assertSame([], Tester.valid([], 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'number', 'symbol'))
        this.assertSame(/^/, Tester.valid(/^/, 'string', 'boolean', 'function', 'object', 'regexp', 'null', 'array', 'number', 'symbol'))
    }

    testIsReturnsBoolean()
    {
        this.assertSame(true, Tester.is(0, 'string', '*'))
        this.assertSame(true, Tester.is('', 'mixed'))

        this.assertSame(true, Tester.is(123, 'number'))
        this.assertSame(true, Tester.is('', 'boolean', 'array', 'string'))
        this.assertSame(true, Tester.is(new Object(), 'function', 'object', 'string'))
        this.assertSame(true, Tester.is(Symbol('foo'), 'boolean', 'array', 'string', 'symbol'))
        this.assertSame(false, Tester.is(Object, 'boolean', 'string'))
        this.assertSame(false, Tester.is([], 'boolean', 'string'))
        this.assertSame(false, Tester.is(/^/, 'function', 'object'))
    }
}
