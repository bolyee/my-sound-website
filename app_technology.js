// Technology data
const technologies = [
  {
    id: 1,
    name: "KRK Rokit RP8 G4",
    category: "audio-equipment",
    type: "Studio Monitors",
    description: "High-precision near-field monitors delivering accurate audio reproduction with flat frequency response for professional mixing and mastering.",
    image: "https://images.stockcake.com/public/7/f/4/7f4c9361-0581-4570-980d-673f59057f99_large/professional-audio-paradise-stockcake.jpg"
  },
  {
    id: 2,
    name: "Focusrite Scarlett 18i20",
    category: "audio-equipment", 
    type: "Audio Interface",
    description: "Professional 18-input, 20-output USB audio interface with premium preamps and crystal-clear sound quality for multi-track recording.",
    image: "https://pplx-res.cloudinary.com/image/upload/v1748845369/pplx_project_search_images/6a1d35723710b310b584fa98cf0705cba1c39f57.jpg"
  },
  {
    id: 3,
    name: "Yamaha DM7 Series",
    category: "audio-equipment",
    type: "Digital Mixer", 
    description: "Advanced digital mixing console featuring intuitive operation, superior sound quality, and comprehensive connectivity for live and studio applications.",
    image: "https://pplx-res.cloudinary.com/image/upload/v1751522596/pplx_project_search_images/612cccd120bb1f975120a1cf3c8cd96197dae4ff.jpg"
  },
  {
    id: 4,
    name: "DPA 4099 CORE+",
    category: "audio-equipment",
    type: "Instrument Microphone",
    description: "Premium condenser microphone with CORE+ technology, delivering pristine natural sound with exceptional isolation and off-axis rejection.",
    image: "https://pplx-res.cloudinary.com/image/upload/v1751522596/pplx_project_search_images/98164db20885d29b33381a96be9ce2f429cec467.jpg"
  },
  {
    id: 5,
    name: "Genelec 8341A", 
    category: "audio-equipment",
    type: "Active Monitor",
    description: "Three-way active studio monitor with advanced DSP processing, providing accurate sound reproduction and intelligent room adaptation features.",
    image: "https://pplx-res.cloudinary.com/image/upload/v1748564227/pplx_project_search_images/f79bdd909ff774afdd80d713276c74e8432d76ee.jpg"
  },
  {
    id: 6,
    name: "Universal Audio Apollo Twin X",
    category: "audio-equipment",
    type: "Audio Interface", 
    description: "Twin-channel USB audio interface with real-time DSP processing, featuring UA's renowned microphone preamps and professional conversion quality.",
    image: "https://images.stockcake.com/public/7/f/4/7f4c9361-0581-4570-980d-673f59057f99_large/professional-audio-paradise-stockcake.jpg"
  },
  {
    id: 7,
    name: "Rode PodMic USB",
    category: "audio-equipment",
    type: "Dynamic Microphone",
    description: "Professional broadcast-quality dynamic microphone optimized for podcasting, streaming, and vocal recording with built-in USB connectivity.",
    image: "https://pplx-res.cloudinary.com/image/upload/v1751522596/pplx_project_search_images/98164db20885d29b33381a96be9ce2f429cec467.jpg"
  },
  {
    id: 8,
    name: "Midas M32",
    category: "audio-equipment",
    type: "Digital Console",
    description: "Professional 32-channel digital mixing console with premium Midas preamps, advanced processing capabilities, and comprehensive live sound features.",
    image: "https://pplx-res.cloudinary.com/image/upload/v1751522596/pplx_project_search_images/612cccd120bb1f975120a1cf3c8cd96197dae4ff.jpg"
  },
  {
    id: 9,
    name: "Avid Pro Tools",
    category: "software-solutions",
    type: "Digital Audio Workstation",
    description: "Industry-standard DAW for professional audio production, offering advanced recording, editing, mixing, and mastering capabilities.",
    image: "https://images.stockcake.com/public/c/4/a/c4adce02-d41b-4e95-9c5c-ca0d7c5c56f5_large/sleek-audio-workstation-stockcake.jpg"
  },
  {
    id: 10,
    name: "Room EQ Wizard (REW)",
    category: "software-solutions",
    type: "Acoustic Measurement",
    description: "Comprehensive room acoustics measurement software for speaker placement optimization, room correction, and acoustic analysis.",
    image: "https://images.stockcake.com/public/8/5/4/8548b3cd-6bb4-4ac8-bf1b-09ecf95b2b48_large/digital-audio-workstation-stockcake.jpg"
  },
  {
    id: 11,
    name: "AFMG EASE",
    category: "software-solutions", 
    type: "Acoustic Simulation",
    description: "Professional electro-acoustic simulation software for sound system design, room acoustics modeling, and loudspeaker system optimization.",
    image: "https://images.stockcake.com/public/c/4/a/c4adce02-d41b-4e95-9c5c-ca0d7c5c56f5_large/sleek-audio-workstation-stockcake.jpg"
  },
  {
    id: 12,
    name: "Ableton Live 12",
    category: "software-solutions",
    type: "Creative DAW", 
    description: "Advanced digital audio workstation designed for music production, live performance, and creative sound design with innovative workflow features.",
    image: "https://images.stockcake.com/public/8/5/4/8548b3cd-6bb4-4ac8-bf1b-09ecf95b2b48_large/digital-audio-workstation-stockcake.jpg"
  },
  {
    id: 13,
    name: "Soundly",
    category: "software-solutions",
    type: "Sound Design Platform",
    description: "Comprehensive sound effects library and management platform with AI-powered search and seamless DAW integration for sound designers.",
    image: "https://images.stockcake.com/public/c/4/a/c4adce02-d41b-4e95-9c5c-ca0d7c5c56f5_large/sleek-audio-workstation-stockcake.jpg"
  },
  {
    id: 14,
    name: "ARTA",
    category: "software-solutions",
    type: "Audio Analysis", 
    description: "Real-time audio analysis and measurement software for acoustic testing, frequency response analysis, and audio system optimization.",
    image: "https://images.stockcake.com/public/8/5/4/8548b3cd-6bb4-4ac8-bf1b-09ecf95b2b48_large/digital-audio-workstation-stockcake.jpg"
  },
  {
    id: 15,
    name: "Audio Design Desk",
    category: "software-solutions",
    type: "Video Audio DAW",
    description: "Specialized digital audio workstation for video post-production, featuring AI-powered sound design tools and extensive royalty-free libraries.",
    image: "https://images.stockcake.com/public/c/4/a/c4adce02-d41b-4e95-9c5c-ca0d7c5c56f5_large/sleek-audio-workstation-stockcake.jpg"
  },
  {
    id: 16,
    name: "NTi Audio XL2",
    category: "measurement-tools",
    type: "Sound Level Meter",
    description: "Professional Class 1 sound level analyzer with comprehensive measurement capabilities for acoustic and audio testing applications.",
    image: "https://images.stockcake.com/public/9/e/1/9e1a2dc0-a51a-4924-bb36-89d9b7b8b4c7_large/precision-audio-equipment-stockcake.jpg"
  },
  {
    id: 17,
    name: "Brüel & Kjær 4189",
    category: "measurement-tools",
    type: "Measurement Microphone",
    description: "Precision measurement microphone with exceptional accuracy and stability for professional acoustic testing and calibration applications.",
    image: "https://pplx-res.cloudinary.com/image/upload/v1751522596/pplx_project_search_images/98164db20885d29b33381a96be9ce2f429cec467.jpg"
  },
  {
    id: 18,
    name: "NTi Audio MiniSonic",
    category: "measurement-tools",
    type: "Audio Analyzer",
    description: "Portable two-channel audio test instrument for precision audio system alignment, testing, and troubleshooting in field applications.",
    image: "https://images.stockcake.com/public/9/e/1/9e1a2dc0-a51a-4924-bb36-89d9b7b8b4c7_large/precision-audio-equipment-stockcake.jpg"
  },
  {
    id: 19,
    name: "UMIK-1",
    category: "measurement-tools", 
    type: "USB Measurement Mic",
    description: "Calibrated USB measurement microphone designed for room acoustic analysis, speaker measurements, and audio system optimization.",
    image: "https://pplx-res.cloudinary.com/image/upload/v1751522596/pplx_project_search_images/98164db20885d29b33381a96be9ce2f429cec467.jpg"
  },
  {
    id: 20,
    name: "NTi Audio TalkBox",
    category: "measurement-tools",
    type: "Acoustic Source",
    description: "Calibrated speech simulation source for STI (Speech Transmission Index) measurements and intelligibility testing in various acoustic environments.",
    image: "https://images.stockcake.com/public/9/e/1/9e1a2dc0-a51a-4924-bb36-89d9b7b8b4c7_large/precision-audio-equipment-stockcake.jpg"
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