// Promise

let promise = new Promise(function(resolve, reject) {
    // executor (the producing code, "singer")
  });

/*
  resolve(value) — if the job is finished successfully, with result value.
  reject(error) — if an error has occurred, error is the error object.
*/

 promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
  
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
  });

   promise = new Promise(function(resolve, reject) {
    // after 1 second signal that the job is finished with an error
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });

/* The executor should call only one resolve or one reject. Any state change is final.

All further calls of resolve and reject are ignored:

let promise = new Promise(function(resolve, reject) {
  resolve("done");

  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
});*/



// Consumers: then, catch, finally

// then
// The most important, fundamental one is .then.

// The syntax is:

// promise.then(
//   function(result) { /* handle a successful result */ }, is a function that runs when the promise is resolved, and receives the result.
//   function(error) { /* handle an error */ } is a function that runs when the promise is rejected, and receives the error.
// );


promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
  });
  
  // resolve runs the first function in .then
  promise.then(
    result => alert(result), // shows "done!" after 1 second
    error => alert(error) // doesn't run
  );

// ---
promise = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });
  
  // reject runs the second function in .then
  promise.then(
    result => alert(result), // doesn't run
    error => alert(error) // shows "Error: Whoops!" after 1 second
  );



// catch

promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });
  
  // .catch(f) is the same as promise.then(null, f)
  promise.catch(alert); // shows "Error: Whoops!" after 1 second


// finally


new Promise((resolve, reject) => {
    setTimeout(() => resolve("result"), 2000)
  })
    .finally(() => alert("Promise ready"))
    .then(result => alert(result)); // <-- .then handles the result

//   And here there’s an error in the promise, passed through finally to catch:
  
  new Promise((resolve, reject) => {
    throw new Error("error");
  })
    .finally(() => alert("Promise ready"))
    .catch(err => alert(err));  // <-- .catch handles the error object





// Example: loadScript



function loadScript(src) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script');
      script.src = src;
  
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Script load error for ${src}`));
  
      document.head.append(script);
    });
  }

//   Usage:
  
 promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
  
  promise.then(
    script => alert(`${script.src} is loaded!`),
    error => alert(`Error: ${error.message}`)
  );
  
  promise.then(script => alert('Another handler...'));