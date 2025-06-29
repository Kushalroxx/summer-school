console.log(a); // undefined (because var is hoisted but not its value)
var a = 10;

console.log(b); //ReferenceError: Cannot access 'b' before initialization
let b = 20;

//Explanation:
// 'var' declarations are hoisted (lifted to the top) and initialized with undefined.
// 'let' and 'const' are hoisted but NOT initialized, so accessing them before declaration throws an error.
