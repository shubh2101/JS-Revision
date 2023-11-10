//1 ARRAY LITERAL
let fruits = ['apple', 'bananan', 'gauva', 'mango'];

//2 ARRAY CONSTRUCTOR
let numbers = new Array(1, 2, 3, 4, 5);

//3 EMPTY ARRAY THEN PUSH
let emptyArray = [];
emptyArray.push('element1');
emptyArray.push('element2');

//4 ARRAY.from()
let arrayFromIterable = Array.from('hello');
// Result: ['h', 'e', 'l', 'l', 'o']

//5 SPREAD OPERATOR
let newArray = [...oldArray];

//6 FILLING AN ARRAY
let filledArray = new Array(3).fill('default');
// Result: ['default', 'default', 'default']

// 7 ARRAY.of()
console.log(Array.of('foo', 2, 'bar', true));
// Expected output: Array ["foo", 2, "bar", true]
console.log(Array.of());
// Expected output: Array []

//NOTE : array.from() convert iterables to new array
//where as array.of() creates new array based on args regardless of their type
