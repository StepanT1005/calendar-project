import { getItem, setItem } from '../common/storage.js';
import { renderEvents } from './events.js';
import { getDateTime } from '../common/time.utils.js';
import { closeModal, openModal } from '../common/modal.js';

let errorElem = document.querySelector('.error')

const eventFormSubmitBtnElem = document.querySelector('.event-form__submit-btn')
const eventFormElem = document.querySelector('.event-form');
const closeEventFormBtn = document.querySelector('.create-event__close-btn');

const dateModalElement = document.querySelector('input[type="date"]');
const startInputElem = document.querySelectorAll('input[type="time"]');

const formData = Object.fromEntries(new FormData(eventFormElem));





const modalElement = document.querySelector('.modal__content')



function validateStartTime() {
    if (((getDateTime(formData.date, formData.startTime)).getMinutes() % 15) !== 0) {
        errorElem.innerHTML = 'minute must be multiple 15'
        return false
    } else {
        errorElem.innerHTML = ''
    }
};
function validateEndTime() {
    if (((getDateTime(formData.date, formData.endTime)).getMinutes() % 15) !== 0) {
        return false
        errorElem.innerHTML = 'minute must be multiple 15'
    }else {
        errorElem.innerHTML = ''
    }
} 
function validateTimeLong() {
    const timeLong = ((formData.endTime - formData.startTime) / 60000)
    if (timeLong > 360) {
        errorElem.innerHTML = 'event cannot last more than 6 hours'
        return false;
    } else {
        errorElem.innerHTML = ''
    }
} 


function validateForm () {
if (validateStartTime() && validateEndTime() && validateTimeLong())

 eventFormSubmitBtnElem.setAttribute('disabled')
}
modalElement.addEventListener('mouseup', validateForm);
//  const formData1 = Object.fromEntries(new FormData(eventFormElem));
//     const checkDate = () => {
//         console.log((getDateTime(formData1.date, formData1.startTime)).getMinutes());
//         console.log()
//         if ((startDateInputElem.value.slice(3) % 15) !== 0){
//             eventFormSubmitBtnElem.disabled = true;
//             console.log(1)
//         } else {
//         eventFormSubmitBtnElem.disabled = false;
//         console.log(eventFormSubmitBtnElem.disabled)
//         }
//     }

//     modalElement.addEventListener('mouseup', checkDate)