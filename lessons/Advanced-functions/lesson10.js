// /**  Function binding */

// // Losing “this”

// // let user = {
// //     firstName: "John",
// //     sayHi() {
// //       console.log(`Hello, ${this.firstName}!`);
// //     }
// //   };
  
// // setTimeout(user.sayHi, 1000); // Hello, undefined!

// // Solution 1: a wrapper

//   setTimeout(function() {
//     user.sayHi(); // Hello, John!
//   }, 1000);

// //   The same, but shorter:

// setTimeout(() => user.sayHi(), 1000); // Hello, John!

// setTimeout(() => user.sayHi(), 1000);

// // ...the value of user changes within 1 second
// user = {
//   sayHi() { console.log("Another user in setTimeout!"); }
// };

// // Another user in setTimeout!

// // Solution 2: bind
// // more complex syntax will come a little later 
// // let boundFunc = func.bind(context);


// user = {
//     firstName: "John"
//   };
  
//   function func() {
//     console.log(this.firstName);
//   }
  
// //   let funcUser = func.bind(user);
// //   funcUser(); // John

//   function func2(phrase) {
//     console.log(phrase + ', ' + this.firstName);
//   }
  
//   // bind this to user
//   let funcUser2 = func2.bind(user);
  
//   funcUser2("Hello"); // Hello, John (argument "Hello" is passed, and this=user)


//   user = {
//     firstName: "John",
//     sayHi() {
//       console.log(`Hello, ${this.firstName}!`);
//     }
//   };
  
//   let sayHi = user.sayHi.bind(user); // (*)
  
//   // can run it without an object
//   sayHi(); // Hello, John!
  
//   setTimeout(sayHi, 1000); // Hello, John!
  
//   // even if the value of user changes within 1 second
//   // sayHi uses the pre-bound value which is reference to the old user object
//   user = {
//     sayHi() { console.log("Another user in setTimeout!"); }
//   };


//   user = {
//     firstName: "John",
//     say(phrase) {
//       console.log(`${phrase}, ${this.firstName}!`);
//     }
//   };
  
//   let say = user.say.bind(user);
  
//   say("Hello"); // Hello, John! ("Hello" argument is passed to say)
//   say("Bye"); // Bye, John! ("Bye" is passed to say)


// //   Convenience method: bindAll
// //   If an object has many methods and we plan to actively pass it around, then we could bind them all in a loop:
  
// //   for (let key in user) {
// //     if (typeof user[key] == 'function') {
// //       user[key] = user[key].bind(user);
// //     }
// //   }


// Partial functions
// syntax
// let bound = func.bind(context, [arg1], [arg2], ...);

function mul(a, b) {
    return a * b;
  }
  let double = mul.bind(null, 2);

  console.log( double(3) ); // = mul(2, 3) = 6
  console.log( double(4) ); // = mul(2, 4) = 8
  console.log( double(5) ); // = mul(2, 5) = 10

  let triple = mul.bind(null, 3);

  console.log( triple(3) ); // = mul(3, 3) = 9
  console.log( triple(4) ); // = mul(3, 4) = 12
  console.log( triple(5) ); // = mul(3, 5) = 15

// Going partial without context

function partial(func, ...argsBound) {
    return function(...args) { // (*)
      return func.call(this, ...argsBound, ...args);
    }
  }

// Usage:
let user = {
    firstName: "John",
    say(time, phrase) {
      alert(`[${time}] ${this.firstName}: ${phrase}!`);
    }
  };
  
  // add a partial method with fixed time
  user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());
  
  user.sayNow("Hello");
  // Something like:
  // [10:00] John: Hello!