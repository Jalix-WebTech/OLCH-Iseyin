document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.service-slide');
  const sliderContainer = document.querySelector('.services-slider');
  const dotsContainer = document.querySelector('.slider-dots');

  if (!slides.length || !sliderContainer || !dotsContainer) {
    return;
  }

  let currentIndex = 0;
  let startX = 0;
  let autoSlide;

  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('slider-dot');
    if (index === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
    dot.setAttribute('role', 'button');
    dot.setAttribute('tabindex', '0');

    dot.addEventListener('click', () => { showSlide(index); restartAutoSlide(); });
    dot.addEventListener('keypress', (e) => { if (e.key === 'Enter' || e.key === ' ') { showSlide(index); restartAutoSlide(); } });

    dotsContainer.appendChild(dot);
  });

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    updateDots(index);
    currentIndex = index;
  }

  function updateDots(index) {
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
  }

  function startAutoSlide() {
    autoSlide = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 4000);
  }

  function stopAutoSlide() { clearInterval(autoSlide); }
  function restartAutoSlide() { stopAutoSlide(); startAutoSlide(); }

  sliderContainer.addEventListener('touchstart', e => { startX = e.touches[0].clientX; stopAutoSlide(); });
  sliderContainer.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50) currentIndex = (currentIndex + 1) % slides.length;
    else if (diff < -50) currentIndex = (currentIndex - 1 + slides.length) % slides.length;

    showSlide(currentIndex);
    startAutoSlide();
  });

  startAutoSlide();
});



