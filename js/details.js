const addButton = document.querySelector("#addItem");
const cart = document.querySelector("#cart");
const cartOverlay = document.querySelector(".overlay");
addButton.onclick = function showOverlay() {
    cart.style.color = "#3FA115";
    cartOverlay.style.display = "block";
}