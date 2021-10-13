import { getItem } from '../common/storage.js';
import { generateWeekRange } from '../common/time.utils.js';
import { openModal } from '../common/modal.js';

const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun',];

export const renderHeader = () => {
    const calendarHeaderElem = document.querySelector('.calendar__header');
    const c = [];
    const currentWeek = generateWeekRange(getItem('displayedWeekStart'));
    currentWeek.map((day) => c.push(day.getDate()));
    const d = daysOfWeek.map((day, index) => `
    <div class='calendar__day-label day-label'>
       <span class='day-label__day-name'>${day}</span>
       <span class='day-label__day-number'>${c[index]}</span>
    </div>`).join('');
    calendarHeaderElem.innerHTML = d;
    // на основе displayedWeekStart из storage с помощью generateWeekRange сформируйте массив дней текущей недели
    // на основе полученного массива сформируйте разметку в виде строки - 7 дней (день недели и число в месяце)
    // полученную разметку вставить на страницу с помощью innerHTML в .calendar__header
    // в дата атрибуте каждой ячейки должно хранить для какого часа эта ячейка
};

// при клике на кнопку "Create" открыть модальное окно с формой для создания события
// назначьте здесь обработчик 
const createButtonElem = document.querySelector('.create-event-btn');
createButtonElem.addEventListener('click', openModal);

