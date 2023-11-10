// 1 sum of array using reduce
const sum = (arr) => {
  return arr.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
};

console.log(sum([1, 2, 3, 4, 5]));

// 2 using arrow functions
const array1 = [1, 2, 3, 4, 5];
const sums = array1.reduce((acc, curr) => acc + curr, 5);
console.log(sums);

const arr = [15, 16, 17, 18, 19];

// 3 checking accumulator, currentValue wrt initialValue of accumulator
const output = arr.reduce((acc, curr, i) => {
  console.log(
    `accumulator: ${acc}, currentValue: ${curr}, index: ${i}, returns: ${
      acc + curr
    }`
  );
  return acc + curr;
}, 10);

console.log(output);

// 4 Maximum of array using reduce

const array2 = [2, 8, 4, 12, 7, 11];
const max = array2.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

// console.log(max);

// 5 covert array into string
const arrToString = array2.reduce((acc, curr) => (acc += curr), '');
console.log(arrToString);
