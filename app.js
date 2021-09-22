const input = document.querySelector('#caserInput');
const uppercaseButton = document.querySelector('#uppercaseButton');
const lowercaseButton = document.querySelector('#lowercaseButton');
const titleCaseButton = document.querySelector('#titleCaseButton');

uppercaseButton.addEventListener('click', event => {
    input.value = input.value.toUpperCase();
})

lowercaseButton.addEventListener('click', event => {
    input.value = input.value.toLowerCase();;
})

titleCaseButton.addEventListener('click', event => {
    sentence = input.value.toLowerCase().split(' ');
    for (let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    input.value = sentence.join(' ');
})