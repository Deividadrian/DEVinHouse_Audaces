const uneDobraRetorna = (arr1, ...numbres) => {
  let dobro = [];

  numbres.forEach((num) => {
    dobro.push(num * 2);
  });

  console.log(arr1.concat(dobro));
};

const arr1 = uneDobraRetorna([1, 2, 3], 4, 4);

//const arr1 = uneDobraRetorna([2], 10, 4, 8);

//const arr1 = uneDobraRetorna([6, 8]);
