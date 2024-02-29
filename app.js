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
  dropdownCompany.classList.add("hidden");
});
company.addEventListener("click", () => {
  dropdownCompany.classList.toggle("hidden");
  company.classList.toggle("arrow-switch");
  dropdownFeatures.classList.add("hidden");
});

//showing and hiding navigation and shadow on mobile
hamburgerMenu.addEventListener("click", () => {
  document.querySelector("nav").style.display = "flex";
  shadow.style.display = "block";
});
hamburgerMenuClose.addEventListener("click", () => {
  document.querySelector("nav").style.display = "none";
  shadow.style.display = "none";
});

//regulation of shadow and navigation between mobile and desktop
window.addEventListener("resize", function () {
  if (this.window.innerWidth > 768) {
    shadow.style.display = "none";
    this.document.querySelector("nav").style.display = "";
  } else if (
    this.window.innerWidth < 768 &&
    this.document.querySelector("nav").style.display === "flex"
  ) {
    shadow.style.display = "block";
  }
});
