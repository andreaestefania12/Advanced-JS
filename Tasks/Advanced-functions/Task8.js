// Output every second


// setInterval

function printNumbersInterval(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      console.log(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  
  printNumbersInterval(5, 10);

// setTimeout
function printNumbersTimeOut(from, to) {
    let current = from;

    setTimeout(function go() {
        console.log(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
    current++;
  }, 1000);
}
  
printNumbersTimeOut(5, 10);


// What will setTimeout show?
let i = 0;

setTimeout(() => alert(i), 100); // ?

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
}
// Any setTimeout will run only after the current code has finished.