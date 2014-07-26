# ng-directive-parser [![Build Status](https://secure.travis-ci.org/jantimon/ng-directive-parser.png?branch=master)](http://travis-ci.org/jantimon/ng-directive-parser)

> Extracts angular directive information from source


## Getting Started

Install the module with: `npm install ng-directive-parser`

```js
var ng-directive-parser = require('ng-directive-parser');
var directives = ngDirectiveParser.parseFile('directives.js');

/* Result:
 [{ filename: 'directives.js',
    name: 'demoDirective',
    restrict: { A: true, E: true } 
 }];
 */

```

Install with cli command

```sh
$ npm install ng-directive-parser
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com).


## License

Copyright (c) 2014 Jan Nicklas  
Licensed under the MIT license.
