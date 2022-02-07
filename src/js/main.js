/* Constants */
const body = document.querySelector("body");
const nav = document.querySelector(".nav");
const darklightToggle = document.querySelector(".darklight");
const searchboxToggle = document.querySelector(".searchToggle");
const searchFieldToggle = document.querySelector(".searchField");
const siderbarOpen = document.querySelector(".siderbarOpen");
const siderbarClose = document.querySelector(".siderbarClose");

/* Functions */

// Dark & light mode
darklightToggle.addEventListener("click", function () {
  darklightToggle.classList.toggle("active");
  body.classList.toggle("dark");
});

// Search box
searchboxToggle.addEventListener("click", function () {
  searchboxToggle.classList.toggle("active");
});

siderbarOpen.addEventListener("click", function () {
  nav.classList.add("active");
});

siderbarClose.addEventListener("click", function () {
    nav.classList.remove("active");
  });
  
