export function displayCurrentTime() {
    const displaTimeElem = document.querySelector('.timeDiv');
    if(displaTimeElem) {
        displaTimeElem.remove();
    }
    const currentTime = new Date();
    const eventDate = currentTime.getDate();
    const eventHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes()
    const dataDayElem = document.querySelector(`div[data-day="${eventDate}"]`);
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

