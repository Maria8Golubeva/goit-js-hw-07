const actions = document.querySelectorAll('#counter button');
const decrementBtn = actions[0];
const incrementBtn = actions[1];
const valueEl = document.querySelector('#value')

const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
}

decrementBtn.addEventListener('click', function () {
    counter.decrement();

    valueEl.textContent = counter.value;
});
incrementBtn.addEventListener('click', function () {
    counter.increment();

    valueEl.textContent = counter.value;
});