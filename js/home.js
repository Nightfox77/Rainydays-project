
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
   
  
const searchIcon = document.querySelector("#searchicon");
const searchBar = document.querySelector(".searchbar");

searchIcon.onclick = function search() {
    if (searchBar.style.display === "flex") {
        searchBar.style.display = "none";
    } else {
        searchBar.style.display = "flex";
    }
}



function displayRating(ratingValue, starsDiv) {
    const wholeStar = `<i class="fa-solid fa-star"></i>`;
    const emptyStar = `<i class="fa-regular fa-star"></i>`;
    const halfStar = `<i class="fa-solid fa-star-half-stroke"></i>`;
    let htmlStars = ``;
    const roundedRating = Math.floor(ratingValue);
    const hasHalfStar = ratingValue - roundedRating >= 0.25;
    for (let i = 0; i < 5; i++) {
        if (i < roundedRating) {
            htmlStars += wholeStar;
        } else if (i === roundedRating && hasHalfStar) {
            htmlStars += halfStar;
        } else {
            htmlStars += emptyStar;
        }
    }
    starsDiv.innerHTML += htmlStars;
}
function displayRatingValue(ratingValue, starParagraph) {
    
    starParagraph.textContent += `(${ratingValue})`;
}

function setupHeartAndLink() {
    const grid = document.querySelector(".productgrid");
    grid.addEventListener("click", function (event) {
      const target = event.target;
        
      if (target.classList.contains("fa-heart")) {
        toggleHeartColor(target);
      } else {
        const container = (target.closest(".product-container"))
        
        if (container && !container.classList.contains("detail")) {
            const productId = container.dataset.id;
            console.log(productId)
            if (productId) {
              navigateToDetailsPage(productId);
            }
      }
    }});
  
    function toggleHeartColor(heartIcon) {
      if (heartIcon.style.color === "red") {
        heartIcon.style.color = "";
      } else {
        heartIcon.style.color = "red";
      }
    }
  
    function navigateToDetailsPage(productId) {
        // Construct the URL with the product ID
        const detailsUrl = `details.html?id=${productId}`;
    
        // Redirect to the details URL
        window.location.href = detailsUrl;
  }
}
setupHeartAndLink();


  
  
  
  
      
