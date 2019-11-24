// ** HATS **

// Task 1: Define JS object that represents a Hat and attach a `toString` function to it
const hat = {
  name: 'Baseball cap',
  price: 11.99,
  color: 'red',
  imageHref: './assets/images/red/hats/1.png',
  toString: function() {
    return `Name: ${this.name}, 
    Price: ${this.price}, 
    Color: ${this.color}, 
    imageHref: ${this.imageHref}`
  }
}

console.log(hat.toString());

// Task 2 - Define JS prototype for a Hat that can be used to construct the object

// I'll use ES6 class syntax 
class Hat {
  constructor(name, price, color, imageHref) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.imageHref = imageHref;
  }
  // add function to prototype. with ES6 can be done inside the prototype.
//   toString() {
//   return `Name: ${this.name}, 
//     Price: ${this.price}, 
//     Color: ${this.color}, 
//     imageHref: ${this.imageHref}`
// }
}
// The task requires to add a function toString() to the prototype that is the same as the toString() method from the previous task. So, I used the `toString()` method from `hat` to add it to the prototype: 
Hat.prototype.toString = hat.toString;

const littleHat = new Hat('Small hat', 11.99, 'red', 'g');

const bigHat = new Hat('Big hat', 11.99, 'blue', 'g');

console.log(littleHat.toString());

