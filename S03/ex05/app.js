const sumNumbres = (...numbres) => {
  let sum = numbres.reduce((sum, numbres) => {
    return sum + numbres;
  });

  return sum;
};

console.log(sumNumbres(1, 2, 3, 4, 10));

/*
console.log('e05-s03-m1');

// Resolução:

// function somaTudo(...numeros) {
const somaTudo = (...numeros) => {
  let total = 0;

  numeros.forEach((num) => {
    total += num;
    console.log(num);
  });

  return total;
};

const resultado = somaTudo(1, 2, 3, 4, 7);

console.log(resultado);
*/
