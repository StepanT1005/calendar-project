export function finishForm() {
    const form = document.querySelector('.login-form');
    const loginInput = document.createElement('input');
    loginInput.setAttribute('type', 'text');
    loginInput.setAttribute('name', 'login');
    form.prepend(loginInput);
    const passwordInput = document.querySelector('.login-form > input:last-child')
    passwordInput.setAttribute('type', 'password')
}

