var quantidade = 0

for (var i = 2; i <= 1000; i++) {
  var primo = true

  for (var j = 2; j < i; j++) {
    console.log(j)
    if (i % j === 0) {
      primo = false
      break
    }
  }

  if (primo) {
    quantidade += 1
    console.log(i)
  }
}

console.log('Quantidade:', quantidade)
