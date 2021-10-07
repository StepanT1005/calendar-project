const textInputElem = document.querySelector('.text-input');
export function logInput() {
console.log(textInputElem.value)
};

textInputElem.addEventListener('change',logInput)