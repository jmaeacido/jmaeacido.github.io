const candleWall = document.querySelector("#candleWall");
const particleField = document.querySelector("#particleField");
const modal = document.querySelector("#candleModal");
const form = document.querySelector("#candleForm");
const openButtons = document.querySelectorAll("[data-open-modal]");
const closeButtons = document.querySelectorAll("[data-close-modal]");
const mediaQuery = window.matchMedia("(max-width: 43.99rem)");

const themeMap = {
  hope: {
    label: "Hope",
    wax: "#d98c3f",
    waxLight: "#fff0bc",
    waxDeep: "#8a4c27",
    glow: "rgba(246, 197, 111, 0.92)",
    glowSoft: "rgba(246, 197, 111, 0.42)"
  },
  healing: {
    label: "Healing",
    wax: "#6f93d8",
    waxLight: "#dbeaff",
    waxDeep: "#314c83",
    glow: "rgba(141, 183, 255, 0.9)",
    glowSoft: "rgba(141, 183, 255, 0.36)"
  },
  guidance: {
    label: "Guidance",
    wax: "#9a70d3",
    waxLight: "#eadbff",
    waxDeep: "#53366f",
    glow: "rgba(201, 162, 255, 0.9)",
    glowSoft: "rgba(201, 162, 255, 0.34)"
  },
  peace: {
    label: "Peace",
    wax: "#eadfcf",
    waxLight: "#fffdf6",
    waxDeep: "#b9ad9e",
    glow: "rgba(255, 248, 233, 0.94)",
    glowSoft: "rgba(255, 248, 233, 0.34)"
  },
  strength: {
    label: "Strength / Love",
    wax: "#ce5a55",
    waxLight: "#ffd6ce",
    waxDeep: "#74302f",
    glow: "rgba(255, 122, 118, 0.9)",
    glowSoft: "rgba(255, 122, 118, 0.35)"
  }
};

const prayers = [
  ["For Ana", "May peace surround her tonight and every morning after.", "peace"],
  ["Michael", "For strength through treatment and the gentle return of joy.", "healing"],
  ["Lydia", "Guide our family toward forgiveness and a softer beginning.", "guidance"],
  ["For Tomas", "With gratitude for a life that still lights our table.", "hope"],
  ["Elena", "For courage, patience, and love that does not grow tired.", "strength"],
  ["Nora", "May her memory remain warm in every room we enter.", "peace"],
  ["Samuel", "For healing in body, mind, and spirit.", "healing"],
  ["For Amara", "A candle for protection, wisdom, and a clear path.", "guidance"],
  ["Joseph", "For hope where the days have felt too heavy.", "hope"],
  ["Clara", "May love hold her close across every distance.", "strength"],
  ["Mateo", "For quiet sleep and a morning filled with mercy.", "peace"],
  ["Iris", "For the doctors, the waiting, and the grace to endure.", "healing"],
  ["For Daniel", "Let a way open where none seems visible.", "guidance"],
  ["Grace", "For a child, a future, and a home full of light.", "hope"],
  ["For Beatrice", "Remembered with love, laughter, and a thousand small blessings.", "peace"],
  ["Julian", "For bravery during hard conversations.", "strength"],
  ["Mara", "For the heart to mend gently and fully.", "healing"],
  ["Theo", "For signs, direction, and the wisdom to listen.", "guidance"],
  ["For Celeste", "May hope stay near her like a hand held in the dark.", "hope"],
  ["Adrien", "For love that remains steady through uncertainty.", "strength"],
  ["Lucia", "A prayer for rest, release, and holy calm.", "peace"],
  ["Ben", "For recovery, tenderness, and renewed breath.", "healing"],
  ["For Miriam", "May every decision be met with light.", "guidance"],
  ["Sofia", "For hope to rise again, slowly and truly.", "hope"],
  ["For Maria", "May she feel loved, remembered, and held in light.", "hope"]
];

const desktopCompanionSlots = [
  { x: 37, y: 69 },
  { x: 63, y: 69 }
];

const mobileCompanionSlots = [
  { x: 34, y: 69 },
  { x: 66, y: 69 }
];

