
const price = document.querySelector("#price");
const selectElement = document.querySelector("#select");
let originalPrice = parseFloat(price.innerHTML);
selectElement.addEventListener("change", function() {
  const selected = selectElement.options[selectElement.selectedIndex].text;
  let updatedPrice = (originalPrice * selected);
  price.innerHTML = updatedPrice;
})



const checkoutButton = document.querySelector("#checkoutbutton");
const addressForm = document.querySelector("#address");

checkoutButton.onclick = function showAddress(){
    addressForm.style.display = "flex";

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





























