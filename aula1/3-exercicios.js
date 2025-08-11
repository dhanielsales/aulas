// Crie uma variavel chamada 'nome' que guarde seu proprio nome,
// imprima na tela o valor da variavel 'nome', altere o valor da 
// variavel 'nome' e entao imprima novamente.
let nome = "Dhaniel"
console.log(nome)

nome = "Fulano"
console.log(nome)

// Crie uma variavel chamada 'idade' que guarde um valor qualquer,
// imprima na tela o valor da variavel 'idade', altere o valor da 
// variavel 'idade' adicionando 10 e entao imprima novamente.
let idade = 30
console.log(idade)

idade = idade + 10
console.log(idade)


// Crie uma variavel chamada 'pessoa' do tipo objeto, 
// que guarde uma chave 'nome' com seu nome, e uma chave 'idade' com sua idade
// imprima na tela o valor da variavel 'pessoa', altere o valor da 
// chave 'idade' adicionando 1 e entao imprima novamente a variavel pessoa.

let pessoa = {
  'nome': 'Dhaniel',
  'idade': 30
}
console.log(pessoa)

pessoa["idade"] = pessoa["idade"] + 1
console.log(pessoa)
