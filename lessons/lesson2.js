/* Rest parameters and spread syntax */ 

// Rest parameters

function sum(a,b){
    return a + b ;
}

console.log(sum(1,2,3,4));

function sumAll(...args){
    let sum = 0;
    for(let arg of args) sum += arg;
    return sum;
}

console.log(sumAll(1));
console.log(sumAll(1,2));
console.log(sumAll(1,2,3));

// ...rest must always be last
function showName(firstName,lastName, ...titles){
    console.log(firstName + ' ' + lastName);
    console.log(titles[0]);
    console.log(titles[1]);
    console.log(titles.length);
}
showName('Julius','Caesar','Consul','Imperator');

// The arguments variable

function showNameArguments(){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);    
}

showNameArguments('Julius','Caesar');
showNameArguments('Ilya');

function f(){
    let showArg = () => alert(arguments[0]);
    showArg();
}
// f(1);

// Spread systax

// alert(Math.max(3,5,1));

let arr = [3,5,1];
// alert(Math.max(arr)); // doest work because expects a list of numeric argument not a single array

// alert(Math.max(...arr)); // spread turn array into a list of arguments

let arr1 = [1,-2,3,4];
let arr2 = [8,3,-8,1];
// Multiple iterables 
// alert(Math.max(...arr1,...arr2));

// Combine the spread syntax with normal values
// alert(Math.max(...arr1,...arr2,25));

// The spread syntax can be used to merge arrays
let merge = [0, ...arr1,2,...arr2];
console.log(merge);

// Turn the string into array of characters

let str = 'HELLO';
console.log([...str]);

// Arra.from converts an iterable into an array
console.log(Array.from(str));


// -- ARRAY FROM OPERATES ON BOTH ARRAY-LIKES AND ITERABLES
// THE SPREAD SYNTAX WORKS ONLYYYYY WITH ITERABLES.