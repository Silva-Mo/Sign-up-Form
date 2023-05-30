const form = document.querySelector('form');
const firstName = document.querySelector('#first_name');
const email = document.querySelector("#email");
const phoneNumber = document.querySelector('#phone_number');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwrod_confirm');
const errorSpans = document.querySelectorAll('.error');
const passwordChecks = document.querySelectorAll('.check');
let inputs = [firstName, email, phoneNumber, password, passwordConfirm];

form.addEventListener('submit', (e) => {
    if (!form.checkValidity() || !confirmPassword()){
        e.preventDefault();
        showError();
    }
})

for (let i = 0; i < inputs.length; i++){
    if (i === 0){
        inputs[0].addEventListener('blur', () => {
            showNameError();
        })
    }
    else if (i === 1){
        inputs[1].addEventListener('blur', () => {
            showEmailError();
        })
    }
    else if (i === 2){
        inputs[2].addEventListener('blur', () => {
            showPhoneNumberError();
        })
    }
    else if (i === 3){
        inputs[3].addEventListener('blur', () => {
            showPasswordError();
        })
    }
    else if (i === 4){
        inputs[4].addEventListener('blur', () => {
            showPasswordConfirmError();
        })
    }
}


function showError() {
    for (let i = 0; i < inputs.length; i++){
        if(i === 0){
            showNameError();
        }
        else if(i === 1){
            showEmailError();
        }
        else if(i === 2){
            showPhoneNumberError();
        }
        else if(i === 3){
            showPasswordError();
        }
        else if(i === 4){
            showPasswordConfirmError();
        }
    }
}

function showNameError() {
    if (firstName.validity.valid){
        errorSpans[0].textContent = "";
    }
    else {
        if (firstName.validity.valueMissing){
            errorSpans[0].textContent = "You have to type your name";
        }
        else if (firstName.validity.tooLong){
            errorSpans[0].textContent = `Your name is too long, the maximum is 20 characters`;
        }
        else if (firstName.validity.tooShort){
            errorSpans[0].textContent = `Your name is too short, minimum is 2 characters`;
        }
        else {
            errorSpans[0].textContent = `Invalid name, please type a valid one`;
        }
    } 
}

function showEmailError(){
    if (email.validity.valid){
        errorSpans[1].textContent = "";
    }
    else {
        if (email.validity.valueMissing){
            errorSpans[1].textContent = "You have to type your email";
        }
        else if (email.validity.typeMismatch){
            errorSpans[1].textContent = `You have to type a vaild email like: example@abc.com`;
        }
        else {
            errorSpans[1].textContent = "Invalid email address, please type a valid one"
        }
    } 
}

function showPhoneNumberError() {
    if (phoneNumber.validity.valid){
        errorSpans[2].textContent = "";
    }
    else {
        if (phoneNumber.validity.valueMissing){
            errorSpans[2].textContent = "You have to type your phone number";
        }
        else if (phoneNumber.validity.patternMismatch){
            errorSpans[2].textContent = `You have to type a vaild US phone number like: (123)123-1234`;
        }
        else {
            errorSpans[2].textContent = "Invalid US phone number, please type a valid one like: (123)123-1234"
        }
    }
}

function showPasswordError() {
    if (password.validity.valid){
        errorSpans[3].textContent = "";
    }
    else {
        if (password.validity.valueMissing){
            errorSpans[3].textContent = "You have to type your new password";
        }
        else if (password.validity.patternMismatch){
            errorSpans[3].textContent = `Your password should have at least: one capital letter, one small
            letter, one special character and one number`;
        }
        else if (password.validity.tooShort){
            errorSpans[3].textContent = `Your password has ${password.value.length} characters, it should have at least 8 characters`;
        }   
        else{
            errorSpans[3].textContent = "You have to type a valid password";
        }
    }
}

function showPasswordConfirmError () {
    if (passwordConfirm.validity.valid && confirmPassword()){
        errorSpans[4].textContent = "";
    }
    else {
        if (passwordConfirm.validity.valueMissing){
            errorSpans[4].textContent = "You have to confirm your password by typing it again"
        }
        else if (!confirmPassword()){
            errorSpans[4].textContent = "Password did not match"
        }
    } 
}



password.addEventListener('input', (e) => {
    if (password.value.length >= 8){
        passwordChecks[0].classList.add("met");
    }
    else{
        passwordChecks[0].classList.remove("met");
    }
    if (/[A-Z]/.test(password.value)){
        passwordChecks[1].classList.add("met");
    }
    else{
        passwordChecks[1].classList.remove("met");
    }
    if (/[a-z]/.test(password.value)){
        passwordChecks[2].classList.add("met");
    }
    else{
        passwordChecks[2].classList.remove("met");
    }
    if (/[*@!#%&()^~{}]+/.test(password.value)){
        passwordChecks[3].classList.add("met");
    }
    else{
        passwordChecks[3].classList.remove("met");
    }
    if (/[*@!#%&()^~{}]+/.test(password.value)){
        passwordChecks[3].classList.add("met");
    }
    else{
        passwordChecks[3].classList.remove("met");
    }
    if (/\d/.test(password.value)) {
        passwordChecks[4].classList.add("met");
    }
    else {
        passwordChecks[4].classList.remove("met");
    }
})


function confirmPassword() {
    if (password.value === passwordConfirm.value){
        return true;
    }
    else{
        return false;
    }
}
