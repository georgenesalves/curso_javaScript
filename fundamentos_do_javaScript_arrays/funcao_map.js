/* Adicionando um ponto em cada nota do aluno. Lembrando que a nota máxima é 10.
  A função map() gera uma nova array atendendo o argumento colocado.  */

const notaDoAluno = [10, 9, 8, 7, 6]

const notasAtualizadas = notaDoAluno.map(nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas)



//callbackfn: (value: number, index: number, array: number[])