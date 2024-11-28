// Mock restaurant data
const restaurants = [
  { id: 1, name: "Pizza Palace", cuisine: "Italian", rating: 4.5 },
  { id: 2, name: "Curry Corner", cuisine: "Indian", rating: 4.8 },
];

// Render restaurants dynamically
function renderRestaurants() {
  const container = document.getElementById("restaurants");
  container.innerHTML = ""; // Clear previous content

  restaurants.forEach((restaurant) => {
      const card = document.createElement("div");
      card.className = "cards";
      card.innerHTML = `
          <h4>${restaurant.name}</h4>
          <p>Cuisine: ${restaurant.cuisine}</p>
          <p>Rating: ${restaurant.rating}</p>
          <button onclick="addToCart('${restaurant.name}', 300)">Add to Cart</button>
      `;
      container.appendChild(card);
  });
}

// Cart functionality
let cart = [];
function addToCart(itemName, itemPrice) {
  const item = cart.find((cartItem) => cartItem.name === itemName);
  if (item) {
      item.quantity++;
  } else {
      cart.push({ name: itemName, price: itemPrice, quantity: 1 });
  }
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const total = document.getElementById("total");

  cartItems.innerHTML = "";
  let totalPrice = 0;

  cart.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.name} x ${item.quantity} - ₹${item.price * item.quantity}`;
      cartItems.appendChild(listItem);
      totalPrice += item.price * item.quantity;
  });

  total.textContent = totalPrice;
}

// Initialize page
renderRestaurants();
