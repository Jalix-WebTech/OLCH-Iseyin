
/* Filter Functionality */

const filterButtons = document.querySelectorAll('.filter-btn');
const newsCards = document.querySelectorAll('.news-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {

        // Active button style
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-category');

        newsCards.forEach(card => {
            if (category === "all" || card.dataset.category === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

/* Read Full Toggle */

document.querySelectorAll('.read-btn').forEach(button => {
    button.addEventListener('click', function() {
        const full = this.previousElementSibling;
        full.style.display = "block";
        this.style.display = "none";
    });
});

document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', function() {
        const full = this.parentElement;
        full.style.display = "none";
        full.nextElementSibling.style.display = "inline-block";
    });
});
