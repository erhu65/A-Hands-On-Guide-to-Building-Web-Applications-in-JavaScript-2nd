var http = require('http');

var mm = require("./01_mymodule.js");

mm.hello_world();
mm.goodbye();
var res = mm.greeter("en").greet();
console.log(res);