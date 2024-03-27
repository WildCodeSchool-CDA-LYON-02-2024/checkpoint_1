let avatar = document.getElementById("avatar");
let name = document.getElementById("firstname");
let button = document.getElementById("modifyBtn");

function changeAvatar() {
  if ((avatar.src = "./image/avatar-bis.png")) {
    avatar.src = "./image/avatar.svg";
  } else if ((avatar.src = "./image/avatar.svg")) {
    avatar.src = "./image/avatar-bis.png";
  }
}
button.addEventListener("click", function () {
  let color = prompt("Enter a color");
  document.querySelectorAll(".pink-bg").forEach((element) => {
    element.style.backgroundColor = color;
  });
  document.querySelectorAll(".pink-text").forEach((element) => {
    element.style.color = color;
  });
  document.querySelectorAll("a").forEach((element) => {
    element.style.color = color;
  });
});
button.addEventListener("click", function () {
  let userName = prompt("Enter your name");
  document.getElementById("firstname").innerHTML = userName;
  document.getElementById("firstname").style.color = "white";
});
