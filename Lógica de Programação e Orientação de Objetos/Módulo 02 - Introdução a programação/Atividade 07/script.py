import enum
import os
candidato_X = 0 
candidato_Y = 0  
candidato_Z = 0 
brancos = 0 
invalidos = 0
continuar = ""

def votar(entrada): 
  if entrada == 889:
    return candidato_X = candidato_X +1

  elif (entrada == 847):
    return candidato_Y == candidato_Y +1

  elif (entrada == 515):
    return candidato_Z== candidato_Z +1 

  elif (entrada != 889) | (entrada != 847) | (entrada != 515):
    return brancos == brancos +1
  else:
    return invalidos == invalidos +1
     
print('Eleições 2022')
while (continuar != "nao"):
  print("Digite o número de seu candidato:\nCandidato_X => 889\nCandidato_Y => 847\nCandidato_Z => 515\n")
  numCandidato = input()
  
  if (numCandidato == ""):
    os.system('clear')
    print("Entrada " + numCandidato + " é invalida! Digite um número valido!")
  else:
    numCandidato = int(numCandidato)
    entrada = votar(numCandidato)   

  continuar = input("Deseja continuar? (sim / nao) ")

print("Resultado das eleições: \n") 
print("candidato_X: " + candidato_X)
print("candidato_Y: " + candidato_Y)
print("candidato_Z: " + candidato_Z)
print("Brancos e nulos: " + (brancos + invalidos))

