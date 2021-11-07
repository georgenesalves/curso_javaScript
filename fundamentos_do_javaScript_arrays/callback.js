
//Conversando sobre funções callback
// O desafio é somente mostrar os nomes no console.
const nomes = ['Ana', 'Ju', 'Geórgens', 'Dorinha']

/* Essa é uma forma
nomes.forEach(element => {
    console.log(element)    
});*/

/* Essa é a forma explicada. A forEach chama a função para ser executada dentro dela para cada elemento do array.
nomes.forEach(imprimeNomes)

function imprimeNomes(nomes){
    console.log(nomes)
} */
// Significa dizer que a função está dentro do forEach como segue:
nomes.forEach(function imprimeNomes(nomes, indice){ //nesse exemplo acrescentei mais um parâmetro que o forEach suporta.
    console.log(nomes, indice)
})


