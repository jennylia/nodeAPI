var crypto = require('crypto');
var hmac;
var algorithm = 'sha256';
var key = 'testkeywillnotworkforproduction';
var text = {id: 42};
var hash;

hmac = crypto.createHmac(algorithm, key);
hmac.setEncoding('hex');
hmac.write(JSON.stringify(text));
hmac.end();
hash = hmac.read();

console.log(hash);
