# Softex – Atividade 01

### Desenvolva um programa que utiliza o nome de um aluno, duas notas e a quantidade de faltas que ele teve. Conclua se o aluno está aprovado ou reprovado de acordo com as especificações:

- Se a média do aluno for menor que sete, o sistema deve informar o nome do aluno e que ele está reprovado;
- Se o aluno possuir mais de três faltas, o sistema deve informar o nome do aluno e que ele está reprovado;
- Se a média do aluno for maior ou igual a sete, o sistema deve informar o nome do aluno e que ele está aprovado.

No sistema, todos os valores devem estar armazenados em variáveis.

```
<script>
let input = require('prompt-sync')()

console.log('Digite o nome do aluno: ');
var nomeAluno = input();

console.log('Digite a primeira nota: ');
var notaUm = input();

console.log('Digite a segunda nota: ');
var notaDois = input();

console.log('Digite o numero de faltas: ');
var quantidadeFaltas = input();

var calcMedia = (notaUm + notaDois) / 2;
var media = calcMedia < 7 ? 'Reprovado' : 'Aprovado';
var faltas = quantidadeFaltas > 3 ? 'Reprovado' : 'Aprovado';
var status =
  (media == 'Aprovado') & (faltas == 'Aprovado') ? 'Aprovado' : 'Reprovado';

console.clear();
console.log('O aluno ' + nomeAluno + ' está ' + status);

</script>
```
