var crypto = require('crypto');

var shasum = crypto.createHash('sha256');
shasum.update('I love brussel sprouts');
var val = shasum.digest('hex');

console.log(val.toString());
