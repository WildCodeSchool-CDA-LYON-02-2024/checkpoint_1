const modifTextButton = document.getElementById("modifTextButton");
const changeName = document.getElementById("firstname");
const avatar = document.getElementById("avatar");
const pinkBgElement = document.querySelector(".pink-bg");
const textElements = document.querySelectorAll('.skills .column h4');
let isDefaultAvatar = true;

modifTextButton.addEventListener("click", function () {
  const newColor = prompt("Enter a new color in hex format (e.g., #750ff7):");
  const newName = prompt("Enter your new name:");

  if (newName !== null && newName !== "") {
    changeName.textContent = newName;
    changeName.style.color = "white"; 
  }

  if (newColor !== null && newColor !== "") {
    pinkBgElement.style.backgroundColor = newColor;
    textElements.forEach(element => {
      element.style.color = newColor; 
    });
  }
});

avatar.addEventListener("click", function () {
  if (isDefaultAvatar) {
    avatar.src = "image/avatar.svg";
    isDefaultAvatar = false;
  } else {
    avatar.src = "image/avatar-bis.png";
    isDefaultAvatar = true;
  }
});
