module.exports = {

  /**
   * Returns 'directive' for `app.directive(function(){...});`.
   */
  getCallExpressionName: function(node) {
    // Make sure that this is a call expression
    if (!node || node.type !== 'CallExpression' ) {
      return;
    }
    // Get the callee property
    var property;
    if (node.callee && node.callee.property) {
      property = node.callee.property;
    }
    // Return the identifier name of the callee
    if (property && property.type === 'Identifier') {
      return property.name;
    }
  },

  /**
   * Pareses a FunctionExpression or BlockStatement and returns the first ReturnStatement
   *
   * @param node
   * @returns {*}
   */
  getFirstReturnStatement: function getFirstReturnStatement(node) {
    if (!node || !node.body) {
      return;
    }
    if (node.body.type === 'BlockStatement') {
      node = node.body;
    }
    for (var i = 0; i < node.body.length; i++) {
      if (node.body[i].type === 'ReturnStatement') {
        return node.body[i];
      }
    }
  },

  /**
   * Turns nodes of literal key values like `{"a":"1"}` back into an object
   *
   * @param node
   * @returns {{}}
   */
  parseObjectExpressions: function parseObjectExpressions(node) {
    if (!node || node.type !== 'ObjectExpression') {
      return {};
    }
    var properties = {}, property;
    for (var i = 0; i < node.properties.length; i++) {
      property = node.properties[i];
      if (property.key.type === 'Identifier' && property.value.type === 'Literal') {
        properties[property.key.name] = property.value.value;
      }
    }
    return properties;
  },

  // Executes visitor on the object and its children (recursively).
  traverse: function traverse(object, visitor) {
    var key, child;
    if (visitor.call(null, object) === false) {
      return;
    }
    for (key in object) {
      if (object.hasOwnProperty(key)) {
        child = object[key];
        if (typeof child === 'object' && child !== null) {
          traverse(child, visitor);
        }
      }
    }
  }
};