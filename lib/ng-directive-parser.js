/*
 * ng-directive-parser
 * https://github.com/jantimon/ng-directive-parser
 *
 * Copyright (c) 2014 Jan Nicklas
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var esprima = require('esprima');
var esprimaHelper = require('./esprima-helpers.js');

/**
 * Class for a directive information bundle
 * @param filename
 * @param directiveArguments
 * @constructor
 */
function Directive(filename, directiveArguments) {
  this.filename = filename;
  this.name = directiveArguments[0].value;
  var directiveConfiguration = directiveArguments[1];
  // Extract the last attribute of the array
  if (directiveConfiguration.type === 'ArrayExpression' && directiveConfiguration.elements.length) {
    directiveConfiguration = directiveConfiguration.elements[directiveConfiguration.elements.length - 1];
  }
  // Parse the function
  if (directiveConfiguration && directiveConfiguration.type === 'FunctionExpression') {
    directiveConfiguration = esprimaHelper.getFirstReturnStatement(directiveConfiguration);
  }
  // Get the returnStatement
  if (directiveConfiguration && directiveConfiguration.type === 'ReturnStatement') {
    directiveConfiguration = directiveConfiguration.argument;
  }
  // Parse the object
  if (directiveConfiguration && directiveConfiguration.type === 'ObjectExpression') {
    var properties = esprimaHelper.parseObjectExpressions(directiveConfiguration);
    this.replace = !!properties.replace;
    this.transclude = !!properties.transclude;
    this.template = properties.template;
    this.templateUrl = properties.templateUrl;
    if (properties.restrict) {
      this.restrict = {
        A: properties.restrict.toUpperCase().indexOf('A') >= 0,
        E: properties.restrict.toUpperCase().indexOf('E') >= 0,
        C: properties.restrict.toUpperCase().indexOf('C') >= 0
      };
    }
  }
  // Add parse warning
  if (!this.restrict) {
    module.exports.logger('no restriction set for', this.filename, this.name);
    this.restrict = {
      A: true,
      E: false,
      C: false
    };
  }
}

/**
 * Parse the given AST
 *
 * @returns {Directive[]}
 */
function parseAst(filename, ast) {
  var directives = [];
  esprimaHelper.traverse(ast, function (node) {
    var calleeExpressionName = esprimaHelper.getCallExpressionName(node);
    if (calleeExpressionName === 'directive') {
      var directiveArguments = node['arguments'] || [];
      if (directiveArguments.length >= 2 && directiveArguments[0].type === 'Literal') {
        directives.push(new Directive(filename, directiveArguments));
      }
    }
  });
  return directives;
}


var ngDirectiveParser = module.exports = {
  Directive: Directive,
  parseAst: parseAst,
  /**
   * Parses the given source
   * @returns {Directive[]}
   */
  parseCode: function parseFile(filename, code) {
    if (/directive/.test(code)) {
      return ngDirectiveParser.parseAst(filename, esprima.parse(code));
    }
    return [];
  },
  /**
   * Parses the given file
   * @returns {Directive[]}
   */
  parseFile: function parseFile(filename) {
    return ngDirectiveParser.parseCode(filename, fs.readFileSync(filename));
  },
  logger: function(){

  }
};
