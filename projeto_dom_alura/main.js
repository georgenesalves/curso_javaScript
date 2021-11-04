import BotaoConclui from './componentes/concluiTarefa.js'
import BotaoDeleta from './componentes/deletaTarefa.js'

const criarTarefa = (evento) => {
    
    evento.preventDefault() 
    
   const lista = document.querySelector('[data-list]')   /*informação da ('ul')*/
   const inputDeTexto = document.querySelector('[data-form-input]')
   const valor = inputDeTexto.value

   const tarefa = document.createElement('li')
   tarefa.classList.add('task')
   const conteudo = `<p class="content">${valor}</p>`
   tarefa.innerHTML = conteudo
   lista.appendChild(tarefa) /*Na Tag ('ul') eu criei um filho ('li')*/
   tarefa.appendChild(BotaoConclui()) /*Na tag ('li') eu criei um filho ('button'), ou seja, no momento que se cria uma li, também se cria um botão*/
   tarefa.appendChild(BotaoDeleta())     
   inputDeTexto.value = " "
}

const botao = document.querySelector('[data-form-button]')
botao.addEventListener('click', criarTarefa )


