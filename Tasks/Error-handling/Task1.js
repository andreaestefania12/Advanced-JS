// Finally or just the code?

/*
Compare the two code fragments.

The first one uses finally to execute the code after try...catch:

try {
  work work
} catch (err) {
  handle errors
} finally {
  cleanup the working space
}
The second fragment puts the cleaning right after try...catch:

try {
  work work
} catch (err) {
  handle errors
}
cleanup the working space


We definitely need the cleanup after the work, doesn’t matter if there was an error or not.

Is there an advantage here in using finally or both code fragments are equal?
 If there is such an advantage, then give an example when it matters.*/



// -- If the cleanUp and try-catch are inside a function, and somewhere inside the try-catch 
// has a return, in the first case when we have "finally" clause, it is going to run, but in 
//the second case, the try-catch  returns the value and the cleanUp is never going to run.

