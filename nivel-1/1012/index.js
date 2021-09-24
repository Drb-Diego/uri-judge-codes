/*
  Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:

  a) a área do triângulo retângulo que tem A por base e C por altura.
  b) a área do círculo de raio C. (pi = 3.14159)
  c) a área do trapézio que tem A e B por bases e C por altura.
  d) a área do quadrado que tem lado B.
  e) a área do retângulo que tem lados A e B.
  Entrada
    3.0 4.0 5.2
    12.7 10.4 15.2

  O arquivo de entrada contém três valores com um dígito após o ponto decimal.
  
  Saída
    TRIANGULO: 7.800
    CIRCULO: 84.949
    TRAPEZIO: 18.200
    QUADRADO: 16.000
    RETANGULO: 12.000


    TRIANGULO: 96.520
    CIRCULO: 725.833
    TRAPEZIO: 175.560
    QUADRADO: 108.160
    RETANGULO: 132.080

  O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.
*/

const input = require('fs').readFileSync('./1012/input.txt', 'utf8');
let [num1, num2, num3] = input.split(' ');

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);

const pi = 3.14159;

const righTtriangleArea = ((num1 * num3)/2);
const rayAreaCircle = pi*(Math.pow(num3,2));
const trapezioArea = ((num1 + num2) * num3)/2;
const squareArea = num2 * num2;
const areaRectangle = num1 * num2

console.log(`TRIANGULO: ${righTtriangleArea.toFixed(3)}`);
console.log(`CIRCULO: ${rayAreaCircle.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezioArea.toFixed(3)}`);
console.log(`QUADRADO: ${squareArea.toFixed(3)}`);
console.log(`RETANGULO: ${areaRectangle.toFixed(3)}`);
