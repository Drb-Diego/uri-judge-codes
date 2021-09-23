const input = require('fs').readFileSync('./1003/input.txt', 'utf8');
let [a, b] = input.split('\n');

a = parseInt(a);
b = parseInt(b);

console.log(`SOMA = ${a + b}`);