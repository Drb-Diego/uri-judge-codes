/*
  Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.
  
  Entrada
    peça 1: 12 1 5.30
    peça 2: 16 2 5.10

    peça 1: 13 2 15.30
    peça 2: 161 4 5.20

    peça 1: 1 1 15.10
    peça 2: 2 1 15.10

  O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.
  
  Saída
    VALOR A PAGAR: R$ 15.50
    VALOR A PAGAR: R$ 51.40
    VALOR A PAGAR: R$ 30.20

  A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.
*/

const input = require('fs').readFileSync('./1010/input.txt', 'utf8');
let [pivot1, pivot2] = input.split('\n');

pivot1 = pivot1.split(' ', 3).map((number) => Number(number));
pivot2 = pivot2.split(' ', 3).map((number) => Number(number));

let price = (pivot1[1] * pivot1[2]) + (pivot2[1] * pivot2[2]);

console.log(`VALOR A PAGAR: R$ ${price.toFixed(2)}`);

