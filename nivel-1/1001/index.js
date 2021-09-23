const input = require('fs').readFileSync("./1001/input.txt", "utf8");
let [a, b] = input.split('\n');

a = parseInt(a);
b = parseInt(b);

const x = a + b;

console.log(`X = ${x}`);