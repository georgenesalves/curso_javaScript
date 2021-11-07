/* Calcular a média entre as seguintes notas usando o for(): 10, 6.5, 8 e 7.5
a estrutura for()é um laço de repetição ou um loop de verificação e funcina assim: for(let i=0; i<var.length; i++){bloco de dados a serem executados.}
*/
/*O javaScript lê a primeira linha e guarda a informação da const mediaNotas, em seguida lê a let soma e guarda o seu valor, em seguida entra dentro do loop e cada vez que ele passa por um elemento do array, soma o seu valor com a let soma que vai sendo acrescida de todos os valores que estão guardados no array.
Em seguida, quando terminar o loop, pego a informação que foi armazenada na let soma e faço a divisão pelo tamanho do array*/

const mediaNotas = [10, 6.5, 8, 7.5]
let soma = 0
for(let i=0;i<mediaNotas.length;i++){

    soma = soma + mediaNotas[i] // essa mesma expressão pode ser "soma += mediaNotas[i]"
  
}
console.log(soma/mediaNotas.length)
//console.log(mediaNotas.length)