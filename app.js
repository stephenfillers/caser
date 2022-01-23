const input = document.querySelector('#caserInput');
const titleCaseButton = document.querySelector('#titleCaseButton');
const listCaseButton = document.querySelector('#listCaseButton');
const uppercaseButton = document.querySelector('#uppercaseButton');
const lowercaseButton = document.querySelector('#lowercaseButton');
const darkModeButton = document.querySelector('.darkModeButton');
let darkMode = localStorage.getItem('darkMode');

titleCaseButton.onclick = titleCase;
listCaseButton.onclick = listCase;
uppercaseButton.onclick = upperCase;
lowercaseButton.onclick = lowerCase;
darkModeButton.onclick = toggleDarkMode;

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

function enableDarkMode() {
    document.body.classList.add('body-dark-mode');
    darkModeButton.classList.add('darkModeButton-mobile');
    input.classList.add('input-dark-mode');
    darkModeButton.innerText = 'Turn on the lights';

    localStorage.setItem('darkMode', 'enabled');
}

function disableDarkMode() {
    document.body.classList.remove('body-dark-mode');
    darkModeButton.classList.remove('darkModeButton-mobile');
    input.classList.remove('input-dark-mode');
    darkModeButton.innerText = 'Turn off the lights';

    localStorage.setItem('darkMode', 'disabled');
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

function toggleDarkMode() {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}