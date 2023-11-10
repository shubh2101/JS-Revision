const arr = [1, 2, 3, 4];

const square = arr.map((num) => num * num);
console.log(square);

// 2. Extracting values from objects in an array
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 22 },
];

const userNames = users.map(function (user) {
  return user.name;
});

console.log(userNames);
// Output: ['Alice', 'Bob', 'Charlie']
