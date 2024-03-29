




/* handles the checkoutbutton function */
const checkoutButton = document.querySelector("#checkoutbutton");
const addressForm = document.querySelector("#address");

checkoutButton.onclick = function showAddress(){
    addressForm.style.display = "flex";
/* handles the shipping form validation */
const fullName = document.querySelector("#name");
const mail = document.querySelector("#email");
const phone = document.querySelector("#phone");
const city = document.querySelector("#city");
const zip = document.querySelector("#zip");
const address = document.querySelector("#addressinput");
const errorName = document.querySelector("#errorName");
const errorMail = document.querySelector("#errorMail");
const errorPhone = document.querySelector("#errorPhone");
const errorAddress = document.querySelector("#errorAddress");
const errorCity = document.querySelector("#errorCity");
const errorZip = document.querySelector("#errorZip");
const nextButton = document.querySelector("#nextbutton");
const payform = document.querySelector("#payment");

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
function validateAddress(event) {
    event.preventDefault();
    if (address.value.trim().length > 1) {
        errorAddress.style.display = "none";
        checkAllFields();
    }   else {
        errorAddress.style.display = "inline";
        nextButton.disabled = true;
    }
}
function validateZip(event) {
    event.preventDefault();
    if (lengthCheck(zip.value, 3)) {
        errorZip.style.display = "";
        checkAllFields();
    }   else {
        errorZip.style.display = "inline";
        nextButton.disabled = true;
    }
}
function validateCity(event) {
    event.preventDefault();
    if (lengthCheck(city.value, 1) === true) {
        errorCity.style.display = "";
        checkAllFields();
    }   else {
        errorCity.style.display = "inline";
        nextButton.disabled = true;
    }
}
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
function lengthCheck(value, len) {
    if(value && value.trim().length > len) {
        return true;
    }
    else {
        return false;
    }
}
function validateMail(mailValue) {
    const regEx = /\S+@\S+\.\S+/;
    const matchingPattern = regEx.test(mailValue);
    return matchingPattern;
}

fullName.addEventListener("input", validateName);
address.addEventListener("input", validateAddress);
zip.addEventListener("input", validateZip);
city.addEventListener("input", validateCity);
mail.addEventListener("input", mailValidation);
phone.addEventListener("input", validatePhone);

function checkAllFields() {
    const allFieldsValid = (
      lengthCheck(fullName.value, 1) &&
      lengthCheck(address.value, 1) &&
      lengthCheck(zip.value, 3) &&
      lengthCheck(city.value, 1) &&
      validateMail(mail.value) &&
      lengthCheck(phone.value, 7) 
    );
    nextButton.disabled = !allFieldsValid;
}
nextButton.onclick = function showPayment(event) {
    event.preventDefault();
    payform.style.display = "flex";
}
}
/* handles the paypal button function */
const successMessage = document.querySelector("#successCard");
const cartForm = document.querySelector("#shoppingCart");
const payForm = document.querySelector("#payment");
const welcomeSection = document.querySelector(".welcome");
const paypalButton = document.querySelector("#paypalbutton");
paypalButton.onclick = function success(event) {
    event.preventDefault();
    event.preventDefault();
    cartForm.style.display = "none";
    addressForm.style.display = "none";
    payForm.style.display = "none";
    welcomeSection.style.display = "none";
    successMessage.style.display = "flex";
}
/* handles the vippsbutton function */
const vippsButton = document.querySelector("#vippsbutton");
const creditButton = document.querySelector("#creditbutton");
const vippsForm = document.querySelector (".vipps");
const creditForm = document.querySelector (".credit");
vippsButton.onclick = function showVippsForm() {
    vippsForm.style.display = "flex";
    creditForm.style.display = "none";
    

/* handles the validation of the phonenumber in the vippsform */
const phone = document.querySelector("#phonePay");
const errorPhone = document.querySelector("#errorPhonePay");
const orderButton = document.querySelector("#orderVipps");

const successMessage = document.querySelector("#successCard");
const cartForm = document.querySelector("#shoppingCart");
const payForm = document.querySelector("#payment");
const addressForm = document.querySelector("#address");
const welcomeSection = document.querySelector(".welcome");
function validatePhone(event) {
    event.preventDefault();
    if (phone.value.length > 7) {
        errorPhone.style.display = "";
        orderButton.disabled = false;
    }   else {
        errorPhone.style.display = "inline";
        orderButton.disabled = true;
    }
}
phone.addEventListener("keyup", validatePhone);
orderButton.onclick = function success(event) {
    event.preventDefault();
    cartForm.style.display = "none";
    addressForm.style.display = "none";
    payForm.style.display = "none";
    welcomeSection.style.display = "none";
    successMessage.style.display = "flex";
}

}
/* handles the validation of the phonenumber in the creditform */
creditButton.onclick = function showCreditForm(event) {
    event.preventDefault();
    creditForm.style.display = "flex";
    vippsForm.style.display = "none";
    


const fullName = document.querySelector("#namePay");
const cardNumber = document.querySelector("#cardNumber");
const cvv = document.querySelector("#code");
const errorName = document.querySelector("#errorNamePay");
const errorNumber = document.querySelector("#errorNumber");
const errorCvv = document.querySelector("#errorCvv");
const orderButton = document.querySelector("#orderCredit");
/* validationprocesses for name,cardnumber,cvv */
function validateName(event) {
    event.preventDefault();
    if (fullName.value.trim().length > 1) {
        errorName.style.display = "";
        checkAllFields();
    }  else {
        errorName.style.display = "inline";
        orderButton.disabled = true;
    } 
}
function validateNumber(event) {
    event.preventDefault();
    if (cardNumber.value.length === 16) {
        errorNumber.style.display = "";
        checkAllFields();
    } else {
        errorNumber.style.display = "inline";
        orderButton.disabled = true;
    }
}
function validateCvv(event) {
    event.preventDefault();
    if (cvv.value.length === 3) {
        errorCvv.style.display = "";
        checkAllFields();
    }   else {
        errorCvv.style.display = "inline";
        orderButton.disabled = true;
    }
}
fullName.addEventListener("input", validateName);
cardNumber.addEventListener("input", validateNumber);
cvv.addEventListener("input", validateCvv);

function checkAllFields() {
    const allFieldsValid = (
        fullName.value.trim().length > 1 &&
        cardNumber.value.length === 16 &&
        cvv.value.length === 3
    )
    orderButton.disabled = !allFieldsValid;
}
/* handles the place order and paypal button functions */
const successMessage = document.querySelector("#successCard");
const cartForm = document.querySelector("#shoppingCart");
const payForm = document.querySelector("#payment");
const addressForm = document.querySelector("#address");
const welcomeSection = document.querySelector(".welcome");
const paypalButton = document.querySelector("#paypalbutton");

orderButton.onclick = function(event) {
    success(event);
}
paypalButton.onclick = function(event) {
    success(event);
}
function success(event) {
    event.preventDefault();
    cartForm.style.display = "none";
    addressForm.style.display = "none";
    payForm.style.display = "none";
    welcomeSection.style.display = "none";
    successMessage.style.display = "flex";
}
}


























