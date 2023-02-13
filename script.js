/*
Capturar dois números e fazer as operações matemáticas de soma, subtração, multiplicação, divisão e resto da divisão.
 
Para cada operação, mostrar um alerta com resultado

*/

let firstNumber = prompt('Qual o primeiro número?')
let secondNumber = prompt('Qual o segundo número?')

const sum = Number(firstNumber) + Number(secondNumber)
const sub = Number(firstNumber) - Number(secondNumber)
const multi = Number(firstNumber) * Number(secondNumber)
const div = Number(firstNumber) / Number(secondNumber)
const remaider = Number(firstNumber) % Number(secondNumber)

alert(`O resultado da soma é: ${sum}`)
alert(`O resultado da subtração é: ${sub}`)
alert(`O resultado da multiplicação é: ${multi}`)
alert(`O resultado da divisão é: ${div}`)
alert(`O resto da divisão é: ${remaider}`)

let evenOrOdd = sum/2

if(evenOrOdd = 0){
  alert(`A soma dos números ${firstNumber} e ${secondNumber} é ${sum}, que é um número par.`)
} else {
  alert(`A soma dos números ${firstNumber} e ${secondNumber} é ${sum}, que é um número ímpar.`)
}

if (firstNumber === secondNumber){
  alert("Os números inseridos são iguais")
} else {
  alert("Os números inseridos são diferentes")
}