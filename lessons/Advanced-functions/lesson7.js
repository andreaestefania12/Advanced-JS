/** The "new Function" syntax */

// Syntax
//let func = new Function ([arg1, arg2, ...argN], functionBody);

let sum = new Function('a', 'b', 'return a + b');

console.log( sum(1, 2) ); // 3

let sayHi = new Function('console.log("Hello")');

sayHi(); // Hello

let str = 'console.log("example2")';

let func = new Function(str);
func();

// Closure

// function getFunc() {
//     let value = "test";
  
//     let func = new Function('alert(value)');
  
//     return func;
//   }
  
// getFunc()(); // error: value is not defined

function getFunc() {
    let value = "test";
  
    let func = function() { console.log(value); };
  
    return func;
  }
  
getFunc()(); // "test", from the Lexical Environment of getFunc

// These three declarations mean the same:

new Function('a', 'b', 'return a + b'); // basic syntax
new Function('a,b', 'return a + b'); // comma-separated
new Function('a , b', 'return a + b'); // comma-separated with spaces