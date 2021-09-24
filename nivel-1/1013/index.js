/*
  Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:

  (a+b.+abs(a-b))/2

  Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.
  Entrada

  O arquivo de entrada contém três valores inteiros.
  Saída

  Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".
*/

const input = require('fs').readFileSync('./1013/input.txt', 'utf8');
let [num1, num2, num3] = input.split(' ');

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);

const form = (num1 + num2 + Math.abs(num1 - num2))/ 2;

form > num3 ? console.log(`${form} eh o maior`) : console.log(`${num3} eh o maior`);