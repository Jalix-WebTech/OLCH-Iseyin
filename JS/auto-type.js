// Get the h1 element where text will be typed
const textElement = document.querySelector(".type");

// Array of texts to display (you can add more)
const texts = [
  "Excellence in healthcare delivery",
  "Quality care you can trust",
  "Your health is our priority"
];

// Index to track which text is active
let textIndex = 0;

// Index to track current character position
let charIndex = 0;

// Boolean to track typing or deleting state
let isDeleting = false;

// Typing speed (milliseconds)
const typingSpeed = 100;

// Deleting speed (milliseconds)
const deletingSpeed = 60;

// Pause after typing a full word
const pauseAfterTyping = 1300;

// Main typing function
function typeEffect() {

  // Get the current text
  const currentText = texts[textIndex];

  // If typing
  if (!isDeleting) {

    // Add one character
    textElement.textContent = currentText.slice(0, charIndex + 1);

    // Move to next character
    charIndex++;

    // If full text is typed
    if (charIndex === currentText.length) {
      // Pause before deleting
      setTimeout(() => isDeleting = true, pauseAfterTyping);
    }

  } else {

    // Remove one character
    textElement.textContent = currentText.slice(0, charIndex - 1);

    // Move backward
    charIndex--;

    // If text is fully deleted
    if (charIndex === 0) {
      // Stop deleting
      isDeleting = false;

      // Move to next text
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  // Set next animation frame timing
  setTimeout(
    typeEffect,
    isDeleting ? deletingSpeed : typingSpeed
  );
}

// Start typing effect
typeEffect();
