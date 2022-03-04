/* Function object, NFE */

// The name property

/*function sayHi() {
    console.log("Hi");
}
  
console.log(sayHi.name);*/
/*
let sayHi = function() {
    console.log("Hi");
};*/
console.log(sayHi.name);

function f(sayHi = function() {}) {
    console.log(sayHi.name); 
}
  
f();

let user = {
    sayHi() {
      // ...
    },
  
    sayBye: function() {
      // ...
    }
}

console.log(user.sayHi.name); 
console.log(user.sayBye.name);

// function created inside array
let arr = [function() {}];

console.log( arr[0].name ); // <empty string>
// the engine has no way to set up the right name, so there is none


// The length property

function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

console.log(f1.length);
console.log(f2.length);
console.log(many.length); 


function ask(question, ...handlers) {
    let isYes = confirm(question);
    for(let handler of handlers) {
      if (handler.length == 0) {
        if (isYes) handler();
      } else {
        handler(isYes);
      }
    }
}
  
  // for positive answer, both handlers are called
  // for negative answer, only the second one
// ask("Question?", () => alert('You said yes'), result => alert(result));

// Custom properties

function sayHi() {
    console.log("Hi");
  
    // let's count how many times we run
    sayHi.counter++;
}
sayHi.counter = 0; // initial value
  
sayHi(); // Hi
sayHi(); // Hi
  
console.log( `Called ${sayHi.counter} times` ); // Called 2 times


function makeCounter() {
    // instead of:
    // let count = 0
  
    function counter() {
      return counter.count++;
    };
  
    counter.count = 0;
    return counter;
}
  
let counter = makeCounter();
console.log( counter() ); 
console.log( counter() ); 

counter.count = 10;
console.log( counter() );







