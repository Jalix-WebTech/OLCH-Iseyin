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
  },
  {
    title: "Measles Outbreak Raises Concern",
    category: "health",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    intro: "Rising measles cases highlight gaps in vaccination coverage...",
    full: `
      <p>Health authorities have reported a significant increase in measles cases globally, with over a thousand confirmed infections in early 2026.</p>
      <p>This surge has been linked to declining vaccination rates in several regions.</p>
      <p>Measles is a highly contagious viral disease that can lead to severe complications, especially in children.</p>

      <p>Experts warn that even small drops in vaccination coverage can lead to large outbreaks.</p>
      <p>Efforts are underway to strengthen immunization campaigns and educate communities about the importance of vaccines.</p>
      <p>Early detection and isolation of cases are also critical in controlling the spread.
      </p>
    `,
    date: "2026-03-15"
  },
  {
    title: "Africa CDC and Europe Strengthen Health Partnership",
    category: "health",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    intro: "A new agreement aims to boost global disease response systems...",
    full: `
      <p>The Africa Centres for Disease Control and Prevention (Africa CDC) and the European Centre for Disease Prevention and Control (ECDC) have signed a landmark agreement to enhance collaboration.</p>
      <p>This partnership focuses on improving disease surveillance, laboratory systems, and workforce training across both continents.</p>
      <p>It also aims to strengthen preparedness for future pandemics and public health emergencies.</p>

      <p>Experts believe that such international collaborations are vital in an interconnected world where diseases can spread rapidly across borders.</p>
    `,
    date: "2026-03-15"
  },
  {
    title: "Polio Risk Remains High in Multiple Countries",
    category: "health",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
    intro: "Continued vigilance is required to prevent polio spread...",
    full: `
      <p>Global health organizations have warned that poliovirus transmission remains a risk in several countries.</p>
      <p>Despite significant progress toward eradication, challenges persist due to conflict, poor healthcare access, and vaccine hesitancy.</p>
      <p>Polio primarily affects children and can lead to permanent paralysis.</p>

      <p>Vaccination remains the most effective tool for prevention.</p>
      <p>Health authorities are intensifying immunization campaigns and surveillance efforts to ensure that new cases are quickly detected and contained.</p>
    `,
    date: "2026-03-15"
  },
  {
    title: "Ethiopia Declares End of Marburg Outbreak",
    category: "health",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b",
    intro: "A deadly viral outbreak has been successfully contained...",
    full: `
      <p>Ethiopia has officially declared the end of its Marburg virus outbreak after 42 consecutive days without new cases.</p>
      <p>The Marburg virus is highly infectious and can cause severe hemorrhagic fever.</p>
      <p>The successful containment was achieved through rapid response measures, including isolation of cases, contact tracing, and community engagement.</p>

      <p>This achievement highlights the importance of strong public health systems and coordinated response strategies in managing infectious disease outbreaks.</p>
    `,
    date: "2026-03-15"
  },
  {
    title: "Lassa Fever Cases Rise in Nigeria",
    category: "health",
    image: "https://www.google.com/imgres?q=Lassa%20Fever%20Cases%20Rise%20in%20Nigeria&imgurl=https%3A%2F%2Fcdn.guardian.ng%2Fwp-content%2Fuploads%2F2026%2F01%2Flassa-fever.webp&imgrefurl=https%3A%2F%2Fguardian.ng%2Fnews%2Fncdc-raises-alarm-as-15-health-workers-contract-lassa-fever-two-die%2F&docid=3EsHO_GXhIKvZM&tbnid=FcvCj7cxS2EqFM&vet=12ahUKEwitssCyz6yTAxVeTUEAHWJPIbcQnPAOegQIUBAB..i&w=1890&h=1063&hcb=2&ved=2ahUKEwitssCyz6yTAxVeTUEAHWJPIbcQnPAOegQIUBAB",
    intro: "Seasonal increase prompts nationwide health alert...",
    full: `
      <p>Nigeria is experiencing a seasonal increase in Lassa fever cases, particularly during the dry season.</p>
      <p>The disease is transmitted through contact with food or household items contaminated by infected rodents.</p>
      <p>Symptoms can range from mild to severe, including fever, weakness, and bleeding in serious cases.</p>

      <p>Early diagnosis and treatment significantly improve survival rates.</p>
      <p>Health authorities are urging the public to maintain proper hygiene, store food safely, and avoid contact with rodents to reduce the risk of infection.</p>
    `,
    date: "2026-03-15"
  },


  {
    title: "U.S.–Congo Health Partnership Announced",
    category: "health",
    image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322",
    intro: "Major investment targets key health challenges...",
    full: `
      <p>A new multi-billion-dollar health partnership between the United States and the Democratic Republic of Congo aims to strengthen healthcare systems and address major health challenges.</p>
      <p>The initiative focuses on combating diseases such as HIV, malaria, and tuberculosis, while also improving maternal and child health services.</p>
      <p>Infrastructure development, workforce training, and access to essential medicines are key components of the program.</p>
    `,
    date: "2026-03-15"
  },
  {
    title: "Global Health Cooperation Faces Challenges",
    category: "health",
    image: " https://images.unsplash.com/photo-1581594693702-4d3c9eae6b5c",
    intro: " International collaboration remains critical for disease control...",
    full: `
      <p>Recent developments have raised concerns about the future of global health cooperation.</p>
      <p>Experts warn that reduced collaboration between countries could weaken the ability to respond to pandemics.</p>
      <p>International organizations play a crucial role in coordinating responses, sharing data, and providing support to countries in need.</p>

      <p>Strengthening partnerships and maintaining open communication channels are essential for addressing global health threats effectively.</p>
      <p>(Remaining 20 — Same detailed structure, slightly more concise but still paragraph-based)</p>
    `,
    date: "2026-03-15"
  },
  {
    title: "Vaccine Hesitancy Increasing Globally",
    category: "health",
    image: " https://images.unsplash.com/photo-1612277795421-9bc7706a4a34",
    intro: "Declining trust in vaccines is affecting public health...",
    full: `
      <p>Vaccine hesitancy continues to rise in several parts of the world, leading to reduced immunization coverage.</p>
      <p>This trend is contributing to the resurgence of preventable diseases such as measles. </p>
      <p>Health experts emphasize the need for public education and transparent communication.</p>

      <p>Building trust through community engagement remains a key strategy in addressing this issue.</p>
    `,
    date: "2026-03-15"
  },
  {
    title: " Health Data Sharing Concerns Raised",
    category: "health",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f",
    intro: "New agreements spark debate over data security...",
    full: `
      <p>Concerns have been raised about international agreements involving health data sharing.</p>
      <p>Experts warn that while data sharing is essential for disease tracking, it must be balanced with privacy and national security considerations.</p>

      <p>Clear policies and safeguards are necessary to protect sensitive information.</p>
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