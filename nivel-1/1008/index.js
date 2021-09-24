/*
  Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas decimais.
  
  Entrada
    25, 100, 5.50
    1, 200, 20.50
    6, 145, 15.55   

  O arquivo de entrada contém 2 números inteiros e 1 número com duas casas decimais, representando o número, quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada, respectivamente.
  
  Saída
    NUMBER = 25, SALARY = U$ 550.00
    NUMBER = 1, SALARY = U$ 4100.00
    NUMBER = 6, SALARY = U$ 2254.75

  Imprima o número e o salário do funcionário, conforme exemplo fornecido, com um espaço em branco antes e depois da igualdade. No caso do salário, também deve haver um espaço em branco após o $.
*/

const input = require('fs').readFileSync('./1008/input.txt', 'utf8');
let [employee, hours, workedHours] = input.split('\n');

employee = Number(employee);
hours = Number(hours);
workedHours = Number(workedHours);

const salary = hours * workedHours;


console.log(`NUMBER = ${employee}\nSALARY = U$ ${salary.toFixed(2)}`);
