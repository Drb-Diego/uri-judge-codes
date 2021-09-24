/*
  Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:

  Distancia =
  Entrada
    1.0 7.0 | 5.0 9.0
    -2.5 0.4 | 12.1 7.3
    2.5 -0.4 | -12.2 7.0


  O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

  Saída
    4.4721
    16.1484
    16.4575

  Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.
*/

const input = require("fs").readFileSync("./1015/input.txt", "utf8");

let [x, y] = input.split('\n');

x = x.split(' ').map((number) => Number(number));
y = y.split(' ').map((number) => Number(number));

const form = Math.sqrt(Math.pow((x[0] - y[0]), 2) + Math.pow((x[1] - y[1]), 2));

console.log(form.toFixed(4));
