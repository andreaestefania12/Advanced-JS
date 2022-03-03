/* THE OLD VAR*/

var message = "Hi";
console.log(message); 

if (true) {
    var test = true; 
    // let test = true;
}
  
console.log(test);

function sayHi() {
    if (true) {
      var phrase = "Hello";
    }
  
    console.log(phrase); 
  }
  
  sayHi();
console.log(phrase); 


// Ways to create IIFE

(function() {
    console.log("Parentheses around the function");
  })();
  
  (function() {
    console.log("Parentheses around the whole thing");
  }());
  
  !function() {
    console.log("Bitwise NOT operator starts the expression");
  }();
  
  +function() {
    console.log("Unary plus starts the expression");
  }();