const desktopSlots = [
  { x: 46, y: 30 },
  { x: 36, y: 33 },
  { x: 64, y: 33 },
  { x: 24, y: 40 },
  { x: 76, y: 40 },
  { x: 15, y: 53 },
  { x: 85, y: 53 },
  { x: 16, y: 68 },
  { x: 84, y: 68 },
  { x: 25, y: 82 },
  { x: 75, y: 82 },
  { x: 38, y: 89 },
  { x: 62, y: 89 },
  { x: 54, y: 92 },
  { x: 32, y: 54 },
  { x: 68, y: 54 },
  { x: 27, y: 69 },
  { x: 76, y: 69 },
  { x: 42, y: 43 },
  { x: 58, y: 43 },
  { x: 31, y: 86 },
  { x: 69, y: 86 },
  { x: 22, y: 61 },
  { x: 78, y: 61 },
  { x: 44, y: 41 },
  { x: 58, y: 91 },
  { x: 12, y: 82 },
  { x: 88, y: 82 },
  { x: 12, y: 39 },
  { x: 88, y: 39 },
  { x: 10, y: 63 },
  { x: 90, y: 63 },
  { x: 18, y: 91 },
  { x: 82, y: 91 },
  { x: 21, y: 30 },
  { x: 79, y: 30 },
  { x: 35, y: 95 },
  { x: 65, y: 95 },
  { x: 54, y: 24 }
];

const mobileSlots = [
  { x: 45, y: 27 },
  { x: 27, y: 31 },
  { x: 73, y: 31 },
  { x: 18, y: 42 },
  { x: 82, y: 42 },
  { x: 20, y: 55 },
  { x: 80, y: 55 },
  { x: 20, y: 70 },
  { x: 80, y: 70 },
  { x: 27, y: 84 },
  { x: 73, y: 84 },
  { x: 55, y: 93 },
  { x: 36, y: 41 },
  { x: 64, y: 41 },
  { x: 28, y: 88 },
  { x: 72, y: 88 },
  { x: 43, y: 39 },
  { x: 59, y: 92 },
  { x: 13, y: 83 },
  { x: 87, y: 83 },
  { x: 13, y: 31 },
  { x: 87, y: 31 },
  { x: 32, y: 53 },
  { x: 68, y: 53 },
  { x: 32, y: 94 },
  { x: 68, y: 94 },
  { x: 10, y: 36 },
  { x: 90, y: 36 },
  { x: 10, y: 63 },
  { x: 90, y: 63 },
  { x: 10, y: 91 },
  { x: 90, y: 91 },
  { x: 25, y: 96 },
  { x: 75, y: 96 },
  { x: 56, y: 22 }
];

