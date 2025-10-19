// JavaScript to toggle the burger menu visibility
const burgerMenu = document.getElementById('burger-menu');
const navbarNav = document.getElementById('navbar-nav');

// Toggle the navbar menu on burger icon click
burgerMenu.addEventListener('click', () => {
  navbarNav.classList.toggle('active');
});

// JavaScript to highlight the active link
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(item => item.classList.remove('active')); // Remove active class from all links
    this.classList.add('active'); // Add active class to the clicked link
  });
});
