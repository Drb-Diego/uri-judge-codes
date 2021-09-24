/*
  Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros).
  
  Entrada
    500, 35.0
    2254, 124.4
    4554, 464.6

  O arquivo de entrada contém dois valores: um valor inteiro X representando a distância total percorrida (em Km), e um valor real Y representando o total de combustível gasto, com um dígito após o ponto decimal.
  
  Saída
    14.286 km/l
    18.119 km/l
    9.802 km/l

  Apresente o valor que representa o consumo médio do automóvel com 3 casas após a vírgula, seguido da mensagem "km/l".
*/

const input = require('fs').readFileSync('./1014/input.txt', 'utf8');
let [km, gasoline] = input.split('\n');

km = Number(km);
gasoline = Number(gasoline);

console.log(`${(km / gasoline).toFixed(3)} km/l`);