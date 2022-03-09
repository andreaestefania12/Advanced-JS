/*****  var and const

// var -> functions 
// let -> block 
// const -> block

function sayHello(){
    for(let i= 0; i < 5;i++){
        console.log(i);
    }
    // console.log(i);  
}

sayHello();

const x = 1;
x = 2; // can not be reassigned READ ONLY
*/



// ---------------

/* OBJECTS

const person = {
    name : 'Mosh',
    walk(){},
    talk(){}
};

person.talk();

const targetMember = 'name';
person[targetMember.value] = 'Jhon';

*/


// ---------------

/* THE THIS KEYWORD

const person = {
    name : 'Mosh',
    walk(){
        console.log(this);  // return reference the current object
    }
};
person.walk();

const walk = person.walk;
walk();  // window object
 */

// ---------------

/** BINDING THIS 
const person = {
    name : 'Mosh',
    walk(){
        console.log(this);  
    }
};
person.walk();

const walk = person.walk.bind(person);
walk();  
*/



// ---------------

/** ARROW FUNCTIONS 

const square = function(number){
    return number * number;
}

// THEY ARE THE SAME 
square = number => number * number;

const jobs = [
    {id: 1, isActive: true },
    {id: 2, isActive: true },
    {id: 3, isActive: false },
];

const activeJobs = jobs.filter(function(job){return job.isActive;}); 
activeJobs = jobs.filter((job) => job.isActive); // ARROW FUNCTIONS
*/




// ---------------

/** ARROW FUNCTIONS AND THIS 

// Arrow functions dont rebind 'this'

const person = {
    talk(){
        console.log('this',this); // return the person object
    }   
}

person.talk();


const person = {
    talk(){
        setTimeout(function() {            
            console.log('this',this); // return the window object
        }, 1000);
    }   
}
person.talk();


const person = {
    talk(){
        setTimeout(() =>{            
            console.log('this',this); // return the person object
        }, 1000);
    }   
}
person.talk(); */




// ---------------

/** ARRAY.MAP() 

// render list

const colors = ['red','green','blue'];
colors.map(function(color){
    return '<li>' + color + '</li>';
});

// arrow function
colors.map(color => '<li>' + color + '</li>');

//template literals in es6 instead concatenations
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);
*/





// ---------------

/** OBJECT DESTRUCTURING 

const address = {
    street : '1',
    city : '2',
    country : '3'
}

// const street = address.street;
// const city = address.city;
// const country = address.country;


const {street,city,country} = address; //if the constans have the same name as properties

console.log(street);

// we can use alias if we don't want to use the name of the properties
const {street: st,city:ct,country:co} = address; 

console.log(st);
*/




// ---------------

/** SPREAD OPERATOR 
// const first = [1,2,3];
// const second = [1,2,3];

// const combined = first.concat(second);
// const combined = [...first,...second];  // spread the first array and we'll get every item in this array and put it in a new array
// const combined = ['a',...first,'b',...second,'c'];  // we can put something at the stard, the middle and end

const first = {name : 'Mosh'};
const second = {job : 'Instructor'};

const combined = {...first,...second,location : 'Australia'};
console.log(combined);

const clone = {...first};
console.log(clone);*/






// ---------------
/**CLASSES 

class Person{
    constructor(name){
        this.name = name;
    }
    
    walk(){
        console.log('walk');
    }
}

const person = new Person('Mosh');
person.walk();*/






// ---------------
/**INHERITANCE 
class Person{
    constructor(name){
        this.name = name;
    }
    
    walk(){
        console.log('walk');
    }
}

class Teacher extends Person{
    constructor(name,degree){
        super(name);
        this.degree = degree;
    }
    teach(){
        console.log('teach');
    }
}

const teacher = new Teacher('Mosh','MSc');
teacher.teach(); */






// ---------------
/**MODULES 
// Split the code across multiple files 


import { Teacher } from "./Teacher";

const  teacher = new Teacher('Mosh','Msc');
teacher.teach(); */






// ---------------
/**NAMED AND DEFAULT EXPORTS */
import Teacher from "./Teacher";
import React from 'React';

// Default -> import .. from '':
// Named -> import { ... } from ''

const  teacher = new Teacher('Mosh','Msc');
teacher.teach(); 
