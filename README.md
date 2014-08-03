# ng-directive-parser [![Build Status](https://secure.travis-ci.org/jantimon/ng-directive-parser.png?branch=master)](http://travis-ci.org/jantimon/ng-directive-parser)

> Extracts angular directive information from source  
> Try the **[online demo](http://jantimon.github.io/ng-directive-parser/)**


## Getting Started

Install the module with: `npm install ng-directive-parser`

```js
var ng-directive-parser = require('ng-directive-parser');
var directives = ngDirectiveParser.parseFile('directives.js');

/* Result:
[
  {
    "filename": "directive.js",
    "name": "demoDirective1",
    "replace": true,
    "transclude": true,
    "template": "<demo-directive2 data-action=\"foo\">Content</demo-directive2>",
    "restrict": {
      "A": false,
      "E": true,
      "C": false
    }
  }
]
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
