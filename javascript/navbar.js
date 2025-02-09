// Navbar HTML (can be a constant or template string)
const NAVBAR_HTML = `
<nav class="navbar navbar-expand-md bg-body-tertiary rounded" aria-label="Navagation Bar">
            <div class="container-lg">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Navagation Bar" aria-controls="Navagation Bar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
      
              <div class="collapse navbar-collapse d-lg-flex" id="Navagation Bar">
                <a class="navbar-brand col-lg-3 me-0" href="index.html">
                    <img src="/Assets/Logo.jpg" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">Sow N' Serve</a>
                <ul class="navbar-nav col-lg-6 justify-content-lg-center">
                  <li class="nav-item">
                    <a class="nav-link active" href="index.html">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="menu.html">Menu</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="reserve.html">Reserve</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/about.html" data-bs-toggle="dropdown" aria-expanded="false">About Us</a>
                    <ul class="dropdown-menu dropdown-menu-end">
                      <li><a class="dropdown-item" href="story.html">Our Story</a></li>
                      <li><a class="dropdown-item" href="purpose.html">Our Purpose</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="referencepage.html">Reference Page</a>
                  </li>
                </ul>
                <div class="d-lg-flex col-lg-3 justify-content-end">
                  <button class="btn btn-secondary">Donate</button>
                </div>
              </div>
            </div>
          </nav>
`;

// Dynamically add the navbar to the container
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("navbar-container").innerHTML = NAVBAR_HTML;
});
