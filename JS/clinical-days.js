/* ================================= */
/*   CLINICAL DAYS REVEAL EFFECT     */
/* ================================= */

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".clinical-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show-card");
                }, index * 120);
            }
        });
    }, {
        threshold: 0.15
    });

    cards.forEach(card => observer.observe(card));
});