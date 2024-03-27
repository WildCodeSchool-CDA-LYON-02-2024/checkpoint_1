const img = document.getElementById('bob-pic');
img.addEventListener('click', () => {
  console.log('img :', img.src);
  img.src = './image/avatar.svg';
});
const uniqueLiElement = document.querySelector('front-dev-tools li');

const description = document.getElementById('description');
const firstname = document.getElementById('firstname');
const buttonEdit = document.getElementById('change-text-color');
const listA = document.getElementsByTagName('a');

const ulDev = document.getElementById('front-dev-tools');
const listLi = ulDev.getElementsByTagName('li');
console.log('listA', listA);

buttonEdit.addEventListener('click', () => {
  const promptName = window.prompt('Ecris ton nom');
  firstname.innerText = promptName;
  firstname.style.color = 'white';

  const promptColor = window.prompt('Choisis une couleur');
  description.style.backgroundColor = promptColor;

  changeAcolor(promptColor);
});

const changeAcolor = (color) => {
  for (a of listA) {
    a.style.color = color;
  }
};

const newLi = ['VSCode', 'Github', 'Terminal'];

chanLiContent = () => {
  for (let i = 0; i < listLi.length; i++) {
    listLi[i].innerText = newLi[i];
  }
};

chanLiContent();

const backSection = document.getElementsByClassName('back-end');
const ulBackSection = backSection[0].getElementsByTagName('ul');
const newInput = document.createElement('input');
backSection[0].append(newInput);

const btnNewInput = document.createElement('button');
btnNewInput.innerText = 'Valider';
backSection[0].append(btnNewInput);

btnNewInput.addEventListener('click', () => {
  if (newInput.value !== null) {
    const newLi = document.createElement('li');
    newLi.innerText = newInput.value;
    ulBackSection[0].append(newLi);
  }
});
