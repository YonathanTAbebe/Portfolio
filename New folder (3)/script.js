// Smooth Scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Fade-In Animation for Elements
const fadeInElements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    fadeInElements.forEach(el => {
        if (isInViewport(el)) {
            el.classList.add('visible');
        }
    });
});

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}
