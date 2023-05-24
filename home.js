const burgerMenu = document.querySelector("#burgermenu");
const listMenu = document.querySelector(".menu");

burgerMenu.onclick = function dropdown() {
    if (listMenu.style.display === "block") {
        listMenu.style.display = "none";
      } else {
        listMenu.style.display = "block";
      }
    };
    
const searchIcon = document.querySelector("#searchicon");
const searchBar = document.querySelector(".searchbar");

searchIcon.onclick = function search() {
    if (searchBar.style.display === "flex") {
        searchBar.style.display = "none";
    } else {
        searchBar.style.display = "flex";
    }
}

const radioButtons = document.querySelectorAll('input[type="radio"]')

radioButtons.forEach(function(radioButton) {
    
    radioButton.onchange = function() {
    const payCredit = document.querySelector(".credit");
    const payVipps = document.querySelector(".vipps");
    const radioVipps = document.querySelector("#vipps");
    const radioCredit = document.querySelector("#credit");
    const buttonPaypal = document.querySelector("#paypal");
    let buttonsChecked = false ;
    
    for (let i = 0; i < radioButtons.length; i++) {
        if(radioButtons[i].checked) {
            buttonsChecked = true;
            break;
        }
    }
    if (radioVipps.checked) {
        payVipps.style.display = "flex";
        payCredit.style.display = "none";
        buttonPaypal.style.display = "none"
    
    } else if (radioCredit.checked) {
        payCredit.style.display = "flex";
        payVipps.style.display = "none";
    
    } else if (!abuttonsChecked) {
        payCredit.style.display = "none";
        payVipps.style.display = "none";
        buttonPaypal.style.display = "flex";
    }
}
}

)

const checkoutButton = document.querySelector("#checkoutbutton");
const addressForm = document.querySelector("#address");

checkoutButton.onclick = function showAddress(){
    addressForm.style.display = "flex";
}

const nextButton = document.querySelector("#nextbutton");
const paymentForm = document.querySelector("#payment");

nextButton.onclick = function showPayment() {
    paymentForm.style.display = "flex";
}




