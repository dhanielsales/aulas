// - ​Funções:
//   definir funções, tanto as tradicionais quanto as arrow functions (=>),que são muito comuns em códigos mais modernos.

// nome da funcao 
//       ↓      ↓ parametros
function meuLog(mensagem) {
  console.log(`meu console: ${mensagem}`)
}

// meuLog("uma mensagem qualquer")

const meuConsole = {
  "log": meuLog
}

// meuConsole.log("uma mensagem qualquer junto com outra coisa")

// Arrow functions
const pessoas = ["Jorge", "Felipe", "Lucas"]

// for (const pessoa of pessoas) {
//   console.log(`Ola ${pessoa}, tudo bem?`)
// }

function mensagemIndividual(pessoa) {
  console.log(`Ola ${pessoa}, tudo bem?`)
}

// pessoas.forEach(mensagemIndividual)

// pessoas.forEach((valor) => {
//   console.log(`Ola ${valor}, tudo bem?`)
// })

const alunos = [
  {
    "nome": "Felipe",
    "nota": 6
  },
  {
    "nome": "Lucas",
    "nota": 8
  },
  {
    "nome": "Juliana",
    "nota": 9
  },
  {
    "nome": "Paulo",
    "nota": 3
  },
  {
    "nome": "Pedro",
    "nota": 2
  },
  {
    "nome": "Igor",
    "nota": 5.5
  },
]

// alunos.forEach((aluno, index) => {
//   console.log(index, aluno.nome)
// })


// Extra - Diferenca entre Funcoes "normais" e Arrow functions
// o objeto 'this' existe na execucao de uma funcao "classica", mas ele nao existe em arrow functions

function qualquer() {
  console.log("qualquer",this)
}

qualquer()

const quaquerArrow = () => {
  console.log("quaquerArrow",this)
}

quaquerArrow()