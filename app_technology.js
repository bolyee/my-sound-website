// Technology data
const technologies = [
  {
    id: 1,
    name: "3-OMNI-5-4",
    category: "room-acoustics-measurement",
    type: "Studio Monitors",
    description: "High-precision near-field monitors delivering accurate audio reproduction with flat frequency response for professional mixing and mastering.",
    image: "room acoustics measurement/3-OMNI-5-4.jpg"
  },
  {
    id: 2,
    name: "earthworks_measurement_M30",
    category: "room-acoustics-measurement", 
    type: "Audio Interface",
    description: "Professional 18-input, 20-output USB audio interface with premium preamps and crystal-clear sound quality for multi-track recording.",
    image: "room acoustics measurement/earthworks_measurement_M30.jpg"
  },
  {
    id: 3,
    name: "images",
    category: "room-acoustics-measurement",
    type: "Digital Mixer", 
    description: "Advanced digital mixing console featuring intuitive operation, superior sound quality, and comprehensive connectivity for live and studio applications.",
    image: "room acoustics measurement/images.jpg"
  },
  {
    id: 4,
    name: "kit-xl2",
    category: "room-acoustics-measurement",
    type: "Instrument Microphone",
    description: "Premium condenser microphone with CORE+ technology, delivering pristine natural sound with exceptional isolation and off-axis rejection.",
    image: "room acoustics measurement/kit-xl2.webp"
  },
  {
    id: 5,
    name: "RME", 
    category: "room-acoustics-measurement",
    type: "Active Monitor",
    description: "Three-way active studio monitor with advanced DSP processing, providing accurate sound reproduction and intelligent room adaptation features.",
    image: "room acoustics measurement/RME.png"
  },
  {
    id: 6,
    name: "turntable",
    category: "room-acoustics-measurement",
    type: "Audio Interface", 
    description: "Twin-channel USB audio interface with real-time DSP processing, featuring UA's renowned microphone preamps and professional conversion quality.",
    image: "room acoustics measurement/turntable.jpg"
  },
  {
    id: 7,
    name: "fine-cone-hero",
    category: "speaker-design-software",
    type: "Dynamic Microphone",
    description: "Professional broadcast-quality dynamic microphone optimized for podcasting, streaming, and vocal recording with built-in USB connectivity.",
    image: "speaker design software/fine-cone-hero.jpg"
  },
  {
    id: 8,
    name: "FINE-X-over-Full",
    category: "speaker-design-software",
    type: "Digital Console",
    description: "Professional 32-channel digital mixing console with premium Midas preamps, advanced processing capabilities, and comprehensive live sound features.",
    image: "speaker design software/FINE-X-over-Full.webp"
  },
  {
    id: 9,
    name: "finebox",
    category: "speaker-design-software",
    type: "Digital Audio Workstation",
    description: "Industry-standard DAW for professional audio production, offering advanced recording, editing, mixing, and mastering capabilities.",
    image: "speaker design software/finebox.jpg"
  },
  {
    id: 10,
    name: "FINEMotorPRO-FEA",
    category: "speaker-design-software",
    type: "Acoustic Measurement",
    description: "Comprehensive room acoustics measurement software for speaker placement optimization, room correction, and acoustic analysis.",
    image: "speaker design software/FINEMotorPRO-FEA.webp"
  },
  {
    id: 11,
    name: "APx555-B-Series",
    category: "speaker-microphone-measurement", 
    type: "Acoustic Simulation",
    description: "Professional electro-acoustic simulation software for sound system design, room acoustics modeling, and loudspeaker system optimization.",
    image: "speaker microphone measurement/APx555-B-Series.png"
  },
  {
    id: 12,
    name: "audiology_ear_simulators_couplers",
    category: "speaker-microphone-measurement",
    type: "Creative DAW", 
    description: "Advanced digital audio workstation designed for music production, live performance, and creative sound design with innovative workflow features.",
    image: "speaker microphone measurement/audiology_ear_simulators_couplers.jpg"
  },
  {
    id: 13,
    name: "B&K 4128C",
    category: "speaker-microphone-measurement",
    type: "Sound Design Platform",
    description: "Comprehensive sound effects library and management platform with AI-powered search and seamless DAW integration for sound designers.",
    image: "speaker microphone measurement/B&K 4128C.jpg"
  },
  {
    id: 14,
    name: "Fn-dsx-8000mi_01f_ko",
    category: "speaker-microphone-measurement",
    type: "Audio Analysis", 
    description: "Real-time audio analysis and measurement software for acoustic testing, frequency response analysis, and audio system optimization.",
    image: "speaker microphone measurement/Fn-dsx-8000mi_01f_ko.jpg"
  },
  {
    id: 15,
    name: "kit-xl2",
    category: "speaker-microphone-measurement",
    type: "Video Audio DAW",
    description: "Specialized digital audio workstation for video post-production, featuring AI-powered sound design tools and extensive royalty-free libraries.",
    image: "speaker microphone measurement/kit-xl2.webp"
  },
  {
    id: 16,
    name: "klippel production analyzer",
    category: "speaker-microphone-measurement",
    type: "Sound Level Meter",
    description: "Professional Class 1 sound level analyzer with comprehensive measurement capabilities for acoustic and audio testing applications.",
    image: "speaker microphone measurement/klippel production analyzer.png"
  },
  {
    id: 17,
    name: "LibreVNA-2-0-100KHz-6GHz-USB-2-6-PCB",
    category: "speaker-microphone-measurement",
    type: "Measurement Microphone",
    description: "Precision measurement microphone with exceptional accuracy and stability for professional acoustic testing and calibration applications.",
    image: "speaker microphone measurement/LibreVNA-2-0-100KHz-6GHz-USB-2-6-PCB.webp"
  },
  {
    id: 18,
    name: "listen ampconnect",
    category: "speaker-microphone-measurement",
    type: "Audio Analyzer",
    description: "Portable two-channel audio test instrument for precision audio system alignment, testing, and troubleshooting in field applications.",
    image: "speaker microphone measurement/listen ampconnect.jpg"
  }
];

