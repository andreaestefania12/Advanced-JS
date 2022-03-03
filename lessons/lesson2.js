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
f(1);

