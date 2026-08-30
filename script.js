const demoButton = document.getElementById("demoBtn");
const menuButton = document.getElementById("menuBtn");
const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");

const openMenuIcon = "./images/icon-hamburger.svg";
const closeMenuIcon = "./images/icon-close.svg";

demoButton.addEventListener("click", () => {
  demoButton.textContent = "REQUEST SENT";
  demoButton.disabled = true;

  setTimeout(() => {
    demoButton.textContent = "SCHEDULE A DEMO";
    demoButton.disabled = false;
  }, 2000);
});

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  const menuIsOpen = mobileMenu.classList.contains("open");

  menuIcon.src = menuIsOpen ? closeMenuIcon : openMenuIcon;
  menuButton.setAttribute("aria-label", menuIsOpen ? "Close menu" : "Open menu");
});
