'use strict';

// Step 1: Change the avatar image when I click on it.
const avatarId = document.getElementById('avatarImg');
const avatarImg = "image/avatar.svg";
const avatarBisImg = "image/avatar-bis.png";


avatarId.addEventListener('click', () => {
  avatarId.setAttribute('src', avatarBisImg);
});

// Step 2: Change the Matt text on the paragraph with my Name and color in white
const firstname = document.getElementById('firstname');
let promptFirstname = prompt("Please type your firstname:");

if (promptFirstname !== null) {
  firstname.innerText = `${promptFirstname}`;
  firstname.style.color = "white";
}
