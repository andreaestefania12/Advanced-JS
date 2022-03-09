// Private and protected properties and methods

// Protecting “waterAmount”


class CoffeeMachine {
    waterAmount = 0; // the amount of water inside is public
  
    constructor(power) {
      this.power = power;
      alert( `Created a coffee-machine, power: ${power}` );
    }
  
  }
  
  // create the coffee machine
  let coffeeMachine = new CoffeeMachine(100);
  
  // add water
  coffeeMachine.waterAmount = 200;


  // Protected properties are usually prefixed with an underscore _.

  class CoffeeMachine {
    _waterAmount = 0;
  
    set waterAmount(value) {
      if (value < 0) {
        value = 0;
      }
      this._waterAmount = value;
    }
  
    get waterAmount() {
      return this._waterAmount;
    }
  
    constructor(power) {
      this._power = power;
    }
  
  }
  
  // create the coffee machine
   coffeeMachine = new CoffeeMachine(100);
  
  // add water
  coffeeMachine.waterAmount = -10; // _waterAmount will become 0, not -10




// Read-only “power”
class CoffeeMachine {
    // ...
  
    constructor(power) {
      this._power = power;
    }
  
    get power() {
      return this._power;
    }
  
  }
  
  // create the coffee machine
   coffeeMachine = new CoffeeMachine(100);
  
  alert(`Power is: ${coffeeMachine.power}W`); // Power is: 100W
  
  coffeeMachine.power = 25; // Error (no setter)


//   Getter/setter functions

class CoffeeMachine {
    _waterAmount = 0;
  
    setWaterAmount(value) {
      if (value < 0) value = 0;
      this._waterAmount = value;
    }
  
    getWaterAmount() {
      return this._waterAmount;
    }
  }
  
  new CoffeeMachine().setWaterAmount(100);


// Private “#waterLimit”

// Privates should start with #. They are only accessible from inside the class.

class CoffeeMachine {
    #waterLimit = 200;
  
    #fixWaterAmount(value) {
      if (value < 0) return 0;
      if (value > this.#waterLimit) return this.#waterLimit;
    }
  
    setWaterAmount(value) {
      this.#waterLimit = this.#fixWaterAmount(value);
    }
  
  }
  
  let coffeeMachine = new CoffeeMachine();
  
  // can't access privates from outside of the class
  coffeeMachine.#fixWaterAmount(123); // Error
  coffeeMachine.#waterLimit = 1000; // Error


  class MegaCoffeeMachine extends CoffeeMachine {
    method() {
      alert( this.#waterAmount ); // Error: can only access from CoffeeMachine
    }
  }


  // With private fields that’s impossible: this['#name'] doesn’t work

  








