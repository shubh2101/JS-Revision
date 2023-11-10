const arr = [4, 7, 2, 3, 9, 1, 0];

const filtered = arr.filter((el) => el > 4);
const oddFilter = arr.filter((el) => el % 2);

console.log(oddFilter);
console.log(filtered); // [6,9]
console.log(arr); //[4, 7, 2, 3, 9, 1, 0]

// 2 example
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
