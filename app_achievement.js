// A49 Achievement Page JavaScript
class AchievementPage {
    constructor() {
        this.achievements = [
            {
                id: 1,
                title: "삼성전자 본사 통합 음향 시스템 구축",
                year: 2024,
                category: "기업",
                description: "스마트 오피스 환경을 위한 첨단 음향 솔루션 제공",
                details: "AI 기반 적응형 음향 시스템으로 업무 효율성 향상"
            },
            {
                id: 2,
                title: "LG그룹 임원 교육센터 음향 설계",
                year: 2024,
                category: "교육",
                description: "최적의 학습 환경을 위한 음향 시스템 설계 및 구축",
                details: "고품질 음향 환경으로 교육 효과 극대화"
            },
            {
                id: 3,
                title: "현대자동차 글로벌 컨퍼런스 음향 지원",
                year: 2023,
                category: "이벤트",
                description: "국제 컨퍼런스 라이브 음향 시스템 운영",
                details: "다국어 동시통역 시스템과 통합된 음향 솔루션"
            },
            {
                id: 4,
                title: "SK텔레콤 5G 체험센터 공간음향 기술 개발",
                year: 2023,
                category: "연구개발",
                description: "몰입형 오디오 경험을 위한 공간음향 솔루션 개발",
                details: "차세대 통신 기술과 결합한 혁신적 음향 기술"
            },
            {
                id: 5,
                title: "포스코 안전교육센터 음향 시스템 설치",
                year: 2023,
                category: "교육",
                description: "산업안전 교육을 위한 고품질 음향 환경 조성",
                details: "안전교육 효과성 향상을 위한 전문 음향 시설"
            },
            {
                id: 6,
                title: "롯데호텔 프리미엄 라운지 음향 디자인",
                year: 2023,
                category: "시설",
                description: "럭셔리 호스피탈리티 공간의 음향 환경 설계",
                details: "프리미엄 고객 경험을 위한 맞춤형 음향 솔루션"
            },
            {
                id: 7,
                title: "카카오 신사옥 스마트 오피스 음향 솔루션",
                year: 2022,
                category: "기업",
                description: "AI 기반 적응형 음향 시스템 구축",
                details: "업무 패턴 분석을 통한 지능형 음향 환경 제어"
            },
            {
                id: 8,
                title: "부산 벡스코 전시장 대규모 음향 시스템",
                year: 2022,
                category: "시설",
                description: "국제 전시회를 위한 대규모 음향 인프라 구축",
                details: "대형 전시공간의 균일한 음향 분포 구현"
            },
            {
                id: 9,
                title: "네이버 클라우드 데이터센터 노이즈 제어",
                year: 2022,
                category: "연구개발",
                description: "첨단 소음 제어 기술 적용",
                details: "데이터센터 환경 최적화를 위한 혁신적 노이즈 제어"
            },
            {
                id: 10,
                title: "한국과학기술원(KAIST) 강의실 음향 개선",
                year: 2022,
                category: "교육",
                description: "교육 환경 최적화를 위한 음향 시스템 업그레이드",
                details: "최첨단 교육 기술과 융합된 음향 솔루션"
            },
            {
                id: 11,
                title: "신세계백화점 멀티미디어 음향 시스템",
                year: 2021,
                category: "시설",
                description: "고급 리테일 환경을 위한 음향 솔루션",
                details: "고객 경험 향상을 위한 공간별 맞춤 음향 설계"
            },
            {
                id: 12,
                title: "하나금융그룹 본사 회의실 음향 시설",
                year: 2021,
                category: "기업",
                description: "금융업계 최고 수준의 회의실 음향 시스템",
                details: "보안성과 음질을 동시에 만족하는 전문 음향 시설"
            },
            {
                id: 13,
                title: "KT 미래기술 연구소 음향 연구 협력",
                year: 2021,
                category: "연구개발",
                description: "차세대 통신 기술과 음향 기술 융합 연구",
                details: "6G 기술과 공간음향의 혁신적 결합 연구"
            },
            {
                id: 14,
                title: "CJ ENM 스튜디오 음향 엔지니어링",
                year: 2020,
                category: "미디어",
                description: "방송 및 콘텐츠 제작을 위한 전문 음향 시설",
                details: "차세대 콘텐츠 제작을 위한 최첨단 음향 환경 구축"
            },
            {
                id: 15,
                title: "국립극장 공연장 음향 시스템 리뉴얼",
                year: 2020,
                category: "문화",
                description: "전통 공연장의 현대적 음향 시스템 구축",
                details: "전통 공연의 아름다움을 극대화하는 음향 기술"
            }
        ];

        this.filteredAchievements = [...this.achievements];
        this.currentFilters = {
            year: '',
            category: ''
        };

        this.init();
    }

