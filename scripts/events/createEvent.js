import { getItem, setItem } from '../common/storage.js';
import { renderEvents } from './events.js';
import { getDateTime } from '../common/time.utils.js';
import { closeModal, openModal } from '../common/modal.js';

const eventFormElem = document.querySelector('.event-form');
const closeEventFormBtn = document.querySelector('.create-event__close-btn');

const [dateModalElement, datePopupElement] = document.querySelectorAll('input[type="date"]');
const [startDateInputElem, endDateInputElem, startDatePopupInputElem, endDatePopupInputElem] = document.querySelectorAll('input[type="time"]');

export function setCurrentDateInDateElem(type, setDate, endDate) {
    let currentDate = new Date()
    let eventEndTime = new Date()
    if(setDate) currentDate = setDate;
    if(endDate) eventEndTime = endDate;
    Date.prototype.toDateInputValue = (function() {
        let local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        if (type == 'date') {
            return local.toJSON().slice(0,10);
        } else if (type =='time'){
        return local.toJSON().slice(11,16)
        }
    });
    if (type == 'date') {
        dateModalElement.value = currentDate.toDateInputValue();
        datePopupElement.value = currentDate.toDateInputValue();
    }else if(type =='time') {
        startDateInputElem.value = currentDate.toDateInputValue();
        endDateInputElem.value = eventEndTime.toDateInputValue();
        startDatePopupInputElem.value = currentDate.toDateInputValue();
        endDatePopupInputElem.value = eventEndTime.toDateInputValue();
    }

}
setCurrentDateInDateElem('date');
setCurrentDateInDateElem('time')

function clearEventForm() {
    eventFormElem.reset();
    setCurrentDateInDateElem('date')
    setCurrentDateInDateElem('time')
    dateModalElement.classList.remove('hidden');

    // ф-ция должна очистить поля формы от значений
}

function onCloseEventForm() {
    closeEventFormBtn.addEventListener('click', () => {
        closeModal(); 
        clearEventForm();
    });
    // clearEventForm();
    // здесь нужно закрыть модальное окно и очистить форму
}

export function onCreateEvent(event) {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(eventFormElem));
    const newEvent = getItem('events');
    newEvent.push({
        id: Math.random(),
        title: `${formData.title}`,
        description: `${formData.description}`,
        start: new Date(getDateTime(formData.date, formData.startTime)),
        end: new Date(getDateTime(formData.date, formData.endTime)),
    });

    closeModal();
    renderEvents();
    clearEventForm();
    // задача этой ф-ции только добавить новое событие в массив событий, что хранится в storage
    // создавать или менять DOM элементы здесь не нужно. Этим займутся другие ф-ции

    // при подтверждении формы нужно считать данные с формы
    // с формы вы получите поля date, startTime, endTime, title, description
    // на основе полей date, startTime, endTime нужно посчитать дату начала и окончания события
    // date, startTime, endTime - строки. Вам нужно с помощью getDateTime из утилит посчитать start и end объекта события
    // полученное событие добавляем в массив событий, что хранится в storage
    // закрываем форму
    // и запускаем перерисовку событий с помощью renderEvents
}

export function initEventForm() {
eventFormElem.addEventListener('submit', onCreateEvent);
onCloseEventForm();
    // подпишитесь на сабмит формы и на закрытие формы


}
