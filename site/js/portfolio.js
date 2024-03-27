function changeAvatar() {
  let avatar = document.getElementById("avatar");
  avatar.src = "image/avatar.svg";
}

function modifyContent() {
  let newName = prompt("Enter your name :");
  if (newName !== null && newName !== "") {
    let newColor = prompt("Enter a color :");
    if (newColor !== null && newColor !== "") {
      let span = document.getElementById("firstname");
      let contentSection = document.getElementById("content");
      span.textContent = newName;
      span.style.color = "white";
      contentSection.style.backgroundColor = newColor;
    }
  }
}
