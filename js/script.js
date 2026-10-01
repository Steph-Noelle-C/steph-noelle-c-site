console.log("script.js is connected!");
 
const bioHeading = document.querySelector("#bio-heading");
console.log(bioHeading);
 
const factBtn = document.querySelector("#fact-btn");
const funFact = document.querySelector("#fun-fact");
 
factBtn.addEventListener("click", function () {
  funFact.style.display = "block";
});

const skillPills = document.querySelectorAll(".skill-pill");

skillPills.forEach(function (pill) {
  pill.addEventListener("click", function () {
    const detail = pill.querySelector(".skill-detail");
    detail.style.display = "inline";
  });
});