function createParticles() {
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < 70; index += 1) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${42 + Math.random() * 58}%`;
    particle.style.animationDuration = `${10 + Math.random() * 13}s`;
    particle.style.animationDelay = `${Math.random() * -18}s`;
    particle.style.setProperty("--particle-drift", `${-3 + Math.random() * 6}rem`);
    particle.style.setProperty("--particle-opacity", `${0.18 + Math.random() * 0.45}`);
    fragment.appendChild(particle);
  }

  particleField.appendChild(fragment);
}

function createCandle({ name, intention, theme }, isUser = false, index = 0) {
  const colors = themeMap[theme] || themeMap.hope;
  const button = document.createElement("button");
  const candle = document.createElement("span");
  const tooltip = document.createElement("span");
  const height = 3.45 + (index % 5) * 0.32;
  const width = 1.02 + (index % 3) * 0.08;
  const depth = 0.84 + (index % 4) * 0.035;
  const rise = -0.12 + (index % 4) * 0.12;

  button.type = "button";
  button.className = `candle-button${isUser ? " user-candle" : ""}`;
  button.dataset.orbitPriority = "0";
  button.setAttribute("aria-label", `${name}: ${intention} ${colors.label} candle`);
  button.style.setProperty("--candle-height", `${height}rem`);
  button.style.setProperty("--candle-width", `${width}rem`);
  button.style.setProperty("--holder-height", `${height + 3.5}rem`);
  button.style.setProperty("--depth", depth.toFixed(2));
  button.style.setProperty("--rise", `${rise}rem`);
  button.style.setProperty("--wax", colors.wax);
  button.style.setProperty("--wax-light", colors.waxLight);
  button.style.setProperty("--wax-deep", colors.waxDeep);
  button.style.setProperty("--glow", colors.glow);
  button.style.setProperty("--glow-soft", colors.glowSoft);

  candle.className = "candle";
  tooltip.className = "candle-tooltip";
  tooltip.innerHTML = `
    <strong>${escapeHtml(name)}</strong>
    <p>${escapeHtml(intention)}</p>
    <span>${colors.label}</span>
  `;

  button.append(candle, tooltip);
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const wasActive = button.classList.contains("is-active");

    candleWall.querySelectorAll(".candle-button.is-active").forEach((activeCandle) => {
      activeCandle.classList.remove("is-active");
    });

    if (!wasActive) {
      button.classList.add("is-active");
    }
  });

  return button;
}

function positionCandles() {
  const candles = [...candleWall.querySelectorAll(".candle-button")];
  const userCandle = candleWall.querySelector(".user-candle");
  const previousUserCandles = candles
    .filter((candle) => candle.classList.contains("previous-user-candle"))
    .sort((first, second) => Number(second.dataset.orbitPriority || 0) - Number(first.dataset.orbitPriority || 0));
  const orbitCandles = candles
    .filter((candle) => candle !== userCandle && !candle.classList.contains("previous-user-candle"))
    .sort((first, second) => {
      const firstPriority = Number(first.dataset.orbitPriority || 0);
      const secondPriority = Number(second.dataset.orbitPriority || 0);
      return secondPriority - firstPriority;
    });
  const slots = mediaQuery.matches ? mobileSlots : desktopSlots;
  const centerSlot = mediaQuery.matches ? { x: 50, y: 65 } : { x: 50, y: 66 };
  const companionSlots = mediaQuery.matches ? mobileCompanionSlots : desktopCompanionSlots;
  const reservedSlots = [centerSlot, ...companionSlots];
  const openSlots = slots.filter((slot) => !isNearReservedSlot(slot, reservedSlots, mediaQuery.matches));
  const communitySlots = openSlots.length > 0 ? openSlots : slots;

  if (userCandle) {
    setCandlePosition(userCandle, centerSlot.x, centerSlot.y, true);
  }

  previousUserCandles.forEach((candle, index) => {
    const slot = companionSlots[index % companionSlots.length];
    setCandlePosition(candle, slot.x, slot.y, false);
  });

  orbitCandles.forEach((candle, index) => {
    const slot = communitySlots[index % communitySlots.length];
    setCandlePosition(candle, slot.x, slot.y, false);
  });
}

function isNearReservedSlot(slot, reservedSlots, isCompact) {
  const centerRadius = isCompact ? 18 : 17;
  const companionRadius = isCompact ? 20 : 18;

  return reservedSlots.some((reservedSlot, index) => {
    const radius = index === 0 ? centerRadius : companionRadius;
    const dx = slot.x - reservedSlot.x;
    const dy = (slot.y - reservedSlot.y) * 1.15;
    return Math.sqrt(dx * dx + dy * dy) < radius;
  });
}

function setCandlePosition(candle, x, y, isUser) {
  const safeX = !isUser && Math.abs(x - 50) < 3 ? x + 5 : x;

  candle.style.setProperty("--x", `${safeX}%`);
  candle.style.setProperty("--y", `${y}%`);
  candle.classList.toggle("tooltip-right", safeX < 23);
  candle.classList.toggle("tooltip-left", safeX > 77);
  candle.classList.toggle("tooltip-below", y < 30);

  if (isUser) {
    candle.classList.remove("tooltip-right", "tooltip-left", "tooltip-below");
  }
}

function renderInitialCandles() {
  const fragment = document.createDocumentFragment();

  prayers.forEach(([name, intention, theme], index) => {
    const isUser = name === "For Maria";
    fragment.appendChild(createCandle({ name, intention, theme }, isUser, index));
  });

  candleWall.appendChild(fragment);
  positionCandles();
}

function openModal() {
  modal.hidden = false;
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => {
    document.querySelector("#nameInput").focus();
  });
}

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  form.reset();
}

function addUserCandle(event) {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get("name").toString().trim();
  const intention = data.get("intention").toString().trim();
  const theme = data.get("theme").toString();

  if (!name || !intention) return;

  document.querySelectorAll(".previous-user-candle").forEach((candle) => {
    candle.classList.remove("previous-user-candle");
  });

  document.querySelectorAll(".user-candle").forEach((candle) => {
    candle.classList.remove("user-candle");
    candle.classList.add("previous-user-candle");
    candle.dataset.orbitPriority = Date.now().toString();
  });

  const candle = createCandle({ name, intention, theme }, true, candleWall.children.length);
  candleWall.appendChild(candle);
  positionCandles();
  closeModal();

  document.querySelector("#wall").scrollIntoView({ behavior: "smooth", block: "start" });
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    return entities[character];
  });
}

openButtons.forEach((button) => button.addEventListener("click", openModal));
closeButtons.forEach((button) => button.addEventListener("click", closeModal));
form.addEventListener("submit", addUserCandle);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeModal();
  }
});

document.addEventListener("click", () => {
  candleWall.querySelectorAll(".candle-button.is-active").forEach((activeCandle) => {
    activeCandle.classList.remove("is-active");
  });
});

createParticles();
renderInitialCandles();

if (mediaQuery.addEventListener) {
  mediaQuery.addEventListener("change", positionCandles);
} else {
  mediaQuery.addListener(positionCandles);
}
