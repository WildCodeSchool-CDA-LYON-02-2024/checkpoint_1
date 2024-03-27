const avatar = document.getElementById("avatar");
let counter = 0;

avatar.addEventListener("click", function () {
  counter++;
  let newImage = "./image";
  newImage += counter % 2 === 0 ? "/avatar-bis.png" : "/avatar.svg";
  avatar.src = newImage;
});

document.addEventListener("DOMContentLoaded", function () {
  const changeColorAndNameButton =
    document.getElementById("changeColorAndName");
  const descriptionSection = document.querySelector(".description");
  const firstNameSpan = document.getElementById("firstname");

  changeColorAndNameButton.addEventListener("click", function () {
    const newName = prompt("Enter your new first name:");
    if (newName) {
      const newColor = prompt("Enter a new hexadecimal color (e.g., #750ff7):");
      if (newColor && /^#[0-9A-F]{6}$/i.test(newColor)) {
        descriptionSection.style.backgroundColor = newColor;
        firstNameSpan.textContent = newName;
      } else {
        alert("Please enter a valid hexadecimal color code!");
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const pinkElements = document.querySelectorAll(".pink-bg");

  pinkElements.forEach(function (element) {
    element.style.backgroundColor = "#750ff7";
  });
});
