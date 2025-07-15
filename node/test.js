const { reverse_string } = require('../pkg/wasmedge_nodejs_starter_lib.js');

console.log("Testing reverse_string with 'Hello from Node.js!':", reverse_string("Hello from Node.js!"));
console.log("Testing reverse_string with 'Rust is fast!':", reverse_string("Rust is fast!"));
console.log("Testing reverse_string with '12345':", reverse_string("12345"));