    init() {
        this.renderAchievements();
        this.bindEvents();
        this.animateOnScroll();
    }

    renderAchievements() {
        const grid = document.getElementById('achievementsGrid');
        if (!grid) return;

        // Clear existing content
        grid.innerHTML = '';

        // Create achievement cards
        this.filteredAchievements.forEach((achievement, index) => {
            const card = this.createAchievementCard(achievement, index);
            grid.appendChild(card);
        });

        // Animate cards in sequence
        this.animateCardsIn();
    }

    createAchievementCard(achievement, index) {
        const card = document.createElement('div');
        card.className = 'achievement-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.dataset.year = achievement.year;
        card.dataset.category = achievement.category;

        card.innerHTML = `
            <div class="achievement-year">${achievement.year}</div>
            <h3 class="achievement-title">${achievement.title}</h3>
            <div class="achievement-category">${achievement.category}</div>
            <p class="achievement-description">${achievement.description}</p>
            <p class="achievement-details">${achievement.details}</p>
        `;

        return card;
    }

    bindEvents() {
        // Year filter
        const yearFilter = document.getElementById('yearFilter');
        if (yearFilter) {
            yearFilter.addEventListener('change', (e) => {
                this.currentFilters.year = e.target.value;
                this.applyFilters();
            });
        }

        // Category filter
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', (e) => {
                this.currentFilters.category = e.target.value;
                this.applyFilters();
            });
        }

        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Add click events to achievement cards
        this.addCardClickEvents();
    }

    addCardClickEvents() {
        document.querySelectorAll('.achievement-card').forEach(card => {
            card.addEventListener('click', () => {
                this.highlightCard(card);
            });
        });
    }

    highlightCard(card) {
        // Remove previous highlights
        document.querySelectorAll('.achievement-card').forEach(c => {
            c.classList.remove('highlighted');
        });

        // Add highlight to clicked card
        card.classList.add('highlighted');
        
        // Add a subtle glow effect
        card.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.5)';
        
        // Remove highlight after 3 seconds
        setTimeout(() => {
            card.classList.remove('highlighted');
            card.style.boxShadow = '';
        }, 3000);
    }

    applyFilters() {
        const yearFilter = this.currentFilters.year;
        const categoryFilter = this.currentFilters.category;

        this.filteredAchievements = this.achievements.filter(achievement => {
            const matchesYear = !yearFilter || achievement.year.toString() === yearFilter;
            const matchesCategory = !categoryFilter || achievement.category === categoryFilter;
            return matchesYear && matchesCategory;
        });

        // Add loading state
        const cards = document.querySelectorAll('.achievement-card');
        cards.forEach(card => {
            card.classList.add('loading');
        });

        // Re-render after short delay for smooth transition
        setTimeout(() => {
            this.renderAchievements();
        }, 150);
    }

    animateCardsIn() {
        const cards = document.querySelectorAll('.achievement-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });

        // Re-bind events after animation
        setTimeout(() => {
            this.addCardClickEvents();
        }, 1000);
    }

    animateOnScroll() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, observerOptions);

        // Observe statistics items
        document.querySelectorAll('.stat-item').forEach(item => {
            observer.observe(item);
        });

        // Observe achievement cards
        document.querySelectorAll('.achievement-card').forEach(card => {
            observer.observe(card);
        });
    }

    // Utility method to get achievements by category
    getAchievementsByCategory(category) {
        return this.achievements.filter(achievement => achievement.category === category);
    }

    // Utility method to get achievements by year
    getAchievementsByYear(year) {
        return this.achievements.filter(achievement => achievement.year === year);
    }

    // Method to search achievements
    searchAchievements(query) {
        if (!query) {
            this.filteredAchievements = [...this.achievements];
        } else {
            this.filteredAchievements = this.achievements.filter(achievement =>
                achievement.title.toLowerCase().includes(query.toLowerCase()) ||
                achievement.description.toLowerCase().includes(query.toLowerCase()) ||
                achievement.details.toLowerCase().includes(query.toLowerCase())
            );
        }
        this.renderAchievements();
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AchievementPage();
});

// Add some additional interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add smooth reveal animation for statistics
    const animateStats = () => {
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateNumber(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            });
            observer.observe(stat);
        });
    };

    const animateNumber = (element) => {
        const text = element.textContent;
        const number = parseInt(text.replace(/\D/g, ''));
        const suffix = text.replace(/\d/g, '');
        let current = 0;
        const increment = number / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                element.textContent = number + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, 40);
    };

    animateStats();

    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid #d4af37';
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 1000);
            }
        };
        setTimeout(typeWriter, 1000);
    }
});