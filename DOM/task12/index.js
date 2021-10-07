export function squaredNumbers() {
    const liElem = document.querySelectorAll('.number');
    for (let elem of liElem) {
        elem.dataset.squaredNumber = elem.dataset.number ** 2;
    }
}
