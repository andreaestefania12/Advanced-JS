/** Scheduling: setTimeout and setInterval */

// setTimeout

// syntax 
// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
// Parameters:

// func|code
// Function or a string of code to execute. Usually, that’s a function. 
// For historical reasons, a string of code can be passed, but that’s not recommended.
// delay
// The delay before run, in milliseconds (1000 ms = 1 second), by default 0.
// arg1, arg2…
// Arguments for the function (not supported in IE9-)

function sayHi() {
    console.log('Hello');
  }
  
setTimeout(sayHi, 1000);

function sayHi2(phrase, who) {
    console.log( phrase + ', ' + who );
  }
  
setTimeout(sayHi2, 1000, "Hello", "John"); // Hello, John


setTimeout("console.log('Hello3')", 1000);
setTimeout(() => console.log('Hello4'), 1000);

// Canceling with clearTimeout
// syntax
// let timerId = setTimeout(...);
// clearTimeout(timerId);

// let timerId = setTimeout(() => alert("never happens"), 1000);
// alert(timerId); // timer identifier

// clearTimeout(timerId);
// alert(timerId); // same identifier (doesn't become null after canceling)


// setInterval

// syntax
// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
// // repeat with the interval of 2 seconds
// let timerId = setInterval(() => alert('tick'), 2000);

// // after 5 seconds stop
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

// Nested setTimeout

/** instead of:
let timerId = setInterval(() => alert('tick'), 2000);
*/

// let timerId = setTimeout(function tick() {
//     alert('tick');
//     timerId = setTimeout(tick, 2000); // (*)
//   }, 2000)

// let delay = 5000;

// let timerId = setTimeout(function request() {
//   ...send request...

//   if (request failed due to server overload) {
//     // increase the interval to the next run
//     delay *= 2;
//   }

//   timerId = setTimeout(request, delay);

// }, delay);

let i = 1;
setTimeout(function run() {
  func(i++);
  setTimeout(run, 100);
}, 100);