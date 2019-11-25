// Constructor from the other document:
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

  toString() {
    return `Name: ${this.name}, 
      Price: ${this.price}, 
      Color: ${this.color}, 
      imageHref: ${this.imageHref}`
  }
}

// Add functions from the products document and adapt them to wishlist page

const displayAccessory = function (accessory) {
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
  cardBtn.textContent = 'Remove';
  cardBtn.className = 'btn btn-outline-danger';

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


// Get stored accessories from sessionStorage
const getStoredAccessories = function() {
  let accessoriesArray = []
  for (let i = 0; i <= sessionStorage.length; i++){
    try {
      let item = sessionStorage.getItem(`accessory${i+1}`);
      let accssJson = JSON.parse(item);
      let accssObject = new Accessory(
                        accssJson.name, 
                        accssJson.price, 
                        accssJson.color, 
                        accssJson.imageHref);
      accessoriesArray.push(accssObject);
    } catch (error) {
      console.log('unable to retrive element');
    }
  }
  
  return accessoriesArray;
}

// Function to render all the elements on the products page
const displayWishlist = function() {
  let array = getStoredAccessories();
  for (let accessory of array) {
    displayAccessory(accessory);
  }
}

// Calling the function as soon as the page is open
// ****** Display elements in the page 
displayWishlist();


// Get the sessionStorage Key to use later with addEventListener
const getStorageKey = function(name, color) {
  let key;
  for (let i = 0; i < sessionStorage.length; i++) {
    let tempKey = sessionStorage.key(i);
    let item = sessionStorage.getItem(tempKey);
    item = JSON.parse(item);
    if (item.name == name && item.color == color) {
      key = tempKey;
    }
  }
  return key;
}

// Get HTMLcomponent to erase to use later with addEventListener
const getHTMLcomponent = function(button) {
  // get Accessory div from clicked button
  return button.parentElement.parentElement.parentElement;
}

const removeFromWishlist = function(key, htmlComponent) {
  sessionStorage.removeItem(key);
  htmlComponent.parentElement.removeChild(htmlComponent);
}

// Get the parent element of all accessories to bind event only once
const accessoriesParent = document.querySelector('#products');

// bind function to parent and then delegate to buttons
accessoriesParent.addEventListener('click', (e) => {
  if (e.target.tagName == 'BUTTON' && e.target.parentElement.classList.contains('card-body')) {
    e.preventDefault();
    // Get name and color of the accesory to remove
    let name = e.target.parentElement.firstChild.textContent;
    let color = e.target.previousElementSibling.lastChild.textContent;

    // get the sessionStorage key and HTML component to erase
    let key = getStorageKey(name, color);
    let htmlComponent = getHTMLcomponent(e.target);
  
    removeFromWishlist(key, htmlComponent);
  }
})

