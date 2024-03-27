function handleHelp(item) {
  const help = document.getElementsByClassName("help");
  const problem = document.getElementsByClassName("problem");

  help[item].classList.toggle("help-visible");
  problem[item].classList.toggle("problem-no-visible");




 
  
}

function changeAvatar() {
  var avatar = document.getElementById('avatar');
  if (avatar.src.includes('avatar-bis.png')) {
    avatar.src = 'image/line-icon-for-avtar-vectorpng'; 
  } else {
    avatar.src = 'image/avatar-bis.png';
  }
}
