'use strict';

// Change the avatar image when I click on it.
const avatarImg = document.getElementById('avatarImg');
avatarImg.addEventListener('click', () => {
  avatarImg.setAttribute('src', 'image/avatar-bis.png');
})
