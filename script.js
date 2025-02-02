document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");

  menuButton.addEventListener("click", () => {
      navLinks.classList.toggle("show");
  });
});