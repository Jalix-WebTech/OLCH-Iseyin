  // =================================
  // READ FULL ARTICLE / CLOSE
  // =================================

  const newsCards = document.querySelectorAll(".news-card");

  newsCards.forEach((card) => {
    const readBtn = card.querySelector(".read-btn");
    const closeBtn = card.querySelector(".close-btn");
    const fullArticle = card.querySelector(".news-full");

    readBtn.addEventListener("click", () => {
      fullArticle.classList.add("show");
      readBtn.style.display = "none";
    });

    closeBtn.addEventListener("click", () => {
      fullArticle.classList.remove("show");
      readBtn.style.display = "inline-block";
    });
  });

  // =================================
  // CATEGORY FILTER
  // =================================

  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const selectedCategory = button.getAttribute("data-category");

      newsCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");

        if (selectedCategory === "all" || cardCategory === selectedCategory) {
          card.style.display = "flex";

          setTimeout(() => {
            card.classList.remove("hide");
          }, 10);
        } else {
          card.classList.add("hide");

          setTimeout(() => {
            card.style.display = "none";
          }, 250);
        }
      });
    });
  });
