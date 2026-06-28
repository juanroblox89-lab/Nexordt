// Particle Animation System
class ParticleSystem {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.particles = [];
        this.particleCount = 50;
        this.init();
    }

    init() {
        for (let i = 0; i < this.particleCount; i++) {
            this.createParticle();
        }
        this.animate();
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.backgroundColor = this.getRandomColor();
        
        this.container.appendChild(particle);
        
        this.particles.push({
            element: particle,
            x: parseFloat(particle.style.left),
            y: parseFloat(particle.style.top),
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            life: 1
        });
    }

    getRandomColor() {
        const colors = ['#00D4FF', '#00A8CC', 'rgba(0, 212, 255, 0.5)', 'rgba(0, 168, 204, 0.6)'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    animate() {
        this.particles.forEach((p, index) => {
            p.x += p.vx;
            p.y += p.vy;
            p.life -= 0.002;

            if (p.x < 0 || p.x > 100) p.vx *= -1;
            if (p.y < 0 || p.y > 100) p.vy *= -1;

            if (p.life <= 0) {
                p.element.remove();
                this.particles.splice(index, 1);
                this.createParticle();
            }

            p.element.style.left = p.x + '%';
            p.element.style.top = p.y + '%';
            p.element.opacity = p.life;
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize particles
document.addEventListener('DOMContentLoaded', () => {
    new ParticleSystem('particle-container');
});

// Scroll to section function
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// WhatsApp Integration
const whatsappNumbers = {
    'general': '+5491234567890',
    'base': '+5491234567890',
    'intermedio': '+5491234567890',
    'premium': '+5491234567890'
};

const whatsappMessages = {
    'general': 'Hola 👋 Me interesa conocer más sobre los servicios de NexorDT. ¿Podemos agendar una consulta?',
    'base': 'Hola 👋 Me interesa el Plan Base ($200k). ¿Me gustaría recibir más información y detalles?',
    'intermedio': 'Hola 👋 Me interesa el Plan Intermedio ($400k) con SEO local. ¿Cuál es el próximo paso?',
    'premium': 'Hola 👋 Me interesa el Plan Premium ($600k) con garantía 48h. ¿Cómo comenzamos?'
};

function openWhatsApp(plan = 'general') {
    const phoneNumber = whatsappNumbers[plan];
    const message = whatsappMessages[plan];
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// WhatsApp Button Handler
document.addEventListener('DOMContentLoaded', () => {
    const whatsappBtn = document.getElementById('whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openWhatsApp('general');
        });
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 212, 255, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// FAQ Accordion Enhancement
document.querySelectorAll('.faq-item summary').forEach(summary => {
    summary.addEventListener('click', function(e) {
        const details = this.parentElement;
        const isOpen = details.hasAttribute('open');
        
        // Close other open items
        document.querySelectorAll('.faq-item[open]').forEach(item => {
            if (item !== details) {
                item.removeAttribute('open');
            }
        });
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.animation = 'none';
    observer.observe(section);
});

// Mobile menu toggle
function setupMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Check if mobile
    if (window.innerWidth <= 768) {
        const menuBtn = document.createElement('button');
        menuBtn.className = 'mobile-menu-btn';
        menuBtn.innerHTML = '☰';
        menuBtn.style.cssText = `
            background: none;
            border: none;
            color: var(--accent);
            font-size: 24px;
            cursor: pointer;
            display: none;
        `;
        
        if (!document.querySelector('.mobile-menu-btn')) {
            navbar.appendChild(menuBtn);
            menuBtn.style.display = 'block';
            navLinks.style.display = 'none';
        }
    }
}

window.addEventListener('load', setupMobileMenu);
window.addEventListener('resize', setupMobileMenu);

// Contact form validation (if needed in future)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Analytics tracking (basic)
function trackEvent(category, action, label) {
    if (window.gtag) {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// Track plan selections
document.querySelectorAll('.btn-plan, .btn-premium').forEach(btn => {
    btn.addEventListener('click', function() {
        const planName = this.closest('.pricing-card').querySelector('h3').textContent;
        trackEvent('Pricing', 'Plan Selected', planName);
    });
});

// Smooth scroll to top on page load
window.addEventListener('load', () => {
    if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
});

// Active navbar link
function setActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', setActiveNavLink);

// Cursor tracking effect (optional premium feature)
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    // Could be used for parallax effects
    // document.body.style.setProperty('--mouse-x', mouseX);
    // document.body.style.setProperty('--mouse-y', mouseY);
});

console.log('✅ NexorDT Landing Page Loaded Successfully');
