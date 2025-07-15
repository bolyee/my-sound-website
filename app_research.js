// Data for researchs (imported from application_data_json)
const researchsData = {
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
function populateModal(researchKey) {
  const data = researchsData[researchKey];
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

// Event listeners for research cards
const researchCards = document.querySelectorAll(".research-card");
const modal = document.getElementById("researchModal");
const modalClose = document.querySelector(".modal-close");

researchCards.forEach((card) => {
  card.addEventListener("click", () => {
    const key = card.getAttribute("data-research");
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
