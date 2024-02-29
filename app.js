"use strict";

const features = document.querySelector(".features");
const dropdownFeatures = document.querySelector(".dropdown-features");
const company = document.querySelector(".company");
const dropdownCompany = document.querySelector(".dropdown-company");
const hamburgerMenu = document.querySelector(".open-menu img");
const hamburgerMenuClose = document.querySelector(".close-menu img");
const shadow = document.querySelector(".shadow");

//switch dropdowns and switching arrows img
features.addEventListener("click", () => {
  dropdownFeatures.classList.toggle("hidden");
  features.classList.toggle("arrow-switch");
});
company.addEventListener("click", () => {
  dropdownCompany.classList.toggle("hidden");
  company.classList.toggle("arrow-switch");
});

hamburgerMenu.addEventListener("click", () => {
  document.querySelector("nav").style.display = "flex";
  shadow.style.display = "block";
});

hamburgerMenuClose.addEventListener("click", () => {
  document.querySelector("nav").style.display = "none";
  shadow.style.display = "none";
});

window.addEventListener("resize", function () {
  if (this.window.innerWidth > 768) {
    shadow.style.display = "none";
  } else if (
    this.window.innerWidth < 768 &&
    this.document.querySelector("nav").style.display === "flex"
  ) {
    shadow.style.display = "block";
  }
});
