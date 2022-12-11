let soma = 1
let numero = 0

while (numero != -1) {
  numero = parseInt(prompt('Digite um numero'))
  soma += numero
}

alert(`A soma total dos números digitados é: ${soma}`)
//alert(soma)

/*var soma = 0

do {
  var numero = prompt('Digite um número')

  if (numero === null) {
    break
  }

  numero = parseInt(numero)

  if (isNaN(numero) || numero === -1) {
    continue
  }

  soma += numero
} while (numero !== -1)

alert(soma)

*/
