function openPopup(id){
  document.getElementById(id).classList.add("active");
}

function closePopup(id){
  document.getElementById(id).classList.remove("active");
}

function openResume(){
  window.open("style/Resume Siti Zulaika.pdf", "_blank");
}

window.onclick = function(event){
  document.querySelectorAll(".popup").forEach(function(popup){
    if(event.target === popup){
      popup.classList.remove("active");
    }
  });
}
