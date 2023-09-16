function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
const productId = getQueryParam("id");
const colorValue = getQueryParam("color");
const sizeValue = getQueryParam("size");
const priceValue = getQueryParam("price");
const count = document.querySelector("#itemCount");
const apiUrl = `https://nightfox.no/rainydaysapi/wp-json/wc/v3/products/${productId}?consumer_key=ck_6f6fb37f3760365a43e38bcdea0e14ba027d1121&consumer_secret=cs_7c0d52fe8532c05eabbcfbf9dd689e7db1a06170`;

const cartDiv = document.querySelector("#shoppingCart");
const emptyDiv = document.querySelector("#emptyCart");
async function getApi() {
    try{
            const loaderDiv = document.createElement("div");
            loaderDiv.classList.add("loader");
            cartDiv.appendChild(loaderDiv);
            const spinnerDiv = document.createElement("div");
            spinnerDiv.classList.add("spinner");
            loaderDiv.appendChild(spinnerDiv);
                
            const response = await fetch(apiUrl);
            const result = await response.json();
            console.log(result);
            loaderDiv.style.display = "none";

            
            if (!productId) {
                cartDiv.style.display = "none";
                emptyDiv.style.display = "flex";
            } else {
                count.innerHTML = "1";
                const image = document.querySelector(".product-pic img");
                const imageInfo = result.images;
            for (let y = 0; y < imageInfo.length; y++) {
                image.src = imageInfo[y].src;
                image.alt = imageInfo[y].name;
            }   
                const productName = document.querySelector(".product-name");
                productName.innerHTML = result.name;

                const productColor = document.querySelector("#color");
                productColor.innerHTML = productColor.innerHTML + " "+ colorValue;

                const productSize = document.querySelector("#size");
                productSize.innerHTML = productSize.innerHTML +" "+ sizeValue;

                const productPrice = document.querySelector("#price");
                productPrice.innerHTML = priceValue;
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
/* handles the remove link in the shoppingcart */
const price = document.querySelector("#price");
const selectElement = document.querySelector(".select");

const grid = document.querySelector(".productgrid.cart");

const emptyCart = document.querySelector("#emptyCart");
const shoppingCart = document.querySelector("#shoppingCart");


grid.addEventListener("click" ,function showEmpty(event) {
    
    const target = event.target;
    if (target.classList.contains("fa-trash")) {
        console.log("checky")    
    event.preventDefault();
    shoppingCart.style.display = "none";
    emptyCart.style.display = "flex";
    count.innerHTML = "";
    count.innerHTML = "0";
    }
})  

/* calculates the price by multiplying with selected quantity */
shoppingCart.addEventListener("change", function showprice(event) {
    const target = event.target;
    if(target.id === "select") {
        
        let selectValue = target.value;
        console.log(selectValue);
        price.innerHTML = "";
        price.innerHTML = priceValue*selectValue;
    }
})  