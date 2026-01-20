// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Counter animation for stats
const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
};

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate counters
            if (entry.target.classList.contains('stat-number')) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }

            // Fade in cards
            if (entry.target.classList.contains('servico-card') || 
                entry.target.classList.contains('galeria-item')) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.stat-number').forEach(stat => {
    observer.observe(stat);
});

document.querySelectorAll('.servico-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

document.querySelectorAll('.galeria-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.animationDelay = `${index * 0.1}s`;
    observer.observe(item);
});

// Testimonials Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.depoimento-card');
const totalTestimonials = testimonials.length;

const showTestimonial = (index) => {
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });
    testimonials[index].classList.add('active');
};

document.querySelector('.depo-next').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
});

document.querySelector('.depo-prev').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentTestimonial);
});

// Auto-advance testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
}, 5000);

// Form Submission
const contatoForm = document.getElementById('contatoForm');

contatoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contatoForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    // For now, we'll just show an alert and reset the form
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    contatoForm.reset();
    
    // Optional: Send to WhatsApp
    // const message = `Nome: ${data.nome}\nEmail: ${data.email}\nTelefone: ${data.telefone}\nServiço: ${data.servico}\nMensagem: ${data.mensagem}`;
    // const whatsappUrl = `https://wa.me/5500000000000?text=${encodeURIComponent(message)}`;
    // window.open(whatsappUrl, '_blank');
});

// Add loading animation to service cards
document.querySelectorAll('.servico-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add hover effect to gallery items
document.querySelectorAll('.galeria-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.querySelector('.galeria-placeholder').style.transform = 'scale(1.1)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.querySelector('.galeria-placeholder').style.transform = 'scale(1)';
    });
});

// Lazy loading for images (when you add real images)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add active class to current nav item on scroll
const sections = document.querySelectorAll('section[id]');

const highlightNav = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
};

window.addEventListener('scroll', highlightNav);

// Galeria Modal
let currentImageIndex = 0;
let galleryImages = [];

function openModal(element) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const img = element.querySelector('img');
    
    galleryImages = Array.from(document.querySelectorAll('.galeria-item img'));
    currentImageIndex = galleryImages.indexOf(img);
    
    modalImg.src = img.src;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function navigateImage(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    } else if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }
    
    const modalImg = document.getElementById('modalImage');
    modalImg.src = galleryImages[currentImageIndex].src;
}

// Fechar modal com ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    } else if (e.key === 'ArrowLeft') {
        navigateImage(-1);
    } else if (e.key === 'ArrowRight') {
        navigateImage(1);
    }
});

// Fechar modal ao clicar fora da imagem
document.getElementById('imageModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Console welcome message
console.log('%c🚗 EG Estética Automotiva', 'font-size: 20px; font-weight: bold; color: #e74c3c;');
console.log('%cSite desenvolvido com tecnologias modernas', 'font-size: 12px; color: #2c3e50;');
