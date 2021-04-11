const inputEl = document.querySelector('#name-input');
const userNameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value != '') {
        return userNameEl.textContent = event.currentTarget.value;
    } else {
        return userNameEl.textContent = 'незнакомец';
    }
};
 