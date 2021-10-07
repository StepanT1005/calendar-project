export function createButton(buttonText) {
    const button = document.createElement('button');
    button.textContent = buttonText;
    const body = document.querySelector('body');
    body.append(button);
}
