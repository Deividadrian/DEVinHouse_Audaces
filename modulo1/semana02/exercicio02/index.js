const idade = prompt('Digite a sua idade.')

function processIdade(idade) {
  if (idade === null) {
    return 'Operação cancelada'
  }

  if (isNaN(idade)) {
    return 'Não foi digitado números!'
  }

  if (!idade) {
    return 'Não foi digitado nenhum valor!'
  }

  if (idade < 0) {
    return 'Foi digitado um valor negativo!'
  }

  if (idade >= 0 && idade <= 15) {
    return 'Pessoa Jovem'
  }

  if (idade > 15 && idade <= 64) {
    return 'Pessoa Adulta'
  }

  if (idade > 64) {
    return 'Pessoa Idosa'
  }
}

alert(processIdade(idade))
location.reload()
