/* Write a function sumTo(n) that calculates the sum of number 1 + 2 + ... + n */

// 1. Using a for loop

function sumToLoop(n){
    let sum = 0;
    for (let i = 0; i <= n; i++){
        sum += i;
    }
    return sum;
}

console.log(sumToLoop(100));

// 2. Using a recursion 

function sumToRecursion(n){
    if(n == 1){
        return n;
    } else {
        return n + sumToRecursion(n-1);
    }
}

console.log(sumToRecursion(100));

// 3. Using the arithmetic progression

function sumToArithmetic(n){
    return ((n*(n+1))/2);
}

console.log(sumToArithmetic(100));


/* Calculate factorial */

function factorial(n){
    return (n == 1) ? n : n * factorial(n-1);
}

console.log(factorial(5));


/* Fibonacci numbers */

function fib(n){
    if(n == 1 || n == 2){
        return 1;
    } else{
        let f1 = 1;
        let f2 =1;
        let fn = 0;
        for(let i = 3; i <= n; i++){
            fn = f1 + f2;
            f1 = f2;
            f2 = fn; 
        }
        return fn;
    }
}

console.log(fib(77));