// Error handling, "try...catch"

// The “try…catch” syntax

/*
The try...catch construct has two main blocks: try, and then catch:

try {

  // code...

} catch (err) {

  // error handling

}*/


//try...catch works synchronously
// If an exception happens in “scheduled” code, like in setTimeout, 
// then try...catch won’t catch it:

try {
  setTimeout(function() {
    noSuchVariable; // script will die here
  }, 1000);
} catch (err) {
  alert( "won't work" );
}

/*
That’s because the function itself is executed later, when the engine has already left 
the try...catch construct.

To catch an exception inside a scheduled function, try...catch must be inside that function:*/

setTimeout(function() {
    try {
      noSuchVariable; // try...catch handles the error!
    } catch {
      alert( "error is caught here!" );
    }
  }, 1000);


// Error object

try {
    lalala; // error, variable is not defined!
  } catch (err) {
    alert(err.name); // ReferenceError
    alert(err.message); // lalala is not defined
    alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)
  
    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    alert(err); // ReferenceError: lalala is not defined
  }


// Optional “catch” binding

/* If we don’t need error details, catch may omit it:

    try {
    // ...
    } catch { // <-- without (err)
    // ...
}*/


// Using “try…catch”
let json = "{ bad json }";

try {

  let user = JSON.parse(json); // <-- when an error occurs...
  alert( user.name ); // doesn't work

} catch (err) {
  // ...the execution jumps here
  alert( "Our apologies, the data has errors, we'll try to request it one more time." );
  alert( err.name );
  alert( err.message );
}

// Throwing our own errors
 json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors
  alert( user.name ); // no name!

} catch (err) {
  alert( "doesn't execute" );

}
//   “Throw” operator

 json = '{ "age": 30 }'; // incomplete data

try {

   user = JSON.parse(json); // <-- no errors

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }

  alert( user.name );

} catch (err) {
  alert( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
}


// Rethrowing

function readData() {
    let json = '{ "age": 30 }';
  
    try {
      // ...
      blabla(); // error!
    } catch (err) {
      // ...
      if (!(err instanceof SyntaxError)) {
        throw err; // rethrow (don't know how to deal with it)
      }
    }
  }
  
  try {
    readData();
  } catch (err) {
    alert( "External catch got: " + err ); // caught it!
  }


// try…catch…finally


/* try {
   ... try to execute the code ...
    } catch (err) {
    ... handle errors ...
    } finally {
    ... execute always ...
    }*/

    let num = +prompt("Enter a positive integer number?", 35)

    let diff, result;
    
    function fib(n) {
      if (n < 0 || Math.trunc(n) != n) {
        throw new Error("Must not be negative, and also an integer.");
      }
      return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    }
    
    let start = Date.now();
    
    try {
      result = fib(num);
    } catch (err) {
      result = 0;
    } finally {
      diff = Date.now() - start;
    }
    
    alert(result || "error occurred");
    
    alert( `execution took ${diff}ms` );

    // Global catch

    