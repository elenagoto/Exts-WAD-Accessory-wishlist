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

const getStoredAccessories = function() {
  let accessoriesArray = []

  for (let i = 0; i < sessionStorage.length; i++) {
    let item = sessionStorage.getItem(`accessory${i+1}`);
    let accesoryJSON = JSON.parse(item);
    let accssObject = new Accessory(accesoryJSON.name, accesoryJSON.price, accesoryJSON.color, accesoryJSON.imageHref);
    accessoriesArray.push(accssObject)
  }
  return accessoriesArray;
}

getStoredAccessories();