// Global variables
let currentFilter = 'all';
let technologyGrid = null;
let categoryButtons = null;

// Create technology card HTML
function createTechnologyCard(tech) {
  return `
    <div class="tech-card" data-category="${tech.category}" data-id="${tech.id}">
      <img src="${tech.image}" alt="${tech.name}" class="tech-card__image" loading="lazy" onerror="this.style.display='none'">
      <div class="tech-card__content">
        <div class="tech-card__header">
          <h3 class="tech-card__name">${tech.name}</h3>
          <span class="tech-card__type">${tech.type}</span>
        </div>
        <p class="tech-card__description">${tech.description}</p>
      </div>
    </div>
  `;
}

// Render technology cards with animation
function renderTechnology(filter = 'all') {
  if (!technologyGrid) return;
  
  let filteredTech = technologies;
  
  if (filter !== 'all') {
    filteredTech = technologies.filter(tech => tech.category === filter);
  }
  
  // Clear existing content
  technologyGrid.innerHTML = '';
  
  // Add filtered cards
  filteredTech.forEach((tech, index) => {
    const cardHTML = createTechnologyCard(tech);
    technologyGrid.insertAdjacentHTML('beforeend', cardHTML);
  });
  
  // Add staggered animation
  const cards = technologyGrid.querySelectorAll('.tech-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 50);
  });
}

// Handle category filtering
function handleCategoryFilter(category) {
  if (currentFilter === category) return;
  
  currentFilter = category;
  
  // Update active button
  if (categoryButtons) {
    categoryButtons.forEach(btn => {
      btn.classList.remove('category-btn--active');
      if (btn.dataset.category === category) {
        btn.classList.add('category-btn--active');
      }
    });
  }
  
  // Render filtered technology with animation
  renderTechnology(category);
}

// Initialize category buttons
function initializeCategoryButtons() {
  categoryButtons = document.querySelectorAll('.category-btn');
  
  categoryButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const category = button.dataset.category;
      handleCategoryFilter(category);
    });
  });
}

// Initialize the grid
function initializeGrid() {
  technologyGrid = document.getElementById('technology-grid');
  if (!technologyGrid) {
    console.error('Technology grid element not found');
    return;
  }
  
  // Initial render
  renderTechnology('all');
}

// Handle image loading errors
function handleImageError(event) {
  const img = event.target;
  img.style.display = 'none';
  
  // Add a placeholder or alternative styling
  const card = img.closest('.tech-card');
  if (card) {
    card.classList.add('tech-card--no-image');
  }
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
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
}

// Mobile navigation toggle
function initializeMobileNav() {
  const createMobileToggle = () => {
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header');
    
    if (window.innerWidth <= 768) {
      if (!header.querySelector('.nav-toggle')) {
        const toggle = document.createElement('button');
        toggle.className = 'nav-toggle';
        toggle.innerHTML = '☰';
        toggle.setAttribute('aria-label', 'Toggle navigation');
        toggle.style.cssText = `
          background: none;
          border: none;
          color: #d4af37;
          font-size: 24px;
          cursor: pointer;
          display: block;
          padding: 8px;
          transition: transform 0.3s ease;
        `;
        
        toggle.addEventListener('click', () => {
          nav.classList.toggle('nav--open');
          toggle.style.transform = nav.classList.contains('nav--open') ? 'rotate(90deg)' : 'rotate(0deg)';
        });
        
        header.querySelector('.header__content').appendChild(toggle);
        
        // Add mobile nav styles
        if (nav && !nav.classList.contains('nav--mobile-ready')) {
          nav.classList.add('nav--mobile-ready');
          nav.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #000;
            flex-direction: column;
            padding: 20px;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            border-top: 1px solid #333;
          `;
          
          const style = document.createElement('style');
          style.textContent = `
            .nav--open {
              transform: translateY(0) !important;
              opacity: 1 !important;
              visibility: visible !important;
            }
          `;
          document.head.appendChild(style);
        }
      }
    } else {
      // Remove mobile toggle on larger screens
      const toggle = header.querySelector('.nav-toggle');
      if (toggle) {
        toggle.remove();
      }
      
      // Reset nav styles
      if (nav) {
        nav.style.cssText = '';
        nav.classList.remove('nav--open', 'nav--mobile-ready');
      }
    }
  };
  
  // Create toggle on load and resize
  createMobileToggle();
  window.addEventListener('resize', createMobileToggle);
}

// Initialize intersection observer for animations
function initializeIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('tech-card--visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '50px'
  });
  
  // Observe existing cards
  const observeCards = () => {
    const cards = document.querySelectorAll('.tech-card:not(.tech-card--visible)');
    cards.forEach(card => observer.observe(card));
  };
  
  // Initial observation
  setTimeout(observeCards, 100);
  
  // Re-observe after filtering
  document.addEventListener('filter-complete', observeCards);
}

// Main initialization function
function initialize() {
  // Initialize components
  initializeGrid();
  initializeCategoryButtons();
  initializeSmoothScrolling();
  initializeMobileNav();
  initializeIntersectionObserver();
  
  // Add global error handling for images
  document.addEventListener('error', handleImageError, true);
  
  console.log('A49 Technology page initialized successfully');
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  initialize();
}
