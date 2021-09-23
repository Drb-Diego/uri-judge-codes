const input = require('fs').readFileSync('./1002/input.txt', 'utf8');
let lines = input.split('\n');

const n = 3.14159;

lines = parseFloat(lines);

const circuference = n*(Math.pow(lines,2));

console.log(`A=${circuference.toFixed(4)}`);