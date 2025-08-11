// - ​Tipos de Dados: strings, numbers, booleans, arrays (listas)
//   e objects (objetos, que se parecem com dicionários em Python).

// number - Abstracao de ints e floats
// string - Cadeira de caracteres
// boolean - Verdadeiro ou Falso
// Null - Sem valor definido
// Undefined - Valor indefinido
// Symbols - Indentificadores unicos
// BigInt - Inteiros 64bits

let num = null
console.log(num)

num = 10
console.log(num)

let num2
console.log(num2)

num2 = 12
console.log(num2)


// Tipos complexos
// Objects - Agrupamento de dados de qualquer tipo, em formato de chave/valor
// Arrays - Lista iteravel de dados de qualquer tipo.

let pessoa = {
  "nome": "Nathalie",
  "idade": 25,
}

console.log(pessoa["nome"], pessoa["idade"])
let lista = ["Nathalie", "Mateus", "Dhaniel"]

// index => Valor
console.log(lista[2])
