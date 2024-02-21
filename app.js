"use strict";

const features = document.querySelector(".features");
const dropdownFeatures = document.querySelector(".dropdown-features");
const company = document.querySelector(".company");
const dropdownCompany = document.querySelector(".dropdown-company");

//switch dropdowns and switching arrows img
features.addEventListener("click", () => {
  dropdownFeatures.classList.toggle("hidden");
  features.classList.toggle("arrow-switch");
});
company.addEventListener("click", () => {
  dropdownCompany.classList.toggle("hidden");
  company.classList.toggle("arrow-switch");
});
