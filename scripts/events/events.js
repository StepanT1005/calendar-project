import { getItem, setItem } from '../common/storage.js';
import shmoment from '../common/shmoment.js';
import { openPopup, closePopup } from '../common/popup.js';
import { setCurrentDateInDateElem } from './createEvent.js';
import { openModal } from '../common/modal.js';
import { editEvent } from './editEvent.js'
import { displayCurrentTime } from './currentTime.js'

const dateModalElement = document.querySelector('input[name="date"]');

const weekElem = document.querySelector('.calendar__week');
const deleteEventBtn = document.querySelector('.delete-event-btn');


function createEventOnClickTimeSlot (event) {
    const currentMondayDate = getItem('displayedWeekStart');
    let [currentMonth, currentYear] = [currentMondayDate.getMonth(), currentMondayDate.getFullYear()];
    const currentDay = event.target.closest('.calendar__day').dataset.day;

     if (currentMondayDate.getDate() > currentDay) {
        currentMonth +=1;
     }

    const currentHour =  event.target.dataset.time;
    const currentDate = new Date(currentYear, currentMonth, currentDay, currentHour)
    setCurrentDateInDateElem('date', currentDate);
    setCurrentDateInDateElem('time', currentDate);
    dateModalElement.classList.add('hidden');
    openModal();
}


function handleEventClick(event) {
    event.preventDefault();
    const coordinates = event.target.getBoundingClientRect();
    const eventElement = event.target;
    const [xCoord, yCoord] = [coordinates.x, coordinates.y];
    let id = null;
    if (eventElement.closest('.event')){
    id = eventElement.closest('.event').dataset.eventId;
    editEvent(eventElement);
    openPopup(xCoord, yCoord);
    } else {
    createEventOnClickTimeSlot(event)
    }
    setItem('eventIdToDelete', id);

    // если произошел клик по событию, то нужно паказать попап с кнопкой удаления
    // установите eventIdToDelete с id события в storage
}
function removeEventsFromCalendar() {
const calendarTimeSlotsElem = document.querySelectorAll('.calendar__time-slot');
for(let slot of calendarTimeSlotsElem){
    slot.innerHTML = '';
    }
}




const createEventElement = event => {
    
    ///
    const eventDate = event.start.getDate();
    const eventHour = event.start.getHours();
    const differentTime = Math.floor((event.end - event.start) / 60000);
    const dataDayElem = document.querySelectorAll(`div[data-day="${eventDate}"]`);
    const timeSlotElem = dataDayElem[0].children[eventHour];

    let eventElem = document.createElement('div');
    eventElem.classList.add('event');
    eventElem.dataset.eventId = event.id;
    eventElem.style.top = `${event.start.getMinutes()}px`;
    eventElem.style.height = `${differentTime}px`;
    timeSlotElem.appendChild(eventElem);

    const eventTitleElem = document.createElement('div');
    eventTitleElem.classList.add('event__title');
    eventTitleElem.dataset.eventId = event.id;
    eventTitleElem.textContent = `${event.title}`


    const eventTimeElem = document.createElement('div');
    eventTimeElem.classList.add('event__time');
    eventTimeElem.dataset.eventId = event.id;
    eventTimeElem.textContent = `
    ${event.start.toTimeString().slice(0,2)}:${event.start.toTimeString().slice(3,5)}
     - ${event.end.toTimeString().slice(0,2)}:${event.end.toTimeString().slice(3,5)}`

    eventElem.appendChild(eventTitleElem, eventTimeElem);
    eventElem.appendChild(eventTimeElem);

    // ф-ция создает DOM элемент события
    // событие должно позиционироваться абсолютно внутри нужной ячейки времени внутри дня
    // нужно добавить id события в дата атрибут
    // здесь для создания DOM элемента события используйте document.createElement
};

export const renderEvents = () => {
    displayCurrentTime()
    const allEvents = getItem('events');
    const currentMondayDate = getItem('displayedWeekStart');
    let endWeekDate = new Date(currentMondayDate);
    endWeekDate = new Date(endWeekDate.setDate(endWeekDate.getDate() + 7));
    allEvents.map((event) => {
        if (event.start < endWeekDate && event.start > (new Date(currentMondayDate))) {
            createEventElement(event)
        }
    });
    // достаем из storage все события и дату понедельника отображаемой недели
    // фильтруем события, оставляем только те, что входят в текущую неделю
    // создаем для них DOM элементы с помощью createEventElement
    // для каждого события находим на странице временную ячейку (.calendar__time-slot)
    // и вставляем туда событие
    // каждый день и временная ячейка должно содержать дата атрибуты, по которым можно будет найти нужную временную ячейку для события
    // не забудьте удалить с календаря старые события перед добавлением новых
};

export function onDeleteEvent() {
    const allEvents = getItem('events');
    const deleteEventId = getItem('eventIdToDelete');
    const filteredEvents = allEvents.filter(event => event.id != deleteEventId);
    setItem('events', filteredEvents)
    closePopup()
    removeEventsFromCalendar()
    renderEvents()

    // достаем из storage массив событий и eventIdToDelete
    // удаляем из массива нужное событие и записываем в storage новый массив
    // закрыть попап
    // перерисовать события на странице в соответствии с новым списком событий в storage (renderEvents)
}


deleteEventBtn.addEventListener('click', onDeleteEvent);

weekElem.addEventListener('click', handleEventClick);


