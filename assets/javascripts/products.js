// ** HATS **

// Task 1: Define JS object that represents a Hat and attach a `toString` function to it
const hat = {
  name: 'Baseball cap',
  price: 11.99,
  color: 'red',
  imageHref: './assets/images/red/hats/1.png',
  toString: function() {
    return `Info:
    - Name: ${this.name} 
    - Price: ${this.price} 
    - Color: ${this.color} 
    - imageHref: ${this.imageHref}`
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

  // function to create the alt text for the image 
  altText() {
    return `Image of a ${this.color} ${this.name}`
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

// Task 3 - Define an array of objects using the Hat prototype that represents all of the hats in the static HTML

const hatsArray = [
  new Hat('Baseball cap', 11.99, 'red', './assets/images/red/hats/1.png'), 
  new Hat('Baseball cap', 11.99, 'blue', './assets/images/blue/hats/1.png'), 
  new Hat('Baseball cap', 11.99, 'yellow', './assets/images/yellow/hats/1.png'), 
  new Hat('Baseball cap', 11.99, 'green', './assets/images/green/hats/1.png'), 
  new Hat('Beanie', 17.99, 'red', './assets/images/red/hats/2.png'), 
  new Hat('Beanie', 17.99, 'blue', './assets/images/blue/hats/2.png'), 
  new Hat('Beanie', 17.99, 'green', './assets/images/green/hats/2.png'), 
  new Hat('Straw hat', 10.99, 'yellow', '/assets/images/yellow/hats/3.png'), 
  new Hat('Straw hat', 10.99, 'blue', './assets/images/blue/hats/3.png'), 
  new Hat('Trilby', 10.99, 'red', './assets/images/red/hats/4.png'), 
  new Hat('Trilby', 10.99, 'blue', './assets/images/blue/hats/4.png'), 
  new Hat('Trilby', 10.99, 'yellow', './assets/images/yellow/hats/4.png')
];

console.log(hatsArray[4].toString());
