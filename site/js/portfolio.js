const developerPicture = document.querySelector('.developer-picture');
const description = document.querySelector('.description');
const listH4 = document.getElementsByTagName('h4');
const footer = document.getElementsByTagName('footer');

developerPicture.addEventListener('click', () => {
 developerPicture.src='./image/avatar-sdp.png';
});
console.log(description);

const btn = document.getElementById('btn');
const firstName = document.getElementById('firstname');

btn.addEventListener('click', () => {
  const name = prompt('Please type your name');
    
  firstName.textContent = name;
  firstName.style.color = "white";
  description.style.backgroundColor = '#750ff7';
  btn.style.backgroundColor = '#750ff7';
  for (let i = 0; i < listH4.length; i++){
    listH4[i].style.color="#750ff7";
  }
  footer.style.backgroundColor ="#750ff7";
  
 })



