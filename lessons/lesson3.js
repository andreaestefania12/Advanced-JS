/* Variable scope, closure */

// Code blocks

{    // do some job with local variables that should not be seen outside
  
    let message = "Hello"; // only visible in this block
  
    console.log(message); // Hello
}
  
// console.log(message); // Error: message is not defined

{
    // show message
    let message = "Hello";
    console.log(message);
}
{
    // show another message
    let message = "Goodbye";
    console.log(message);
}

// show another message
// let message = "Goodbye"; // Error: variable already declared
// console.log(message);

// if for while

if (true) {
    let phrase = "Hello!";
  
    console.log(phrase); // Hello!
}
//   console.log(phrase); // Error, no such variable!

for (let i = 0; i < 3; i++) {
    // the variable i is only visible inside this for
    console.log(i); // 0, then 1, then 2
}
  
// console.log(i); // Error, no such variable

// NESTED FUNCTIONS

// A function is called nested when it is created inside another function

function sayHiBye(firstName, lastName) {

    // helper nested function to use below
    function getFullName() {
      return firstName + " " + lastName;
    }
  
    console.log( "Hello, " + getFullName() );
    console.log( "Bye, " + getFullName() );
}
sayHiBye('Andrea','Timaran');


function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
}
  
let counter = makeCounter();  
console.log( counter() ); // 0
console.log( counter() ); // 1
console.log( counter() ); // 2

// LEXICAL ENVIRONMENT

let phrase = 'Hello';
function say(name){
    console.log(`${phrase},${name}`);
}
say('Jhon');


function f() {
    let value = Math.random();
  
    function g() {
     // debugger; // in console: type alert(value); No such variable!
    }
  
    return g;
}
  
let g = f();
g();