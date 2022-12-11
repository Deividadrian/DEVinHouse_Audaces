const operador = prompt(
  'Digite com qual operação deseja realizar (+) (-) (*) (/)'
)
const numero1 = parseFloat(prompt('Digite o primeiro número'))
const numero2 = parseFloat(prompt('Digite o segundo número'))

if (operador === '+') {
  alert(`O resultado do seu cálculo é: ${numero1 + numero2}`)
} else if (operador === '-') {
  alert(`O resultado do seu cálculo é: ${numero1 - numero2}`)
} else if (operador === '*') {
  alert(`O resultado do seu cálculo é: ${numero1 * numero2}`)
} else if (operador === '/') {
  alert(`O resultado do seu cálculo é: ${numero1 / numero2}`)
} else if (!operador || !numero1 || !numero2) {
  alert(`Algum campo não foi digitado!`)
}
