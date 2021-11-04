// índice     0   1   2   3
const nums = [50, 43, 12, 98];
//console.log(nums.length) //4
//console.log(nums[1])
var encontrar = nums.indexOf(12);
//console.log(encontrar)

/*jantarDeHoje = ['🍔', '🌭', '🍕']

jantarDeHoje.pop()
jantarDeHoje.pop()

jantarDeHoje.push('🍳')
jantarDeHoje.push('🥗')
jantarDeHoje.push('🍏')

console.log(jantarDeHoje)*/
nums.push(6) //inserindo elementos no array (na última posição da lista)
//console.log(nums)
nums.pop() //deletando o último elemento do array
//console.log(nums)

// dividindo os elementos do array usando o método .slice() "fatiar em inglês"
const nomesFrutas = ["mamão", "manga", "laranja", "abacaxi", "goiaba", "kiwi", "banana", "uva", "abacate" ];
const metade1 = nomesFrutas.slice(0, nomesFrutas.length/2);
const metade2 = nomesFrutas.slice(nomesFrutas.length/2);
//console.log(metade1);
//console.log(metade2);

const removido = nomesFrutas.splice(3,1)
//console.log(removido)
//console.log(nomesFrutas)

const removAdiciona = nomesFrutas.splice(3,0,"abacaxi");
//console.log(removAdiciona);
//console.log(nomesFrutas)
const frutasAcrescentadas = nomesFrutas.concat("limão", "jaboticaba")
//console.log(frutasAcrescentadas)
const frutasComNumeros = frutasAcrescentadas.concat(nums)
//console.log(frutasComNumeros)

/*animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)*/


let nomes = ["Ana", "Juliana", "Leonardo"]
let idades = [30, 35, 28]
let faculdade = [false, true, true]

funcionarios = [nomes,idades,faculdade]

//console.log(`A funcionária ${funcionarios[0][0]} tem a idade de ${funcionarios[1][0]} e sua faculdade é ${funcionarios[2][0]}`)

const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

//console.log(arrayConcat)
//console.log(arrayOriginal)

const arrayOriginal = [50, 60, 70];
const arrayConcat = arrayOriginal.concat([80, [90, 100]]);

//console.log(arrayOriginal)
//console.log(arrayConcat)
return  arrayConcat






