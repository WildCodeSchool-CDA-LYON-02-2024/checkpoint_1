const image = document
  .getElementById("avatar")
  .addEventListener("click", imagechanger);

const nameChanger = document
  .getElementById("firstname")
  .addEventListener("click", newName);

// image changer
function imagechanger(event) {
  const changed = event.target;
  changed.src = "./image/avatar.svg";
}

// name changer
function newName(event) {
  const name = event.target;
  const promptName = prompt("Entrez le nouveau nom :");
  name.textContent = promptName;
}
