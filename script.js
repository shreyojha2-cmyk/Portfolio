const skillsBtn = document.getElementById("skillsBtn");
const skillsGrid = document.getElementById("skillsGrid");

skillsBtn.addEventListener("click", () => {
  if (skillsGrid.classList.contains("hidden")) {
    skillsGrid.classList.remove("hidden");
    skillsBtn.textContent = "Hide Skills";
  } else {
    skillsGrid.classList.add("hidden");
    skillsBtn.textContent = "Show Skills";
  }
});
const eduBtn = document.getElementById("eduBtn");
const eduList = document.getElementById("eduList");

eduBtn.addEventListener("click", () => {
  if (eduList.classList.contains("hidden")) {
    eduList.classList.remove("hidden");
    eduBtn.textContent = "Hide Education";
  } else {
    eduList.classList.add("hidden");
    eduBtn.textContent = "Show Education";
  }
});
const projectBtn = document.getElementById("projectBtn");
const projectList = document.getElementById("projectList");

projectBtn.addEventListener("click", () => {
  if (projectList.classList.contains("hidden")) {
    projectList.classList.remove("hidden");
    projectBtn.textContent = "Hide Projects";
  } else {
    projectList.classList.add("hidden");
    projectBtn.textContent = "Show Projects";
  }
});
const interestsBtn = document.getElementById("interestsBtn");
const interestsText = document.getElementById("interestsText");
interestsBtn.addEventListener("click", () => {
  if (interestsText.classList.contains("hidden")) {
    interestsText.classList.remove("hidden");
    interestsBtn.textContent = "Hide Interests";
  } else {
    interestsText.classList.add("hidden");
    interestsBtn.textContent = "Show Interests";
  }
});
$("h3").on("mouseover", function () {
    $("h3").css("color", "green");
});
$(".job").on("mouseover",function(){
  $(this).css("color", "blue");
})