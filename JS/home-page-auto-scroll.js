document.addEventListener("DOMContentLoaded", function () {

  const slides = document.getElementById("slides");
  const cards = document.querySelectorAll(".story-card");
  const indicatorsContainer = document.getElementById("indicators");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  let index = 0;
  let cardWidth = cards[0].offsetWidth + 16;
  let totalCards = cards.length;

  /* Create Dots */
  cards.forEach((_, i) => {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");
    indicatorsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".indicators span");

  function updateSlider() {
    slides.style.transform = `translateX(-${index * cardWidth}px)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  function nextSlide() {
    index++;
    if (index >= totalCards) index = 0;
    updateSlider();
  }

  function prevSlide() {
    index--;
    if (index < 0) index = totalCards - 1;
    updateSlider();
  }

  /* Arrow Events */
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  /* Auto Slide (All Devices) */
  setInterval(nextSlide, 3000);

  /* Recalculate width on resize */
  window.addEventListener("resize", () => {
    cardWidth = cards[0].offsetWidth + 16;
  });

});
