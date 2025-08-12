// Crie uma variavel chamada 'pessoas' do tipo Array, 
// que guarde dois objetos com chave 'nome' e uma chave 'idade'.
// Preencha cada objeto com quaisquer nomes e idades.
// imprima na tela o valor da variavel 'pessoas', altere o valor da 
// chave 'idade' de primeira pessoa adicionando 1 e entao imprima
// novamente a variavel pessoa.

const pessoa = [
  {
    "nome": "Dhaniel",
    "idade": 30
  },
  {
    "nome":"Joao",
    "idade": 38
  }
]

console.log(pessoa)
pessoa[0]["idade"] = pessoa[0]["idade"] + 1
console.log(pessoa)


