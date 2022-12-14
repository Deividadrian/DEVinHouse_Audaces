const numeroDigitado = prompt('Digite um número')
let impar = 0
let pares = 0

for (let i = 0; i <= numeroDigitado; i++) {
  if (i % 2 === 0) {
    pares += 1
  } else {
    impar += 1
  }
}

alert(`Existem ${pares} pares e ${impar} impares entre 0 e ${numeroDigitado}`)
