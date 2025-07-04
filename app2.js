// Slideshow functionality
class Slideshow {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.isTransitioning = false;
        
        // Debug logging
        console.log('Slideshow initialized with', this.slides.length, 'slides');
        
        if (this.slides.length > 0) {
            this.init();
        } else {
            console.error('No slides found!');
        }
    }
    
    init() {
        // Ensure first slide is active
        this.slides[0].classList.add('active');
        this.indicators[0].classList.add('active');
        
        // Set up indicator click handlers
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                if (!this.isTransitioning) {
                    this.goToSlide(index);
                }
            });
        });
        
        // Start automatic slideshow after a short delay
        setTimeout(() => {
            this.startAutoSlide();
        }, 2000);
        
        // Pause on hover
        const slideshowContainer = document.querySelector('.slideshow-container');
        if (slideshowContainer) {
            slideshowContainer.addEventListener('mouseenter', () => {
                this.pauseAutoSlide();
            });
            
            slideshowContainer.addEventListener('mouseleave', () => {
                this.startAutoSlide();
            });
        }
        
        // Handle visibility change (pause when tab is not active)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pauseAutoSlide();
            } else {
                this.startAutoSlide();
            }
        });
        
        console.log('Slideshow initialized successfully');
    }
    
    goToSlide(index) {
        if (index === this.currentSlide || this.isTransitioning) return;
        
        this.isTransitioning = true;
        
        // Remove active class from current slide and indicator
        this.slides[this.currentSlide].classList.remove('active');
        this.indicators[this.currentSlide].classList.remove('active');
        
        // Update current slide index
        this.currentSlide = index;
        
        // Add active class to new slide and indicator
        this.slides[this.currentSlide].classList.add('active');
        this.indicators[this.currentSlide].classList.add('active');
        
        console.log('Switched to slide', index);
        
        // Reset transition flag after transition completes
        setTimeout(() => {
            this.isTransitioning = false;
        }, 1500); // Match CSS transition duration
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }
    
    startAutoSlide() {
        this.pauseAutoSlide(); // Clear any existing interval
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, 4500); // 4.5 seconds between slides
        console.log('Auto-slide started');
    }
    
    pauseAutoSlide() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
            console.log('Auto-slide paused');
        }
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
// Slideshow functionality
class Slideshow {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.isTransitioning = false;
        
        // Debug logging
        console.log('Slideshow initialized with', this.slides.length, 'slides');
        
        if (this.slides.length > 0) {
            this.init();
        } else {
            console.error('No slides found!');
        }
    }
    
    init() {
        // Ensure first slide is active
        this.slides[0].classList.add('active');
        this.indicators[0].classList.add('active');
        
        // Set up indicator click handlers
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                if (!this.isTransitioning) {
                    this.goToSlide(index);
                }
            });
        });
        
        // Start automatic slideshow after a short delay
        setTimeout(() => {
            this.startAutoSlide();
        }, 2000);
        
        // Pause on hover
        const slideshowContainer = document.querySelector('.slideshow-container');
        if (slideshowContainer) {
            slideshowContainer.addEventListener('mouseenter', () => {
                this.pauseAutoSlide();
            });
            
            slideshowContainer.addEventListener('mouseleave', () => {
                this.startAutoSlide();
            });
        }
        
        // Handle visibility change (pause when tab is not active)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pauseAutoSlide();
            } else {
                this.startAutoSlide();
            }
        });
        
        console.log('Slideshow initialized successfully');
    }
    
    goToSlide(index) {
        if (index === this.currentSlide || this.isTransitioning) return;
        
        this.isTransitioning = true;
        
        // Remove active class from current slide and indicator
        this.slides[this.currentSlide].classList.remove('active');
        this.indicators[this.currentSlide].classList.remove('active');
        
        // Update current slide index
        this.currentSlide = index;
        
        // Add active class to new slide and indicator
        this.slides[this.currentSlide].classList.add('active');
        this.indicators[this.currentSlide].classList.add('active');
        
        console.log('Switched to slide', index);
        
        // Reset transition flag after transition completes
        setTimeout(() => {
            this.isTransitioning = false;
        }, 1500); // Match CSS transition duration
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }
    
    startAutoSlide() {
        this.pauseAutoSlide(); // Clear any existing interval
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, 4500); // 4.5 seconds between slides
        console.log('Auto-slide started');
    }
    
    pauseAutoSlide() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
            console.log('Auto-slide paused');
        }
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

