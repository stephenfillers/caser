const input = document.querySelector('#caserInput');
const titleCaseButton = document.querySelector('#titleCaseButton');
const listCaseButton = document.querySelector('#listCaseButton');
const uppercaseButton = document.querySelector('#uppercaseButton');
const lowercaseButton = document.querySelector('#lowercaseButton');
const darkModeButton = document.querySelector('#darkModeButton')

titleCaseButton.onclick = titleCase;
listCaseButton.onclick = listCase;
uppercaseButton.onclick = upperCase;
lowercaseButton.onclick = lowerCase;
darkModeButton.onclick = darkMode;

function titleCase() {

    let inputText = input.value.toLowerCase().split(' ').filter(String);
    let casedText = [];

    for (word of inputText) {
        if (word.match(/\n/)) {
            let lineBreakWords = word.split(/\n/).filter(String);
            let titledLineBreakWords = [];
            for (word of lineBreakWords) {
                titledLineBreakWords.push(word[0].toUpperCase() + word.slice(1));   
            }
            casedText.push(titledLineBreakWords.join('\n'));
        } else {
            casedText.push(word[0].toUpperCase() + word.slice(1));
        }   
    }
    input.value = casedText.join(' ');
}

function listCase() {
    let inputText = input.value.toLowerCase().split(/\n/);
    let casedText = [];
    console.log("Here's the inputText", inputText);
    for (line of inputText) {
        casedText.push(line[0].toUpperCase() + line.slice(1));
    }
    input.value = casedText.join('\n');
}

function upperCase() {
    input.value = input.value.toUpperCase();
}

function lowerCase() {
    input.value = input.value.toLowerCase();
}

function darkMode() {
    document.body.classList.toggle('body-dark-mode');
    darkModeButton.classList.toggle('btn-outline-secondary');
    input.classList.toggle('input-dark-mode');
    if (darkModeButton.classList.contains('bi-moon-stars')) {
        darkModeButton.classList.replace('bi-moon-stars', 'bi-brightness-high');
    } else {
        darkModeButton.classList.replace('bi-brightness-high', 'bi-moon-stars');
    }
};