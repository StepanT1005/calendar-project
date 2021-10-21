// import { getItem, setItem } from '../common/storage.js';
// import { renderEvents } from './events.js';
// import { getDateTime } from '../common/time.utils.js';
// import { closeModal, openModal } from '../common/modal.js';

// let errorElem = document.querySelector('.error')

// const eventFormSubmitBtnElem = document.querySelector('.event-form__submit-btn')
// const eventFormElem = document.querySelector('.event-form');
// const closeEventFormBtn = document.querySelector('.create-event__close-btn');

// const dateModalElement = document.querySelector('input[type="date"]');
// const startInputElem = document.querySelectorAll('input[type="time"]');

// const formData = Object.fromEntries(new FormData(eventFormElem));





// const modalElement = document.querySelector('.modal__content')



// function validateStartTime() {
//     if (((getDateTime(formData.date, formData.startTime)).getMinutes() % 15) !== 0) {
//         errorElem.innerHTML = 'minute must be multiple 15'
//         return false
//     } else {
//         errorElem.innerHTML = ''
//     }
// };
// function validateEndTime() {
//     if (((getDateTime(formData.date, formData.endTime)).getMinutes() % 15) !== 0) {
//         return false
//         errorElem.innerHTML = 'minute must be multiple 15'
//     }else {
//         errorElem.innerHTML = ''
//     }
// } 
// function validateTimeLong() {
//     const timeLong = ((formData.endTime - formData.startTime) / 60000)
//     if (timeLong > 360) {
//         errorElem.innerHTML = 'event cannot last more than 6 hours'
//         return false;
//     } else {
//         errorElem.innerHTML = ''
//     }
// } 


// function validateForm () {
// if (validateStartTime() && validateEndTime() && validateTimeLong())

//  eventFormSubmitBtnElem.setAttribute('disabled')
// }
// modalElement.addEventListener('mouseup', validateForm);
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






// let errorElem = document.querySelector('.error')

// const eventFormSubmitBtnElem = document.querySelector('.event-form__submit-btn')
// const eventFormElem = document.querySelector('.event-form');
// const closeEventFormBtn = document.querySelector('.create-event__close-btn');

// const startInputElem = document.querySelectorAll('input[type="time"]');

// const formData = Object.fromEntries(new FormData(eventFormElem));

// const modalElement = document.querySelector('.modal__content')


// console.log(errorElem)
// const [startDateInputElem, endDateInputElem, startDatePopupInputElem, endDatePopupInputElem] = document.querySelectorAll('input[type="time"]');



















// const currentDateElem = document.querySelector('input[type="date"]')
// const inputYear = currentDateElem.value.slice(0,4);
// const inputMonth = currentDateElem.value.slice(5,7);
// const inputDay = currentDateElem.value.slice(8,10);


// import { getDateTime } from '../common/time.utils.js';

// let validateTimeEvent;
// let validateTimeEndEvent;
// let timeStart;
// let timeEnd;
// if (((getDateTime(formData.date, formData.startTime)).getMinutes() % 15) !== 0){
//     validateTimeEvent = false
// } else {
//     validateTimeEvent = true
// }

// if (((getDateTime(formData.date, formData.endTime)).getMinutes() % 15) !== 0){
//     validateTimeEvent = false;
// }else {
//     validateTimeEvent = true
// }
// function validateTime(event) {
//    if ((event.target.value.slice(3, 5) % 15) !== 0) {
//        validateTimeEvent = false;
//    } else {
//        validateTimeEvent = true;
//        timeStart = (new Date(inputYear, inputMonth, inputDay, event.target.value.slice(0, 2), event.target.value.slice(3, 5)))
//    }
// };
// function validateTimeEnd(event) {
//     if ((event.target.value.slice(3, 5) % 15) !== 0) {
//         validateTimeEndEvent = false;
//     } else {
//         validateTimeEndEvent = true;
//         timeEnd = (new Date(inputYear, inputMonth, inputDay, event.target.value.slice(0, 2), event.target.value.slice(3, 5)))
//     }
//  };

// function validateTimeLong() {
//     const timeLong = ((formData.endTime - formData.startTime) / 60000);
//     const timeLong2 = (timeEnd - timeStart) / 60000
//     if (timeLong > 360 || timeLong2 > 360) {
//         return (console.log(timeLong, timeLong2));
//      } else {
//         return (console.log(timeLong, timeLong2));

//      }
//      return (console.log(timeLong, timeLong2));
//     } 


// startDateInputElem.addEventListener('input', validateTime)
// endDateInputElem.addEventListener('input', validateTimeEnd)

// function validateForm () {
//     // console.log(timeStart)
//     // console.log(timeEnd)
//     // console.log(validateTimeEvent)
//     if (!validateTimeEvent || !validateTimeEndEvent) {
//         errorElem.innerHTML = 'minute must be multiple 15';
//     } else{
//         errorElem.innerHTML = ''
//     }
    // validateTimeLong()
    // if (!validateTimeLong()){
    //     errorElem.innerHTML = 'event cannot last more than 6 hours'
    // } else {
    //     errorElem.innerHTML = '';
    // }

// }
// modalElement.addEventListener('mouseup', validateForm);



// function validateForm () {
//     console.log(validate)
//     if (!validateTimeEvent) {
//         errorElem.innerHTML = 'minute must be multiple 15';
//     } else{
//         errorElem.innerHTML = ''
//     }
//     console.log(validateTimeLong())
// if (validate && validateTimeLong()){
//     eventFormSubmitBtnElem.disabled = false
// } else {
//     eventFormSubmitBtnElem.disabled = true
// }
// console.log('asdasdasd')
// }