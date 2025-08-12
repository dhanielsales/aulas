// ​Loops (for, while, for...of): Aprenda a iterar arrays e outras estruturas. O loop for...of é muito útil para percorrer arrays de forma simples.

// for classico
// for in / for of
// while

// index = index + 1 
// index += 1
// index++

const frutas = ["maca", "pera", "limao", "uva", "laranja", "acerola"]
// for (let index = 0; index < frutas.length; index++) {
//   console.log(`a minha fruta agora eh ${frutas[index]}`)
// }

const comidas = ["ovo", "bolo", "arroz", "chocolate", "feijao"]
// for (const index in comidas) {
//   console.log(`a minha comida agora eh ${comidas[index]}`)
// }

const lugares = ["rua", "casa", "praca"]
// for (const lugar of lugares) {
//   console.log(lugar)
// }

const nome = "Fernando"
// for (const letra of nome) {
//   console.log(letra)
// }


const objetos = ["lapis", "caneta", "borracha", "bolo", "kkkkkk", "agua", "torta", "chuva", "bnbb"]
let achei4PalavrasComA = false
let index = 0
let contadorDePalavrasComA = 0
while (!achei4PalavrasComA && index < objetos.length) {
  if (objetos[index].includes("a")) {
    contadorDePalavrasComA++
    console.log(`achei um 'a' dentro de ${objetos[index]}`)
  } else {
    console.log(`Nao achei nenhum 'a' em ${objetos[index]}`)
  }

  if (contadorDePalavrasComA >= 2) {
    achei4PalavrasComA = true
  }
  
  index++
}

console.log("Achei 4 palavras com 'a'", achei4PalavrasComA)