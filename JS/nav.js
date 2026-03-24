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


  // Splash screen starts here

  window.addEventListener("load", () => {
    // Hide navbar at first
    const navbar = document.getElementById("navbar"); // Change if your nav uses class
    if(navbar) navbar.style.display = "none";

    // Splash fade out after 2.5s
    setTimeout(() => {
        const splash = document.getElementById("splash-screen");

        splash.style.transition = "opacity 0.6s ease";
        splash.style.opacity = "0";

        setTimeout(() => {
            splash.style.display = "none";

            // Show navbar after splash
            if(navbar) navbar.style.display = "block";

        }, 600);
    }, 3000);
});

