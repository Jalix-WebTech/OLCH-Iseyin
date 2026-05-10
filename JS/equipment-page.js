// Select all equipment cards
        const equipmentCards = document.querySelectorAll('.equipment-card');

        function revealOnScroll() {
            const windowHeight = window.innerHeight;
            equipmentCards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                const revealPoint = 150; // How far from bottom of screen the animation triggers

                if(cardTop < windowHeight - revealPoint) {
                    card.classList.add('show'); // Add class to reveal
                }
            });
        }

        // Listen for scroll events
        window.addEventListener('scroll', revealOnScroll);

        // Trigger on page load
        revealOnScroll();


// Certificate starts here

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".view-btn").forEach(button => {
  button.addEventListener("click", () => {
    modalImage.src = button.dataset.image;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.style.display = "none";
  modalImage.src="../images/app.jpeg";
  document.body.style.overflow = "";
}

// Certificate ends here