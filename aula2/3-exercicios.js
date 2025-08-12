// Crie uma variavel 'nome' e ponha um nome aleatoria.
// Utilizando um for e um condicional if,
// conte quantas letras 'a' na variavel 'nome' possui
//            01234567
const nome = "Ariadna"
let contador = 0

for (const letra of nome) {
  if (letra.toLowerCase() === 'a') {
    contador = contador + 1
  }
}

console.log(`a palavra ${nome} tem ${contador} letras 'a'`)
