import { getItem, setItem } from '../common/storage.js';
import { openPopup, closePopup } from '../common/popup.js';
import { setCurrentDateInDataElem } from './createEvent.js'
import { getDateTime } from '../common/time.utils.js'
import { renderEvents } from './events.js';
import { onDeleteEvent } from './events.js'


const popUpTitleElem = document.querySelector('.popupTitleTextInput');
const popUpDescriptionElem = document.querySelector('.popupDescriptionTextInput');
const editBtnElem = document.querySelector('.popup-form__edit-btn')
const eventFormElem = document.querySelector('.popup-form')

let eventObj;

export function editEvent(element) {
    const eventId = element.dataset.eventId
    eventObj = getItem('events').filter(eventEl => eventEl.id == eventId)[0];
    console.log(eventObj['end']);
    setCurrentDateInDataElem('time', eventObj['start'], eventObj['end']);
    setCurrentDateInDataElem('date', eventObj['start']);
    popUpTitleElem.value = eventObj['title'];
    popUpDescriptionElem.value = eventObj['description'];
    console.log(editBtnElem)
}

function edit(event) {
    setItem('eventIdToDelete', eventObj['id'])
    const formData = Object.fromEntries(new FormData(eventFormElem));
    eventObj['id'] = Math.random()
    eventObj['title'] = `${formData.title}`;
    eventObj['description'] = `${formData.description}`;
    eventObj['start'] = new Date(getDateTime(formData.date, formData.startTime));
    eventObj['end'] = new Date(getDateTime(formData.date, formData.endTime));
    closePopup();
    renderEvents();
    eventFormElem.reset();
    setCurrentDateInDataElem('date')
    setCurrentDateInDataElem('time')
    onDeleteEvent()
};
editBtnElem.addEventListener('click', edit)



