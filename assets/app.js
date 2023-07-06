// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});
// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);
// Highlight the currently selected experience box
var experienceBoxes = document.getElementsByClassName('experience-box');

for (var i = 0; i < experienceBoxes.length; i++) {
  experienceBoxes[i].addEventListener('click', function() {
    // Remove highlight from all experience boxes
    for (var j = 0; j < experienceBoxes.length; j++) {
      experienceBoxes[j].classList.remove('highlight');
    }

    // Add highlight to the clicked experience box
    this.classList.add('highlight');
  });
}