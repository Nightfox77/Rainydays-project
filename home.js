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






