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





