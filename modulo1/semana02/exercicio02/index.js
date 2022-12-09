const idade = parseInt(prompt('Digite a sua idade.'))

if (idade <= 15) {
  alert('Pessoa Jovem')
} else if (idade > 15 && idade <= 64) {
  alert('Pessoa Adulta')
} else if (idade > 64) {
  alert('Pessoa Idosa')
} else {
  alert('Você não digitou o número!')
}
