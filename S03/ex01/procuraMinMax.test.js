const minMax = require('./app');

const genericTest = (arr, obj) => {
  expect(minMax(arr)).toStrictEqual(obj);
};

test('testes', () => {
  genericTest([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47], { min: -15, max: 78 });
  genericTest([], null);
  genericTest([1], { min: 1, max: 1 });
  genericTest([1, -1], { min: -1, max: 1 });
  genericTest(null, null);
  genericTest([-2, -2, -2, -2], { min: -2, max: -2 });
  genericTest([20, 10, 30], { min: 10, max: 30 });
});
