const [button1Elem, button2Elem, button3Elem] = document.querySelectorAll('.pagination__page')
export function handleClick(event) {
    console.log(event.target.dataset.pageNumber)
}

button1Elem.addEventListener('click', handleClick);
button2Elem.addEventListener('click', handleClick)
button3Elem.addEventListener('click', handleClick)