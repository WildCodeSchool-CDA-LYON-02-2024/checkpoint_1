const changeElementImage = elmnt => {
    document.querySelector('#' + elmnt).addEventListener('click', () => document.querySelector('#' + elmnt).src = './image/avatar.svg');
}
const changeColorAndFirstname = () => {
    const color = prompt('Enter a color :')
    const name = prompt('Enter your name :');
    const pinkElements = document.querySelectorAll('.pink-bg');
    const textElements = document.querySelectorAll('.skills .column h4');
    document.querySelector('#firstname').textContent = 'Matt';
    for (const pinkElement of pinkElements) {
        pinkElement.style.backgroundColor = color;
    }
    for (const textElement of textElements) {
        textElement.style.color = color;
    }
    document.querySelector('#firstname').textContent = name;
    document.querySelector('#firstname').style.color = 'White';
};

changeElementImage('avatar');

document.getElementById('textBackground').addEventListener('click', changeColorAndFirstname);