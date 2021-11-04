/*Desafio: procurar na lista
Crie uma função que recebe como argumento o nome de um aluno.
Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo indice.
Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.

Temos uma lista (array) de nomes e temos uma lista com as médias finais (outro array) e temos um array de duas dimensões
Vou precisar verificar na lista de alunos se existe o nome do aluno e gravar o seu índice para, depois, utilizar na outra lista.
Para isso, vou precisar de usar o método .includes()que verifica e retorna uma valor booleano e o método .indexOf() que procura o elemento dentro do array e retorna o número do índice desse elemento dentro do array.*/

const alunos = ["João", "Juliana", "Caio", "Ana"];
const mediaDosAlunos = [10, 7, 9, 6];
let listaDeAlunosENotas = [alunos, mediaDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeAlunosENotas[0].includes(nomeDoAluno)){
        let indice = listaDeAlunosENotas[0].indexOf(nomeDoAluno)
        let notaDoAluno = listaDeAlunosENotas[1][indice]
        console.log(`O aluno de nome ${nomeDoAluno}, tem ${notaDoAluno} de nota média final.`)
    }else{
        console.log(`nome do aluno ${nomeDoAluno}, não consta na lista.`)
    }
}
exibeNomeNota("Pedro")


