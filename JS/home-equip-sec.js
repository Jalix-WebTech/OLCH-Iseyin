const track = document.getElementById("equipmentTrack");
const slider = document.getElementById("equipmentSlider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const dotsContainer = document.getElementById("sliderDots");
const cards = Array.from(document.querySelectorAll(".equipment-card"));

let currentIndex = 0;
let autoSlide;
let cardsPerView = getCardsPerView();
let totalSlides = Math.ceil(cards.length / cardsPerView);

// =========================
// RESPONSIVE VIEW COUNT
// =========================
function getCardsPerView() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 991) return 2;
  return 3;
}

// =========================
// CREATE DOTS
// =========================
function createDots() {
  dotsContainer.innerHTML = "";
  totalSlides = Math.ceil(cards.length / cardsPerView);

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("button");
    dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
    if (i === currentIndex) dot.classList.add("active");

    dot.addEventListener("click", () => {
      currentIndex = i;
      updateSlider();
      resetAutoSlide();
    });

    dotsContainer.appendChild(dot);
  }
}

// =========================
// UPDATE SLIDER
// =========================
function updateSlider() {
  const gap = 24;
  const cardWidth = cards[0].offsetWidth + gap;
  const moveDistance = currentIndex * cardWidth * cardsPerView;

  track.style.transform = `translateX(-${moveDistance}px)`;

  const dots = dotsContainer.querySelectorAll("button");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

// =========================
// NEXT / PREV
// =========================
function nextSlide() {
  currentIndex++;
  if (currentIndex >= totalSlides) currentIndex = 0;
  updateSlider();
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = totalSlides - 1;
  updateSlider();
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

// =========================
// AUTO SLIDE
// =========================
function startAutoSlide() {
  autoSlide = setInterval(() => {
    nextSlide();
  }, 2500);
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

function resetAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}

// Pause on hover (desktop)
slider.addEventListener("mouseenter", stopAutoSlide);
slider.addEventListener("mouseleave", startAutoSlide);

// =========================
// TOUCH / SWIPE SUPPORT
// =========================
let startX = 0;
let endX = 0;

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
}, { passive: true });

slider.addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX;
}, { passive: true });

slider.addEventListener("touchend", () => {
  const diff = startX - endX;

  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      nextSlide(); // Swipe left
    } else {
      prevSlide(); // Swipe right
    }
    resetAutoSlide();
  }

  startX = 0;
  endX = 0;
});

// =========================
// REVEAL ON SCROLL
// =========================
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach((el) => revealObserver.observe(el));

// =========================
// RESIZE HANDLING
// =========================
window.addEventListener("resize", () => {
  const newCardsPerView = getCardsPerView();

  if (newCardsPerView !== cardsPerView) {
    cardsPerView = newCardsPerView;
    totalSlides = Math.ceil(cards.length / cardsPerView);

    if (currentIndex >= totalSlides) {
      currentIndex = totalSlides - 1;
    }

    createDots();
    updateSlider();
  } else {
    updateSlider();
  }
});

// =========================
// INIT
// =========================
createDots();
updateSlider();
startAutoSlide();