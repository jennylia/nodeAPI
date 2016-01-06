var crypto = require('crypto');
var alice = crypto.getDiffieHellman('modp14');
var bob =   crypto.getDiffieHellman('modp14');

alice.generateKeys();
bob.generateKeys();

var alice_secret = alice.computeSecret(bob.getPublicKey(), null, 'hex');
var bob_secret =   bob.computeSecret(alice.getPublicKey(), null, 'hex');
console.log(alice_secret == bob_secret);
