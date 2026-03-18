/*
=============================================
SCROLL ANIMATION FOR DEPARTMENT CARDS
=============================================

This JavaScript makes the department cards
appear with animation when the user scrolls.

Steps of the logic:

1. Select all department cards
2. Detect when they appear in the screen
3. Add the class "show"
4. CSS animation makes them fade in
*/


// Select all cards
const cards = document.querySelectorAll(".department-card");


// Create an IntersectionObserver
// This detects when elements enter the screen

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

// Add the animation class
entry.target.classList.add("show");

}

});

});


// Observe each card

cards.forEach(card => {
observer.observe(card);
});
