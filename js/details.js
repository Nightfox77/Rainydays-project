function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
const productId = getQueryParam("id");
const apiUrl = `https://nightfox.no/rainydaysapi/wp-json/wc/v3/products/${productId}?consumer_key=ck_6f6fb37f3760365a43e38bcdea0e14ba027d1121&consumer_secret=cs_7c0d52fe8532c05eabbcfbf9dd689e7db1a06170`;

const grid = document.querySelector(".productgrid.detail");
async function getApi() {
    try {
        
                const loaderDiv = document.createElement("div");
                loaderDiv.classList.add("loader");
                grid.appendChild(loaderDiv);
                const spinnerDiv = document.createElement("div");
                spinnerDiv.classList.add("spinner");
                loaderDiv.appendChild(spinnerDiv);
                
                const response = await fetch(apiUrl);
                const result = await response.json();
                console.log(result);
                loaderDiv.style.display = "none";

                const name = result.name;
                const headline = document.querySelector(".headline");
                headline.innerHTML = `<h1>${name}</h1>`;
    
                const imageElement = document.querySelector("#jacketPic");

                const newPrice = result.price;
                const description = result.description;
                const attributes = result.attributes;
                const image = result.images;

                
                for (let y = 0; y < image.length; y++) {
                    imageElement.src = image[y].src;
                    imageElement.alt = image[y].name;
                    
                } 
                const productDescription = document.querySelector(".product-description");
                productDescription.innerHTML = description;
                
                const regularPrice = document.querySelector("#oldprice");
                regularPrice.textContent = "$"+ " "+newPrice;
                const salesPrice = document.querySelector(".product-price.red");
                const starsDiv = document.querySelector(".product-stars");
                const colorDiv = document.querySelector(".row.colors .selection");
                const sizeSelection = document.querySelector(".row.sizes .selection");

                for (let j = 0; j < attributes.length; j++) {
                    const optionsName = attributes[j].name;
                    
                    if (optionsName === "rating") {
                        
                        const rating = attributes[j].options;
                        const ratingValue = rating[0];
                        const starParagraph = document.createElement("p");
                        
                        displayRating(ratingValue, starsDiv);
                        starsDiv.appendChild(starParagraph);
                        displayRatingValue(ratingValue, starParagraph);
                    }
                    if (optionsName === "color") {
                        const colors = attributes[j].options;
                        colors.forEach((color) => {
                            const colorElement = document.createElement("div");
                            colorElement.classList.add("colorbox");
                            colorDiv.appendChild(colorElement);
                            colorElement.style.backgroundColor = color;
                        }
                    )}
                    
                    if (optionsName === "size") {
                        const sizes = attributes[j].options;
                        sizes.forEach((size) => {
                            const selectionDiv = document.createElement("div");
                            selectionDiv.classList.add("sizebox");
                            sizeSelection.appendChild(selectionDiv);
                            selectionDiv.innerHTML = size;
                        }
                    )}
                    if (optionsName === "old price") {
                        const options = attributes[j].options;
                            if (options && options.length > 0) {
                                const oldPrice = options[0];
                                regularPrice.textContent = "$"+ " " + oldPrice;
                                salesPrice.textContent = "$" + " " + newPrice;
                                regularPrice.style.textDecoration = "line-through";
                            } else {
                                
                                regularPrice.style.textDecoration = "none";
                    } 
                    } 
                }   
            }     
catch(error) {
console.log("Ups!!!")
}
finally {
console.log("Success!!!!")
}
}
getApi();
const cart = document.querySelector("#cart");   
const cartOverlay = document.querySelector(".overlay");
document.addEventListener("DOMContentLoaded", function () {

    document.body.addEventListener("click", function (event) {
        const target = event.target;

        
        if (target.classList.contains("button")) {
            cart.style.color = "#3FA115";
            cartOverlay.style.display = "block";
        } else if (target.classList.contains("colorbox")) {
            const colorBoxes = document.querySelectorAll(".colorbox");
            colorBoxes.forEach(function (box) {
                box.classList.remove("selected");
            });
            target.classList.add("selected");
        } else if (target.classList.contains("sizebox") || target.parentElement.classList.contains("sizebox")) {
            const sizeBoxes = document.querySelectorAll(".sizebox");
            sizeBoxes.forEach(function (box) {
                box.classList.remove("selectedsize");
            });
            const sizeBox = target.classList.contains("sizebox") ? target : target.parentElement;
            sizeBox.classList.add("selectedsize");
        }
    });
})

function checkSelections() {
    const button = document.querySelector(".btns .button");
    const hasSelected = document.querySelector(".selected");
    const hasSelectedSize = document.querySelector(".selectedsize");

  if (hasSelected && hasSelectedSize) {
    button.disabled = false;
    console.log("works 1");
  } else {
    console.log("works 2");
  }
}
document.body.addEventListener("click", function (event) {
    const target = event.target;
  
    if (target.classList.contains("colorbox")) {
      toggleSelection(target);
      checkSelections();
    } else if (target.classList.contains("sizebox")) {
      toggleSizeSelection(target);
      checkSelections();
    }
  });
function toggleSelection(element) {
    if (element.classList.contains("selected")) {
      element.classList.remove("selected");
    } else {
      element.classList.add("selected");
    }
  }
  
function toggleSizeSelection(element) {
    if (element.classList.contains("selectedsize")) {
      element.classList.remove("selectedsize");
    } else {
      element.classList.add("selectedsize");
    }
  }
  
checkSelections();


let price;
const shoppingCart = document.querySelector(".shoppingCart");
const overlay = document.querySelector(".overlay");
shoppingCart.addEventListener("click", function makeUrl() {
    console.log("check");
    if (getComputedStyle(overlay).display === "block") {
        console.log("hurra")
        const selectedColor = document.querySelector(".selected");
        const color = selectedColor.style.backgroundColor;

        const selectedsize = document.querySelector(".selectedsize");
        const size = selectedsize.textContent;
        
        
        const regularPrice = document.querySelector("#oldprice");
        console.log(regularPrice.textContent);
        
        const salesPrice = document.querySelector(".product-price.red");
        console.log(salesPrice.textContent);
        
        
        
        if(salesPrice.length > 0) {
            price = salesPrice.textContent;
        } else {
            price = regularPrice.textContent;
        }
        
        price = price.replace(/\$/g,'').trim();
        console.log("price:", price);
        const url = `cart.html?id=${productId}&color=${color}&size=${size}&price=${price}`;
        
        window.location.href = url;
        
    } else {
        return;
    }
})






  











































































