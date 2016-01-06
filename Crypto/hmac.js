var crypto = require('crypto');
var hmac;
var algorithm = 'sha256';
var key = '0dffot35ZWPRmuW0OuOxeB2dyfVH4EJEmzaLAhTQI';
var text = 'I love brussel sprouts';
var hash;

hmac = crypto.createHmac(algorithm, key);
hmac.setEncoding('hex');
hmac.write(text);
hmac.end();
hash = hmac.read();

console.log(hash);
