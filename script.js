// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
  const navBar = document.getElementById("nav-bar");
  const menuToggle = document.createElement("div");
  menuToggle.innerHTML = '<i class="bx bx-menu"></i>';
  menuToggle.classList.add("menu-toggle");
  document.getElementById("header").appendChild(menuToggle);

  menuToggle.addEventListener("click", () => {
    navBar.classList.toggle("active");
  });
});

// CTA Button Interaction
const ctaButton = document.getElementById("CTA-button");
ctaButton.addEventListener("click", () => {
  alert("🚀 Let's start planning your next adventure!");
});

// Pricing Plan Selection
const planButtons = document.querySelectorAll(".CTA");
planButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const planName = event.target.parentElement.querySelector("h4").textContent;
    alert(`✅ You have selected the ${planName}`);
  });
});

// Form Validation for Signup
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = document.getElementById("email").value;
  if (emailInput === "" || !emailInput.includes("@")) {
    alert("❌ Please enter a valid email address.");
  } else {
    alert("✅ Thank you for signing up!");
    form.reset();
  }
});
