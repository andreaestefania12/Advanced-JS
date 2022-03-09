// import { Person } from "./Person";

// function promote(){}

// export class Teacher extends Person{
//     constructor(name,degree){
//         super(name);
//         this.degree = degree;
//     }
//     teach(){
//         console.log('teach');
//     }
// }


import { Person } from "./Person";

// export function promote(){}

export default class Teacher extends Person{  // TEACHER CLASS is the default thing that we're exporting in this module
    constructor(name,degree){
        super(name);
        this.degree = degree;
    }
    teach(){
        console.log('teach');
    }
}