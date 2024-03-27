const avatar = document.getElementById("avatar");
let counter = 0;

avatar.addEventListener("click", function () {
  counter++;
  let newImage = './image';
    newImage += (counter % 2 === 0) ? "/avatar-bis.png" : "/avatar.svg";
  avatar.src = newImage;
});
