var ngDirectiveParser = require('ng-directive-parser');
window.parse = function(){
  var parsed = ngDirectiveParser.parseCode('demo.js', document.getElementById('input').value);
  var json  = JSON.stringify(parsed, undefined, 2);
  var escaped = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
  document.getElementById('output').innerHTML = escaped;
};

