
// Atribuicao por valor
// number
// string
// boolean
// ...

{
  let num = 10
  let num2 = num

  num = num + 2

  console.log("num", num)
  console.log("num2", num2)
  console.log("num + num2", num + num2) // 22
}



// Atribuicao por referencia
// Objects
// Arrays

{
  let num = { "n": 10 }
  let num2 = num

  num["n"] = num["n"] + 2

  console.log("num", num)
  console.log("num2", num2)
  console.log("num + num2", num["n"] + num2["n"]) // 24
}