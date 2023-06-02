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

const link = document.querySelector("#link");
const heart = document.querySelector(".heart");


link.onclick = function navigateTo() {
    link.style.cursor = "pointer";
    window.location.href = "details.html";
}
heart.onclick = function redHeart(event) {
    event.stopPropagation();
    heart.style.color = "red"
}
