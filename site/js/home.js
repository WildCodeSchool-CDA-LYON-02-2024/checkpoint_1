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

function changeMission() {
  var newName = prompt("Please enter your chosen name:");
  if (newName !== null && newName !== "") {
    document.getElementById("missionHeader").textContent = newName;
    document.getElementById("missionHeader").style.color = "white";
    document.body.style.backgroundColor = getRandomColor(); 
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
}
