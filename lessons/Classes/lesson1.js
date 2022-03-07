/**Class basic syntax */

// The “class” syntax
// The basic syntax is:

// class MyClass {
//   // class methods
//   constructor() { ... }
//   method1() { ... }
//   method2() { ... }
//   method3() { ... }
//   ...
// }

class User {
    constructor(name) {
      this.name = name;
    }  
    sayHi() {
      console.log(this.name);
    }  
}
let user = new User("John");
user.sayHi();

// What is a class?

// In JavaScript, a class is a kind of function.

// Here, take a look:

// class is a function
console.log(typeof User); // function

// ...or, more precisely, the constructor method
console.log(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
console.log(User.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi



// Not just a syntactic sugar

// rewriting class User in pure functions

// 1. Create constructor function
function User2(name) {
    this.name = name;
  }
  // a function prototype has "constructor" property by default,
  // so we don't need to create it
  
  // 2. Add the method to prototype
  User2.prototype.sayHi = function() {
    console.log(this.name);
  };
  
  // Usage:
 user = new User2("John");
user.sayHi();


//Class Expression
let User = class {
    sayHi() {
      alert("Hello");
    }
};

// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
let User = class MyClass {
    sayHi() {
      alert(MyClass); // MyClass name is visible only inside the class
    }
  };
  
  new User().sayHi(); // works, shows MyClass definition
  
  alert(MyClass); // error, MyClass name isn't visible outside of the class


function makeClass(phrase) {
    // declare a class and return it
    return class {
      sayHi() {
        alert(phrase);
      }
    };
}
  
  // Create a new class
  let User = makeClass("Hello");
  
  new User().sayHi(); // Hello


// Getters/setters
class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
 user = new User("John");
  alert(user.name); // John
  
  user = new User(""); // Name is too short.


//   Computed names […]

class User {

    ['say' + 'Hi']() {
      alert("Hello");
    }
  
  }
  
  new User().sayHi();

// Class fields

class User {
    name = "John";
  }
  
 user = new User();
  alert(user.name); // John
  alert(User.prototype.name); // undefined

// Basic syntax 

// class MyClass {
//     prop = value; // property
  
//     constructor(...) { // constructor
//       // ...
//     }
  
//     method(...) {} // method
  
//     get something(...) {} // getter method
//     set something(...) {} // setter method
  
//     [Symbol.iterator]() {} // method with computed name (symbol here)
//     // ...
//   }