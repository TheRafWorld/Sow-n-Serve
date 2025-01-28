// Sample Menu Data
const menuItems = [
    { id: 1, name: "Spring Rolls", description: "Crispy rolls with fresh veggies.", price: 5.99, category: "appetizer", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Garlic Bread", description: "Toasted baguette with garlic butter.", price: 4.5, category: "appetizer", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Grilled Salmon", description: "Salmon fillet with lemon butter sauce.", price: 15.99, category: "main", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Margherita Pizza", description: "Fresh mozzarella, basil, tomato sauce.", price: 12.0, category: "main", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Cheesecake", description: "Creamy cheesecake with graham cracker crust.", price: 6.5, category: "dessert", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Chocolate Lava Cake", description: "Warm cake with a gooey center.", price: 7.0, category: "dessert", image: "https://via.placeholder.com/150" },
  ];
  
  let cart = [];
  
  // DOM Elements
  const menuContainer = document.getElementById('menu-container');
  const categoryFilter = document.getElementById('category-filter');
  const searchBar = document.getElementById('search-bar');
  const cartItems = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  
  // Render Menu Items
  function renderMenuItems(items) {
    menuContainer.innerHTML = '';
    items.forEach(item => {
      menuContainer.innerHTML += `
        <div class="col-md-6 menu-item" data-category="${item.category}">
          <div class="card">
            <img src="${item.image}" alt="${item.name}" class="card-img-top menu-image">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.description}</p>
              <div class="d-flex justify-content-between align-items-center">
                <span class="fw-bold">$${item.price.toFixed(2)}</span>
                <button class="btn btn-sm btn-primary" onclick="addToCart(${item.id})">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  }
  
  // Add to Cart
  function addToCart(id) {
    const item = menuItems.find(i => i.id === id);
    cart.push(item);
    renderCart();
  }
  
  // Render Cart
  function renderCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
      total += item.price;
      cartItems.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          ${item.name} - $${item.price.toFixed(2)}
          <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>
        </li>
      `;
    });
    totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
  }
  
  // Remove from Cart
  function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
  }
  
  // Filter by Category
  categoryFilter.addEventListener('change', (e) => {
    const category = e.target.value;
    const filteredItems = category === 'all' ? menuItems : menuItems.filter(item => item.category === category);
    renderMenuItems(filteredItems);
  });
  
  // Search by Name
  searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredItems = menuItems.filter(item => item.name.toLowerCase().includes(searchTerm));
    renderMenuItems(filteredItems);
  });
  
  // Initial Render
  renderMenuItems(menuItems);
  