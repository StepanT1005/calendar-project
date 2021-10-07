const inputElem = document.querySelector('.text-input');
function consoleInput(event) {
    console.log(event.target.value);
}

inputElem.addEventListener('change', consoleInput)