// Data for products (imported from application_data_json)
const productsData = {
  cables: {
    id: "cables",
    name: "고성능 케이블",
    category: "오디오 케이블",
    description:
      "오디오파일 등급의 신호 전송을 위한 프리미엄 오디오 케이블",
    features: [
      "은도금 OCC 구리 도체",
      "다층 전자파 차폐",
      "저인덕턴스 트위스트 페어 설계",
      "정밀 수작업 조립"
    ],
    specifications: {
      도체: "99.99% 은도금 OCC 구리",
      차폐: "쿼드 레이어 브레이드 차폐",
      임피던스: "75Ω ±3Ω",
      정전용량: "28pF/ft",
      길이: "0.5m ~ 10m 맞춤 제작"
    },
    image:
      "https://pplx-res.cloudinary.com/image/upload/v1751527759/pplx_project_search_images/db7e1ad503a2ac41eb663db448a720cc0deab747.jpg"
  },
  panels: {
    id: "panels",
    name: "음향 패널",
    category: "룸 트리트먼트",
    description:
      "최적의 음향 환경을 위한 정밀 제작 음향 처리 솔루션",
    features: [
      "천연 목재 베니어",
      "고흡음 어쿠스틱 폼 코어",
      "건축 통합 디자인",
      "난연 소재 (Class A rated)"
    ],
    specifications: {
      NRC: "0.85 - 0.95",
      두께: "25mm, 50mm, 75mm",
      규격: "600x600mm, 1200x600mm",
      마감: "오크, 월넛, 애쉬 베니어",
      설치: "히든 마그넷 또는 스크류 마운트"
    },
    image:
      "https://pplx-res.cloudinary.com/image/upload/v1751527759/pplx_project_search_images/04f81b42d97f64f673409c062f700cf410fdf69c.jpg"
  },
  subwoofers: {
    id: "subwoofers",
    name: "서브우퍼 스피커",
    category: "라우드스피커",
    description:
      "깊고 정확한 저음 재생을 위한 레퍼런스 급 서브우퍼",
    features: [
      "커스텀 롱쓰로우 드라이버",
      "강성 MDF 캐비닛",
      "고급 DSP 크로스오버",
      "다양한 연결 옵션"
    ],
    specifications: {
      주파수_응답: "18Hz - 200Hz (±3dB)",
      파워: "300W RMS / 1200W Peak",
      드라이버_크기: "12인치, 15인치, 18인치",
      SPL_max: "120dB @ 1m",
      크기: "모델별 상이"
    },
    image:
      "https://pplx-res.cloudinary.com/image/upload/v1751527760/pplx_project_search_images/052037da93f428e52485b521558912090b5d030d.jpg"
  }
};

// Helper function to populate modal
function populateModal(productKey) {
  const data = productsData[productKey];
  if (!data) return;

  document.getElementById("modalImage").src = data.image;
  document.getElementById("modalImage").alt = data.name;
  document.getElementById("modalTitle").textContent = data.name;
  document.getElementById("modalCategory").textContent = data.category;
  document.getElementById("modalDescription").textContent = data.description;

  // Features list
  const featuresEl = document.getElementById("modalFeatures");
  featuresEl.innerHTML = "";
  data.features.forEach((feat) => {
    const li = document.createElement("li");
    li.textContent = feat;
    featuresEl.appendChild(li);
  });

  // Specifications list
  const specsEl = document.getElementById("modalSpecs");
  specsEl.innerHTML = "";
  Object.entries(data.specifications).forEach(([key, value]) => {
    const specRow = document.createElement("div");
    specRow.classList.add("spec-item");
    const labelSpan = document.createElement("span");
    labelSpan.classList.add("spec-label");
    labelSpan.textContent = key;
    const valueSpan = document.createElement("span");
    valueSpan.textContent = value;
    specRow.appendChild(labelSpan);
    specRow.appendChild(valueSpan);
    specsEl.appendChild(specRow);
  });
}

// Event listeners for product cards
const productCards = document.querySelectorAll(".product-card");
const modal = document.getElementById("productModal");
const modalClose = document.querySelector(".modal-close");

productCards.forEach((card) => {
  card.addEventListener("click", () => {
    const key = card.getAttribute("data-product");
    populateModal(key);
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// Scroll reveal animation for sections
const observerOptions = {
  threshold: 0.1
};

const revealCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("loaded");
      observer.unobserve(entry.target);
    }
  });
};

const fadeObserver = new IntersectionObserver(revealCallback, observerOptions);

document.querySelectorAll(".loading").forEach((el) => {
  fadeObserver.observe(el);
});

// Smooth scrolling for nav links
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth"
        });
      }
    }
  });
});
