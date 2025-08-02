// Filter Products Function
function filterProducts() {
    const metalFilter = document.getElementById('metal-filter').value;
    const weightFilter = document.getElementById('weight-filter').value;
    const priceFilter = document.getElementById('price-filter').value;
    const items = document.querySelectorAll('.collection-item');

    items.forEach(item => {
        const metal = item.dataset.metal;
        const weight = item.dataset.weight;
        const price = item.dataset.price;

        const metalMatch = metalFilter === 'all' || metal === metalFilter;
        const weightMatch = weightFilter === 'all' || weight === weightFilter;
        const priceMatch = priceFilter === 'all' || price === priceFilter;

        if (metalMatch && weightMatch && priceMatch) {
            item.style.display = 'block';
            item.style.animation = 'fadeInUp 0.5s ease-out';
        } else {
            item.style.display = 'none';
        }
    });
}

// View Collection Function
function viewCollection(type) {
    alert(`Opening ${type} collection! This would navigate to a detailed product page.`);
}

// Virtual Try-On Function
function startTryOn() {
    const status = document.getElementById('tryon-status');
    status.textContent = '📱 Initializing camera... Please allow camera access to continue.';
   
    setTimeout(() => {
        status.textContent = '✨ Virtual try-on ready! Select a piece of jewelry to see how it looks on you.';
    }, 2000);
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll animation for elements coming into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.collection-item, .testimonial, .video-item').forEach(el => {
        observer.observe(el);
    });

    // Add loading animation to video placeholders
    document.querySelectorAll('.video-placeholder').forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            this.innerHTML = '⏳';
            setTimeout(() => {
                this.innerHTML = '▶️';
                alert('This would open the actual YouTube video!');
            }, 1000);
        });
    });

    // Add hover effects to payment icons
    document.querySelectorAll('.payment-icon').forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
       
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add interactive effects to collection images
    document.querySelectorAll('.collection-image').forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
       
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add click effects to testimonials
    document.querySelectorAll('.testimonial').forEach(testimonial => {
        testimonial.addEventListener('click', function() {
            this.style.boxShadow = '0 20px 60px rgba(231, 76, 60, 0.3)';
            setTimeout(() => {
                this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            }, 500);
        });
    });

    // Initialize filter functionality
    const filters = document.querySelectorAll('#metal-filter, #weight-filter, #price-filter');
    filters.forEach(filter => {
        filter.addEventListener('change', function() {
            // Add visual feedback when filtering
            const grid = document.getElementById('collection-grid');
            grid.style.opacity = '0.7';
            setTimeout(() => {
                grid.style.opacity = '1';
            }, 300);
        });
    });

    // Add welcome animation
    setTimeout(() => {
        const logo = document.querySelector('.logo');
        logo.style.animation = 'pulse 2s infinite';
    }, 2000);
});

// Add CSS for pulse animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);
