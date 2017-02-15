/**
 * @package @cyrhla/tester
 * @license MIT
 * @copyright Krystian Pietruszka <kpietru@cyrhla.com>
 * @see http://www.cyrhla.com
 */

'use strict'

const InvalidTypeError = require('@cyrhla/tester/Error/InvalidTypeError')

/**
 * The Mocker generates a mock object is a simulated object
 * that mimics the behavior of a real object in controlled ways.
 *
 * @author Krystian Pietruszka <kpietru@cyrhla.com>
 */
module.exports = class Mocker
{
    /**
     * Initializes this class with the given options.
     *
     * @param function baseClass
     * @param mixed[]  args      Default empty array
     *
     * @throws InvalidTypeError
     */
    constructor(baseClass, args = [])
    {
        if (typeof baseClass !== 'function') {
            throw new InvalidTypeError('@param baseClass invalid type, must be a function.')
        }
        if (!Array.isArray(args)) {
            throw new InvalidTypeError('@param args invalid type, must be an array.')
        }

        /** @type function */
        this._baseClass = baseClass

        /** @type array */
        this._arguments = args

        /** @type object */
        this._properties = {}

        /** @type object */
        this._methods = {}
    }

    /**
     * Sets the property.
     *
     * @param mixed key
     * @param mixed value
     *
     * @return self The invoked object.
     */
    setProperty(key, value)
    {
        this._properties[key] = value

        return this
    }

    /**
     * Sets the method.
     *
     * @param mixed    key
     * @param function callback
     *
     * @return self The invoked object.
     *
     * @throws InvalidTypeError
     */
    setMethod(key, callback)
    {
        if (typeof callback !== 'function') {
            throw new InvalidTypeError('@param callback invalid type, must be a function.')
        }

        this._methods[key] = callback

        return this
    }

    /**
     * Compiles a new class.
     *
     * @return object
     */
    compile()
    {
        this._arguments.unshift(this._baseClass)
        var newClass = new (this._baseClass.bind.apply(this._baseClass, this._arguments))

        for (let key in this._properties) {
            var obj = {}
            obj[key] = this._properties[key]
            newClass = Object.assign(newClass, obj)
        }

        for (let key in this._methods) {
            var obj = {}
            obj[key] = this._methods[key]
            newClass = Object.assign(newClass, obj)
        }

        return newClass
    }
}
