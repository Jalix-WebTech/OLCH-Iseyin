document.addEventListener("DOMContentLoaded", function () {

  const slides = document.getElementById("slides");
  const wrapper = document.querySelector(".slides-wrapper");
  const dotsContainer = document.getElementById("dots");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const cards = document.querySelectorAll(".story-card");
  const slider = document.querySelector(".slider");

  let index = 0;
  let cardWidth = 0;
  let visibleCards = 1;
  let totalSteps = 1;
  let interval;

  function calculate() {
    cardWidth = cards[0].offsetWidth + 16;
    visibleCards = Math.floor(wrapper.offsetWidth / cardWidth);
    totalSteps = cards.length - visibleCards + 1;

    if (totalSteps < 1) totalSteps = 1;

    createDots();
    updateSlider();
  }

  function createDots() {
    dotsContainer.innerHTML = "";
    for (let i = 0; i < totalSteps; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === index) dot.classList.add("active");

      dot.addEventListener("click", function () {
        index = i;
        updateSlider();
        restartAuto();
      });

      dotsContainer.appendChild(dot);
    }
  }

  function updateSlider() {
    slides.style.transform = `translateX(-${index * cardWidth}px)`;

    document.querySelectorAll(".dot").forEach(d => d.classList.remove("active"));
    if (document.querySelectorAll(".dot")[index]) {
      document.querySelectorAll(".dot")[index].classList.add("active");
    }
  }

  function autoSlide() {
    if (window.innerWidth >= 769) {
      index++;
      if (index >= totalSteps) index = 0;
      updateSlider();
    }
  }

  function startAuto() {
    interval = setInterval(autoSlide, 3000);
  }

  function restartAuto() {
    clearInterval(interval);
    startAuto();
  }

  prevBtn.addEventListener("click", function () {
    if (index > 0) index--;
    else index = totalSteps - 1;
    updateSlider();
    restartAuto();
  });

  nextBtn.addEventListener("click", function () {
    index++;
    if (index >= totalSteps) index = 0;
    updateSlider();
    restartAuto();
  });

  calculate();
  window.addEventListener("resize", calculate);

  startAuto();

});
