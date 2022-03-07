/**  Global object */

alert("Hello");
// is the same as
window.alert("Hello");

var gVar = 5;

alert(window.gVar); // 5 (became a property of the global object)

let gLet = 5;

alert(window.gLet); // undefined (doesn't become a property of the global object)

// make current user information global, to let all scripts access it
window.currentUser = {
    name: "John"
};
  
alert(currentUser.name);  
// or, if we have a local variable with the name "currentUser"
// get it from window explicitly (safe!)
alert(window.currentUser.name); // John