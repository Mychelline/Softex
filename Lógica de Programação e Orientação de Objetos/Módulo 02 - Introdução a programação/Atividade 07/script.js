var input = require('prompt-sync')()
var candidato_X = 0; var candidato_Y = 0; var candidato_Z = 0; var brancos = 0; var invalidos = 0;
var continuar = "";
function votar(entrada) {  
  switch (entrada) {
    case 889:
      return candidato_X++;
      break;
    case 847:
      return candidato_Y++;
      break;
    case 515:
      return candidato_Z++;
      break;
    case (entrada != 889) | (entrada != 847) | (entrada != 515):
      return brancos++;
      break;
    default:
      return invalidos++;
      break;
  }
}
console.log('Eleições 2022')
while (continuar != "nao") {
  console.log("Digite o número de seu candidato:\nCandidato_X => 889\nCandidato_Y => 847\nCandidato_Z => 515\n");
  var numCandidato = input();
  
  if (isNaN(numCandidato)){
    console.clear()
    console.log("Entrada " + numCandidato + " é invalida! Digite um número valido!");
  } else { 
    numCandidato = parseInt(numCandidato);
    var entrada = votar(numCandidato) 
  }
  continuar = input("Deseja continuar? (sim / nao) ")
}

console.log("Resultado das eleições: \n") 
console.log("candidato_X: " + candidato_X)
console.log("candidato_Y: " + candidato_Y)
console.log("candidato_Z: " + candidato_Z)
console.log("Brancos e nulos: " + (brancos + invalidos))

