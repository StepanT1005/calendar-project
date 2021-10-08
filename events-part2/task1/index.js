const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');
const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');

const isRequired = value => value
? undefined
: 'Required';

const isEmail = value => value.includes('@')
? undefined
: 'Should be an Email';

const validatorByFields = {
    email: [isRequired, isEmail],
    password: [isRequired],
}

const validate = (fieldName, value) => {
const validators = validatorByFields[fieldName];
return validators
    .map(validator => validator(value))
    .filter(errorText => errorText)
    .join(', ');
};

const onEmailChange = event => {
    const errorText = validate('email', event.target.value);
    emailErrorElem.textContent = errorText;
};
const onPasswordChange = event => {
    const errorText = validate('password', event.target.value);
    passwordErrorElem.textContent = errorText;
};

emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);

const formElem = document.querySelector('.login-form');
const onFormSubmit = event => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(formElem));
    alert(JSON.stringify(formData));
}
formElem.addEventListener('submit', onFormSubmit)