const root = document.documentElement;
const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navPanel = document.querySelector("[data-nav-panel]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeIcon = document.querySelector(".theme-icon");
const year = document.querySelector("[data-year]");
const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll(".project-card");
const contactForm = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");
const modal = document.querySelector("[data-project-modal]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalContent = document.querySelector("[data-modal-content]");
let activeCarouselController = null;

const kodusScreenshots = [
  ["Year Selection", "assets/img/projects/kodus/01-select-year.png"],
  ["Login Choice", "assets/img/projects/kodus/02-login-choice.png"],
  ["Dashboard", "assets/img/projects/kodus/03-home-dashboard.png"],
  ["Calendar", "assets/img/projects/kodus/04-calendar.png"],
  ["MEB Master List", "assets/img/projects/kodus/05-tracking-meb-master-list.png"],
  ["MEB Validation", "assets/img/projects/kodus/06-tracking-meb-validation.png"],
  ["Incoming Documents", "assets/img/projects/kodus/07-tracking-incoming-documents.png"],
  ["Outgoing Documents", "assets/img/projects/kodus/08-tracking-outgoing-documents.png"],
  ["Payout Tracking", "assets/img/projects/kodus/09-tracking-payout.png"],
  ["Fund Monitoring", "assets/img/projects/kodus/10-fund-monitoring.png"],
  ["Baseline Targets", "assets/img/projects/kodus/11-implementation-baseline-targets.png"],
  ["Program Activities", "assets/img/projects/kodus/12-implementation-program-activities.png"],
  ["Project Location Maps", "assets/img/projects/kodus/13-implementation-project-location-maps.png"],
  ["Project Location Records", "assets/img/projects/kodus/14-implementation-project-location-records.png"],
  ["LAWA Summary", "assets/img/projects/kodus/15-implementation-lawa-summary.png"],
  ["BINHI Summary", "assets/img/projects/kodus/16-implementation-binhi-summary.png"],
  ["Beneficiary Profile Report", "assets/img/projects/kodus/17-reports-beneficiary-profile.png"],
  ["Sectoral Summary Report", "assets/img/projects/kodus/18-reports-sectoral-summary.png"],
  ["PWD Summary", "assets/img/projects/kodus/19-reports-pwd-summary.png"],
  ["PWD Sex Disaggregation", "assets/img/projects/kodus/20-reports-pwd-sex-disaggregated.png"],
  ["Crossmatching Tool", "assets/img/projects/kodus/21-tools-crossmatching.png"],
  ["Deduplication Tool", "assets/img/projects/kodus/22-tools-deduplication.png"],
  ["MEBIS Name Matching Template", "assets/img/projects/kodus/23-tools-mebis-name-matching-template.png"],
  ["MEB Import Template", "assets/img/projects/kodus/24-tools-meb-import-template.png"],
  ["Cash Advance Requirements", "assets/img/projects/kodus/25-tools-cash-advance-requirements.png"],
  ["Users Management", "assets/img/projects/kodus/26-administration-users-management.png"],
  ["Project Variables", "assets/img/projects/kodus/27-administration-project-variables.png"],
  ["Password Security", "assets/img/projects/kodus/28-administration-password-security.png"],
  ["Audit Logs", "assets/img/projects/kodus/29-administration-audit-logs.png"],
  ["Maintenance Mode", "assets/img/projects/kodus/30-administration-maintenance-mode.png"],
  ["Messenger Inbox", "assets/img/projects/kodus/31-messenger-inbox.png"],
  ["Settings", "assets/img/projects/kodus/32-settings.png"]
];

const zynqScreenshots = [
  ["Login", "assets/img/projects/zynq/01-login.png"],
  ["Dashboard", "assets/img/projects/zynq/02-dashboard.png"],
  ["POS Register", "assets/img/projects/zynq/03-pos-register.png"],
  ["Sales", "assets/img/projects/zynq/04-sales.png"],
  ["Cash Sessions", "assets/img/projects/zynq/05-cash-sessions.png"],
  ["Offline Sync Status", "assets/img/projects/zynq/06-offline-sync-status.png"],
  ["Offline Sync Conflicts", "assets/img/projects/zynq/07-offline-sync-conflicts.png"],
  ["Products", "assets/img/projects/zynq/08-products.png"],
  ["Categories", "assets/img/projects/zynq/09-categories.png"],
  ["Inventory", "assets/img/projects/zynq/10-inventory.png"],
  ["Stock Movements", "assets/img/projects/zynq/11-stock-movements.png"],
  ["Daily Sales Report", "assets/img/projects/zynq/12-daily-sales-report.png"],
  ["VAT Sales Report", "assets/img/projects/zynq/13-vat-sales-report.png"],
  ["Non-VAT Sales Report", "assets/img/projects/zynq/14-non-vat-sales-report.png"],
  ["Discounts Report", "assets/img/projects/zynq/15-discounts-report.png"],
  ["Voids Report", "assets/img/projects/zynq/16-voids-report.png"],
  ["Refunds Report", "assets/img/projects/zynq/17-refunds-report.png"],
  ["Audit Trail Report", "assets/img/projects/zynq/18-audit-trail-report.png"],
  ["Tenants", "assets/img/projects/zynq/19-tenants.png"],
  ["Branches", "assets/img/projects/zynq/20-branches.png"],
  ["Terminals", "assets/img/projects/zynq/21-terminals.png"],
  ["BIR Settings", "assets/img/projects/zynq/22-bir-settings.png"],
  ["Invoice Settings", "assets/img/projects/zynq/23-invoice-settings.png"],
  ["Invoice Preview", "assets/img/projects/zynq/24-invoice-preview.png"],
  ["Onboarding", "assets/img/projects/zynq/25-onboarding.png"],
  ["Compliance Checklist", "assets/img/projects/zynq/26-compliance-checklist.png"],
  ["Settings", "assets/img/projects/zynq/27-settings.png"]
];

const reportingScreenshots = [
  ["KODUS Beneficiary Profile Report", "assets/img/projects/kodus/17-reports-beneficiary-profile.png"],
  ["KODUS Sectoral Summary Report", "assets/img/projects/kodus/18-reports-sectoral-summary.png"],
  ["KODUS PWD Summary", "assets/img/projects/kodus/19-reports-pwd-summary.png"],
  ["KODUS PWD Sex Disaggregation", "assets/img/projects/kodus/20-reports-pwd-sex-disaggregated.png"],
  ["ZYNQ Daily Sales Report", "assets/img/projects/zynq/12-daily-sales-report.png"],
  ["ZYNQ VAT Sales Report", "assets/img/projects/zynq/13-vat-sales-report.png"],
  ["ZYNQ Non-VAT Sales Report", "assets/img/projects/zynq/14-non-vat-sales-report.png"],
  ["ZYNQ Discounts Report", "assets/img/projects/zynq/15-discounts-report.png"],
  ["ZYNQ Voids Report", "assets/img/projects/zynq/16-voids-report.png"],
  ["ZYNQ Refunds Report", "assets/img/projects/zynq/17-refunds-report.png"],
  ["ZYNQ Audit Trail Report", "assets/img/projects/zynq/18-audit-trail-report.png"]
];

const securityScreenshots = [
  ["KODUS Login Choice", "assets/img/projects/kodus/02-login-choice.png"],
  ["KODUS Authenticator Setup", "assets/img/projects/kodus/33-authenticator-setup.png"],
  ["KODUS Two-Factor Verification", "assets/img/projects/kodus/34-2fa-verification.png"],
  ["KODUS Users Management", "assets/img/projects/kodus/26-administration-users-management.png"],
  ["KODUS Password Security", "assets/img/projects/kodus/28-administration-password-security.png"],
  ["KODUS Audit Logs", "assets/img/projects/kodus/29-administration-audit-logs.png"],
  ["KODUS Maintenance Mode", "assets/img/projects/kodus/30-administration-maintenance-mode.png"],
  ["ZYNQ Login", "assets/img/projects/zynq/01-login.png"],
  ["ZYNQ Audit Trail Report", "assets/img/projects/zynq/18-audit-trail-report.png"],
  ["ZYNQ Tenants", "assets/img/projects/zynq/19-tenants.png"],
  ["ZYNQ Terminals", "assets/img/projects/zynq/21-terminals.png"],
  ["ZYNQ BIR Settings", "assets/img/projects/zynq/22-bir-settings.png"]
];

const documentationScreenshots = [
  ["KODUS MEBIS Name Matching Template", "assets/img/projects/kodus/23-tools-mebis-name-matching-template.png"],
  ["KODUS MEB Import Template", "assets/img/projects/kodus/24-tools-meb-import-template.png"],
  ["KODUS Cash Advance Requirements", "assets/img/projects/kodus/25-tools-cash-advance-requirements.png"],
  ["ZYNQ Invoice Settings", "assets/img/projects/zynq/23-invoice-settings.png"],
  ["ZYNQ Invoice Preview", "assets/img/projects/zynq/24-invoice-preview.png"],
  ["ZYNQ Onboarding", "assets/img/projects/zynq/25-onboarding.png"],
  ["ZYNQ Compliance Checklist", "assets/img/projects/zynq/26-compliance-checklist.png"],
  ["ZYNQ Settings", "assets/img/projects/zynq/27-settings.png"]
];

const projectDetails = {
  "KODUS Web System": {
    intro:
      "Sanitized feature captures from KODUS, showing the administrative workflows, tracking modules, reporting views, utilities, and system settings without exposing private records.",
    highlights: [
      "Maintained and supported PHP/MySQL workflows for beneficiary tracking, validation, reports, fund monitoring, and administration.",
      "Improved operational usability across dashboard navigation, records review, reporting, security, and admin support screens.",
      "Prepared portfolio-safe screenshots with sensitive account, beneficiary, document, and audit data blurred or replaced."
    ],
    screenshots: kodusScreenshots
  },
  "ZYNQ Web System": {
    intro:
      "Sanitized feature captures from ZYNQ, showing the BIR-ready POS foundation, sales operations, offline sync, inventory, reports, compliance setup, and administration workflows.",
    highlights: [
      "Supported POS and sales workflows, including checkout, sales records, cash sessions, and operational reporting.",
      "Worked across inventory, stock movements, compliance setup, invoice previews, onboarding, and audit trail review screens.",
      "Prepared portfolio-safe screenshots with sensitive account, tenant, branch, sales, and audit data blurred or replaced."
    ],
    screenshots: zynqScreenshots
  },
  "Reporting & Data Automation Tools": {
    intro:
      "Sanitized report and data workflow captures from KODUS and ZYNQ, showing recurring summaries, validation views, sales reporting, and audit-ready report outputs.",
    highlights: [
      "Prepared and supported reporting workflows for beneficiary profiles, sectoral summaries, PWD summaries, sales reports, VAT and non-VAT reports, discounts, voids, refunds, and audit trails.",
      "Helped make recurring reports easier to review by organizing data screens, summary views, templates, and validation-friendly outputs.",
      "Kept portfolio examples confidentiality-safe by using sanitized captures and avoiding exposure of private beneficiary, tenant, branch, sales, and audit records."
    ],
    screenshots: reportingScreenshots
  },
  "Secure Login / 2FA / Audit Logging": {
    intro:
      "Sanitized security and administration captures from KODUS and ZYNQ, showing login flows, user management, password controls, audit logs, tenant controls, and system safeguards.",
    highlights: [
      "Supported authentication and access-related workflows across login screens, user management, password security, tenant settings, terminals, and administrative controls.",
      "Worked with audit trail and activity review screens that help teams trace sensitive actions and keep operational changes accountable.",
      "Prepared screenshots with private account, tenant, branch, terminal, and audit information removed or obscured before portfolio use."
    ],
    screenshots: securityScreenshots
  },
  "Technical Documentation & Workflow Automation": {
    intro:
      "Sanitized documentation and repeatable workflow captures from KODUS and ZYNQ, showing import templates, matching tools, requirements references, invoice setup, onboarding, and compliance checklists.",
    highlights: [
      "Created and maintained practical references for repeatable workflows such as imports, name matching, cash advance requirements, onboarding, invoice setup, and compliance checks.",
      "Helped turn recurring support and QA tasks into clearer steps, templates, and review points for both technical and non-technical users.",
      "Selected portfolio-safe examples that demonstrate documentation value while keeping operational details and client-sensitive information private."
    ],
    screenshots: documentationScreenshots
  },
  "Resumo Resume Intelligence Dashboard": {
    intro:
      "A local resume scoring platform for ATS readiness, resume completeness, job-description matching, keyword gaps, report storage, and downloadable feedback reports.",
    preview: {
      src: "mockups/resumo/",
      title: "Resumo Resume Intelligence Dashboard live preview",
      action: "View Project",
      badge: "AI resume tool",
      heading: "Resumo Resume Intelligence Dashboard",
      stack: "PHP &bull; MySQL &bull; JavaScript &bull; AdminLTE &bull; Resume Analysis"
    }
  },
  "Sarah Jane Galido VA Portfolio": {
    intro:
      "A responsive virtual assistant and social media manager portfolio with service sections, tools, certificates, work samples, contact paths, and theme support.",
    preview: {
      src: "mockups/sjpgalido-va-portfolio/",
      title: "Sarah Jane Galido VA Portfolio live preview",
      action: "View Project",
      badge: "Client portfolio site",
      heading: "Sarah Jane Galido VA Portfolio",
      stack: "HTML &bull; CSS &bull; JavaScript &bull; Responsive Portfolio &bull; Client Site"
    }
  }
};

function renderProjectDetails(title) {
  if (!modalContent) return;

  const details = projectDetails[title];

  if (!details) {
    activeCarouselController = null;
    modalContent.innerHTML =
      "<p>This project can be expanded with sanitized screenshots, measurable outcomes, and a short case study while keeping confidential information private.</p>";
    return;
  }

  if (details.preview) {
    activeCarouselController = null;
    modalContent.innerHTML = `
      <article class="project-live-showcase">
        <div class="project-live-copy">
          <span class="feature-badge">${details.preview.badge}</span>
          <h3>${details.preview.heading}</h3>
          <p>${details.intro}</p>
          <div class="project-stack">${details.preview.stack}</div>
          <div class="project-preview-actions">
            <a class="btn btn-primary" href="${details.preview.src}" target="_blank" rel="noopener">${details.preview.action}</a>
          </div>
        </div>
        <div class="project-detail-preview" aria-label="${details.preview.title}">
          <iframe src="${details.preview.src}" title="${details.preview.title}" loading="lazy"></iframe>
        </div>
      </article>
    `;
    return;
  }

  const highlights = details.highlights
    .map((item) => `<li>${item}</li>`)
    .join("");
  const screenshots = (details.screenshots || [])
    .map(
      ([caption, src], index) => `
        <button class="screenshot-card" type="button" data-carousel-index="${index}">
          <img src="${src}" alt="Sanitized ${title} screenshot: ${caption}" loading="lazy">
          <span>${caption}</span>
        </button>
      `
    )
    .join("");
  const gallery = screenshots
    ? `
    <div class="screenshot-gallery" aria-label="Sanitized ${title} screenshots">
      ${screenshots}
    </div>
    <div class="screenshot-carousel" data-carousel-viewer hidden aria-live="polite">
      <div class="carousel-header">
        <p data-carousel-caption></p>
        <button class="carousel-close" type="button" data-carousel-close aria-label="Close screenshot viewer">Close</button>
      </div>
      <div class="carousel-stage">
        <img data-carousel-image src="" alt="">
      </div>
      <div class="carousel-controls">
        <button class="carousel-btn" type="button" data-carousel-prev aria-label="Show previous screenshot">&lt;</button>
        <button class="carousel-btn" type="button" data-carousel-next aria-label="Show next screenshot">&gt;</button>
      </div>
    </div>
  `
    : "";

  modalContent.innerHTML = `
    <p class="modal-lead">${details.intro}</p>
    <ul class="project-detail-list">${highlights}</ul>
    ${gallery}
  `;

  activeCarouselController = null;
  if (details.screenshots?.length) {
    setupScreenshotCarousel(details.screenshots, title);
  }
}

function setupScreenshotCarousel(screenshots, title) {
  if (!modalContent || !screenshots.length) return;

  let currentIndex = 0;
  const image = modalContent.querySelector("[data-carousel-image]");
  const caption = modalContent.querySelector("[data-carousel-caption]");
  const cards = [...modalContent.querySelectorAll("[data-carousel-index]")];
  const viewer = modalContent.querySelector("[data-carousel-viewer]");
  const close = modalContent.querySelector("[data-carousel-close]");
  const previous = modalContent.querySelector("[data-carousel-prev]");
  const next = modalContent.querySelector("[data-carousel-next]");

  function showScreenshot(index, shouldOpen = true) {
    currentIndex = (index + screenshots.length) % screenshots.length;
    const [label, src] = screenshots[currentIndex];

    if (viewer && shouldOpen) {
      viewer.hidden = false;
    }

    if (image) {
      image.src = src;
      image.alt = `Sanitized ${title} screenshot: ${label}`;
    }

    if (caption) {
      caption.textContent = `${currentIndex + 1} / ${screenshots.length} - ${label}`;
    }

    cards.forEach((card, cardIndex) => {
      const isActive = cardIndex === currentIndex;
      card.classList.toggle("active", isActive);
      card.setAttribute("aria-current", String(isActive));
    });
  }

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      showScreenshot(Number(card.dataset.carouselIndex));
      modalContent.querySelector(".screenshot-carousel")?.scrollIntoView({ block: "start", behavior: "smooth" });
    });
  });

  previous?.addEventListener("click", () => showScreenshot(currentIndex - 1));
  next?.addEventListener("click", () => showScreenshot(currentIndex + 1));
  close?.addEventListener("click", () => {
    if (viewer) {
      viewer.hidden = true;
    }
  });
  activeCarouselController = {
    viewer,
    previous: () => showScreenshot(currentIndex - 1),
    next: () => showScreenshot(currentIndex + 1)
  };
  showScreenshot(0, false);
  if (viewer) {
    viewer.hidden = true;
  }
}

