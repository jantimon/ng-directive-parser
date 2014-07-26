'use strict';

var ngDirectiveParser = require('../lib/ng-directive-parser.js');

var directives = ngDirectiveParser.parseFile(__dirname + '/../test/fixtures/chained-directives.js');
console.log(directives);