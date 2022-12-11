const numeroDigitado = prompt('Digite um número')

function tabuada(numero) {
  if (isNaN(numero)) {
    return 'Não foi digitado números!'
  }
  if (numero === null) {
    return 'Operação cancelada'
  }
  if (!numero) {
    return 'Não foi digitado nenhum valor!'
  }

  let resultado = ''
  for (let i = 0; i <= 20; i++) {
    resultado += `${numero}x${i} = ${numero * i} \n`
  }
  return resultado
}

alert(tabuada(numeroDigitado))
location.reload()
