/* /news.js */

/* DATA */
const newsData = [
  {
    title: "New Cardiology Unit Opened",
    category: "event",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    intro: "Our hospital launches a new advanced cardiology unit...",
    full: `
      <p>Our hospital proudly opened a state-of-the-art cardiology unit.</p>
      <p>This unit includes modern diagnostic tools and expert specialists.</p>
      <p>Patients will now receive faster and more accurate care.</p>
    `,
    date: "2026-03-10"
  },
  {
    title: "Tips for Healthy Living",
    category: "health",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
    intro: "Learn simple daily habits to improve your health...",
    full: `
      <p>Balanced nutrition is key to a healthy life.</p>
      <p>Exercise improves both physical and mental wellbeing.</p>
      <p>Routine checkups help detect issues early.</p>
    `,
    date: "2026-03-15"
  },
  {
    title: "Free Medical Outreach",
    category: "event",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    intro: "Join our free community outreach...",
    full: `
      <p>We are offering free consultations and screenings.</p>
      <p>This program targets underserved communities.</p>
      <p>Healthcare access is our mission.</p>
    `,
    date: "2026-03-18"
  }
];

let currentCategory = "all";

/* SORT */
function sortByDate(data) {
  return [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
}

/* RENDER */
function renderNews() {
  const container = document.getElementById("newsContainer");
  container.innerHTML = "";

  let filtered = currentCategory === "all"
    ? newsData
    : newsData.filter(n => n.category === currentCategory);

  sortByDate(filtered).forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${item.image}" />
      <div class="card-content">
        <h3>${item.title}</h3>
        <p>${item.intro}</p>
        <button class="btn">Read All</button>
      </div>
    `;

    card.querySelector("button").addEventListener("click", () => openModal(item));
    container.appendChild(card);
  });
}

/* FILTER */
document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", function () {
    currentCategory = this.dataset.filter;

    document.querySelectorAll(".nav-item").forEach(el => el.classList.remove("active"));
    this.classList.add("active");

    renderNews();
  });
});

/* MODAL */
function openModal(item) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalTitle").innerText = item.title;
  document.getElementById("modalImage").src = item.image;
  document.getElementById("modalContent").innerHTML = item.full;

  document.body.classList.add("modal-open");
  document.getElementById("newsContainer").classList.add("disabled");
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.body.classList.remove("modal-open");
  document.getElementById("newsContainer").classList.remove("disabled");
}

/* CLOSE EVENTS */
document.getElementById("closeBtn").addEventListener("click", closeModal);

document.getElementById("modal").addEventListener("click", function (e) {
  if (e.target === this) closeModal();
});

/* INIT */
document.addEventListener("DOMContentLoaded", renderNews);