const menuBtn = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');
const body = document.querySelector('body');

// Toggle Menu
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('is-active');
    navLinks.classList.toggle('active');
    body.classList.toggle('menu-open');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('is-active');
        navLinks.classList.remove('active');
        body.classList.remove('menu-open');
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('#navbar');
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0, 0, 0, 0.98)";
        navbar.style.height = "70px";
    } else {
        navbar.style.background = "rgba(0, 0, 0, 0.95)";
        navbar.style.height = "80px";
    }
});