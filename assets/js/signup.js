const form = document.querySelector("#signup-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#signup-status").textContent =
    "Account creation is not available yet. No email was sent. Once it is live, we’ll email you a link to verify your address and set your password. Contact our team on WhatsApp for help getting started.";
});
document.querySelector("#year").textContent = new Date().getFullYear();
