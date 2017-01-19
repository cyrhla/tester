/**
 * @package @cyrhla/tester
 * @license MIT
 * @copyright Krystian Pietruszka <kpietru@cyrhla.com>
 * @see http://www.cyrhla.com
 */

'use strict'

const Mocker = require('@cyrhla/tester/Mocker/Mocker')

/**
 * The Tester is a simple JavaScript test class.
 *
 * @author Krystian Pietruszka <kpietru@cyrhla.com>
 */
module.exports = class Tester
{
    /**
     * Initializes this class with the given options.
     *
     * @param boolean                   stopOnError Default false
     * @param boolean                   showOk      Default false
     * @param boolean                   colorize    Default true
     * @param null|function|console.log output      Default console.log
     * @param function|Mocker           mocker      Default Mocker
     */
    constructor(
        stopOnError = false,
        showOk      = false,
        colorize    = true,
        output      = console.log,
        mocker      = Mocker
    ) {
        Tester.valid(stopOnError, 'boolean')
        Tester.valid(showOk, 'boolean')
        Tester.valid(colorize, 'boolean')
        Tester.valid(output, 'null', 'function')
        Tester.valid(mocker, 'function')

        /** @type string[] */
        this._errors = []

        /** @type string[] */
        this._ok = []

        /** @type string[] */
        this._all = []

        /** @type object */
        this._resultsJson = {}

        /** @type number */
        this._assertionsCounter = 0

        /** @type number */
        this._testsCounter = 0

        /** @type boolean */
        this._stopOnError = stopOnError

        /** @type boolean */
        this._showOk = showOk

        /** @type boolean */
        this._colorize = colorize

        /** @type null|function|console.log */
        this._output = output

        /** @type function|Mocker */
        this._mocker = mocker

        this._run()
    }

    /**
     * Reads results into a string.
     *
     * @return string
     */
    toString()
    {
        return JSON.stringify(this._resultsJson, null, 4)
    }

    /**
     * Gets results in JSON format.
     *
     * @return object
     */
    getResultsJson()
    {
        return this._resultsJson
    }

    /**
     * Runs before all tests.
     *
     * @return undefined
     */
    before()
    {
    }

    /**
     * Runs after all tests.
     *
     * @return undefined
     */
    after()
    {
    }

    /**
     * Runs before each test.
     *
     * @return undefined
     */
    beforeEach()
    {
    }

    /**
     * Runs after each test.
     *
     * @return undefined
     */
    afterEach()
    {
    }

    /**
     * Reports an error if the two variables
     * do not have the same type and value.
     *
     * @param mixed expected
     * @param mixed actual
     *
     * @return undefined
     */
    assertSame(expected, actual)
    {
        Tester.valid(expected, 'mixed')
        Tester.valid(actual, 'mixed')

        this._assertionsCounter++

        var trace = Tester.getBacktrace(new Error(), 2)

        if (
            Tester.is(expected, 'object') &&
            Tester.is(actual, 'object') ||
            Tester.is(expected, 'array') &&
            Tester.is(actual, 'array')
        ) {
            expected = JSON.stringify({
                keys:   Object.keys(expected).sort(),
                values: Object.values(expected).sort()
            })
            actual = JSON.stringify({
                keys:   Object.keys(actual).sort(),
                values: Object.values(actual).sort()
            })
        } else if (
            Tester.is(expected, 'function') &&
            Tester.is(actual, 'function') ||
            Tester.is(expected, 'regexp') &&
            Tester.is(actual, 'regexp')
        ) {
            expected = expected.toString()
            actual   = actual.toString()
        }

        if (expected !== actual) {
            this._errors.push('Error: ' + trace)
            this._all.push('Error: ' + trace)
        } else {
            this._ok.push('Ok: ' + trace)
            this._all.push('Ok: ' + trace)
        }
    }

    /**
     * Reports an error if the two variables
     * are not equal value.
     *
     * @param mixed expected
     * @param mixed actual
     *
     * @return undefined
     */
    assertEqual(expected, actual)
    {
        Tester.valid(expected, 'mixed')
        Tester.valid(actual, 'mixed')

        this._assertionsCounter++

        var trace = Tester.getBacktrace(new Error(), 2)

        if (
            Tester.is(expected, 'object') &&
            Tester.is(actual, 'object') ||
            Tester.is(expected, 'array') &&
            Tester.is(actual, 'array')
        ) {
            expected = JSON.stringify(Object.keys(expected).sort())
            actual = JSON.stringify(Object.keys(actual).sort())
        } else if (
            Tester.is(expected, 'function') &&
            Tester.is(actual, 'function') ||
            Tester.is(expected, 'regexp') &&
            Tester.is(actual, 'regexp')
        ) {
            expected = expected.toString()
            actual   = actual.toString()
        }

        if (expected != actual) {
            this._errors.push('Error: ' + trace)
            this._all.push('Error: ' + trace)
        } else {
            this._ok.push('Ok: ' + trace)
            this._all.push('Ok: ' + trace)
        }
    }

    /**
     * Reports an error if the actual variable
     * do not have the same type as the expected.
     *
     * @param string expected
     * @param mixed  actual
     *
     * @return undefined
     */
    assertType(expected, actual)
    {
        Tester.valid(expected, 'string')
        Tester.valid(actual, 'mixed')

        this._assertionsCounter++

        var trace = Tester.getBacktrace(new Error(), 2)

        if (Tester.type(actual) !== expected) {
            this._errors.push('Error: ' + trace)
            this._all.push('Error: ' + trace)
        } else {
            this._ok.push('Ok: ' + trace)
            this._all.push('Ok: ' + trace)
        }
    }

    /**
     * Reports an error if the actual variable
     * is not an instance of the expected.
     *
     * @param function        expected
     * @param function|object actual
     *
     * @return undefined
     */
    assertInstanceOf(expected, actual)
    {
        Tester.valid(expected, 'function')
        Tester.valid(actual, 'function', 'object')

        this._assertionsCounter++

        var trace = Tester.getBacktrace(new Error(), 2)

        if (actual instanceof expected) {
            this._ok.push('Ok: ' + trace)
            this._all.push('Ok: ' + trace)
        } else {
            this._errors.push('Error: ' + trace)
            this._all.push('Error: ' + trace)
        }
    }

    /**
     * Reports an error if inside the tested code no exceptions.
     *
     * @param string   errorName
     * @param function callback
     *
     * @return undefined
     */
    expectError(errorName, callback)
    {
        Tester.valid(errorName, 'string')
        Tester.valid(callback, 'function')

        this._assertionsCounter++

        var trace = Tester.getBacktrace(new Error(), 2)

        var expect = false
        try {
            callback()
        } catch(error) {
            expect = true
            if (error.name !== errorName) {
                expect = false
            }
        }

        if (expect === false) {
            this._errors.push('Error: ' + trace)
            this._all.push('Error: ' + trace)
        } else {
            this._ok.push('Ok: ' + trace)
            this._all.push('Ok: ' + trace)
        }
    }

    /**
     * Creates the Mocker object.
     *
     * @see Mocker.constructor
     *
     * @param function baseClass
     * @param mixed[]  args      Default empty array
     *
     * @return object|Mocker
     */
    createMocker(baseClass, args = [])
    {
        Tester.valid(baseClass, 'function')
        Tester.valid(args, 'array')

        return new this._mocker(baseClass, args)
    }

    /**
     * Runs the unit tests.
     *
     * @todo Progress bar
     *
     * @see http://coderwall.com/p/yphywg/printing-colorful-text-in-terminal-when-run-node-js-script
     *
     * @return undefined
     */
    _run()
    {
        var info = this._getInfoFromPackageJson()

        if (Tester.is(this._output, 'function')) {
            this._output('################################################')
            this._output(info.label)
            this._output(info.labelDescription)
            this._output('################################################')
        }

        var start = new Date()

        // @todo Progress bar start.

        this._runTestMethods()

        // @todo Progress bar stop.

        var end = new Date()
        var time = end - start
        var formatTime = time > 1000 ? (time / 1000).toFixed(1) + ' seconds' : time + ' miliseconds'
        var memoryBytes = process.memoryUsage().heapTotal
        var trace = Tester.getBacktrace(new Error(), 2)

        this._resultsJson = {
            info:              info,
            errors:            this._errors,
            ok:                this._ok,
            all:               this._all,
            className:         this.constructor.name,
            assertionsCounter: this._assertionsCounter,
            testsCounter:      this._testsCounter,
            timeMiliseconds:   time,
            formatTime:        formatTime,
            memoryBytes:       memoryBytes,
            formatMemory:      Tester.formatBytes(memoryBytes),
            from:              trace
        }

        if (Tester.is(this._output, 'function')) {
            var arr = this._showOk === true ? this._all : this._errors
            for (let value of arr) {
                if (this._colorize === true) {
                    // reverse red
                    value = value.replace(/^Error:/, '\x1b[31m\x1b[7mError:\x1b[0m')
                    // reverse
                    value = value.replace(/^Ok:/, '\x1b[7mOk:\x1b[0m')
                }
                this._output(value)
            }

            var className = this.constructor.name + ':'
            if (this._colorize === true) {
                // reverse
                className = '\x1b[7m' + className + '\x1b[0m'
            }

            this._output(className)
            this._output(' - tests      ' + this._testsCounter)
            this._output(' - assertions ' + this._assertionsCounter)
            this._output(' - errors     ' + this._errors.length)
            this._output(' - time       ' + formatTime)
            this._output(' - memory     ' + Tester.formatBytes(memoryBytes))
            this._output(' - from       ' + trace)
            this._output('')
        }
    }

    /**
     * Runs the test metods.
     *
     * @return undefined
     */
    _runTestMethods()
    {
        var methods = Reflect.ownKeys(Reflect.getPrototypeOf(this))
        this.before()
        for (let method of methods) {
            if (this._stopOnError === true && this._errors > 0) {
                break
            }
            if (Tester.is(this[method], 'function') && method.indexOf('test') === 0) {
                this._testsCounter++
                this.beforeEach()
                this[method]()
                this.afterEach()
            }
        }
        this.after()
    }

    /**
     * Gets the info from package.json
     *
     * @return object
     *
     * @throws ReferenceError If some properties do not exist or are empty
     *                        in the object (package.json).
     */
    _getInfoFromPackageJson()
    {
        var json = require('./package.json')

        if (
            !json.name        ||
            !json.version     ||
            !json.description ||
            !json.author      ||
            !json.author.name ||
            !json.author.email
        ) {
            throw new ReferenceError(
                'Some properties do not exist or are empty in the object (package.json).'
            )
        }

        var email = '<' + json.author.email + '>'
        var author = json.author.name + ' ' + email
        return {
            label:            json.name + ' ' + json.version + ' by ' + author,
            labelDescription: json.description
        }
    }

    /**
     * Gets the backtrace.
     *
     * @param Error  error
     * @param number back
     *
     * @return string
     *
     * @throws Error If no stack specified.
     */
    static getBacktrace(error, back = 1)
    {
        Tester.valid(error, Error)
        Tester.valid(back, 'number')

        var stack = error.stack
            stack = stack.split('\n')

        if (stack[back]) {
            return stack[back].trim()
        }

        throw new Error('No stack specified.')
    }

    /**
     * Formats the bytes to other units.
     *
     * @see http://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
     *
     * @param number   bytes
     * @param number   decimals  Default 1
     * @param string   separator Default .
     * @param number   kilo      Default 1000
     * @param string[] units     Default [Bytes, KB, MB, GB, TB, PB, EB, ZB, YB]
     *
     * @return string
     */
    static formatBytes(
        bytes,
        decimals  = 1,
        separator = '.',
        kilo      = 1000,
        units     = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    ) {
        Tester.valid(bytes, 'number')
        Tester.valid(decimals, 'number')
        Tester.valid(separator, 'string')
        Tester.valid(kilo, 'number')
        Tester.valid(units, 'array')

        for (let unit of units) {
            if (bytes < kilo) {
                return (bytes + '').split('.').join(separator) + ' ' + unit
            } else {
                var b = parseFloat(bytes / kilo).toFixed(decimals)
                // If 1.0 or 1.0000000 or etc.
                if (b.match(/\.0+$/)) {
                    bytes = parseFloat(bytes / kilo).toFixed(0)
                } else {
                    bytes = b
                }
            }
        }

        return (bytes + '').split('.').join(separator) + ' undefined'
    }

    /**
     * Gets the type.
     *
     * Defined types: array, boolean, function, number,
     * null, object, regexp, symbol, string,
     * undefined
     *
     * @param mixed arg
     *
     * @return string
     */
    static type(arg)
    {
        const types = [
            'array', 'boolean', 'function', 'number',
            'null', 'object', 'regexp', 'symbol', 'string',
            'undefined'
        ]

        var type = Object.prototype.toString.call(arg),
            type = type.match(/^\[.+ (.+)\]$/),
            type = type[1],
            type = type.toLowerCase()

        if (types.indexOf(type) !== -1) {
            return type
        }

        return typeof arg
    }

    /**
     * Checks the type by using the logical operator "or".
     *
     * @param mixed arguments
     *
     * @return mixed Returns the first argument.
     *
     * @throws TypeError
     */
    static valid()
    {
        if (Tester['is'].apply(Tester['is'], arguments)) {
            return arguments[0]
        }
        var args = Array.prototype.slice.call(arguments)
        var arg = args.shift()
        throw new TypeError(
            'Invalid type ' + Tester.type(arg) + ', required: ' + args.join(' or ') + '.'
        )
    }

    /**
     * Checks the type by using the logical operator "or".
     *
     * @param mixed arguments
     *
     * @return boolean
     */
    static is()
    {
        var arg0 = arguments[0]
        var type = Tester.type(arg0)
        for (let i = 1, len = arguments.length; i < len; i++) {
            let argN = arguments[i]
            if (
                type === argN    ||
                argN === 'mixed' ||
                argN === '*'     ||
                Tester.type(argN) === 'function' && arg0 instanceof argN
            ) {
                return true
            }
        }

        return false
    }
}

