let word = 'hello';

console.log(word.split(''));
console.log(word);
// Output: ['h', 'e', 'l', 'l', 'o']

console.log([...word]);
// Output: ['h', 'e', 'l', 'l', 'o']

console.log(Array.from(word));
// Output: ['h', 'e', 'l', 'l', 'o']
