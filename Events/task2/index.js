const buttonElem = document.querySelector('.create-btn');

export function alertDone() {
    alert('done')
}
buttonElem.addEventListener('click', alertDone)