/**
 * @package @cyrhla/tester
 * @license MIT
 * @copyright Krystian Pietruszka <kpietru@cyrhla.com>
 * @see http://www.cyrhla.com
 */

'use strict'

/**
 * The class for tests.
 *
 * @author Krystian Pietruszka <kpietru@cyrhla.com>
 */
module.exports = class ClassFixture
{
    /**
     * Initializes this class with the given options.
     *
     * @param mixed foo
     * @param mixed bar
     * @param mixed baz
     */
    constructor(foo, bar, baz)
    {
        /** @type mixed */
        this.foo = foo

        /** @type mixed */
        this.bar = bar

        /** @type mixed */
        this.baz = baz
    }

    /**
     * Sets the key-value pair.
     *
     * @param mixed key
     * @param mixed value
     *
     * @return self The invoked object.
     */
    set(key, value)
    {
        this[key] = value

        return this
    }

    /**
     * Gets the value in the key-value pair.
     *
     * @param mixed key
     *
     * @return mixed
     */
    get(key)
    {
        return this[key]
    }
}
