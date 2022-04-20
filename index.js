const Showcase = document.querySelector(".showcase");
const menuToggle = document.querySelector(".toggle");

menuToggle.addEventListener("click", function () {
  Showcase.classList.toggle("active");
  menuToggle.classList.toggle("active");
});
