
var repl = require('repl'), msg = 'Hello World';

repl.start('> ').context.m = msg;
