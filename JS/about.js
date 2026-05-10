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


/* =====================================================
   DIRECTOR MODAL FUNCTIONALITY
===================================================== */

// Get modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalPosition = document.getElementById("modalPosition");
const modalBio = document.getElementById("modalBio");
const closeBtn = document.querySelector(".close-modal-btn");

// Select all preview buttons
const previewButtons = document.querySelectorAll(".preview-btn");

// Loop through each preview button
previewButtons.forEach(button => {

    button.addEventListener("click", function() {

        // Find the parent director card
        const card = this.closest(".director-card");

        // Get director information
        const img = card.querySelector(".director-image");
        const name = card.querySelector("h3").innerText;
        const position = card.querySelector("p").innerText;
        const bio = img.getAttribute("data-bio");

        // Insert into modal
        modalImg.src = img.src;
        modalName.innerText = name;
        modalPosition.innerText = position;
        modalBio.innerText = bio;

        // Show modal
        modal.style.display = "flex";

        // Prevent background scrolling
        document.body.style.overflow = "hidden";
    });

});

// Close modal button
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
});

// Close modal when clicking outside card
modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});