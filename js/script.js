console.log("script.js is connected!");

// FIX: removed the "#bio-heading" lookup and console.log. No element with that id exists in the HTML,
// so it always returned null and did nothing useful.

// Fun-fact button: shows the hidden fun fact when clicked.
const factBtn = document.querySelector("#fact-btn");
const funFact = document.querySelector("#fun-fact");

// FIX: added a check that both elements exist before using them. Without it, the script would
// throw an error on any page that does not have this button (for example, index.html or work.html).
if (factBtn && funFact) {
  factBtn.addEventListener("click", function () {
    funFact.style.display = "block";
  });
}

// Skill pills: clicking a skill reveals its extra detail text.
const skillPills = document.querySelectorAll(".skill-pill");

skillPills.forEach(function (pill) {
  pill.addEventListener("click", function () {
    const detail = pill.querySelector(".skill-detail");
    // FIX: added a check that the detail element exists before changing it.
    if (detail) {
      detail.style.display = "inline";
    }
  });
});
