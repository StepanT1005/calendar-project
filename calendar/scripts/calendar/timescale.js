import { createNumbersArray } from '../common/createNumbersArray.js';

export const renderTimescale = () => {
    const calendarTimeScaleElem = document.querySelector('.calendar__time-scale')
const timeNumberArray = createNumbersArray(0, 23);
const timeArray = timeNumberArray.reduce((acc, elem) => {
    if (elem < 10 ){
        acc.push(`0${elem}: 00`)
    } else {
        {acc.push(`${elem}:00`)}
    }
        return acc
    },[]);
    const timeHTML = timeNumberArray.map((item) =>
    `<div class='time-slot'>
    <span class='time-slot__time'>${timeArray[item]}</span>
</div>`
    ).join('');
    calendarTimeScaleElem.innerHTML = timeHTML;
    // ф-ция должна генерировать разметку для боковой шкалы времени (24 часа)
    // полученную разметку вставьте на страницу с помощью innerHTML в .calendar__time-scale
};
