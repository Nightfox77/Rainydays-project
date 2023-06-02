
/* handles the burgermenu functions */
const burgerMenu = document.querySelector("#burgermenu");
const listMenu = document.querySelector(".menu");
burgerMenu.onclick = function dropdown() {
    if (listMenu.style.display === "block") {
        listMenu.style.display = "none";
      } else {
        listMenu.style.display = "block";
      }
    };
/* handles the searchbar fuunctions */    
const searchIcon = document.querySelector("#searchicon");
const searchBar = document.querySelector(".searchbar");

searchIcon.onclick = function search() {
    if (searchBar.style.display === "flex") {
        searchBar.style.display = "none";
    } else {
        searchBar.style.display = "flex";
    }
}

/* handles the heart colorchange and the link function for the product container */
const link = document.querySelector("#link");
const heart = document.querySelector(".heart");
let productContainer = document.querySelectorAll(".product-container");

productContainer.forEach(function (container) {
const link = container;
/* excludes .contact and .about */
if(container.classList.contains("contact") || container.classList.contains("about")) {
    return;
}
const heart = container.querySelector(".heart");
    link.onclick = function navigateTo() {
    window.location.href = "details.html";
}
heart.onclick = function redHeart(event) {
    event.stopPropagation();
    if(heart.style.color === "red") {
        heart.style.color = ""
    } else {
        heart.style.color = "red";
    }
}
})
