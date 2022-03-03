// POW
/*
pow(2,2) = 4;
pow(2,3) = 8;
pow(2,4) = 16;
*/

// pow in iterative with for

function powI(x,n){
    let result = 1;
    // multiply result by x n times in the loop
    for (let i = 0; i < n ; i++){
        result *= x;
    }
    return result;
}

// alert(powI(2,3));

// pow with recursive thinking: simplify the task and call self:

function powR(x,n){
    if (n == 1) {
        return x;
    } else {
        return x * powR(x,n-1);
    }
}
// alert(powR(2,4));

function powR(x,n){
    return (n == 1) ? x : x * powR(x,n-1);
}

/* RECURSIVE SOLUTION IS USUALLY SHORTER THAN AN ITERATIVE ONE*/ 


// RECURSIVE TRAVERSALS

let company = {
    sales: [{
        name : 'Jhon',
        salary : 1000
    },
    {
        name : 'Alice',
        salary : 1600
    }],

    development: {
        sites: [{
            
            name : 'Peter',
            salary : 2000
        },
        {
            name : 'Alex',
            salary : 1800
        }],
    
        internals:[{
            name : 'Jack',
            salary : 1300
        }],
    }
    
}

// Function sumSalaries
function sumSalaries(deparment){
    if(Array.isArray(deparment)){
        return deparment.reduce((prev,current) => prev + current.salary,0);
    } else {
        let sum = 0;
        for (let subdep of Object.values(deparment)){
            sum += sumSalaries(subdep);
        }
        return sum;
    }
}

alert(sumSalaries(company));