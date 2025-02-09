// Dynamically inject meta tags
const metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');
document.head.appendChild(metaCharset);

const metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1, shrink-to-fit=no');
document.head.appendChild(metaViewport);

// Dynamically inject the link to the main CSS file
const linkCSS = document.createElement('link');
linkCSS.rel = 'stylesheet';
linkCSS.type = 'text/css';
linkCSS.href = 'https://therafworld.github.io/Sow-n-Serve/css/index.css';  // Full URL for CSS
document.head.appendChild(linkCSS);

// Dynamically inject Bootstrap CSS
const linkBootstrap = document.createElement('link');
linkBootstrap.rel = 'stylesheet';
linkBootstrap.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
linkBootstrap.setAttribute('integrity', 'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH');
linkBootstrap.setAttribute('crossorigin', 'anonymous');
document.head.appendChild(linkBootstrap);

// Dynamically inject the Bootstrap JS and dependencies
const scriptJQuery = document.createElement('script');
scriptJQuery.src = 'https://code.jquery.com/jquery-3.2.1.slim.min.js';
scriptJQuery.setAttribute('integrity', 'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN');
scriptJQuery.setAttribute('crossorigin', 'anonymous');
document.body.appendChild(scriptJQuery);

const scriptPopper = document.createElement('script');
scriptPopper.src = 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js';
scriptPopper.setAttribute('integrity', 'sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q');
scriptPopper.setAttribute('crossorigin', 'anonymous');
document.body.appendChild(scriptPopper);

const scriptBootstrap = document.createElement('script');
scriptBootstrap.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
scriptBootstrap.setAttribute('integrity', 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz');
scriptBootstrap.setAttribute('crossorigin', 'anonymous');
document.body.appendChild(scriptBootstrap);

// Load Navbar Script
import './navbar.js';

// After Bootstrap scripts are loaded, load the navbar.js
scriptBootstrap.onload = () => {
    const navbarScript = document.createElement('script');
    navbarScript.src = 'https://therafworld.github.io/Sow-n-Serve/javascript/navbar.js';  // Full URL for navbar.js
    navbarScript.defer = true;
    document.body.appendChild(navbarScript);
};
