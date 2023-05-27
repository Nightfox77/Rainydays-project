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

const vippsButton = document.querySelector("#vippsbutton");
const creditButton = document.querySelector("#creditbutton");
const vippsForm = document.querySelector (".vipps");
const creditForm = document.querySelector (".credit");
const paypalButton = document.querySelector("#paypalbutton");
const lines = document.querySelector("#lines");

vippsButton.onclick = function showVippsForm() {
    vippsForm.style.display = "flex";
    creditForm.style.display = "none";
    paypalButton.style.display = "none";
    lines.style.display = "none";
}
creditButton.onclick = function showCreditForm() {
    creditForm.style.display = "flex";
    vippsForm.style.display = "none";
    paypalButton.style.display = "none";
    lines.style.display = "none";
}



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




