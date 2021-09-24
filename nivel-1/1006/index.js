/*
  Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.
  
  Entrada

    5.0, 6.0, 7.0
    5.0, 10.0, 10.0
    10.0, 10.0, 5.0

  O arquivo de entrada contém 3 valores com uma casa decimal, de dupla precisão (double).

  Saída

    MEDIA = 6.3
    MEDIA = 9.0
    MEDIA = 7.5

  Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 1 dígito após o ponto decimal e com um espaço em branco antes e depois da igualdade. Assim como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".
*/

const input = require('fs').readFileSync('./1006/input.txt', 'utf8');
let [A, B, C] = input.split('\n');

A = parseFloat(A);
B = parseFloat(B);
C = parseFloat(C);

const media = ((A * 2) + (B * 3) + (C * 5)) / 10

console.log(`MEDIA = ${media.toFixed(1)}`);

