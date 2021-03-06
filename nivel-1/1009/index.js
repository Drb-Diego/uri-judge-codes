/*
  Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.
  
  Entrada
    JOAO, 500.00, 1230.30
    PEDRO, 700.00, 0.00
    MANGOJATA, 1700.00, 1230.50



  O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, representando o salário fixo do vendedor e montante total das vendas efetuadas por este vendedor, respectivamente.
  
  Saída
    TOTAL = R$ 684.54
    TOTAL = R$ 700.00
    TOTAL = R$ 1884.58

  Imprima o total que o funcionário deverá receber, conforme exemplo fornecido
*/
const input = require('fs').readFileSync('./1009/input.txt', 'utf8');
let [employee, salary, sales] = input.split('\n');

salary = Number(salary);
sales = Number(sales);

const bonus = ((sales * 15)/100) + salary;

console.log(`TOTAL = R$ ${bonus.toFixed(2)}`);