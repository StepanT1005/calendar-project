const checkboxElem = document.querySelector('.task-status');
export function consoleStatus(event) {
    console.log(event.target.checked);  
}
checkboxElem.addEventListener('change', consoleStatus)