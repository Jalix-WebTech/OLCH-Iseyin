document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const slides = document.getElementById("slides");
  const indicatorsContainer = document.getElementById("indicators");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  if (!slider || !slides || !indicatorsContainer || !nextBtn || !prevBtn) {
    return;
  }

  const originalMarkup = slides.innerHTML;
  let originalCards = Array.from(slides.querySelectorAll(".story-card"));
  let totalCards = originalCards.length;
  let cardWidth = 0;
  let cloneCount = 0;
  let currentIndex = 0;
  let autoSlideInterval = null;

  function getVisibleCount() {
    const sliderWidth = slider.offsetWidth;
    const rawWidth = originalCards[0].offsetWidth + 16;
    return Math.max(1, Math.floor(sliderWidth / rawWidth));
  }

  function getRealIndex(index) {
    return ((index - cloneCount) % totalCards + totalCards) % totalCards;
  }

  function createIndicators() {
    indicatorsContainer.innerHTML = "";
    for (let i = 0; i < totalCards; i++) {
      const dot = document.createElement("span");
      if (i === 0) dot.classList.add("active");
      dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
      dot.setAttribute("role", "button");
      dot.setAttribute("tabindex", "0");
      dot.addEventListener("click", () => {
        currentIndex = cloneCount + i;
        moveSlides(true);
        restartAutoSlide();
      });
      dot.addEventListener("keypress", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          currentIndex = cloneCount + i;
          moveSlides(true);
          restartAutoSlide();
        }
      });
      indicatorsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    const dots = indicatorsContainer.querySelectorAll("span");
    const activeIndex = getRealIndex(currentIndex);
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[activeIndex]) dots[activeIndex].classList.add("active");
  }

  function buildCarousel() {
    slides.innerHTML = originalMarkup;
    originalCards = Array.from(slides.querySelectorAll(".story-card"));
    totalCards = originalCards.length;
    cardWidth = originalCards[0].offsetWidth + 16;
    cloneCount = getVisibleCount();

    const prependCards = originalCards.slice(-cloneCount).map(card => card.cloneNode(true));
    const appendCards = originalCards.slice(0, cloneCount).map(card => card.cloneNode(true));

    prependCards.reverse().forEach(clone => {
      slides.insertBefore(clone, slides.firstChild);
    });

    appendCards.forEach(clone => {
      slides.appendChild(clone);
    });

    currentIndex = cloneCount;
    slides.style.transition = "none";
    slides.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    requestAnimationFrame(() => {
      slides.style.transition = "transform 0.6s ease";
    });

    createIndicators();
    updateDots();
  }

  function moveSlides(withTransition = false) {
    if (!withTransition) {
      slides.style.transition = "none";
    } else {
      slides.style.transition = "transform 0.6s ease";
    }
    slides.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    updateDots();
  }

  function nextSlide() {
    currentIndex++;
    moveSlides(true);
  }

  function prevSlide() {
    currentIndex--;
    moveSlides(true);
  }

  function handleTransitionEnd() {
    if (currentIndex >= totalCards + cloneCount) {
      currentIndex = cloneCount;
      slides.style.transition = "none";
      slides.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
    if (currentIndex < cloneCount) {
      currentIndex = totalCards + cloneCount - 1;
      slides.style.transition = "none";
      slides.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
    updateDots();
  }

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(nextSlide, 3000);
  }

  function stopAutoSlide() {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
      autoSlideInterval = null;
    }
  }

  function restartAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    restartAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    restartAutoSlide();
  });

  slides.addEventListener("transitionend", handleTransitionEnd);
  slider.addEventListener("mouseenter", stopAutoSlide);
  slider.addEventListener("mouseleave", startAutoSlide);

  window.addEventListener("resize", () => {
    const newCardWidth = originalCards[0].offsetWidth + 16;
    const newVisibleCount = getVisibleCount();
    if (newVisibleCount !== cloneCount || newCardWidth !== cardWidth) {
      buildCarousel();
    }
  });

  buildCarousel();
  startAutoSlide();
});
