// Advanced Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

// Smooth follower animation
function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
    
    requestAnimationFrame(animateFollower);
}
animateFollower();

// Cursor interactions
document.querySelectorAll('a, button, .service-card, .floating-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(1.5)';
        cursorFollower.style.borderColor = '#64b5f6';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
        cursorFollower.style.borderColor = 'rgba(44, 90, 160, 0.3)';
    });
});

// Particle System
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Advanced Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
            
            // Stagger animations for grid items
            if (entry.target.classList.contains('service-card') || 
                entry.target.classList.contains('approach-card') || 
                entry.target.classList.contains('value-card')) {
                const siblings = Array.from(entry.target.parentElement.children);
                const index = siblings.indexOf(entry.target);
                entry.target.style.animationDelay = (index * 0.1) + 's';
            }
        }
    });
}, observerOptions);

// Parallax Effects
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    // Parallax for floating cards
    document.querySelectorAll('.floating-card').forEach((card, index) => {
        const speed = 0.3 + (index * 0.1);
        card.style.transform = `translateY(${scrolled * speed}px) rotateY(${scrolled * 0.05}deg)`;
    });
    
    // Parallax for morphing backgrounds
    document.querySelectorAll('.morphing-bg').forEach((bg, index) => {
        const speed = 0.2 + (index * 0.1);
        bg.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.02}deg)`;
    });
});

// Advanced Navbar Effects
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.pageYOffset;
    
    if (scrolled > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        navbar.style.backdropFilter = 'blur(30px)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
        navbar.style.backdropFilter = 'blur(20px)';
    }
});

// Magnetic Button Effect
document.querySelectorAll('.btn-primary, .btn-secondary, .cta-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px) scale(1)';
    });
});

// Text Reveal Animation
function revealText() {
    const textElements = document.querySelectorAll('h1, h2, h3');
    
    textElements.forEach(el => {
        const text = el.textContent;
        el.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.opacity = '0';
            span.style.transform = 'translateY(50px)';
            span.style.transition = `all 0.5s ease ${index * 0.05}s`;
            el.appendChild(span);
        });
        
        // Trigger animation when element is visible
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('span').forEach(span => {
                        span.style.opacity = '1';
                        span.style.transform = 'translateY(0)';
                    });
                    revealObserver.unobserve(entry.target);
                }
            });
        });
        
        revealObserver.observe(el);
    });
}

// 3D Tilt Effect for Cards
document.querySelectorAll('.service-card, .approach-card, .value-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    revealText();
    
    // Observe elements for animations
    const animateElements = document.querySelectorAll('.service-card, .step, .approach-card, .value-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px) scale(0.9)';
        el.style.transition = 'all 0.8s ease';
        observer.observe(el);
    });
});

// Funding score animation
const animateScore = () => {
    const scoreNumber = document.querySelector('.score-number');
    const meterFill = document.querySelector('.meter-fill');
    
    if (scoreNumber && meterFill) {
        let currentScore = 0;
        const targetScore = 85;
        const duration = 2000;
        const increment = targetScore / (duration / 16);
        
        const timer = setInterval(() => {
            currentScore += increment;
            if (currentScore >= targetScore) {
                currentScore = targetScore;
                clearInterval(timer);
            }
            
            scoreNumber.textContent = Math.round(currentScore);
            
            // Update meter fill
            const percentage = (currentScore / 100) * 360;
            meterFill.style.background = `conic-gradient(#2c5aa0 0deg ${percentage}deg, #e3f2fd ${percentage}deg 360deg)`;
        }, 16);
    }
};

// Trigger score animation when section is visible
const scoreSection = document.querySelector('.funding-score');
if (scoreSection) {
    const scoreObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateScore();
                scoreObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    scoreObserver.observe(scoreSection);
}

// Form submission handling
document.querySelector('.application-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    const requiredFields = this.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            field.style.borderColor = '#e3f2fd';
        }
    });
    
    if (isValid) {
        // Show success message
        const button = this.querySelector('button');
        const originalText = button.textContent;
        button.textContent = 'Application Submitted!';
        button.style.background = '#27ae60';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '#2c5aa0';
            this.reset();
        }, 3000);
        
        // Here you would typically send the data to your server
        console.log('Form submitted:', data);
    }
});

// Floating cards animation enhancement
document.addEventListener('DOMContentLoaded', () => {
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach((card, index) => {
        // Add staggered entrance animation
        card.style.animationDelay = `${index * 0.3}s`;
        
        // Add hover effect
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.05)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });
});

// Service cards hover effect enhancement
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.borderColor = '#2c5aa0';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.borderColor = '#f0f4f8';
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroVisual) {
        const speed = scrolled * 0.5;
        heroVisual.style.transform = `translateY(${speed}px)`;
    }
});

// Stats counter animation
const animateStats = () => {
    const stats = document.querySelectorAll('.stat h3');
    
    stats.forEach(stat => {
        const text = stat.textContent;
        const hasNumber = text.match(/\d+/);
        
        if (hasNumber) {
            const number = parseInt(hasNumber[0]);
            let current = 0;
            const increment = number / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= number) {
                    current = number;
                    clearInterval(timer);
                }
                
                stat.textContent = text.replace(/\d+/, Math.round(current));
            }, 30);
        }
    });
};

// Trigger stats animation when hero is visible
const heroSection = document.querySelector('.hero');
if (heroSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(animateStats, 500);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    statsObserver.observe(heroSection);
}

// Mobile menu toggle (for future mobile menu implementation)
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    
    // Create mobile menu button
    const mobileButton = document.createElement('button');
    mobileButton.className = 'mobile-menu-btn';
    mobileButton.innerHTML = '☰';
    mobileButton.style.display = 'none';
    mobileButton.style.background = 'none';
    mobileButton.style.border = 'none';
    mobileButton.style.fontSize = '1.5rem';
    mobileButton.style.color = '#2c5aa0';
    mobileButton.style.cursor = 'pointer';
    
    navbar.querySelector('.nav-container').appendChild(mobileButton);
    
    // Toggle mobile menu
    mobileButton.addEventListener('click', () => {
        navMenu.classList.toggle('mobile-active');
    });
    
    // Show/hide mobile button based on screen size
    const checkScreenSize = () => {
        if (window.innerWidth <= 768) {
            mobileButton.style.display = 'block';
            navMenu.style.display = navMenu.classList.contains('mobile-active') ? 'flex' : 'none';
        } else {
            mobileButton.style.display = 'none';
            navMenu.style.display = 'flex';
        }
    };
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
};

// Initialize mobile menu
document.addEventListener('DOMContentLoaded', createMobileMenu);