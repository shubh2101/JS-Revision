//sum of array using reduce
const sum = (arr) => {
  return arr.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
};

console.log(sum([1, 2, 3, 4, 5]));

//using arrow functions
const array1 = [1, 2, 3, 4, 5];
const sums = array1.reduce((acc, curr) => acc + curr, 5);
console.log(sums);

const arr = [15, 16, 17, 18, 19];

//checking accumulator, currentValue wrt initialValue of accumulator
const output = arr.reduce((acc, curr, i) => {
  console.log(
    `accumulator: ${acc}, currentValue: ${curr}, index: ${i}, returns: ${
      acc + curr
    }`
  );
  return acc + curr;
}, 10);

console.log(output);
