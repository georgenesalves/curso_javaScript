/* 
Imprima o índice e a lista com os seguintes números: 100, 200, 300, 400, 500, 600
for ([inicialização]; [condição]; [expressão final])

O objetivo da função for() é fazer uma varredura dentro da array através de um loop que é definido nos argumentos da função e se encerra o loop quando o mesmo atinge o máximo de verificações de acordo com o tamanho (.length) do array.
*/


const numerosDados = [100, 200, 300, 400, 500, 600]

for(let i=0; i< numerosDados.length; i++){
    console.log(i, numerosDados[i])
}

//Imprimir uma lista de 0 a 10
for (let i = 0; i <= 10; i++){

    console.log(i)
   }