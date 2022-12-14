const numeros = [1]

const procuraMinMax = num => {
  if (num === null) {
    return 'Array com valor nulo'
  }
  if (num.length === 0) {
    return 'Array vazio!'
  }
  if (num.length === 1) {
    return num[0]
  }
  return [num[0], num[num.length - 1]]
}

console.log(procuraMinMax(numeros))
