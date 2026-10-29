const form = document.querySelector("#signup-form");
const password = document.querySelector("#password");
const toggle = document.querySelector("#toggle-password");
toggle.addEventListener("click", () => {
  const visible = password.type === "password";
  password.type = visible ? "text" : "password";
  toggle.textContent = visible ? "Hide" : "Show";
  toggle.setAttribute("aria-pressed", String(visible));
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#signup-status").textContent =
    "Account creation is not available yet. No account was created and no details were sent. Contact our team on WhatsApp for help getting started.";
  password.value = "";
});
document.querySelector("#year").textContent = new Date().getFullYear();
