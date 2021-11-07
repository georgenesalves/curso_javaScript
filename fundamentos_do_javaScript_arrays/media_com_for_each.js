/*Desafio é calcular a média entre as seguintes notas usando o forEach(). Notas: 10, 6.5, 8 e 7.5 
O método forEach executa uma dada função para cada elemento de um array.
O callback é invocado com 3 argumentos: 1 - o valor do elemento; 2 - o indice do elemento; 3 - o array que está sendo percorrido.
O primeiro parametro do forEach pode ser uma função de callback podendo ser uma arrow function ou uma função normal substituindo o valor do elemento.
Usando uma arrow function, fica assim==> mediaNota.forEach((parametros)=> {bloco de dados})
usando uma função normal, fica assim ==> mediaNota.forEach(function(parametro){bloco de dados})
*/
/*
const mediaNotas = [10, 6.5, 8, 7.5]
let soma = 0

mediaNotas.forEach((valorDoElemento, indiceDoElemento, ArrayQueEstaSendoPercorrido ) => {
  soma += valorDoElemento
  //console.log(`O número ${valorDoElemento} está na posição ${indiceDoElemento} dentro de uma lista de ${ArrayQueEstaSendoPercorrido.length} elementos`)
  
});

let media = soma/mediaNotas.length
console.log(media) */

/*Outra forma de escrever, porém sabendo que, para somar os valores de um array, deve-se sempre ter a primeira variável com o valor zero fora do laço de repetição e a chamada do resultado após a execução do loop. */

const mediaNotas = [10, 6.5, 8, 7.5]
let soma = 0
mediaNotas.forEach(valor => {
    soma += valor  
});

console.log(soma/mediaNotas.length)




