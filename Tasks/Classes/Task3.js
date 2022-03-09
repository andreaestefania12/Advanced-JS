// Class extends Object?

class Rabbit {
    constructor(name) {
      this.name = name;
    }
  }
  
  let rabbit = new Rabbit("Rab");
  
  // hasOwnProperty method is from Object.prototype
  alert( rabbit.hasOwnProperty('name') ); // true


  class Rabbit extends Object {
    constructor(name) {
      this.name = name;
    }
  }
  
   rabbit = new Rabbit("Rab");
  
  alert( rabbit.hasOwnProperty('name') ); // Error

//--
class Rabbit extends Object {
    constructor(name) {
      super(); // need to call the parent constructor when inheriting
      this.name = name;
    }
  }
  
   rabbit = new Rabbit("Rab");
  
  alert( rabbit.hasOwnProperty('name') ); // true