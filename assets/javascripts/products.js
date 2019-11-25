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
class Accessory {
  constructor(name, price, color, imageHref) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.imageHref = imageHref;
  }

  // function to create the alt text for the image 
  altText() {
    return `Image of ${this.color} ${this.name}`
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
Accessory.prototype.toString = hat.toString;


// Task 3 - Define an array of objects using the Hat prototype that represents all of the hats in the static HTML

const hatsArray = [
  new Accessory('Baseball cap', 11.99, 'red', './assets/images/red/hats/1.png'),
  new Accessory('Baseball cap', 11.99, 'blue', './assets/images/blue/hats/1.png'),
  new Accessory('Baseball cap', 11.99, 'yellow', './assets/images/yellow/hats/1.png'),
  new Accessory('Baseball cap', 11.99, 'green', './assets/images/green/hats/1.png'),
  new Accessory('Beanie', 17.99, 'red', './assets/images/red/hats/2.png'),
  new Accessory('Beanie', 17.99, 'blue', './assets/images/blue/hats/2.png'),
  new Accessory('Beanie', 17.99, 'green', './assets/images/green/hats/2.png'),
  new Accessory('Straw hat', 10.99, 'yellow', './assets/images/yellow/hats/3.png'),
  new Accessory('Straw hat', 10.99, 'blue', './assets/images/blue/hats/3.png'),
  new Accessory('Trilby', 10.99, 'red', './assets/images/red/hats/4.png'),
  new Accessory('Trilby', 10.99, 'blue', './assets/images/blue/hats/4.png'),
  new Accessory('Trilby', 10.99, 'yellow', './assets/images/yellow/hats/4.png')
];

console.log(hatsArray[4].toString());


// Task 4 - Define a function that will accept a Hat object and create the HTML component
// The component needs to match the structure of an individual HTML component
// Then use function to render all the hats instead of the static HTML

const displayAccessory = function(accessory) {
  // create H5
  let cardTitle = document.createElement('h5');
  cardTitle.innerText = accessory.name;
  cardTitle.className = 'card-title';

  // create paragraph
  let cardTextColor = document.createElement('em');
  cardTextColor.innerText = accessory.color;
  let cardTextTitle = document.createTextNode('Color: ')
  let cardText = document.createElement('p');
  cardText.className = 'card-text';
  cardText.appendChild(cardTextTitle);
  cardText.appendChild(cardTextColor);

  // create button
  let cardBtn = document.createElement('button')
  cardBtn.textContent = 'Add to wishlist!';
  cardBtn.className = 'btn btn-outline-primary';

  // Task 1 from WishList! 
  cardBtn.addEventListener('click', (e) => {
    addToWishList(e, accessory);
  })

  // create div to contain first 3 elements
  let cardBody = document.createElement('div');
  cardBody.className = 'card-body text-center';
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardBtn);

  // create div for price
  let currency = document.createElement('div');
  currency.textContent = accessory.price;
  currency.className = 'currency btn btn-light disabled';

  // create image element
  let img = document.createElement('img');
  img.className = 'card-img-top';
  img.setAttribute('src', accessory.imageHref);
  img.setAttribute('alt', accessory.altText());

  // create div to contain the next 3 elements
  let card = document.createElement('div');
  card.className = 'card my-3';
  card.appendChild(currency);
  card.appendChild(img);
  card.appendChild(cardBody);

  // create last div for Accessory component
  let accessoryDiv = document.createElement('div');
  // Filter - task 2: Add CSS class with the color property
  accessoryDiv.className = `accessory col-sm-4 ${accessory.color}`;
  accessoryDiv.appendChild(card);

  // Get container from HTML
  const products = document.getElementById('products');
  products.appendChild(accessoryDiv);
}

// Function to render all the elements on the products page
function renderAllAccessories (array) {
  for (let accessory of array) {
    displayAccessory(accessory);
  }
}
// Calling the function
renderAllAccessories(hatsArray);

// **********************
// ** FILTER BY COLOR **

// Task 1 - Write function that will remove the active class from all the filter
// buttons and then add the active class to the button that was clicked
// bind this function to each filter button

const highlightSelectedFilter = function(e) {
  // remove active from all the buttons
  for (let button of btnColorList.children) {
    button.className = 'btn btn-outline-secondary'
  }
  // add active only to the button clicked
  e.target.className += ' active';
};

// Task 2 - See above line 115

// Task 3 - write empty function filterHatsByColor
// Task 4 - the function should hide every hat component, then the button
// textContent to display only the components that match the color
const filterAccessoriesByColor = function(e) {
  const accssList = document.querySelectorAll('.accessory')
  // get clicked button text
  let color = e.target.textContent.toLowerCase();
  
  for (let element of accssList) {
    // hide all the components
    element.setAttribute('style', 'display: none');
    // display only the ones that match the color
    if (element.classList.contains(color)) {
      element.removeAttribute('style');
    } else if (color == 'all') {
      // task 5 - add button All and display all the components when clicked
      element.removeAttribute('style');
    }
  }
}

// (Taks 1) Bind the previous function to each button
const btnColorList = document.querySelector('#filters .btn-group');

btnColorList.addEventListener('click', (e) => {
  if (e.target.tagName == 'BUTTON') {
    e.preventDefault();
    highlightSelectedFilter(e);
    filterAccessoriesByColor(e);
  }
});

// *******************
// ** SOCKS & GLASSES ***
// Task 1 and 2 done. Now the project outline refers to `accessories` instead of `hats`
// Task 3 - Create function to load remote accessories and bind it to the selection buttons on top of the page

const loadRemoteAccessories = function(e) {
  // erase all the elements on the page:
  const products = document.getElementById('products');
  products.innerHTML = '';
  // Deselect the chosen color from previous filters
  for (let button of btnColorList.children) {
    button.className = 'btn btn-outline-secondary'
  }

  // Get button text content
  let chosenCategory = e.target.textContent.trim().toLowerCase();
  // if chosen element is hats, then render the hatsArray
  if (chosenCategory == 'hats') {
    renderAllAccessories(hatsArray);
  // Else, get the right JSON file to render the correct accessories 
  } else {
    fetch(`./${chosenCategory}.json`)
      .then(response => response.json())
      .then(myJson => {
        // array to get all the accessoties of the chosen category
        const accessoriesArray = [];
        for (let object of myJson) {
          // Create new object with constructor using the JSON information
          let accessoryElement = new Accessory(object.name, object.price, object.color, object.imageHref);
          accessoriesArray.push(accessoryElement);
        }
        renderAllAccessories(accessoriesArray);
      });
  }
};

// Get all the buttons of the accessories categories
const btnAccessoriesList = document.querySelector('#navbarSupportedContent ul');

// bind function to parent and then delegate to buttons
btnAccessoriesList.addEventListener('click', (e) => {
  if (e.target.tagName == 'BUTTON') {
    e.preventDefault();
    loadRemoteAccessories(e);
  }
});

// *************************************
// THE WISHLIST
const addToWishList = function(e, accessory) {
  e.preventDefault();
  let accessoryString = JSON.stringify(accessory);
  // Add string to sessionStorage
  if (sessionStorage.length < 3) {
    // Use unused key in sessionStorage
    let key;
    if (!sessionStorage.getItem(`accessory1`)) {
      key = 'accessory1';
    } else if (!sessionStorage.getItem(`accessory2`)) {
      key = 'accessory2';
    } else if (!sessionStorage.getItem(`accessory3`)) {
      key = 'accessory3';
    }
    sessionStorage.setItem(key, accessoryString);
  // If there are already 3 elements in the sessionStorage
  } else {
    alert('The WishList is full!');
  }
};



