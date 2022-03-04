/* Function object, NFE */

// The name property

/*function sayHi() {
    console.log("Hi");
}
  
console.log(sayHi.name);*/

let sayHi = function() {
    console.log("Hi");
};
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