const savedTheme = localStorage.getItem("portfolio-theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
  if (themeIcon) {
    themeIcon.textContent = theme === "dark" ? "☀" : "☾";
  }
}

setTheme(initialTheme);

if (year) {
  year.textContent = new Date().getFullYear();
}

function closeMobileNav() {
  navPanel?.classList.remove("open");
  document.body.classList.remove("nav-open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", "Open navigation menu");
}

navToggle?.addEventListener("click", () => {
  const isOpen = navPanel.classList.toggle("open");
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMobileNav);
});

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
});

window.addEventListener("scroll", () => {
  header?.classList.toggle("scrolled", window.scrollY > 12);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

const sections = [...document.querySelectorAll("main section[id]")];
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0
  }
);

sections.forEach((section) => sectionObserver.observe(section));

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

document.querySelectorAll("[data-project-open]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!modal || !modalTitle) return;

    modalTitle.textContent = button.dataset.projectOpen;
    renderProjectDetails(button.dataset.projectOpen);

    if (typeof modal.showModal === "function") {
      modal.showModal();
    } else {
      alert(`${button.dataset.projectOpen}\n\nAdd sanitized screenshots, outcomes, and project notes here.`);
    }
  });
});

document.querySelector("[data-modal-close]")?.addEventListener("click", () => {
  modal?.close();
});

