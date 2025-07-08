// DOM Elements
const companyCards = document.querySelectorAll('.company-card');
const missionStatement = document.querySelector('.mission-statement');
const navLinks = document.querySelectorAll('.nav-link');

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Initialize animations
function initAnimations() {
    // Observe company cards
    companyCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(card);
    });
    
    // Observe mission statement
    if (missionStatement) {
        observer.observe(missionStatement);
    }
}

// Navigation functionality
function initNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('nav-link--active'));
            
            // Add active class to clicked link
            link.classList.add('nav-link--active');
            
            // Get the target section
            const targetId = link.getAttribute('href').substring(1);
            
            // Simulate navigation (since this is a single page)
            if (targetId === 'home') {
                showNotification('홈 페이지로 이동합니다.');
            } else if (targetId === 'products') {
                showNotification('제품 페이지로 이동합니다.');
            } else if (targetId === 'about') {
                showNotification('현재 About Us 페이지입니다.');
            } else if (targetId === 'contact') {
                showNotification('연락처 페이지로 이동합니다.');
            }
        });
    });
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: #d4af37;
        color: #000000;
        padding: 12px 20px;
        border-radius: 8px;
        font-weight: 500;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transform: translateX(100%);
        transition: transform 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Smooth scroll to sections
function smoothScrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '#000000';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Add loading animation to CEO image
function initImageLoading() {
    const ceoImage = document.querySelector('.ceo-image img');
    const signatureImage = document.querySelector('.ceo-signature img');
    
    if (ceoImage) {
        ceoImage.addEventListener('load', () => {
            ceoImage.style.opacity = '0';
            ceoImage.style.transform = 'scale(0.8)';
            ceoImage.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            
            setTimeout(() => {
                ceoImage.style.opacity = '1';
                ceoImage.style.transform = 'scale(1)';
            }, 100);
        });
    }
    
    if (signatureImage) {
        signatureImage.addEventListener('load', () => {
            signatureImage.style.opacity = '0';
            signatureImage.style.transition = 'opacity 0.8s ease-out';
            
            setTimeout(() => {
                signatureImage.style.opacity = '1';
            }, 500);
        });
    }
}

// Add hover effects to company cards
function initCardHoverEffects() {
    companyCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
            card.style.boxShadow = '0 16px 48px rgba(212, 175, 55, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 8px 32px rgba(212, 175, 55, 0.1)';
        });
    });
}

// Add typing effect to CEO message
function initTypingEffect() {
    const messageElements = document.querySelectorAll('.ceo-message p');
    
    messageElements.forEach((element, index) => {
        const text = element.textContent;
        element.textContent = '';
        element.style.opacity = '0';
        
        setTimeout(() => {
            element.style.opacity = '1';
            let charIndex = 0;
            
            const typeWriter = () => {
                if (charIndex < text.length) {
                    element.textContent += text.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeWriter, 30);
                }
            };
            
            typeWriter();
        }, index * 1000);
    });
}

// Initialize parallax effect for sections
function initParallaxEffect() {
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        sections.forEach((section, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrollY * speed);
            section.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Add click effect to map placeholder
function initMapInteraction() {
    const mapPlaceholder = document.querySelector('.map-placeholder');
    
    if (mapPlaceholder) {
        mapPlaceholder.addEventListener('click', () => {
            showNotification('실제 구현 시 구글 지도 또는 카카오 지도가 표시됩니다.');
        });
        
        mapPlaceholder.style.cursor = 'pointer';
    }
}

// Initialize all functionality
function init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initAnimations();
            initNavigation();
            initHeaderScroll();
            initImageLoading();
            initCardHoverEffects();
            initMapInteraction();
        });
    } else {
        initAnimations();
        initNavigation();
        initHeaderScroll();
        initImageLoading();
        initCardHoverEffects();
        initMapInteraction();
    }
}

// Start the application
init();

// Add some utility functions
const utils = {
    // Debounce function for performance
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Check if element is in viewport
    isInViewport: (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// Export utils for potential use
window.A49Utils = utils;