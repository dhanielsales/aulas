// - ​Estruturas de Controle de Fluxo:
//   ​Condicionais (if, else, else if): Idêntico ao conceito de Python, mas com uma sintaxe um pouco diferente.

//  || = OR
//  && = AND
//  !  = NOT

// Exemplo 1
           // 0123456
const nome = "Dhaniel"
if (nome[0].toLowerCase() === "d") {
  console.log("Ex1: Verdadeiro")
} else {
  console.log("Ex1: Falso")
}


// Exemplo 2
const num = 10
if (num > 2 && num < 5) {
  console.log("Ex2: Verdadeiro")
} else {
  console.log("Ex2: Falso")
}

// Exemplo 3
const idade = 10
const ehMaiorDeIdade = idade >= 18
if (ehMaiorDeIdade) {
  console.log("Ex3: ehMaiorDeIdade Verdadeiro")
} else {
  console.log("Ex3: ehMaiorDeIdade Falso")
}

if (!ehMaiorDeIdade) {
  console.log("Ex3: Verdadeiro")
}


