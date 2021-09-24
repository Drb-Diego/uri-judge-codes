/*
  Leia dois valores inteiros. A seguir, calcule o produto entre estes dois valores e atribua esta operação à variável PROD. A seguir mostre a variável PROD com mensagem correspondente.   

  Entrada

    9,3
    -30,10
    0,9

  O arquivo de entrada contém 2 valores inteiros.
  
  Saída
    PROD = 27
    PROD = -300
    PROD = 0

  Imprima a mensagem "PROD" e a variável PROD conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade. Não esqueça de imprimir o fim de linha após o produto, caso contrário seu programa apresentará a mensagem: “Presentation Error”.

*/

const input = require('fs').readFileSync('./1004/input.txt', 'utf8');
let [num1, num2] = input.split('\n');

num1 = Number(num1);
num2 = Number(num2);

const PROD = num1 * num2;

console.log(`PROD = ${PROD}`);
