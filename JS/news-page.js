
    /* =========================================================
       SVG ICONS
       ========================================================= */
    const icons = {
      malaria: `
        <svg width="62" height="62" viewBox="0 0 64 64" fill="none" aria-label="Malaria icon">
          <circle cx="32" cy="32" r="30" fill="#F3F8FF"/>
          <rect x="27" y="10" width="10" height="22" rx="2" fill="#1E88E5"/>
          <rect x="21" y="16" width="22" height="10" rx="2" fill="#1E88E5"/>
          <ellipse cx="32" cy="39" rx="4" ry="8" fill="#2F3A4A"/>
          <circle cx="32" cy="29" r="3" fill="#2F3A4A"/>
          <line x1="32" y1="26" x2="32" y2="20" stroke="#2F3A4A" stroke-width="2"/>
          <ellipse cx="24" cy="33" rx="8" ry="4" transform="rotate(-25 24 33)" fill="#90CAF9"/>
          <ellipse cx="40" cy="33" rx="8" ry="4" transform="rotate(25 40 33)" fill="#90CAF9"/>
        </svg>
      `,
      typhoid: `
        <svg width="62" height="62" viewBox="0 0 64 64" fill="none" aria-label="Typhoid icon">
          <circle cx="32" cy="32" r="30" fill="#F3F8FF"/>
          <path d="M24 20C24 16 27 14 32 14C37 14 40 16 40 20C40 24 38 26 38 29C38 31 39 33 40 35C41 37 42 39 42 43C42 49 37 52 32 52C27 52 22 49 22 43C22 39 23 37 24 35C25 33 26 31 26 29C26 26 24 24 24 20Z" stroke="#1E88E5" stroke-width="2.5"/>
          <path d="M28 26C29 24 31 23 33 23C35 23 37 24 38 26" stroke="#D32F2F" stroke-width="2.5"/>
          <path d="M28 36C30 38 34 38 36 36" stroke="#2F3A4A" stroke-width="2.5"/>
        </svg>
      `,
      cholera: `
        <svg width="62" height="62" viewBox="0 0 64 64" fill="none" aria-label="Cholera icon">
          <circle cx="32" cy="32" r="30" fill="#F3F8FF"/>
          <path d="M32 14C32 14 20 28 20 37C20 44 25.8 50 32 50C38.2 50 44 44 44 37C44 28 32 14 32 14Z" fill="#90CAF9"/>
          <path d="M29 32H35" stroke="#1E88E5" stroke-width="2.5"/>
          <path d="M32 29V35" stroke="#1E88E5" stroke-width="2.5"/>
        </svg>
      `,
      lungs: `
        <svg width="62" height="62" viewBox="0 0 64 64" fill="none" aria-label="Lungs icon">
          <circle cx="32" cy="32" r="30" fill="#F3F8FF"/>
          <path d="M32 16V28" stroke="#2F3A4A" stroke-width="2.5"/>
          <path d="M32 28C29 24 22 23 19 29C16 35 19 46 28 48C31 49 32 46 32 43V28Z" fill="#90CAF9"/>
          <path d="M32 28C35 24 42 23 45 29C48 35 45 46 36 48C33 49 32 46 32 43V28Z" fill="#90CAF9"/>
        </svg>
      `,
      hiv: `
        <svg width="62" height="62" viewBox="0 0 64 64" fill="none" aria-label="HIV icon">
          <circle cx="32" cy="32" r="30" fill="#FFF5F5"/>
          <path d="M25 18C25 14 28 12 32 12C36 12 39 14 39 18C39 24 34 27 32 31C30 27 25 24 25 18Z" fill="#D32F2F"/>
          <path d="M29 31L22 49H28L32 42L36 49H42L35 31" fill="#D32F2F"/>
        </svg>
      `,
      heart: `
        <svg width="62" height="62" viewBox="0 0 64 64" fill="none" aria-label="Heart icon">
          <circle cx="32" cy="32" r="30" fill="#FFF5F5"/>
          <path d="M32 48C32 48 18 39 18 27C18 21 22 17 28 17C31 17 34 19 36 22C38 19 41 17 44 17C50 17 54 21 54 27C54 39 32 48 32 48Z" fill="#D32F2F"/>
          <path d="M22 31H28L31 27L35 35L38 30H44" stroke="white" stroke-width="2.5"/>
        </svg>
      `,
      diabetes: `
        <svg width="62" height="62" viewBox="0 0 64 64" fill="none" aria-label="Diabetes icon">
          <circle cx="32" cy="32" r="30" fill="#FFF5F5"/>
          <path d="M32 14C32 14 22 27 22 36C22 43 26.9 49 32 49C37.1 49 42 43 42 36C42 27 32 14 32 14Z" fill="#D32F2F"/>
          <path d="M28 34C28 31 30 29 32 29C34 29 36 31 36 34C36 37 34 39 32 39C30 39 28 37 28 34Z" fill="white"/>
        </svg>
      `,
      maternal: `
        <svg width="62" height="62" viewBox="0 0 64 64" fill="none" aria-label="Maternal health icon">
          <circle cx="32" cy="32" r="30" fill="#FFF5FB"/>
          <circle cx="30" cy="18" r="5" fill="#1E88E5"/>
          <path d="M30 24V36C30 40 33 43 37 43C40 43 42 41 42 38C42 34 39 31 35 31" stroke="#1E88E5" stroke-width="2.5"/>
          <circle cx="39" cy="38" r="3" fill="#90CAF9"/>
        </svg>
      `,
      immunization: `
        <svg width="62" height="62" viewBox="0 0 64 64" fill="none" aria-label="Immunization icon">
          <circle cx="32" cy="32" r="30" fill="#F3F8FF"/>
          <path d="M32 14L46 20V31C46 41 39 48 32 50C25 48 18 41 18 31V20L32 14Z" fill="#90CAF9"/>
          <path d="M26 38L38 26" stroke="#1E88E5" stroke-width="2.5"/>
          <path d="M36 24L40 20" stroke="#1E88E5" stroke-width="2.5"/>
          <path d="M24 40L20 44" stroke="#1E88E5" stroke-width="2.5"/>
        </svg>
      `,
      nutrition: `
        <svg width="62" height="62" viewBox="0 0 64 64" fill="none" aria-label="Nutrition icon">
          <circle cx="32" cy="32" r="30" fill="#FFFDF5"/>
          <path d="M18 34C18 43 24 48 32 48C40 48 46 43 46 34H18Z" fill="#FFD54F"/>
          <path d="M24 26C24 23 26 21 29 21" stroke="#2F3A4A" stroke-width="2.5"/>
          <path d="M32 24V17" stroke="#2F3A4A" stroke-width="2.5"/>
          <path d="M39 26C39 23 37 21 34 21" stroke="#2F3A4A" stroke-width="2.5"/>
        </svg>
      `,
      eye: `
        <svg width="62" height="62" viewBox="0 0 64 64" fill="none" aria-label="Eye icon">
          <circle cx="32" cy="32" r="30" fill="#F3F8FF"/>
          <path d="M12 32C16 24 23 20 32 20C41 20 48 24 52 32C48 40 41 44 32 44C23 44 16 40 12 32Z" stroke="#1E88E5" stroke-width="2.5"/>
          <circle cx="32" cy="32" r="6" fill="#90CAF9"/>
          <circle cx="32" cy="32" r="2.5" fill="#2F3A4A"/>
        </svg>
      `,
      dental: `
        <svg width="62" height="62" viewBox="0 0 64 64" fill="none" aria-label="Dental icon">
          <circle cx="32" cy="32" r="30" fill="#F3F8FF"/>
          <path d="M24 18C21 18 18 21 18 25C18 31 22 34 24 38C26 42 26 48 30 48C33 48 31 40 32 40C33 40 31 48 34 48C38 48 38 42 40 38C42 34 46 31 46 25C46 21 43 18 40 18C37 18 35 20 32 20C29 20 27 18 24 18Z" fill="white" stroke="#1E88E5" stroke-width="2.5"/>
        </svg>
      `,
      event: `
        <svg width="62" height="62" viewBox="0 0 64 64" fill="none" aria-label="Hospital event icon">
          <circle cx="32" cy="32" r="30" fill="#F3F8FF"/>
          <rect x="16" y="20" width="32" height="26" rx="6" fill="#90CAF9"/>
          <rect x="16" y="20" width="32" height="8" rx="6" fill="#1E88E5"/>
          <path d="M23 15V23" stroke="#2F3A4A" stroke-width="2.5"/>
          <path d="M41 15V23" stroke="#2F3A4A" stroke-width="2.5"/>
          <path d="M25 34H39" stroke="#2F3A4A" stroke-width="2.5"/>
          <path d="M32 27V41" stroke="#2F3A4A" stroke-width="2.5"/>
        </svg>
      `,
      general: `
        <svg width="62" height="62" viewBox="0 0 64 64" fill="none" aria-label="General health icon">
          <circle cx="32" cy="32" r="30" fill="#F3F8FF"/>
          <rect x="27" y="14" width="10" height="36" rx="3" fill="#1E88E5"/>
          <rect x="14" y="27" width="36" height="10" rx="3" fill="#1E88E5"/>
        </svg>
      `
    };

    /* =========================================================
       NEWS DATA
       You can add up to 100+ items here
       ========================================================= */
    const newsData = [
      {
        id: 1,
        title: "Malaria Prevention in Rainy Season",
        category: "Disease Awareness",
        categorySlug: "disease-awareness",
        date: "March 28, 2026",
        icon: "malaria",
        summary: "Malaria remains one of the most common illnesses in many communities. Our hospital advises residents to sleep under treated mosquito nets, clear stagnant water around homes, and seek early treatment when fever, headache, weakness, or body pain begins."
      },
      {
        id: 2,
        title: "Free Community Health Outreach This Saturday",
        category: "Hospital Event",
        categorySlug: "hospital-event",
        date: "March 26, 2026",
        icon: "event",
        summary: "Our hospital will hold a free medical outreach this Saturday for blood pressure checks, blood sugar testing, malaria screening, and health education. Pregnant women, children, and elderly residents are especially encouraged to attend."
      },
      {
        id: 3,
        title: "Typhoid Fever: Early Signs You Should Not Ignore",
        category: "Disease Awareness",
        categorySlug: "disease-awareness",
        date: "March 24, 2026",
        icon: "typhoid",
        summary: "Persistent fever, stomach discomfort, weakness, poor appetite, and digestive issues may be signs of typhoid fever. Good handwashing, clean water, and proper food hygiene are key steps in reducing infection."
      },
      {
        id: 4,
        title: "Cholera Prevention Through Safe Water and Hygiene",
        category: "Disease Awareness",
        categorySlug: "disease-awareness",
        date: "March 22, 2026",
        icon: "cholera",
        summary: "Cholera spreads quickly where drinking water is unsafe or sanitation is poor. Residents are encouraged to boil water when necessary, wash hands properly, and seek urgent care if severe diarrhoea or dehydration occurs."
      },
      {
        id: 5,
        title: "Tuberculosis Awareness and Early Testing",
        category: "Respiratory Health",
        categorySlug: "respiratory-health",
        date: "March 21, 2026",
        icon: "lungs",
        summary: "A cough lasting more than two weeks should not be ignored. Tuberculosis can often be treated successfully when diagnosed early. Anyone with prolonged cough, chest pain, weight loss, or night sweats should visit the hospital."
      },
      {
        id: 6,
        title: "High Blood Pressure Often Shows No Warning Signs",
        category: "Chronic Conditions",
        categorySlug: "chronic-conditions",
        date: "March 20, 2026",
        icon: "heart",
        summary: "Hypertension can quietly damage the heart, kidneys, and brain over time. Adults are encouraged to check their blood pressure regularly, reduce excess salt intake, stay active, and keep follow-up appointments."
      },
      {
        id: 7,
        title: "Understanding Diabetes and Blood Sugar Control",
        category: "Chronic Conditions",
        categorySlug: "chronic-conditions",
        date: "March 18, 2026",
        icon: "diabetes",
        summary: "Diabetes can affect energy, vision, wound healing, and general wellbeing. Early testing, healthy food choices, regular exercise, and medication compliance are essential in preventing serious complications."
      },
      {
        id: 8,
        title: "Maternal Health: Importance of Antenatal Care",
        category: "Maternal & Child Health",
        categorySlug: "maternal-child-health",
        date: "March 16, 2026",
        icon: "maternal",
        summary: "Pregnant women are strongly encouraged to begin antenatal care early. Routine checks help monitor the health of both mother and baby, detect complications early, and improve the chances of safe delivery."
      },
      {
        id: 9,
        title: "Child Immunization Saves Lives",
        category: "Maternal & Child Health",
        categorySlug: "maternal-child-health",
        date: "March 14, 2026",
        icon: "immunization",
        summary: "Routine childhood immunization protects children against dangerous infections. Parents and guardians are advised to keep immunization cards safe and ensure children receive vaccines according to schedule."
      },
      {
        id: 10,
        title: "HIV Awareness: Testing, Prevention, and Support",
        category: "Public Health",
        categorySlug: "public-health",
        date: "March 13, 2026",
        icon: "hiv",
        summary: "Knowing your HIV status is an important part of personal and public health. Early testing and access to care improve long-term health outcomes. Our hospital continues to support awareness, counselling, and referral services."
      },
      {
        id: 11,
        title: "Nutrition and Child Growth in Rural Communities",
        category: "Nutrition",
        categorySlug: "nutrition",
        date: "March 11, 2026",
        icon: "nutrition",
        summary: "Balanced feeding is essential for child growth, immunity, and learning. Parents are encouraged to provide locally available nutritious foods and seek advice if a child shows poor weight gain or signs of malnutrition."
      },
      {
        id: 12,
        title: "Protecting Your Eyes Through Regular Checkups",
        category: "General Health",
        categorySlug: "general-health",
        date: "March 10, 2026",
        icon: "eye",
        summary: "Blurred vision, eye pain, or persistent redness should not be ignored. Eye problems can affect school performance, work, and safety. Early examination helps prevent avoidable vision loss."
      },
      {
        id: 13,
        title: "Oral Hygiene and Dental Health Awareness",
        category: "General Health",
        categorySlug: "general-health",
        date: "March 9, 2026",
        icon: "dental",
        summary: "Daily brushing, reduced sugar intake, and regular oral care help prevent tooth decay and gum disease. Dental pain should be treated early to avoid more serious complications."
      },
      {
        id: 14,
        title: "Hospital Advisory on Seasonal Flu and Cough",
        category: "Respiratory Health",
        categorySlug: "respiratory-health",
        date: "March 7, 2026",
        icon: "lungs",
        summary: "Residents experiencing cough, fever, weakness, or breathing discomfort are encouraged to rest, maintain hydration, and visit the hospital when symptoms worsen or persist."
      },
      {
        id: 15,
        title: "Safe Water and Food Handling in the Home",
        category: "Public Health",
        categorySlug: "public-health",
        date: "March 5, 2026",
        icon: "general",
        summary: "Simple hygiene habits such as washing hands, storing food properly, and drinking safe water can significantly reduce preventable illness in homes and communities."
      }
    ];

    /* =========================================================
       APP STATE
       ========================================================= */
    let activeCategory = "all";
    let searchTerm = "";
    let visibleCount = 6;

    const newsGrid = document.getElementById("newsGrid");
    const filterButtons = document.getElementById("filterButtons");
    const searchInput = document.getElementById("searchInput");
    const resultCount = document.getElementById("resultCount");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const emptyState = document.getElementById("emptyState");
    const heroNewsCount = document.getElementById("heroNewsCount");

    heroNewsCount.textContent = newsData.length;

    /* =========================================================
       GET CATEGORIES
       ========================================================= */
    const categories = [
      { label: "All", slug: "all" },
      ...Array.from(
        new Map(newsData.map(item => [item.categorySlug, { label: item.category, slug: item.categorySlug }])).values()
      )
    ];

    /* =========================================================
       RENDER FILTERS
       ========================================================= */
    function renderFilters() {
      filterButtons.innerHTML = categories.map(category => `
        <button class="filter-btn ${activeCategory === category.slug ? "active" : ""}" data-category="${category.slug}">
          ${category.label}
        </button>
      `).join("");

      document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          activeCategory = btn.dataset.category;
          visibleCount = 6;
          renderFilters();
          renderNews();
        });
      });
    }

    /* =========================================================
       FILTER LOGIC
       ========================================================= */
    function getFilteredNews() {
      return newsData.filter(item => {
        const matchCategory = activeCategory === "all" || item.categorySlug === activeCategory;
        const matchSearch =
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase());

        return matchCategory && matchSearch;
      });
    }

    /* =========================================================
       CARD TEMPLATE
       ========================================================= */
    function createCard(news) {
      const shortText = news.summary.length > 150
        ? news.summary.slice(0, 150).trim() + "..."
        : news.summary;

      return `
        <article class="news-card">
          <div class="news-card-top">
            <div class="news-meta">
              <span class="news-tag">${news.category}</span>
              <span class="news-date">${news.date}</span>
            </div>

            <div class="news-icon-wrap">
              ${icons[news.icon] || icons.general}
            </div>

            <h3>${news.title}</h3>
          </div>

          <div class="news-card-body">
            <p class="news-summary" id="summary-${news.id}" data-full="${escapeHtml(news.summary)}" data-short="${escapeHtml(shortText)}">
              ${shortText}
            </p>

            <div class="news-footer">
              <button class="btn btn-secondary read-more-btn" data-id="${news.id}">
                Read More
              </button>

            </div>
          </div>
        </article>
      `;
    }

    /* =========================================================
       RENDER NEWS
       ========================================================= */
    function renderNews() {
      const filtered = getFilteredNews();
      const visibleNews = filtered.slice(0, visibleCount);

      resultCount.textContent = `${filtered.length} news found`;

      if (filtered.length === 0) {
        newsGrid.innerHTML = "";
        emptyState.style.display = "block";
        loadMoreBtn.style.display = "none";
        return;
      }

      emptyState.style.display = "none";

      newsGrid.innerHTML = visibleNews.map(createCard).join("");

      loadMoreBtn.style.display = filtered.length > visibleCount ? "inline-block" : "none";

      attachReadMoreEvents();
    }

    /* =========================================================
       READ MORE / LESS
       ========================================================= */
    function attachReadMoreEvents() {
      document.querySelectorAll(".read-more-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.dataset.id;
          const summary = document.getElementById(`summary-${id}`);
          const isExpanded = summary.classList.contains("expanded");

          const fullText = summary.dataset.full;
          const shortText = summary.dataset.short;

          if (isExpanded) {
            summary.innerHTML = shortText;
            summary.classList.remove("expanded");
            btn.textContent = "Read More";
          } else {
            summary.innerHTML = fullText;
            summary.classList.add("expanded");
            btn.textContent = "Read Less";
          }
        });
      });
    }

    /* =========================================================
       ESCAPE HTML
       ========================================================= */
    function escapeHtml(str) {
      return str
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }

    /* =========================================================
       EVENTS
       ========================================================= */
    searchInput.addEventListener("input", (e) => {
      searchTerm = e.target.value.trim();
      visibleCount = 6;
      renderNews();
    });

    loadMoreBtn.addEventListener("click", () => {
      visibleCount += 6;
      renderNews();
    });

    /* =========================================================
       INIT
       ========================================================= */
    renderFilters();
    renderNews();
  