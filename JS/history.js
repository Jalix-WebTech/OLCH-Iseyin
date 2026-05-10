/*
This script adds small UI improvements.
The user is a beginner so comments explain each part.
*/


// Select all matron cards
const cards = document.querySelectorAll(".matron-card");


// When page loads, fade cards in one by one
window.addEventListener("load", () => {

cards.forEach((card, index) => {

setTimeout(() => {

card.style.opacity = "1";
card.style.transform = "translateY(0px)";

}, index * 200); // delay animation

});

});