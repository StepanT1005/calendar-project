const spanElem = document.querySelector('.rect_span');
const pElem = document.querySelector('.rect_p');
const divElem = document.querySelector('.rect_div');

export function logTarget(text, color) {
const eventListElem = document.querySelector('.events-list');
eventListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const logGreyDiv = logTarget.bind(null,'DIV', 'grey');
const logGreyP = logTarget.bind(null,'P', 'grey');
const logGreySpan = logTarget.bind(null,'SPAN', 'grey');

const logGreenDiv = logTarget.bind(null,'DIV', 'green');
const logGreenP = logTarget.bind(null,'P', 'green');
const logGreenSpan = logTarget.bind(null,'SPAN', 'green');

// positionEventListeners = (position = true) => {
//     if (position){
// spanElem.addEventListener('click', logGreySpan, true);
// pElem.addEventListener('click', logGreyP, true);
// divElem.addEventListener('click', logGreyDiv, true);

// spanElem.addEventListener('click', logGreenSpan);
// pElem.addEventListener('click', logGreenP);
// divElem.addEventListener('click', logGreenDiv);
//     }
// }
// positionEventListeners();

// const clearElem = document.querySelector('.clear-btn');
// clear = () => {
//     const eventListElem = document.querySelector('.events-list');
//     eventListElem.innerHTML = ''; 
// };

// clearElem.addEventListener('click', clear);

// const removeBtnElem = document.querySelector('.remove-handlers-btn');
// removeBtnFunction = () => {
// spanElem.removeEventListener('click', logGreenSpan);
// pElem.removeEventListener('click', logGreenP);
// divElem.removeEventListener('click', logGreenDiv);

// spanElem.removeEventListener('click', logGreySpan, true);
// pElem.removeEventListener('click', logGreyP, true);
// divElem.removeEventListener('click', logGreyDiv, true);
// }

// removeBtnElem.addEventListener('click',removeBtnFunction);

// const attachElem = document.querySelector('.attach-handlers-btn');
// attachElem.addEventListener('click', positionEventListeners)

export function positionEventListeners(position = true){
    if (position){
spanElem.addEventListener('click', logGreySpan, true);
pElem.addEventListener('click', logGreyP, true);
divElem.addEventListener('click', logGreyDiv, true);

spanElem.addEventListener('click', logGreenSpan);
pElem.addEventListener('click', logGreenP);
divElem.addEventListener('click', logGreenDiv);
}else {
spanElem.removeEventListener('click', logGreenSpan);
pElem.removeEventListener('click', logGreenP);
divElem.removeEventListener('click', logGreenDiv);
        
spanElem.removeEventListener('click', logGreySpan, true);
pElem.removeEventListener('click', logGreyP, true);
divElem.removeEventListener('click', logGreyDiv, true);
    }
}
positionEventListeners();

const clearElem = document.querySelector('.clear-btn');
export function clear() {
    const eventListElem = document.querySelector('.events-list');
    eventListElem.innerHTML = ''; 
};

clearElem.addEventListener('click', clear);

const removeBtnElem = document.querySelector('.remove-handlers-btn');
export function removeBtnFunction() {
    positionEventListeners(false);
}

removeBtnElem.addEventListener('click',removeBtnFunction);

const attachElem = document.querySelector('.attach-handlers-btn');
attachElem.addEventListener('click', positionEventListeners)
