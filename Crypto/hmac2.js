//async
var crypto    = require('crypto');
var hmac;
var algorithm = 'sha256';
var key       = '0dffot35ZWPRmuW0OuOxeB2dyfVH4EJEmzaLAhTQI';
var text      = 'I love brussel sprouts';
var hash;

hmac = crypto.createHmac(algorithm, key);

// readout format:
hmac.setEncoding('hex');
// //or also commonly: hmac.setEncoding('base64');
//
// // callback is attached as listener to stream's finish event:
hmac.end(text, function () {
     hash = hmac.read();
//         //...do something with the hash...
     console.log(hash);
 });
