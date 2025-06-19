// Loading Animation
window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    if (loading) {
        setTimeout(() => {
            loading.style.display = 'none';
        }, 2000);
    }
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
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

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .about-text p');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 500);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Skill card hover effects
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Initialize EmailJS and contact form handling with EmailJS

document.addEventListener('DOMContentLoaded', function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init("GrQC86k2Bn5pSozFR");

        // Contact form handling with EmailJS
        var contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();

                const form = this;
                const name = form.querySelector('input[type="text"]').value;
                const email = form.querySelector('input[type="email"]').value;
                const message = form.querySelector('textarea').value;

                if (!name || !email || !message) {
                    // Optionally show a validation popup here
                    return;
                }

                // Show loading state
                const submitBtn = form.querySelector('.submit-btn');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;

                // Prepare template params
                const templateParams = {
                    from_name: name,
                    from_email: email,
                    message: message,
                    to_name: "Nabeel"
                };

                emailjs.send('service_0nhokak', 'template_10l6adv', templateParams)
                    .then(function(response) {
                        // Show custom popup
                        const popup = document.getElementById('custom-popup');
                        popup.classList.add('active');
                        form.reset();
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    }, function(error) {
                        alert('Failed to send message. Please try again later.');
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    });
            });
        }
    } else {
        console.error('EmailJS library is not loaded.');
    }
});

// Custom popup close logic
document.getElementById('custom-popup-close').onclick = function () {
    document.getElementById('custom-popup').classList.remove('active');
};

// Optional: close popup on outside click
document.getElementById('custom-popup').addEventListener('click', function (e) {
    if (e.target === this) {
        this.classList.remove('active');
    }
});

// Add loading screen
const loadingScreen = document.createElement('div');
loadingScreen.className = 'loading';
document.body.appendChild(loadingScreen);

// Remove loading screen after page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 2000);
});

// Add floating particles effect
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.background = 'rgba(108, 92, 231, 0.5)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1';

    // Random position
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';

    document.body.appendChild(particle);

    // Animate particle
    const animation = particle.animate([
        { transform: 'translateY(0px)', opacity: 1 },
        { transform: `translateY(-${window.innerHeight}px)`, opacity: 0 }
    ], {
        duration: Math.random() * 3000 + 2000,
        easing: 'linear'
    });

    animation.onfinish = () => {
        particle.remove();
    };
}

// Create particles periodically
setInterval(createParticle, 300);

// Add cursor trail effect
let mouseX = 0;
let mouseY = 0;
let trail = [];

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Create trail element
    const trailElement = document.createElement('div');
    trailElement.style.position = 'fixed';
    trailElement.style.width = '6px';
    trailElement.style.height = '6px';
    trailElement.style.background = '#0ff';
    trailElement.style.borderRadius = '50%';
    trailElement.style.pointerEvents = 'none';
    trailElement.style.zIndex = '9999';
    trailElement.style.left = mouseX - 3 + 'px';
    trailElement.style.top = mouseY - 3 + 'px';

    document.body.appendChild(trailElement);

    // Animate trail element
    const animation = trailElement.animate([
        { transform: 'scale(1)', opacity: 0.8 },
        { transform: 'scale(0)', opacity: 0 }
    ], {
        duration: 500,
        easing: 'ease-out'
    });

    animation.onfinish = () => {
        trailElement.remove();
    };

    trail.push(trailElement);

    // Limit trail length
    if (trail.length > 10) {
        trail.shift().remove();
    }
});

// Project popup logic
const projectData = [
    {
        title: 'Neon Portfolio',
        img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
        desc: 'A blazing-fast, responsive portfolio built with React, Next.js, and Bootstrap. Features dark mode, animated transitions, and a CMS-powered blog.',
        tags: ['React', 'Next.js', 'Bootstrap', 'Portfolio', 'Dark Mode']
    },
    {
        title: 'ShopNest',
        img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
        desc: 'Full-featured e-commerce platform using NestJS, React, and Stripe. Includes real-time inventory, user authentication, and admin dashboard.',
        tags: ['NestJS', 'React', 'Stripe', 'E-Commerce', 'Admin']
    },
    {
        title: 'InsightX',
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        desc: 'Interactive analytics dashboard built with Django and Bootstrap. Visualizes big data with custom charts, export features, and user roles.',
        tags: ['Django', 'Bootstrap', 'Analytics', 'Dashboard', 'Charts']
    },
    {
        title: 'WP Creators Hub',
        img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
        desc: 'Modern WordPress site with custom theme, advanced Gutenberg blocks, and seamless integration with social media and newsletter tools.',
        tags: ['WordPress', 'Gutenberg', 'Custom Theme', 'Newsletter', 'Social Media']
    }
];

const projectLinks = document.querySelectorAll('.project-link');
projectLinks.forEach((btn, idx) => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const data = projectData[idx];
        if (!data) return;
        const popup = document.getElementById('project-popup');
        const body = document.getElementById('project-popup-body');
        body.innerHTML = `
            <img src="${data.img}" alt="${data.title}" class="project-popup-img" />
            <div class="project-popup-title">${data.title}</div>
            <div class="project-popup-desc">${data.desc}</div>
            <div class="project-popup-tags">
                ${data.tags.map(tag => `<span class='project-popup-tag'>${tag}</span>`).join(' ')}
            </div>
        `;
        popup.classList.add('active');
    });
});

document.getElementById('project-popup-close').onclick = function () {
    document.getElementById('project-popup').classList.remove('active');
};
document.getElementById('project-popup').addEventListener('click', function (e) {
    if (e.target === this) {
        this.classList.remove('active');
    }
});

window.addEventListener('load', () => {
    const skeleton = document.getElementById('skeleton-loader');
    if (skeleton) {
        skeleton.style.opacity = 0;
        setTimeout(() => skeleton.style.display = 'none', 400);
    }
});

// Set dynamic year in footer
window.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.querySelector('.mobile-nav-overlay');

function closeMobileMenu() {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
    navOverlay.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

if (navToggle && navLinks && navOverlay) {
    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        navToggle.classList.toggle('active');
        navOverlay.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    navOverlay.addEventListener('click', closeMobileMenu);
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

const mobileMenuClose = document.querySelector('.mobile-menu-close');
if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
} 