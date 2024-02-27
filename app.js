"use strict";

const features = document.querySelector(".features");
const dropdownFeatures = document.querySelector(".dropdown-features");
const company = document.querySelector(".company");
const dropdownCompany = document.querySelector(".dropdown-company");
const hamburgerMenu = document.querySelector(".hamburger-menu img");
const hamburgerMenuClose = document.querySelector(".hamburger-menu-close img");

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
});

hamburgerMenuClose.addEventListener("click", () => {
  document.querySelector("nav").style.display = "none";
});
