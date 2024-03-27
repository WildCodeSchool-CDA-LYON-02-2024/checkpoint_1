const avatar = document.getElementById("avatar");
let counter = 0;

avatar.addEventListener("click", function () {
  counter++;
  let newImage = "./image";
  newImage += counter % 2 === 0 ? "/avatar-bis.png" : "/avatar.svg";
  avatar.src = newImage;
});

document.addEventListener("DOMContentLoaded", function () {
  const changeNameButton = document.getElementById("changeName");
  const firstnameSpan = document.getElementById("firstname");

  changeNameButton.addEventListener("click", function () {
    const newName = prompt("Enter your new first name:");
    if (newName && newName.trim() !== "") {
      firstnameSpan.textContent = newName.trim();
      firstnameSpan.style.color = "white";
    }
  });
});
