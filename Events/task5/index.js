const searchBtnElem = document.querySelector('.search__btn');
const searchInputElem = document.querySelector('.search__input');

export function consoleInputText() {
    console.log(searchInputElem.value);
}

searchBtnElem.addEventListener('click', consoleInputText)
