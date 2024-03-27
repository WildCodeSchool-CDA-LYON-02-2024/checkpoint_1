function changeAvatar() {
    let avatar = document.getElementById('avatar');
    avatar.src = "image/avatar.svg";
}

function modifyText() {
    let newName = prompt("Enter your name :");
    if (newName !== null && newName !== "") {
      let span = document.getElementById("firstname");
      span.textContent = newName;
      span.style.color = "white";
    }
  }