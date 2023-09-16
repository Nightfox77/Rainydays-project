const url = 'https://nightfox.no/rainydaysapi/wp-json/wc/v3/products?consumer_key=ck_6f6fb37f3760365a43e38bcdea0e14ba027d1121&consumer_secret=cs_7c0d52fe8532c05eabbcfbf9dd689e7db1a06170';
const grid = document.querySelector(".productgrid");
async function getApi() {
    try {
        
        const loaderDiv = document.createElement("div");
        loaderDiv.classList.add("loader");
        grid.appendChild(loaderDiv);
        const spinnerDiv = document.createElement("div");
        spinnerDiv.classList.add("spinner");
        loaderDiv.appendChild(spinnerDiv);
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        loaderDiv.style.display = "none";

        for ( let x = 0; x < result.length; x++) {
            const categories = result[x].categories;
                if( categories[0].name === "Men") {
                const containerDiv = document.createElement("div");
                containerDiv.setAttribute("id", "link");
                containerDiv.setAttribute("data-id", result[x].id);
                containerDiv.classList.add("product-container");
                grid.appendChild(containerDiv);
                
                const imageDiv = document.createElement("div");
                imageDiv.classList.add("product-pic");
                const imageElement = document.createElement("img");
                imageDiv.appendChild(imageElement);     
                containerDiv.appendChild(imageDiv);
                
                const name = result[x].name;
                const price = result[x].price;
                const attributes = result[x].attributes;
                const images = result[x].images;
                const infoDiv = document.createElement("div");
                infoDiv.classList.add("info");
                containerDiv.appendChild(infoDiv);
                
                const heartDiv = document.createElement("div");
                heartDiv.classList.add("heart");
                const heartIcon = document.createElement("i");
                heartIcon.classList.add("fa-solid", "fa-heart", "fa-xl")
                heartDiv.appendChild(heartIcon);
                infoDiv.appendChild(heartDiv);

                const nameParagraph = document.createElement("p");
                nameParagraph.classList.add("product-name");
                infoDiv.appendChild(nameParagraph);
                nameParagraph.textContent = name;
                
                const salesPrice = document.createElement("p");
                salesPrice.classList.add("product-price", "red");
                infoDiv.appendChild(salesPrice);
                
                const regularPrice = document.createElement("P");
                regularPrice.classList.add("product-price");
                regularPrice.setAttribute("id", "oldprice");
                infoDiv.appendChild(regularPrice);

                const starsDiv = document.createElement("div");
                starsDiv.classList.add("product-stars");
                containerDiv.appendChild(starsDiv);
                
                
                for (let y = 0; y < images.length; y++) {
                    imageElement.src = images[y].src;
                    imageElement.alt = images[y].name;
                    
                } 
                for (let j = 0; j < attributes.length; j++) {
                    const optionsName = attributes[j].name;
                    
                    if (optionsName === "old price") {
                        const options = attributes[j].options;
                            
                                const newPrice = options[0];
                                regularPrice.textContent = "$" +" "+ newPrice;
                                regularPrice.style.textDecoration = "line-through";
                            
                    }
                    if (!attributes.some(attr => attr.name === "old price")) {
                        regularPrice.textContent = "$" + " " + price;
                        regularPrice.style.textDecoration = "none";
                    }    
                    if (result[x].on_sale) {
                        
                        salesPrice.textContent = "$" +" "+ price;
                    }
                    if (optionsName === "rating") {
                        const rating = attributes[j].options;
                        const ratingValue = rating[0];
                        const starParagraph = document.createElement("p");
                        
                        displayRating(ratingValue, starsDiv);
                        starsDiv.appendChild(starParagraph);
                        displayRatingValue(ratingValue, starParagraph);
                    }
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



 
