const toggleBtn = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.nav-overlay');

function closeMenu() {
  nav.classList.remove('open');
  overlay.classList.remove('active');
  toggleBtn.setAttribute('aria-expanded', 'false');
}

toggleBtn.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  overlay.classList.toggle('active');
  toggleBtn.setAttribute('aria-expanded', isOpen);
});

overlay.addEventListener('click', closeMenu);

// slider for home page
  const slides = document.querySelectorAll('.slide');
  let current = 0;

  setInterval(() => {
    slides[current].classList.remove('active2');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active2');
  }, 5000);

