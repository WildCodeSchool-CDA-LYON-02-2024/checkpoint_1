//step 1
const avatar = document.getElementById("avatar")
function changeAvatar() {
  avatar.src = "image/avatar.svg"
}

//step 2, 3 et 4 
const firstname = document.getElementById("firstname")
const description = document.querySelector(".description")
var elements = document.querySelectorAll(".pink-text");
function changeText() {
  const name = window.prompt("Entrer your name");
  firstname.textContent = name
  firstname.style.color = "#fff"
  description.style.backgroundColor = "#750ff7"

  elements.forEach(function(element) {
    element.style.color = "#750ff7"; 
});
}

// step 5 
var links = document.querySelectorAll('a');
function changeAllLink() {
  links.forEach(function(link) {
    link.style.color = "#750ff7"; 
});
}