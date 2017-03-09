tester
======
**This is development (master) version.<br> For production version (relase) see
<http://github.com/cyrhla/tester/tree/v0.0.1>**
- Version: 0.0.1-dev
- Technologies:
  - JavaScript
- Copyright / Authors:
  - Krystian Pietruszka <kpietru@cyrhla.com>
- Licenses:
  - MIT <http://spdx.org/licenses/MIT>
- Download: <http://github.com/cyrhla/tester/releases>
- Homepage: <http://www.cyrhla.com>
- More: package.json

The "tester" is a simple JavaScript test module.
________________________________________________

Install
-------

    npm install @cyrhla/tester

Usage
-----

### Unit tests

First, create the class:

    // SomeClass.js

    class SomeClass
    {
        someMethod(someArgument)
        {
            return someArgument + '...'
        }

        // ...
    }

Second, create the test:

    // Tests/SomeClassTest.js

    const Tester = require('@cyrhla/tester/Tester')
    const SomeClass = require('../SomeClass')

    class SomeClassTest extend Tester
    {
        testSomeMethodReturnsString()
        {
            var obj = new SomeClass()

            this.assertSame('abc...', obj.someMethod('abc'))
        }

        // ...
    }

Third, create the script*:

    // scripts/test.js

    'use strict'

    new (require('@some/module/Tests/SomeClassTest'))()

Fourth, add the following lines to the package.json:

    // ...
    scripts: {
        "test": "node scripts/test.js"
    }
    // ...

Finally, execute the command via shell:

    npm test

### Typing

    // somefile.js

    const is = require('@cyrhla/tester/is')

    var somefunc = function(arg) {
        if (is(arg, 'string', 'number')) {
            // ...
        }
        // ...
    }
    // ...

### Validation

    // somefile.js

    const valid = require('@cyrhla/tester/valid')

    var somefunc = function(arg) {
        valid(arg, 'string', 'number')

        // ...
    }
    // ...

API
---

### Class Tester (Tester.js)

- Tester( boolean: __stopOnError__ = false, boolean: __showOk__ = false, boolean: __colorize__ = true, null|function|console.log: __output__ = console.log )
  - toString(): string
  - getResultsJson: object
  - before(): undefined
  - after(): undefined
  - beforeEach(): undefined
  - afterEach(): undefined
  - assertSame( mixed: __expected__, mixed: __actual__ ): undefined
  - assertEqual( mixed: __expected__, mixed: __actual__ ): undefined
  - assertType( string: __expected__, mixed: __actual__ ): undefined
  - assertInstanceOf( function: __expected__, function|object: __actual__ ): undefined
  - expectError( string: __errorName__, function: __callback__ ): undefined
  - createMocker( function: __baseClass__, mixed[]: __args__ ): Mocker
  - static getBacktrace( Error: __error__, null|number: __back__ = null ): string
  - static formatBytes( number: __bytes__, number: __decimals__ = 1, string: __separator__ = '.', number: __kilo__ = 1000, string[]: __units__ = [Bytes, KB, MB, GB, TB, PB, EB, ZB, YB] ): string
  - static type( mixed: __arg__ ): string
  - static valid( *, *, ... ): mixed
  - static is( *, *, ... ): boolean

### Class Mocker (Mocker/Mocker.js)

- Mocker( function: __baseClass__, mixed[]: __args__ = [])
  - setProperty( mixed: __key__, mixed: __value__ ): self
  - setMethod( mixed: __key__, function: __callback__ ): self
  - compile(): object

### Function is (is.js)

is( *, *, ... ): boolean

### Function valid (valid.js)

valid( *, *, ... ): mixed

References
----------

1. [Node.js Documentation][1]

[1]: http://nodejs.org/api/modules.html

___________________________________________
[*] Paths should be modified to the module.

