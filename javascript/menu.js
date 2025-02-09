document.addEventListener('DOMContentLoaded', function () {
  const menuContainer = document.getElementById("menu-container");

  const sheetId = "1n0Dor_Z_PhTLzkcpC52fpUhydBJZbWNJMusnaahsBMA";
  const apiKey = "AIzaSyDRaiB4lCpYB0pHylPOAezSEHTWK54oQN0";
  const range = "Menu!A2:E"; // Adjust based on your sheet structure

  // Fetch menu data from Google Sheets API
  async function fetchMenu() {
      try {
          const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`);
          const data = await response.json();
          displayMenu(data.values);
      } catch (error) {
          console.error("Error fetching menu:", error);
      }
  }

  // Display menu items dynamically
  function displayMenu(menuData) {
      menuContainer.innerHTML = ""; // Clear previous items

      menuData.forEach((row) => {
          if (row.length < 4) return; // Skip incomplete rows

          const [itemName, description, price, category, imageUrl] = row;
          const menuItem = document.createElement("div");

          if (category === 'Special') {
              menuItem.classList.add("special-item", "w-100"); // Full-width for special items
              menuItem.innerHTML = `
                  <div class="card special-card">
                      <img src="${imageUrl}" class="card-img-top special-img" alt="${itemName}" />
                      <div class="card-body text-center">
                          <h3 class="card-title">${itemName}</h3>
                          <p class="card-text">${description}</p>
                          <p class="fw-bold">$${parseFloat(price).toFixed(2)}</p>
                          <button class="btn btn-lg btn-warning deluxe-button">Try Now</button>
                      </div>
                  </div>
              `;
          } else {
              menuItem.classList.add("col-md-4", "mb-4");
              menuItem.innerHTML = `
                  <div class="card">
                      <img src="${imageUrl}" class="card-img-top" alt="${itemName}" />
                      <div class="card-body">
                          <h5 class="card-title">${itemName}</h5>
                          <p class="card-text">${description}</p>
                          <p class="fw-bold">$${parseFloat(price).toFixed(2)}</p>
                      </div>
                  </div>
              `;
          }

          menuContainer.appendChild(menuItem);
      });
  }

  // Load menu on page load
  fetchMenu();
});
