// ** HATS **

// *** Task 1: Define JS object that represents a Hat and attach a `toString` function to it
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


