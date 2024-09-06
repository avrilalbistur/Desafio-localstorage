let input = document.getElementById('inputText');
const btn = document.getElementById('buttonText');
let inputValue = '';

input.addEventListener('input', () => {
    inputValue = input.value;
});

btn.addEventListener('click', () => {
    localStorage.setItem('inputValue', inputValue);
});
