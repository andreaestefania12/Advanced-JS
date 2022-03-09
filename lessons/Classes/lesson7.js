// Mixins

/* As defined in Wikipedia, a mixin is a class containing methods
 that can be used by other classes without a need to inherit from it.

In other words, a mixin provides methods that implement a certain behavior,
 but we do not use it alone, we use it to add the behavior to other classes.*/

// A mixin example

// mixin
let sayHiMixin = {
    sayHi() {
      alert(`Hello ${this.name}`);
    },
    sayBye() {
      alert(`Bye ${this.name}`);
    }
  };
  
  // usage:
  class User {
    constructor(name) {
      this.name = name;
    }
  }
  
  // copy the methods
  Object.assign(User.prototype, sayHiMixin);
  
  // now User can say hi
  new User("Dude").sayHi(); // Hello Dude!


// There’s no inheritance, but a simple method copying. 
// So User may inherit from another class and also include the mixin to 
// “mix-in” the additional methods, like this:

  class User extends Person {
    // ...
  }
  
  Object.assign(User.prototype, sayHiMixin);


  let sayMixin = {
    say(phrase) {
      alert(phrase);
    }
  };
  
   sayHiMixin = {
    __proto__: sayMixin, // (or we could use Object.setPrototypeOf to set the prototype here)
  
    sayHi() {
      // call parent method
      super.say(`Hello ${this.name}`); // (*)
    },
    sayBye() {
      super.say(`Bye ${this.name}`); // (*)
    }
  };
  
  class User {
    constructor(name) {
      this.name = name;
    }
  }
  
  // copy the methods
  Object.assign(User.prototype, sayHiMixin);
  
  // now User can say hi
  new User("Dude").sayHi(); // Hello Dude!



// EventMixin

let eventMixin = {
    /**
     * Subscribe to event, usage:
     *  menu.on('select', function(item) { ... }
    */
    on(eventName, handler) {
      if (!this._eventHandlers) this._eventHandlers = {};
      if (!this._eventHandlers[eventName]) {
        this._eventHandlers[eventName] = [];
      }
      this._eventHandlers[eventName].push(handler);
    },
  
    /**
     * Cancel the subscription, usage:
     *  menu.off('select', handler)
     */
    off(eventName, handler) {
      let handlers = this._eventHandlers?.[eventName];
      if (!handlers) return;
      for (let i = 0; i < handlers.length; i++) {
        if (handlers[i] === handler) {
          handlers.splice(i--, 1);
        }
      }
    },
  
    /**
     * Generate an event with the given name and data
     *  this.trigger('select', data1, data2);
     */
    trigger(eventName, ...args) {
      if (!this._eventHandlers?.[eventName]) {
        return; // no handlers for that event name
      }
  
      // call the handlers
      this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
    }
  };

  /* .on(eventName, handler) – assigns function handler to run when the event with that name occurs. 
  Technically, there’s an _eventHandlers property that stores an array of handlers for each 
  event name, and it just adds it to the list.
    .off(eventName, handler) – removes the function from the handlers list.
    .trigger(eventName, ...args) – generates the event: all handlers from _eventHandlers[eventName] 
    are called, with a list of arguments ...args.*/



// Make a class
class Menu {
    choose(value) {
      this.trigger("select", value);
    }
  }
  // Add the mixin with event-related methods
  Object.assign(Menu.prototype, eventMixin);
  
  let menu = new Menu();
  
  // add a handler, to be called on selection:
  menu.on("select", value => alert(`Value selected: ${value}`));
  
  // triggers the event => the handler above runs and shows:
  // Value selected: 123
  menu.choose("123");






