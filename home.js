const burgerMenu = document.querySelector("#burgermenu");
const listMenu = document.querySelector(".menu");
const heartIcon = document.querySelector("#heart");
const link = document.querySelector("#link");


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


link.onclick = function checkHeart(event) {
    if(event.target.classList.contains("#heart")) {
        event.stopPropagation();
        event.preventDefault();
        heartIcon.style.color = "red";
    }   else {
        "";
    }
}
heartIcon.onmousedown = function favorite(event) {
    event.preventDefault();
    event.stopPropagation();
    
    console.log(event);
}


