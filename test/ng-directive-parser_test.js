'use strict';

var ngDirectiveParser = require('../lib/ng-directive-parser.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.ngDirectiveParser = {
  setUp: function(done) {
    // setup here
    done();
  },
  'emptyFile': function(test) {
    var directives = ngDirectiveParser.parseFile(__dirname + '/fixtures/empty.js');
    test.expect(1);
    // tests here
    test.equal(directives.length, 0, 'an empty file should not return any directive');
    test.done();
  },
  'plainFile': function(test) {
    var directives = ngDirectiveParser.parseFile(__dirname + '/fixtures/plain-directives.js');
    test.expect(1);
    // tests here
    test.equal(directives.length, 7, 'all 7 directives should have been found');
    test.done();
  },
  'requireJsFile': function(test) {
    var directives = ngDirectiveParser.parseFile(__dirname + '/fixtures/requirejs-directives.js');
    test.expect(1);
    // tests here
    test.equal(directives.length, 7, 'all 7 directives should have been found');
    test.done();
  },
  'chainedFile': function(test) {
    var directives = ngDirectiveParser.parseFile(__dirname + '/fixtures/chained-directives.js');
    test.expect(1);
    // tests here
    test.equal(directives.length, 7, 'all 7 directives should have been found');
    test.done();
  },
  'restrictions': function (test) {
    var directives = ngDirectiveParser.parseFile(__dirname + '/fixtures/plain-directives.js');
    test.expect(6);
    // tests here
    test.equal(directives[0].restrict.A, false, 'should recognise that demoDirective1 is not an attribute directive');
    test.equal(directives[0].restrict.E, true, 'should recognise that demoDirective1 is an element directive');
    test.equal(directives[1].restrict.A, true, 'should recognise that demoDirective2 is an attribute directive');
    test.equal(directives[1].restrict.E, true, 'should recognise that demoDirective2 is an element directive');
    test.equal(directives[2].restrict.A, true, 'should recognise that demoDirective3 is an attribute directive');
    test.equal(directives[2].restrict.E, false, 'should recognise that demoDirective3 is not an element directive');
    test.done();
  }
};
