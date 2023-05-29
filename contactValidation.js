const fullName = document.querySelector("#name");
const mail = document.querySelector("#email");
const phone = document.querySelector("#phone");
const message = document.querySelector("#message");
const errorName = document.querySelector("#errorName");
const errorMail = document.querySelector("#errorMail");
const errorPhone = document.querySelector("#errorPhone");
const errorMessage = document.querySelector("#errorText");
const nextButton = document.querySelector("#nextbutton");
const contactForm = document.querySelector("#contactCard");
const successMessage = document.querySelector("#successCard");


/* 
checks if input length is more than 1 character
*/
function validateName(event) {
    event.preventDefault();
    if (lengthCheck(fullName.value, 1) === true) {
        errorName.style.display = "";
        checkAllFields();
    }  else {
        errorName.style.display = "inline";
        nextButton.disabled = true;
    } 
}
/* 
checks if email input matches pattern 
*/
function mailValidation(event) {
    event.preventDefault();
    if (validateMail(mail.value) === true) {
        errorMail.style.display = "";
        checkAllFields();
    }   else {
        errorMail.style.display = "inline";
        nextButton.disabled = true;

    }
}
 /* 
checks if phone input is a number and more than 7 digits
*/
function validatePhone(event) {
    event.preventDefault();
    if (lengthCheck(phone.value, 7)) {
        errorPhone.style.display = "";
        checkAllFields();
    }   else {
        errorPhone.style.display = "inline";
        nextButton.disabled = true;
    }
}
/* 
checks if input length is more than 24 characters
*/
function validateMessage(event) {
    event.preventDefault();
    if (lengthCheck(message.value, 24) === true) {
        errorMessage.style.display = "";
        checkAllFields();
    }   else {
        errorMessage.style.display = "inline";
        nextButton.disabled = true;
    }
}

/* 
checks if all input fields are filled out correctly and enables nextbutton 
*/    
function checkAllFields() {
    const allFieldsValid = (
      lengthCheck(fullName.value, 1) &&
      validateMail(mail.value) &&
      lengthCheck(phone.value, 7) &&
      lengthCheck(message.value, 24)
    );
    nextButton.disabled = !allFieldsValid;
}
  /* 
checks length of input
*/ 
function lengthCheck(value, len) {
    if(value.trim().length > len) {
        return true;
    }
    else {
        return false;
    }
}
/* 
checks mail input pattern
*/
function validateMail(mailValue) {
    const regEx = /\S+@\S+\.\S+/;
    const matchingPattern = regEx.test(mailValue);
    return matchingPattern;
}

fullName.addEventListener("input", validateName);
mail.addEventListener("input", mailValidation);
phone.addEventListener("input", validatePhone);
message.addEventListener("input", validateMessage);

nextButton.onclick = function showSuccess(event) {
    event.preventDefault();
    contactForm.style.display = "none";
    successMessage.style.display = "flex";
}