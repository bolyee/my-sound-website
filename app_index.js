// Slideshow functionality
class Slideshow {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.prevButton = document.querySelector('.slideshow-arrow.prev');
        this.nextButton = document.querySelector('.slideshow-arrow.next');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.isTransitioning = false;
        
        if (this.slides.length > 0) {
            this.init();
        }
    }
    
    init() {
        this.slides[0].classList.add('active');
        this.indicators[0].classList.add('active');
        
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                if (!this.isTransitioning) {
                    this.goToSlide(index);
                    this.resetAutoSlide();
                }
            });
        });

        this.prevButton.addEventListener('click', () => {
            if (!this.isTransitioning) {
                this.prevSlide();
                this.resetAutoSlide();
            }
        });

        this.nextButton.addEventListener('click', () => {
            if (!this.isTransitioning) {
                this.nextSlide();
                this.resetAutoSlide();
            }
        });
        
        this.startAutoSlide();
        
        const slideshowContainer = document.querySelector('.slideshow-container');
        if (slideshowContainer) {
            slideshowContainer.addEventListener('mouseenter', () => this.pauseAutoSlide());
            slideshowContainer.addEventListener('mouseleave', () => this.startAutoSlide());
        }
        
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pauseAutoSlide();
            } else {
                this.startAutoSlide();
            }
        });
    }
    
    goToSlide(index) {
        if (index === this.currentSlide || this.isTransitioning) return;
        
        this.isTransitioning = true;
        
        this.slides[this.currentSlide].classList.remove('active');
        this.indicators[this.currentSlide].classList.remove('active');
        
        this.currentSlide = index;
        
        this.slides[this.currentSlide].classList.add('active');
        this.indicators[this.currentSlide].classList.add('active');
        
        setTimeout(() => {
            this.isTransitioning = false;
        }, 1500);
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }

    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevIndex);
    }
    
    startAutoSlide() {
        this.pauseAutoSlide();
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, 4500);
    }
    
    pauseAutoSlide() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }

    resetAutoSlide() {
        this.pauseAutoSlide();
        this.startAutoSlide();
    }
}

// Smooth scrolling for internal links
function smoothScrollToSection(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Header scroll effect
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
            header.style.backdropFilter = 'blur(15px)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.9)';
            header.style.backdropFilter = 'blur(10px)';
        }
    });
}

// Intersection Observer for fade-in animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe service items
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
        observer.observe(item);
    });
    
    // Observe description content
    const descriptionContent = document.querySelector('.description-content');
    if (descriptionContent) {
        descriptionContent.style.opacity = '0';
        descriptionContent.style.transform = 'translateY(20px)';
        descriptionContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(descriptionContent);
    }
}

// Performance optimization: Preload images
function preloadImages() {
    const imageUrls = [
        'https://images.stockcake.com/public/7/f/4/7f4c9361-0581-4570-980d-673f59057f99_large/professional-audio-paradise-stockcake.jpg',
        'https://pplx-res.cloudinary.com/image/upload/v1748845369/pplx_project_search_images/6a1d35723710b310b584fa98cf0705cba1c39f57.jpg',
        'https://pplx-res.cloudinary.com/image/upload/v1751522596/pplx_project_search_images/612cccd120bb1f975120a1cf3c8cd96197dae4ff.jpg',
        'https://pplx-res.cloudinary.com/image/upload/v1751522596/pplx_project_search_images/98164db20885d29b33381a96be9ce2f429cec467.jpg',
        'https://pplx-res.cloudinary.com/image/upload/v1748564227/pplx_project_search_images/f79bdd909ff774afdd80d713276c74e8432d76ee.jpg'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
        img.onload = () => console.log('Preloaded:', url);
        img.onerror = () => console.warn('Failed to preload:', url);
    });
}

// Enhanced contact link interactions
function setupContactInteractions() {
    const contactLinks = document.querySelectorAll('.contact-link');
    
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}

// Error handling for images
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.warn('Failed to load image:', this.src);
            this.style.opacity = '0.3';
            this.style.backgroundColor = '#2d2d2d';
            this.alt = 'Image unavailable';
        });
        
        img.addEventListener('load', function() {
            console.log('Image loaded:', this.src);
            this.style.opacity = '1';
        });
    });
}

// Force show all sections (fallback)
function forceShowSections() {
    const sections = ['.slideshow-section', '.description-section', '.footer'];
    sections.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.display = 'block';
            element.style.visibility = 'visible';
            element.style.opacity = '1';
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing application...');
    
    try {
        // Force show all sections first
        forceShowSections();
        
        // Add loaded class to body
        document.body.classList.add('loaded');
        
        // Initialize slideshow with a delay to ensure DOM is ready
        setTimeout(() => {
            new Slideshow();
        }, 100);
        
        // Setup other features
        handleHeaderScroll();
        setupScrollAnimations();
        setupContactInteractions();
        handleImageErrors();
        
        // Preload images
        preloadImages();
        
        console.log('Application initialized successfully');
        
    } catch (error) {
        console.error('Error initializing application:', error);
    }
});

// Fallback initialization if DOMContentLoaded doesn't fire
window.addEventListener('load', () => {
    console.log('Window loaded - fallback initialization');
    
    // Check if slideshow exists, if not try to initialize again
    if (!document.querySelector('.slide.active')) {
        console.log('Slideshow not found, trying again...');
        setTimeout(() => {
            new Slideshow();
        }, 500);
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(() => {
        console.log('Window resized');
    }, 250);
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Page is now hidden');
    } else {
        console.log('Page is now visible');
    }
});

// Debug function to manually trigger slideshow
window.debugSlideshow = function() {
    console.log('Manual slideshow debug');
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    console.log('Found', slides.length, 'slides and', indicators.length, 'indicators');
    
    if (slides.length > 0) {
        new Slideshow();
    }
};