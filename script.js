function showSection(sectionId) {
  let sections = document.querySelectorAll(".content");

  sections.forEach(function(section) {
    section.classList.remove("active");
  });

  document.getElementById(sectionId).classList.add("active");
}
