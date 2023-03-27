// Define an array to hold the items in the cart
let cart = [];

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
  // Create an object representing the item
  const item = {
    name: itemName,
    price: itemPrice
  };

  // Add the item to the cart array
  cart.push(item);

  // Log a message to confirm the item was added to the cart
  console.log(`${itemName} added to cart for ${itemPrice}.`);
}

// Function to remove an item from the cart
function removeFromCart(itemName) {
  // Find the index of the item in the cart array
  const itemIndex = cart.findIndex(item => item.name === itemName);

  // If the item is in the cart, remove it
  if (itemIndex !== -1) {
    cart.splice(itemIndex, 1);
    console.log(`${itemName} removed from cart.`);
  } else {
    console.log(`${itemName} not found in cart.`);
  }
}

// Function to calculate the total price of items in the cart
function calculateCartTotal() {
  let total = 0;

  // Loop through the items in the cart and add up the prices
  cart.forEach(item => {
    total += item.price;
  });

  return total;
}

// Example usage
addToCart("Widget", 19.99);
addToCart("Gadget", 29.99);
removeFromCart("Widget");
console.log(`Cart total: ${calculateCartTotal()}`);
