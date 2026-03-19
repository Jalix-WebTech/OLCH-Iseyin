/* /news.js */

/* DATA */
const newsData = [
  {
    title: "Free Medical Outreach Program",
    category: "event",
    image: src="../Images/OLCH_outreach.jpg",
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
    title: "Severe Mpox Strain Detected in the U.S.",
    category: "health",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144",
    intro: "A more dangerous strain of mpox has been identified, raising global concern...",
    full: `
      <p>Health authorities in the United States have confirmed the presence of a more severe strain of mpox, known as Clade I.</p>
      <p>This strain has been associated with higher transmission rates and more serious complications compared to earlier variants.</p>
      <p>Officials reported that the detected case was isolated quickly, and contact tracing measures were immediately activated to prevent further spread.</p>

      <p>There is currently no evidence of widespread community transmission.</p>
      <p>Public health experts are advising individuals, especially those in high-risk groups, to consider vaccination and maintain proper hygiene practices.</p>
      <p>Increased awareness and early reporting of symptoms remain key strategies in controlling the outbreak.</p>
    `,
    date: "2026-03-15"
  },
  {
    title: "Flu Vaccine Effectiveness Drops in 2026 Season",
    category: "health",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
    intro: "This year’s flu vaccine shows reduced effectiveness due to strain mismatch...",
    full: `
      <p>Recent studies indicate that the 2026 seasonal influenza vaccine is less effective than expected, particularly among adults.</p>
      <p>Scientists attribute this to a mismatch between the vaccine composition and the dominant circulating H3N2 strain.</p>
      <p>Despite the reduced effectiveness, health professionals emphasize that the vaccine still provides significant protection against severe illness, hospitalization, and death.</p>

      <p>Vulnerable populations such as the elderly and those with chronic conditions are especially encouraged to get vaccinated.</p>
      <p>Healthcare providers are also promoting additional preventive measures, including hand hygiene, mask usage in crowded areas, and early medical consultation when symptoms appear.</p>
    `,
    date: "2026-03-15"
  },
  {
    title: "Court Blocks Changes to Vaccine Policy",
    category: "health",
    image: "https://images.unsplash.com/photo-1600959907703-125ba1374a12",
    intro: "A legal ruling preserves existing vaccination guidelines...",
    full: `
      <p>A federal court has intervened to block proposed changes to national vaccine policies that could have reduced immunization coverage among children.</p>
      <p>The decision was welcomed by public health experts and medical organizations.</p>
      <p>The court emphasized the importance of evidence-based healthcare policies and warned against decisions that could undermine decades of progress in disease prevention.</p>

      <p>Maintaining high vaccination coverage remains essential to prevent outbreaks of preventable diseases.</p>
      <p>his ruling ensures that current vaccination programs will continue without disruption, safeguarding millions of individuals, particularly children, from infectious diseases.</p>
    `,
    date: "2026-03-15"
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