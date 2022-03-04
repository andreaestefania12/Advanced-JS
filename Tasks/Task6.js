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