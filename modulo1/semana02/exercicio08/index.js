const numero = parseInt(prompt('Digite um valor inicial.'))
const raiz = parseInt(prompt('Digite um valor para a raiz.'))

function progressãoAritmética(numero, raiz) {
  let soma = numero
  let resultado = numero

  for (let i = 0; i < 9; i++) {
    soma += raiz
    resultado += ', ' + soma
  }

  return `A P.A é: ${resultado}`
}

alert(progressãoAritmética(numero, raiz))
