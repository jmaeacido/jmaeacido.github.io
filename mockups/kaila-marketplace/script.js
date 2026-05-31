const requests = [
  {
    id: "REQ-1042",
    title: "Aircon not cooling",
    category: "Appliance Repair",
    area: "Barangay 23, Gingoog City",
    urgency: "urgent",
    status: "matched",
    budget: "PHP 800-1,200",
    details: "Window-type aircon is running but not cooling. Client can upload a short video and model photo.",
    offers: [
      ["Ramon A.", "PHP 850", "Today, 4:30 PM", "4.8 rating"],
      ["CoolFix Gingoog", "PHP 1,100", "Tomorrow morning", "Business verified"],
      ["Jun Technician", "PHP 900", "Today, 6:00 PM", "ID verified"]
    ],
    trust: ["ID verified", "38 completed jobs", "18 min avg response", "Low dispute rate"]
  },
  {
    id: "REQ-1043",
    title: "Leaking kitchen sink",
    category: "Plumbing",
    area: "Barangay San Luis, Gingoog City",
    urgency: "urgent",
    status: "matched",
    budget: "PHP 500-900",
    details: "Water leaks under sink when faucet is used. Client needs same-day inspection.",
    offers: [
      ["Marlon P.", "PHP 650", "Today, 3:00 PM", "Top rated"],
      ["PipeCare", "PHP 800", "Today, 5:00 PM", "Work verified"]
    ],
    trust: ["Top category", "Fast response", "Two-way ratings"]
  },
  {
    id: "REQ-1044",
    title: "Laptop running slow",
    category: "Computer Repair",
    area: "Barangay Talisay, Gingoog City",
    urgency: "normal",
    status: "matched",
    budget: "PHP 700-1,500",
    details: "Laptop takes too long to open apps. Client wants diagnosis before deciding on repair.",
    offers: [
      ["TechMate", "PHP 900", "Tomorrow", "Certified"],
      ["Ian IT Help", "PHP 750", "Today evening", "4.7 rating"],
      ["Gingoog PC Repair", "PHP 1,200", "Shop visit", "Business verified"]
    ],
    trust: ["Clear scope", "Price compare", "Review required"]
  },
  {
    id: "REQ-1045",
    title: "Small cabinet repair",
    category: "Carpentry",
    area: "Barangay Lunao, Gingoog City",
    urgency: "normal",
    status: "posted",
    budget: "PHP 600-1,000",
    details: "Loose hinge and damaged cabinet door. Photos are attached for estimate.",
    offers: [],
    trust: ["Needs provider outreach", "Manual matching"]
  }
];

const providers = [
  ["Ramon A.", "Appliance Repair", "Barangay 23", "4.8", "38", "18m"],
  ["Marlon P.", "Plumbing", "San Luis", "4.9", "24", "22m"],
  ["TechMate Gingoog", "Computer Repair", "Talisay", "4.7", "31", "35m"],
  ["Lito Electrical", "Electrical", "Lunao", "4.6", "18", "28m"],
  ["CoolFix Gingoog", "Appliance Repair", "Barangay 18-A", "4.8", "52", "40m"],
  ["Gingoog PC Repair", "Computer Repair", "Poblacion", "4.5", "17", "1h"]
];

const viewLinks = document.querySelectorAll("[data-view-link]");
const views = document.querySelectorAll("[data-view]");
const requestList = document.querySelector("[data-request-list]");
const requestDetail = document.querySelector("[data-request-detail]");
const filterButtons = document.querySelectorAll("[data-filter]");
const providerGrid = document.querySelector("[data-provider-grid]");
const providerSearch = document.querySelector("[data-provider-search]");
const densityToggle = document.querySelector("[data-density-toggle]");

let activeRequest = requests[0].id;
let activeFilter = "all";

function shouldFocusRequestDetail() {
  return window.matchMedia("(max-width: 640px)").matches;
}

function showView(name) {
  views.forEach((view) => view.classList.toggle("active", view.dataset.view === name));
  viewLinks.forEach((link) => link.classList.toggle("active", link.dataset.viewLink === name));
}

function renderRequests() {
  const filtered = requests.filter((request) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "urgent") return request.urgency === "urgent";
    return request.status === "matched";
  });

  requestList.innerHTML = filtered.map((request) => `
    <button class="request-card ${request.id === activeRequest ? "active" : ""}" type="button" data-request-id="${request.id}">
      <div class="request-top">
        <div>
          <h3>${request.title}</h3>
          <span class="request-meta">${request.category} | ${request.area}</span>
        </div>
        <span class="badge ${request.urgency === "urgent" ? "urgent" : "matched"}">${request.urgency === "urgent" ? "Urgent" : "Flexible"}</span>
      </div>
      <p>${request.details}</p>
      <span class="request-meta">${request.offers.length} offers | Budget ${request.budget}</span>
    </button>
  `).join("");

  document.querySelectorAll("[data-request-id]").forEach((button) => {
    button.addEventListener("click", () => {
      activeRequest = button.dataset.requestId;
      renderRequests();
      renderRequestDetail();
      if (shouldFocusRequestDetail()) {
        requestDetail.scrollIntoView({ block: "start" });
      }
    });
  });
}

function renderRequestDetail() {
  const request = requests.find((item) => item.id === activeRequest) || requests[0];
  const offers = request.offers.length
    ? request.offers.map(([name, price, schedule, badge]) => `
      <div class="offer-row">
        <div>
          <strong>${name}</strong>
          <span class="request-meta">${schedule} | ${badge}</span>
        </div>
        <span class="price">${price}</span>
      </div>
    `).join("")
    : `<p class="empty-note">No offers yet. Operations should forward this request to matching providers.</p>`;

  requestDetail.innerHTML = `
    <p class="eyebrow">${request.id}</p>
    <h3>${request.title}</h3>
    <p>${request.details}</p>
    <div class="trust-list">${request.trust.map((item) => `<span>${item}</span>`).join("")}</div>
    <div class="offer-list">${offers}</div>
  `;
}

function renderProviders(search = "") {
  const query = search.trim().toLowerCase();
  const rows = providers.filter((provider) => provider.join(" ").toLowerCase().includes(query));
  providerGrid.innerHTML = rows.map(([name, category, area, rating, jobs, response]) => `
    <article class="provider-card">
      <div>
        <h3>${name}</h3>
        <small>${category} | ${area}</small>
      </div>
      <div class="provider-score">
        <span>${rating}<br>rating</span>
        <span>${jobs}<br>jobs</span>
        <span>${response}<br>reply</span>
      </div>
      <div class="trust-list">
        <span>ID verified</span>
        <span>Profile ready</span>
      </div>
    </article>
  `).join("");
}

viewLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showView(link.dataset.viewLink);
    history.replaceState(null, "", `#${link.dataset.viewLink}`);
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderRequests();
  });
});

providerSearch?.addEventListener("input", (event) => renderProviders(event.target.value));
densityToggle?.addEventListener("click", () => document.documentElement.classList.toggle("compact"));

const initialView = location.hash.replace("#", "") || "requests";
showView(document.querySelector(`[data-view="${initialView}"]`) ? initialView : "requests");
renderRequests();
renderRequestDetail();
renderProviders();
