// 1. Set and decrease for counter

function makeCounter() {
    let count = 0;
    function counter() {
        return count++;
    }
    counter.set = value => count = value;
    counter.decrease = () => count-=1;
    return counter;
}
  
let counter = makeCounter();
console.log( counter() ); 
console.log( counter.set(10) ); 
console.log( counter.decrease() ); 

// 2. Sum with an arbitrary amount of brackets

function sum(a) {

    let currentSum = a;
  
    function f(b) {
      currentSum += b;
      return f;
    }
  
    f.toString = function() {
      return currentSum;
    };
  
    return f;
}
  
console.log( sum(1)(2).toString() ); 
console.log( sum(5)(-1)(2).toString() ); 
console.log( sum(6)(-1)(-2)(-3).toString() ); 
console.log( sum(0)(1)(2)(3)(4)(5).toString() ); 