modal?.addEventListener("click", (event) => {
  if (event.target !== modal) return;

  const dialogBounds = modal.getBoundingClientRect();
  const isOutside =
    event.clientX < dialogBounds.left ||
    event.clientX > dialogBounds.right ||
    event.clientY < dialogBounds.top ||
    event.clientY > dialogBounds.bottom;

  if (isOutside) {
    modal.close();
  }
});

document.addEventListener("keydown", (event) => {
  if (!modal?.open || !activeCarouselController?.viewer || activeCarouselController.viewer.hidden) return;

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    activeCarouselController.previous();
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    activeCarouselController.next();
  }
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const fields = [...contactForm.querySelectorAll("input, textarea")];
  let isValid = true;

  fields.forEach((field) => {
    const label = field.closest("label");
    const fieldValid = field.checkValidity();

    label?.classList.toggle("invalid", !fieldValid);
    if (!fieldValid) {
      isValid = false;
    }
  });

  if (formNote) {
    formNote.textContent = isValid
      ? "Opening Gmail draft..."
      : "Please complete the required fields before sending.";
  }

  if (!isValid) return;

  const formData = new FormData(contactForm);
  const name = formData.get("name").trim();
  const email = formData.get("email").trim();
  const message = formData.get("message").trim();
  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=94jmaea94@gmail.com&su=${subject}&body=${body}`;

  const emailWindow = window.open(gmailUrl, "_blank", "noopener");

  if (formNote) {
    formNote.innerHTML = emailWindow
      ? 'Gmail opened in a new tab. Please review and send your message there.'
      : `Popup blocked. <a href="${gmailUrl}" target="_blank" rel="noopener">Open the Gmail draft manually</a> or email me at <a href="mailto:94jmaea94@gmail.com">94jmaea94@gmail.com</a>.`;
  }
});

contactForm?.querySelectorAll("input, textarea").forEach((field) => {
  field.addEventListener("input", () => {
    field.closest("label")?.classList.toggle("invalid", !field.checkValidity());
  });
});
