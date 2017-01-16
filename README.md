tester
======
**This is development (master) version.<br> For production version (relase) see
<http://github.com/cyrhla/tester/tree/v0.0.1>**
- Version: 0.0.1-dev
- Technologies:
  - JavaScript
- Compatibility:
  - Node (>= 7.2.1)
  - npm (>= 3.10.10)
- Copyright / Authors:
  - Krystian Pietruszka <kpietru@cyrhla.com>
- Licenses:
  - MIT <http://spdx.org/licenses/MIT>
- Download: <http://github.com/cyrhla/tester/releases>
- Homepage: <http://www.cyrhla.com>

The "tester" is a simple JavaScript test module.
________________________________________________

Install
-------

    npm install @cyrhla/tester

Usage
-----

First, create the class:

    // SomeClass.js

    class SomeClass
    {
        someMethod(someArgument)
        {
            return someArgument
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

            this.assertSame('abc', obj.someMethod('abc'))
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

Fifth, execute the command via shell:

    npm test

API
---

### Class Tester (Tester.js)

- Tester ( boolean: __stopOnError__, boolean: __showOk__, boolean: __colorize__, null|function|console.log: __output__ )
  - toString(): string
  - getResultsJson: object
  - before(): undefined
  - after(): undefined
  - beforeEach(): undefined
  - afterEach(): undefined
  - assertSame( mixed: __expected__, mixed: __actual__ ): undefined
  - assertEqual( mixed: __expected__, mixed: __actual__ ): undefined
  - assertType( string: __expected__, mixed: __actual__ ): undefined
  - assertInstanceOf( string: __expected__, mixed: __actual__ ): undefined
  - expectError( string: __errorName__, function: __callback__ ): undefined
  - createMocker( function: __baseClass__, mixed[]: __args__ ): object|Mocker
  - static getBacktrace( object: __error__, number: __back__ = 1 ): string
  - static formatBytes( number: __bytes__, number: __decimals__ = 1, string: __separator__ = '.', number: __kilo__ = 1000, string[]: __units__ = [Bytes, KB, MB, GB, TB, PB, EB, ZB, YB] ): string
  - static type( mixed: __arg__ ): string
  - static valid( *, *, ... ): mixed
  - static is(*, *, ... ): boolean

References
----------

1. [Node.js Documentation][1]

[1]: http://nodejs.org/api/modules.html

____________________________________________
[*] Paths should be modified to your module.
