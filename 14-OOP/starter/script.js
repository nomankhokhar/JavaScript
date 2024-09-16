'use strict';

// -> OOP - Object Oriented Programming

// OOP is a programming paradigm based on the concept of objects, which can contain data, in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).

// OOP is a way to write code that is more organized, easier to understand, and easier to maintain.

// Classes and Instances
// Classes are blueprints that define the properties and behaviors of objects.

// Instance is an object created from a class.

// Abstraction
// Hide internal implementation details and show only the necessary features of an object.

// Encapsulation
// Keep properties and methods private inside a class, and only expose them when necessary.

// Inheritance
// Pick the properties and methods from another class that both have same properties and methods.

// Polymorphism
// A child class can overwrite a method it inherited from a parent class. Modify the behavior of a method in child class.

// -> OPP in JavaScript

// Prototypal Inheritance
// JavaScript is a prototype-based language, and every object in JavaScript has a prototype.

// Objects are linked to a prototype object from which they can inherit properties.

// 3 ways to implement Prototypal Inheritance in JavaScript

// 1. Constructor Functions
// 2. ES6 Classes
// 3. Object.create()

// -> Constructor Functions and the new Operator

// Constructor Functions
// A normal function that is used to construct objects.

// The 'this' keyword refers to the new object that is created.
// The 'new' keyword is used to create a new instance of an object.

// Example
// function Person(firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

// Never create a method inside a constructor function because multiple copies created for each object of the person.
//   this.calcAge = function () {
//     console.log(2021 - this.birthYear);
//   };
// }

// const noman = new Person('Noman Ali', 2002);
// console.log(noman);

// const matilda = new Person('Matilda', 1997);
// const jack = new Person('Jack', 2000);
// console.log(matilda, jack);

// const jay = 'Jay';

// console.log(noman instanceof Person);
// console.log(jay instanceof Person);

// const person = function (firstName, birthYear) {
//   firstName = firstName;
//   birthYear = birthYear;
//   return { firstName, birthYear };
// };

// person is not a constructor function
// const Khan = person('Khan', 1990);
// const khan = new person('Khan', 1990);
// console.log(khan);

// -> Prototypes

// Each and every function in JavaScript has a property called prototype.

// This method is shared across all the objects created using that function. Only one copy of the method is created and shared across all the objects.
// Person.prototype.calcAge = function () {
//   console.log(2021 - this.birthYear);
// };

// noman.calcAge();
// matilda.calcAge();

// console.log(noman.__proto__);
// console.log(noman.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(noman));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Noman Ali';
// console.log(noman.species, matilda.species);

// console.log(noman.hasOwnProperty('firstName')); // true
// console.log(noman.hasOwnProperty('species')); // false because species is not a property of noman object, it is a property of prototype object.

// -> Prototypal Inheritance and The Prototype Chain

// Prototype Chain
// A chain of prototypes that is used to inherit properties and methods from one object to another.

// console.log(noman.__proto__);

// Object.prototype (top of the prototype chain)
// console.log(noman.__proto__.__proto__);
// console.log(noman.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// const arr = [3, 6, 6, 5, 6, 9, 4, 3]; // new Array === []

// console.log(arr);

// this is not a good practice when working with a team because it can cause conflicts with other libraries.Maybe javaScript will add a method with the same name in the future.

// console.log(arr.unique()); // added to the prototype of array
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// Coding Challenge #1

// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 'speed' property. The 'speed' property is the current speed of the car in km/h.

// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console.

// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console.

// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// Test data:

// Data 1: 'BMW' going at 120 km/h
// Data 2: 'Mercedes' going at 95 km/h

// Good Luck 😀

// function Car(make, speed) {
//   this.make = make;
//   this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();

// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.brake();

// -> ES6 Classes

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2021 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

// new keyword is used to  called constructor function in PersonCl class.
const noman = new PersonCl('Noman Ali', 2002);
// console.log(noman);
// noman.calcAge();

// console.log(noman.__proto__ === PersonCl.prototype); // true

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// noman.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

// -> Getters and Setters and Static Methods

// Getters are used to get the properties of an object.
const account = {
  owner: 'Noman Ali',
  movements: [100, 200, 300, 400],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

// console.log(account.latest);

account.latest = 50;

class PersonCl2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property are called instance methods.
  calcAge() {
    console.log(2021 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2021 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method
  static hey() {
    console.log('Hey there ');
    console.log(this);
  }
}

const noman2 = new PersonCl2('Noman Ali', 2002);
// console.log(noman2.age);
noman2.calcAge();

// PersonCl2.hey();

noman2.fullName = 'Noman Ali';
// console.log(noman2.fullName);

const walter = new PersonCl2('Walter xD', 1965);

// -> Object.create()

const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },
  // this look like a constructor function but it is not a constructor function.
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// Object.create() is used to create a new object with a specified prototype object and properties that are passed as an argument.
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1997);
sarah.calcAge();

// Coding Challenge #2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.brake -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();

ford.speedUS = 50;

console.log(ford);
