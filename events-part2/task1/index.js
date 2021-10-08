const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');
const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');

export const isRequired = value => value
? undefined
: 'Required';

export const isEmail = value => value.includes('@')
? undefined
: 'Should be an Email';

const validatorByFields = {
    email: [isRequired, isEmail],
    password: [isRequired],
}

export const validate = (fieldName, value) => {
const validators = validatorByFields[fieldName];
return validators
    .map(validator => validator(value))
    .filter(errorText => errorText)
    .join(', ');
};

export const onEmailChange = event => {
    const errorText = validate('email', event.target.value);
    emailErrorElem.textContent = errorText;
};
export const onPasswordChange = event => {
    const errorText = validate('password', event.target.value);
    passwordErrorElem.textContent = errorText;
};

emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);

const formElem = document.querySelector('.login-form');
export const onFormSubmit = event => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(formElem));
    alert(JSON.stringify(formData));
}
formElem.addEventListener('submit', onFormSubmit)