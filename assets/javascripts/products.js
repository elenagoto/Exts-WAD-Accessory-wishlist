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


// Task 3 - Define an array of objects using the Hat prototype that represents all of the hats in the static HTML

const hatsArray = [
  new Hat('Baseball cap', 11.99, 'red', './assets/images/red/hats/1.png'), 
  new Hat('Baseball cap', 11.99, 'blue', './assets/images/blue/hats/1.png'), 
  new Hat('Baseball cap', 11.99, 'yellow', './assets/images/yellow/hats/1.png'), 
  new Hat('Baseball cap', 11.99, 'green', './assets/images/green/hats/1.png'), 
  new Hat('Beanie', 17.99, 'red', './assets/images/red/hats/2.png'), 
  new Hat('Beanie', 17.99, 'blue', './assets/images/blue/hats/2.png'), 
  new Hat('Beanie', 17.99, 'green', './assets/images/green/hats/2.png'), 
  new Hat('Straw hat', 10.99, 'yellow', './assets/images/yellow/hats/3.png'), 
  new Hat('Straw hat', 10.99, 'blue', './assets/images/blue/hats/3.png'), 
  new Hat('Trilby', 10.99, 'red', './assets/images/red/hats/4.png'), 
  new Hat('Trilby', 10.99, 'blue', './assets/images/blue/hats/4.png'), 
  new Hat('Trilby', 10.99, 'yellow', './assets/images/yellow/hats/4.png')
];

console.log(hatsArray[4].toString());

// Task 4 - Define a function that will accept a Hat object and create the HTML component
// The component needs to match the structure of an individual HTML component
// Then use function to render all the hats instead of the static HTML

const displayHat = function(hat) {
  // create H5
  let cardTitle = document.createElement('h5');
  cardTitle.innerText = hat.name;
  cardTitle.className = 'card-title';

  // create paragraph
  let cardTextColor = document.createElement('em');
  cardTextColor.innerText = hat.color;
  let cardTextTitle = document.createTextNode('Color: ')
  let cardText = document.createElement('p');
  cardText.className = 'card-text';
  cardText.appendChild(cardTextTitle);
  cardText.appendChild(cardTextColor);

  // create button
  let cardBtn = document.createElement('button')
  cardBtn.textContent = 'Add to wishlist!';
  cardBtn.className = 'btn btn-outline-primary';

  // create div to contain first 3 elements
  let cardBody = document.createElement('div');
  cardBody.className = 'card-body text-center';
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardBtn);

  // create div for price
  let currency = document.createElement('div');
  currency.textContent = hat.price;
  currency.className = 'currency btn btn-light disabled';

  // create image element
  let img = document.createElement('img');
  img.className = 'card-img-top';
  img.setAttribute('src', hat.imageHref);
  img.setAttribute('alt', hat.altText());

  // create div to contain the next 3 elements
  let card = document.createElement('div');
  card.className = 'card my-3';
  card.appendChild(currency);
  card.appendChild(img);
  card.appendChild(cardBody);

  // create last div for Accessory component
  let accessory = document.createElement('div');
  accessory.className = `accessory col-sm-4 ${hat.color}`;
  accessory.appendChild(card);

  // Get container from HTML
  const products = document.getElementById('products');
  products.appendChild(accessory);
}

// Function to render all the elements on the products page
function renderAllAccessories (array) {
  for (let accessory of array) {
    displayHat(accessory);
  }
}
// Calling the function
renderAllAccessories(hatsArray);

// **********************
// ** FILTER BY COLOR **

// Task 1 - Write function that will remove the active class from all the filter
// buttons and then add the active class to the button that was clicked
// bind this function to each filter button
const btnList = document.querySelectorAll('#filters .btn-group .btn')

const highlightSelectedFilter = function(e) {
  // remove active from all the buttons
  for (let button of btnList) {
    button.className = 'btn btn-outline-secondary'
  }
  // add active only to the button clicked
  e.target.className += ' active';
};

// Bind the previous function to each button
btnList.forEach((button) => {
  button.addEventListener('click', (e) => {
    highlightSelectedFilter(e);
  })
});

