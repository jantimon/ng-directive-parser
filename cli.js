#! /usr/bin/env node

'use strict';

var ngDirectiveParser = require('./lib/ng-directive-parser');
ngDirectiveParser.logger = console.log;

var directives = ngDirectiveParser.parseFile('test/fixtures/requirejs-directives.js');
var directives = ngDirectiveParser.parseFile('test/fixtures/plain-directives.js');
var directives = ngDirectiveParser.parseFile('test/fixtures/chained-directives.js');
var directives = ngDirectiveParser.parseFile('test/fixtures/empty.js');
console.log(directives);