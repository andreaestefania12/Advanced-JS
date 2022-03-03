// 1. Does a function pickup latest changes?

let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}
name = "Pete";

sayHi();
// Yes, it does, so it returns 'Hi Pete'

// -------------

// 2. Which variables are available?

function makeWorker() {
    let name = "Pete";
  
    return function() {
      console.log(name);
    };
}
name = "John";
let work = makeWorker();
work(); 

// It shows Pete 

// --------------

// 3. Are counters independent?
function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
}
  
let counter = makeCounter();
let counter2 = makeCounter();
  
console.log( counter() ); 
console.log( counter() ); 
  
console.log( counter2() ); 
console.log( counter2() ); 

// They are independent from each other, so counter2 has 0 and 1

// --------------

// 4. Counter object
function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
}
  
counter = new Counter();
  
console.log( counter.up() ); 
console.log( counter.up() ); 
console.log( counter.down() ); 

// Yes, it works, first it shows 1, then 2 and then 1 again


// --------------

// 5. Function in if
let phrase = "Hello";

if (true == false) {
  let user = "John";

  function name1() {
    console.log(`${phrase}, ${user}`);
  }
}

// name1();
// The result will be an error because de function is nested

// --------------

// 6. Sum with closures

function sum(a){
    return function(b){
        return a+b;
    }
}
console.log(sum(1)(2));

// --------------

// 7. Is variable visible?
let x = 1;

function func() {
  //console.log(x); 
  let x = 2;
}

func();

// The result of this code will be an error, It can’t be used before let

// --------------

// 8. Filter through function

function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
  }
  
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log( arr.filter(inBetween(3, 6)) );

function inArray(arr){
    return function(x) {
        return arr.includes(x);
    };
}
console.log( arr.filter(inArray([1, 2, 10])) );


// 9. Sort by field

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(fieldName){
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

// 10. Army of functions
function makeArmy() {
    let shooters = [];
    for(let i = 0; i < 10; i++){
      let shooter = function() { 
        console.log( i ); 
      };
      shooters.push(shooter); 
    }
  
    return shooters;
}
  
let army = makeArmy();
army[0]();
army[2]();