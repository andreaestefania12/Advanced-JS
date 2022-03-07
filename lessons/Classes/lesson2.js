// Class inheritance

// The “extends” keyword

class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }
  }
  
  let animal = new Animal("My animal");


//   --
//   class Rabbit extends Animal {
//     hide() {
//       alert(`${this.name} hides!`);
//     }
//   }
  
//   let rabbit = new Rabbit("White Rabbit");
  
//   rabbit.run(5); // White Rabbit runs with speed 5.
//   rabbit.hide(); // White Rabbit hides!


// Overriding a method

// class Rabbit extends Animal {
//     stop() {
//       // ...now this will be used for rabbit.stop()
//       // instead of stop() from class Animal
//     }
//   }

// class Rabbit extends Animal {
//     hide() {
//       alert(`${this.name} hides!`);
//     }
  
//     stop() {
//       super.stop(); // call parent stop
//       this.hide(); // and then hide
//     }
// }
  
// let rabbit = new Rabbit("White Rabbit");
  
// rabbit.run(5); // White Rabbit runs with speed 5.
// rabbit.stop(); // White Rabbit stands still. White Rabbit hides!


// Overriding constructor

// class Rabbit extends Animal {
//     // generated for extending classes without own constructors
//     constructor(...args) {
//       super(...args);
//     }
//   }

// class Rabbit extends Animal {

//     constructor(name, earLength) {
//       this.speed = 0;
//       this.name = name;
//       this.earLength = earLength;
//     }
  
//     // ...
//   }
  
//   // Doesn't work!
//   let rabbit = new Rabbit("White Rabbit", 10); // Error: this is not defined.


class Rabbit extends Animal {

    constructor(name, earLength) {
      super(name);
      this.earLength = earLength;
    }

    hide() {
        alert(`${this.name} hides!`);
      }
    
      stop() {
        super.stop(); // call parent stop
        this.hide(); // and then hide
      }
  }
  
  // now fine
  let rabbit = new Rabbit("White Rabbit", 10);
  alert(rabbit.name); // White Rabbit
  alert(rabbit.earLength); // 10



// Super: internals, [[HomeObject]]

 animal = {
    name: "Animal",
    eat() {
      alert(`${this.name} eats.`);
    }
  };
  
   rabbit = {
    __proto__: animal,
    name: "Rabbit",
    eat() {
      // that's how super.eat() could presumably work
      this.__proto__.eat.call(this); // (*)
    }
  };
  
  rabbit.eat(); // Rabbit eats.


  let longEar = {
    __proto__: rabbit,
    eat() {
      // ...do something with long ears and call parent (rabbit) method
      this.__proto__.eat.call(this); // (**)
    }
  };
  
  longEar.eat(); // Error: Maximum call stack size exceeded



// [[HomeObject]]

 animal = {
    name: "Animal",
    eat() {         // animal.eat.[[HomeObject]] == animal
      alert(`${this.name} eats.`);
    }
  };
  
   rabbit = {
    __proto__: animal,
    name: "Rabbit",
    eat() {         // rabbit.eat.[[HomeObject]] == rabbit
      super.eat();
    }
  };
  
   longEar = {
    __proto__: rabbit,
    name: "Long Ear",
    eat() {         // longEar.eat.[[HomeObject]] == longEar
      super.eat();
    }
  };
  
  // works correctly
  longEar.eat();  // Long Ear eats.