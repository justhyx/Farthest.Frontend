import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css'

import { createTopBanner } from './components/TopBanner.js'
import { createSidebar } from './components/Sidebar.js'
import { createProductGrid } from './components/ProductGrid.js'

// Initialize the layout
document.querySelector('#app').innerHTML = `
  ${createTopBanner()}
  ${createSidebar()}
  ${createProductGrid()}
`;

// Handle banner collapse
const toggleBanner = document.querySelector('#toggleBanner');
const topBanner = document.querySelector('.top-banner');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

toggleBanner.addEventListener('click', () => {
  topBanner.classList.toggle('collapsed');
  sidebar.classList.toggle('collapsed');
  mainContent.classList.toggle('collapsed');
  toggleBanner.querySelector('i').classList.toggle('bi-chevron-up');
  toggleBanner.querySelector('i').classList.toggle('bi-chevron-down');
});

// Handle mobile menu
const navbarToggler = document.querySelector('.navbar-toggler');
navbarToggler.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});