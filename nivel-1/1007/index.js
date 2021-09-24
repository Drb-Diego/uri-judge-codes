/*
  Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).
  
  Entrada
    5, 6, 7, 8
    0, 0, 7, 8
    5, 6, -7, 8

  O arquivo de entrada contém 4 valores inteiros.

  Saída
    DIFERENCA = -26
    DIFERENCA = -56
    DIFERENCA = 86

  Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.
*/

const input = require('fs').readFileSync('./1007/input.txt','utf8');
let [num1, num2, num3, num4] = input.split('\n');

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);
num4 = Number(num4);

const diference = num1 * num2 - num3 * num4;

console.log(`DIFERENCA = ${diference}`);