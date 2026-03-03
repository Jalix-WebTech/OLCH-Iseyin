/*
====================================================
OPTIONAL JAVASCRIPT (Beginner Friendly Explanation)
====================================================

This script adds a smooth fade-in animation when
the director cards appear on screen while scrolling.

If you're new to JavaScript:
- We are selecting all director cards.
- We are observing when they enter the screen.
- When visible, we add a class that animates them.
*/

const cards = document.querySelectorAll('.director-card');

// Create a new observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

// Set initial state before animation
cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease";
    observer.observe(card);
});


/*
====================================================
DIRECTOR IMAGE PREVIEW FUNCTIONALITY
====================================================

What this script does:

1. Select all preview buttons.
2. When a button is clicked:
   - It finds the image inside that same director card.
   - It gets the image source (src).
   - It displays the modal.
   - It inserts the image inside the modal.
3. Clicking the close icon or outside the image closes it.
*/

// Select modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-modal");

// Select all preview buttons
const previewButtons = document.querySelectorAll(".preview-btn");

// Loop through all preview buttons
previewButtons.forEach(button => {

    button.addEventListener("click", function() {

        // Get the image inside the same director card
        const card = this.closest(".director-card");
        const img = card.querySelector(".director-image");

        // Set modal image source
        modalImg.src = img.src;

        // Show modal
        modal.style.display = "block";
    });

});

// Close modal when clicking X
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close modal when clicking outside image
modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});