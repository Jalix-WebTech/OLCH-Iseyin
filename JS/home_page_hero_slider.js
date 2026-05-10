/* ================================= */
/*     CINEMATIC HOSPITAL HERO JS    */
/* ================================= */

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".hero-slide");
    const typedText = document.getElementById("typedText");
    const dotsContainer = document.getElementById("heroDots");
    const heroSlider = document.getElementById("heroSlider");

    /* Safety check */
    if (!slides.length || !typedText || !dotsContainer || !heroSlider) {
        console.error("Hero slider elements not found. Check your HTML structure.");
        return;
    }

    /* Quotes matching each slide */
    const quotes = [
        "Quality healthcare begins with compassion, trust, and timely attention.",
        "A healthier tomorrow starts with the right care today.",
        "Prevention, early diagnosis, and expert treatment save lives.",
        "Your well-being matters — every patient, every family, every time."
    ];

    let currentSlide = 0;
    let currentChar = 0;
    let isDeleting = false;
    let sliderInterval = null;
    let typingTimeout = null;

    const typingSpeed = 60;
    const deletingSpeed = 30;
    const pauseAfterTyping = 1800;
    const slideDuration = 8000;

    /* ================================= */
    /*        CREATE NAV DOTS           */
    /* ================================= */
    slides.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.classList.add("hero-dot");

        if (index === 0) {
            dot.classList.add("active");
        }

        dot.setAttribute("aria-label", `Go to slide ${index + 1}`);

        dot.addEventListener("click", () => {
            currentSlide = index;
            showSlide(currentSlide);
            restartSlider();
        });

        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".hero-dot");

    /* ================================= */
    /*         SHOW SLIDE               */
    /* ================================= */
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });

        restartTyping();
    }

    /* ================================= */
    /*         NEXT SLIDE               */
    /* ================================= */
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    /* ================================= */
    /*       START AUTO SLIDER          */
    /* ================================= */
    function startSlider() {
        clearInterval(sliderInterval);
        sliderInterval = setInterval(nextSlide, slideDuration);
    }

    function restartSlider() {
        startSlider();
    }

    /* ================================= */
    /*         TYPING EFFECT            */
    /* ================================= */
    function typeEffect() {
        const currentQuote = quotes[currentSlide];
        if (!currentQuote) return;

        if (!isDeleting) {
            typedText.textContent = currentQuote.substring(0, currentChar + 1);
            currentChar++;

            if (currentChar < currentQuote.length) {
                typingTimeout = setTimeout(typeEffect, typingSpeed);
            } else {
                typingTimeout = setTimeout(() => {
                    isDeleting = true;
                    typeEffect();
                }, pauseAfterTyping);
            }
        } else {
            typedText.textContent = currentQuote.substring(0, currentChar - 1);
            currentChar--;

            if (currentChar > 0) {
                typingTimeout = setTimeout(typeEffect, deletingSpeed);
            } else {
                isDeleting = false;
                typingTimeout = setTimeout(typeEffect, typingSpeed);
            }
        }
    }

    /* ================================= */
    /*       RESET TYPING CLEANLY       */
    /* ================================= */
    function restartTyping() {
        clearTimeout(typingTimeout);
        currentChar = 0;
        isDeleting = false;
        typedText.textContent = "";
        typeEffect();
    }

    /* ================================= */
    /*    PAUSE ON HOVER (DESKTOP)      */
    /* ================================= */
    heroSlider.addEventListener("mouseenter", () => {
        clearInterval(sliderInterval);
    });

    heroSlider.addEventListener("mouseleave", () => {
        startSlider();
    });

    /* ================================= */
    /*         TOUCH SWIPE SUPPORT      */
    /* ================================= */
    let startX = 0;
    let endX = 0;

    heroSlider.addEventListener("touchstart", (e) => {
        startX = e.changedTouches[0].screenX;
    });

    heroSlider.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeDistance = endX - startX;

        if (swipeDistance > 50) {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
            restartSlider();
        } else if (swipeDistance < -50) {
            nextSlide();
            restartSlider();
        }
    }

    /* ================================= */
    /*          INITIAL LOAD            */
    /* ================================= */
    showSlide(currentSlide);
    startSlider();
});