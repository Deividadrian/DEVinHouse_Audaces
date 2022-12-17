const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const novoArray = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

console.log(novoArray(arr1, arr2));
