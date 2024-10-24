// Text Animation
var typed = new Typed(".autotext", {
    strings : ["Fullstack Developer.", "Web Designer."],
    typeSpeed : 100,
    backSpeed : 100,
    loop : true,
})

// Animasi navbar ketika di scroll
document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.getElementById('Navbar0');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// Animasi Fade-in
document.addEventListener('DOMContentLoaded', function() {
    const fadeIns = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeIns.forEach(fadeIn => {
        observer.observe(fadeIn);
    });
});

// Navbar toogle
// Mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking a link
const navLinks = document.querySelectorAll('.Navbar3 a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});