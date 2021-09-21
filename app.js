let input = document.querySelector('#caserInput');
let output = document.querySelector('#caserOutput');
let sentence = '';

input.addEventListener('input', event => {
    sentence = input.value.toLowerCase().split(' ');
    for (let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    output.textContent = sentence.join(' ');
})