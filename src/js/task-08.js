const controlsEl = document.querySelector('#controls');
const inputValueEl = document.querySelector('input');
const btnCreateEl = document.querySelector('button[data-action="render"]');
const btnDestroyEl = document.querySelector('button[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes');

btnDestroyEl.addEventListener('click', destroyBoxes);
btnCreateEl.addEventListener('click', createBoxes);

function createBoxes() {
    boxesEl.innerHTML = '';

    const getRandomInt = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
    };
    
    let boxSize = 30;

    for (let x = 0; x < inputValueEl.value; x++) {
        const box = document.createElement('div');
        
        const red = getRandomInt(255);
        const green = getRandomInt(255);
        const blue = getRandomInt(255);

        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.backgroundColor = `rgb(${red},${green},${blue})`;
        box.style.margin = '10px';

        boxSize += 10;
        boxesEl.appendChild(box);   
    };
};

function destroyBoxes() {
    boxesEl.innerHTML = '';
}
