const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("#navigation");
menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("open", open);
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  }),
);
const screens = {
  workstation: [
    "Patient 360 and the daily patient queue in DentalLink",
    "From arrival to follow-up, keep the patient’s story in one place.",
  ],
  calendar: [
    "DentalLink appointment calendar with day, week and month scheduling",
    "See the schedule, find a time, and keep your team in sync.",
  ],
  clinical: [
    "DentalLink clinical workspace with interactive dental charting",
    "Connect dental charts, clinical notes, and treatment history.",
  ],
};
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab) {
  tabs.forEach((t) => {
    t.setAttribute("aria-selected", String(t === tab));
    t.tabIndex = t === tab ? 0 : -1;
  });
  const key = tab.dataset.screen;
  const image = document.querySelector("#showcase-image");
  image.src = `assets/images/product/${key}.png`;
  image.alt = screens[key][0];
  document.querySelector("#showcase-description").textContent = screens[key][1];
  document
    .querySelector("#product-panel")
    .setAttribute("aria-labelledby", tab.id);
}
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", (e) => {
    let next;
    if (e.key === "ArrowRight") next = (index + 1) % tabs.length;
    if (e.key === "ArrowLeft") next = (index + tabs.length - 1) % tabs.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = tabs.length - 1;
    if (next !== undefined) {
      e.preventDefault();
      selectTab(tabs[next]);
      tabs[next].focus();
    }
  });
});
document.querySelector("#year").textContent = new Date().getFullYear();
