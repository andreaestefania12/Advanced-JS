// Class checking: "instanceof"

// The instanceof operator
// syntax 
// obj instanceof Class it returns true if obj belongs to the Class or a class inheriting from it.

class Rabbit {}
let rabbit = new Rabbit();

// is it an object of Rabbit class?
alert( rabbit instanceof Rabbit ); // true

// instead of class
function Rabbit() {}

alert( new Rabbit() instanceof Rabbit ); // true
let arr = [1, 2, 3];
alert( arr instanceof Array ); // true
alert( arr instanceof Object ); // true


// setup instanceOf check that assumes that
// anything with canEat property is an animal
class Animal {
    static [Symbol.hasInstance](obj) {
      if (obj.canEat) return true;
    }
  }
  
  let obj = { canEat: true };
  
  alert(obj instanceof Animal); // true: Animal[Symbol.hasInstance](obj) is called


/* IMPORTANT 

  obj.__proto__ === Class.prototype?
obj.__proto__.__proto__ === Class.prototype?
obj.__proto__.__proto__.__proto__ === Class.prototype?
...
// if any answer is true, return true
// otherwise, if we reached the end of the chain, return false

*/


class Animal {}
class Rabbit extends Animal {}

 rabbit = new Rabbit();
alert(rabbit instanceof Animal); // true

// rabbit.__proto__ === Animal.prototype (no match)
// rabbit.__proto__.__proto__ === Animal.prototype (match!)



function Rabbit() {}
 rabbit = new Rabbit();

// changed the prototype
Rabbit.prototype = {};

// ...not a rabbit any more!
alert( rabbit instanceof Rabbit ); // false






// Bonus: Object.prototype.toString for the type
 obj = {};

alert(obj); // [object Object]
alert(obj.toString()); // the same



/*
For a number, it will be [object Number]
For a boolean, it will be [object Boolean]
For null: [object Null]
For undefined: [object Undefined]
For arrays: [object Array]*/


// copy toString method into a variable for convenience
let objectToString = Object.prototype.toString;

// what type is this?

arr = [];

alert( objectToString.call(arr) ); // [object Array]



// Symbol.toStringTag

let user = {
    [Symbol.toStringTag]: "User"
  };
  
  alert( {}.toString.call(user) ); // [object User]

// toStringTag for the environment-specific object and class:
alert( window[Symbol.toStringTag]); // Window
alert( XMLHttpRequest.prototype[Symbol.toStringTag] ); // XMLHttpRequest

alert( {}.toString.call(window) ); // [object Window]
alert( {}.toString.call(new XMLHttpRequest()) ); // [object XMLHttpRequest]

// Symbol.toStringTag (if exists), wrapped into [object ...].

/*
typeof	primitives	string
{}.toString	primitives, built-in objects, objects with Symbol.toStringTag	string
instanceof	objects	true/false */