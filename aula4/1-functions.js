// - ​Manipulação do DOM (Document Object Model) document.getElementById, document.querySelector e document.querySelectorAll.
// - ​Eventos

console.log("Inicio")

const mensagemEmail = document.querySelector("#mensagem-email")
console.log(mensagemEmail)

const button = document.querySelector("#app")
button.addEventListener("click", () => {
  mensagemEmail.classList.add("success")
  mensagemEmail.innerHTML = "Email enviado com sucesso!"
})