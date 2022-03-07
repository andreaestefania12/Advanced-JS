// Bound function as a method

function f() {
    alert( this ); //  this=null
}
  
let user = {
    g: f.bind(null)
};
  
user.g();

// Second bind
function f() {
    alert(this.name);
}
  
f = f.bind( {name: "John"} ).bind( {name: "Ann" } );
  
f(); // Jhoon


// Function property after bind

function sayHi() {
    alert( this.name );
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "John"
  });
  
  alert( bound.test ); // undefined

// Fix a function that loses "this"
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}
  
user = {
    name: 'John',
  
    loginOk() {
      alert(`${this.name} logged in`);
    },
  
    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  
};
  
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// An alternative solution could be:

//...
askPassword(() => user.loginOk(), () => user.loginFail());


// Partial application for login

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
user = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
};
  
askPassword(() => user.login(true), () => user.login(false));