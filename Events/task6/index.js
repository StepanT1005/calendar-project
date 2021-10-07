const buttonElem = document.querySelector('.single-use-btn');

export function consoleButtonStatus() {
console.log('clicked');
buttonElem.removeEventListener('click', consoleButtonStatus)
}

buttonElem.addEventListener('click', consoleButtonStatus);