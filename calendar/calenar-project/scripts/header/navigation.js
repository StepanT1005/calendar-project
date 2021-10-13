import { getItem, setItem } from '../common/storage.js';
import { renderWeek } from '../calendar/calendar.js';
import { renderHeader } from '../calendar/header.js';
import { getStartOfWeek, getDisplayedMonth } from '../common/time.utils.js';

const navElem = document.querySelector('.navigation');
const displayedMonthElem = document.querySelector('.navigation__displayed-month');

function renderCurrentMonth() {
    const startofWeek = getStartOfWeek(getItem('displayedWeekStart'));
    const displayedMonth = getDisplayedMonth(startofWeek)
    displayedMonthElem.innerHTML = displayedMonth
    // отрисовать месяц, к которому относиться текущая неделя (getDisplayedMonth)
    // вставить в .navigation__displayed-month
}

const onChangeWeek = event => {
    const renderDate = () =>{
        renderHeader();
        renderWeek();
        renderCurrentMonth();
    }
    let setNewDate = getItem('displayedWeekStart');
    if(event.target.closest('.fa-chevron-right')){
        setNewDate.setDate(setNewDate.getDate() + 7);
        setItem('displayedWeekStart', setNewDate);
        renderDate();
    } else if (event.target.closest('.fa-chevron-left')) {
        setNewDate.setDate(setNewDate.getDate() - 7);
        setItem('displayedWeekStart', setNewDate);
        renderDate();
    } else if (event.target.closest('.navigation__today-btn')){
        const currentStartWeek = getStartOfWeek(new Date())
        setItem('displayedWeekStart', currentStartWeek);
        renderDate();
    }
    // при переключении недели обновите displayedWeekStart в storage
    // и перерисуйте все необходимые элементы страницы (renderHeader, renderWeek, renderCurrentMonth)
};

export const initNavigation = () => {
    renderCurrentMonth();
    navElem.addEventListener('click', onChangeWeek);
};
