let avatar = document.getElementById("avatar");
let name = document.getElementById("firstname");
let button = document.getElementById("modifyBtn");
const inputBox = document.getElementById("inputBox");
const toolList = document.getElementById("toolList");
let modifyToolBtn = document.getElementById("modifyTool");

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

function addTool() {
  if (inputBox.value === "") {
    alert("please add a tool");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    toolList.appendChild(li);
  }
  inputBox.value = "";
}

function ChangeDevTools() {
  let devTools = document.querySelectorAll("#front-dev-tools li");
  let newTools = ["VSCode", "Github", "Terminal"];

  devTools.forEach(function (li, index) {
    li.textContent = newTools[index];
  });
}

modifyToolBtn.addEventListener("click", ChangeDevTools);
