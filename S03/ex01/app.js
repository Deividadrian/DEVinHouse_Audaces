const arrList = null;

const minMax = (arr) => {
  let min = +Infinity;
  let max = -Infinity;

  if (arr === null || arr.length === 0) {
    return null;
  }

  arr.forEach((item) => {
    if (item < min) {
      min = item;
    }
    if (item > max) {
      max = item;
    }
  });
  return { min, max };
};

const procuraMinMax = (arr) => {
  const value = minMax(arr);
  if (value === null) {
    return console.log('Não é possível encontrar');
  }
  return console.log(`O menor valor é: ${value.min} e o maior valor é: ${value.max}`);
};

module.exports = minMax;
