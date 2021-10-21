import { getStartOfWeek } from '../common/time.utils.js';
import { getItem } from '../common/storage.js'
export function displayCurrentTime() {
    const mondayDate = getItem('displayedWeekStart')
    if (JSON.stringify(getStartOfWeek(new Date())) != JSON.stringify(mondayDate)) return
    const displaTimeElem = document.querySelector('.timeDiv');
    if(displaTimeElem) {
        displaTimeElem.remove();
    }
    const currentTime = new Date();
    const eventDate = currentTime.getDate();
    const eventHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes()
    const dataDayElem = document.querySelector(`div[data-day="${eventDate}"]`);
    console.log(dataDayElem.children[eventHour])
    const timeSlotElem = dataDayElem.children[eventHour];
    timeSlotElem.appendChild
    let displayTime = document.createElement('div');
    displayTime.classList.add('timeDiv')
    displayTime.innerHTML = `<div class='currentTimeDiv'>
    <div class='circle' style='margin-top: ${currentMinutes-3}px'>
    </div> 
    <div class='currentTime' style='margin-top: ${currentMinutes}px''></div>
    `
    timeSlotElem.appendChild(displayTime)

}
setTimeout(displayCurrentTime, 1)
setInterval(displayCurrentTime, 60000);


