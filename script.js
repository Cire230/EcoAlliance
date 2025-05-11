// Mobile menu toggle
document.getElementById('menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.mission-card, .hero h1, .hero p, .hero a, .article-card').forEach(el => {
        observer.observe(el);
    });
});