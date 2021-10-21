import { getItem } from '../common/storage.js';
import { generateWeekRange } from '../common/time.utils.js';
import { renderEvents } from '../events/events.js';
import { createNumbersArray } from '../common/createNumbersArray.js';

const generateDay = () => {
    const timeNumberArray = createNumbersArray(0, 23);
    const timeHTML = timeNumberArray.map((item) =>
        `<div class='calendar__time-slot' data-time='${item}'>
        </div>`
        ).join('');
    return timeHTML;
    // функция должна сгенерировать и вернуть разметку дня в виде строки
    // разметка состоит из 24 часовых временных слотов (.calendar__time-slot)
};

export const renderWeek = () => {
    const calendarWeekElem = document.querySelector('.calendar__week');
    const week = [];
    const currentWeek = generateWeekRange(getItem('displayedWeekStart'));
    currentWeek.map((day) => week.push(day.getDate()));
    const day = week.map((day) => `
    <div class='calendar__day' data-day='${day}'>
    ${generateDay()}
    </div>`).join('');
    calendarWeekElem.innerHTML = day;
    renderEvents()
    // функция должна сгенерировать разметку недели в виде строки и вставить ее на страницу (в .calendar__week)
    // разметка недели состоит из 7 дней (.calendar__day) отображаемой недели
    // массив дней, которые нужно отобразить, считаем ф-цией generateWeekRange на основе displayedWeekStart из storage
    // каждый день должен содержать в дата атрибуте порядковый номер дня в месяце
    // после того, как отрисовали всю сетку для отображаемой недели, нужно отобразить события этой недели с помощью renderEvents
};

