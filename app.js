const input = document.querySelector('#caserInput');
const uppercaseButton = document.querySelector('#uppercaseButton');
const lowercaseButton = document.querySelector('#lowercaseButton');
const titleCaseButton = document.querySelector('#titleCaseButton');
const darkModeButton = document.querySelector('#darkModeButton')

uppercaseButton.addEventListener('click', event => {
    input.value = input.value.toUpperCase();
})

lowercaseButton.addEventListener('click', event => {
    input.value = input.value.toLowerCase();
})

titleCaseButton.addEventListener('click', event => {
    sentence = input.value.toLowerCase().split(' ').filter(String);
    for (let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    input.value = sentence.join(' ');
})

darkModeButton.addEventListener('click', event => {
    document.body.classList.toggle('body-dark-mode');
    darkModeButton.classList.toggle('btn-outline-secondary');
    input.classList.toggle('input-dark-mode');
    if (darkModeButton.classList.contains('bi-moon-stars')) {
        darkModeButton.classList.replace('bi-moon-stars', 'bi-brightness-high');
    } else {
        darkModeButton.classList.replace('bi-brightness-high', 'bi-moon-stars');
    }
});