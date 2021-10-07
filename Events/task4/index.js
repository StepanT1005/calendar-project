const checkboxElem = document.querySelector('.task-status');
export function ifChecked() {
    console.log(checkboxElem.checked)
}
checkboxElem.addEventListener('click', ifChecked)