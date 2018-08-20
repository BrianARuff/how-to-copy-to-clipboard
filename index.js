const button = document.querySelector('button');
const input = document.querySelector('input');
const copyButton = document.querySelector('.copy-button');

button.addEventListener('click', () => {
    input.focus();
});

copyButton.addEventListener('click', () => {
    input.select();
    document.execCommand('copy');
    if(input.value){
        window.location.href = `https://www.${input.value}.com`;
    }
});