const buttonElem = document.querySelectorAll('.btn')
export function handleClick(event) {
    console.log(event.target.textContent);
}

buttonElem[0].addEventListener('click', handleClick);
buttonElem[1].addEventListener('click', handleClick);