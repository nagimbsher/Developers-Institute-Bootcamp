// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator
// Check out the example below to see the expected output
// Example:

// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

const isString = (arg) => typeof arg ==="string";

console.log('isString("hello")', isString("hello"));
 console.log("isString(123):",isString(12));