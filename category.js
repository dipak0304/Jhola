/*function searchCategories() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let categories = document.querySelectorAll(".category");

    categories.forEach(function(category) {
        if (category.innerText.toLowerCase().includes(input)) {
            category.style.display = "block";
        } else {
            category.style.display = "none";
        }
    });
}
function showProducts(category) {
    let productDisplay = document.getElementById('productDisplay');
    productDisplay.innerHTML = ''; // Clear previous products

    // Product details
    let products = {
        mobiles: [
            { image: 'mobile/mbl1.jpg', title: 'Iphone 15 pro max 256GB' , price:'232,499.00'} ,
            { image: 'mobile/mbl2.jpg', title: 'Samusumg Galaxy S24 Ultra', price: '184,999.00' },
            { image: 'mobile/mbl3.jpg', title: 'Redmi Note 14 Pro 5G', price: '39,999.00' },
            { image: 'mobile/mbl4.jpg', title: 'Nothing 2a(8/128GB)', price: '45,999.00' }
        ],
        watches: [
            { image: 'watch/w1.jpg', title: 'Smart Watch', price: '4,499.00' },
            { image: 'watch/w2.jpg', title: 'D13 Smart Watch', price: '3,999.00' },
            { image: 'watch/w3.png', title: 'Ultima Watch Circle', price: '3,977.00' },
            { image: 'glasses/g1.jpg', title: 'Metal Frame Cut Hexagonal', price: '1099.00' },
            { image: 'glasses/b1.jpg', title: 'Barca Chain' , price: '9,999.00' },
            { image: 'glasses/b22.jpg', title: 'Barca Energy Diamond Chain' , price: '99,999.00' },
            { image: 'girls/b1.jpg', title: 'Shiny Earings', price: '299.00' },
            { image: 'girls/b2.jpg', title: ' Butterfly Shiny Earing ', price: '299.00' },
            { image: 'girls/b3.jpg', title:'Butterfly Shiny Earing' , price: '249.00' },
            { image: 'girls/b4.jpg', title: 'Multi color hair tie' , price: '149.00' },
            { image: 'girls/b5.jpg', title:'Golden Necklace' , price: '499.00' },
            { image: 'girls/b6.jpg', title: 'Golden Necklace' , price: '599.00' }

        ],
        mensClothes: [
            { image: 'img/products/prod1.png', title: 'Lymio Casual Shirts', price: '1800' },
            { image: 'shirts/s1.jpg', title: 'Classic Suit', price: ' 15000' },
            { image: 'shirt2.jpg', title: 'Casu', price: 'NRP 5000' }
        ],
        shoes: [
            { image: 'shoes/s1.jpg', title: 'Air Force', price: '4,999.00' },
            { image: 'shoes/s2.jpg', title: 'Jordan 4 Retro', price: '5,999.00' },
            { image: 'shoes/s2.jpg', title: 'Casual Pair', price: '2,999.00' },
            { image: 'shoes/s1.jpg', title: 'Air Force', price: '4,999.00' },
            { image: 'shoes/s2.jpg', title: 'Jordan 4 Retro', price: '5,999.00' },
            { image: 'shoes/s2.jpg', title: 'Casual Pair', price: '2,999.00' }

        ],
        womensClothes: [
            { image: 'girls/s1.jpg', title: 'Bridal Sari', price: '3,999.00' },
            { image: 'girls/s2.jpg', title: 'Red Sari', price: ' 5,999.00' },
            { image: 'girls/s3.jpg', title: 'Cotton Sari', price: '5,599.00' }
        ],
       
    };

    // Check if category exists
    if (products[category]) {
        products[category].forEach(product => {
            let productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p class="texx">NPR ${product.price}</p>
                <!-- Removed 'Price:' label -->
            
                
                 <a href="#"><i class="fal fa-shopping-cart cart buy-button" ></i></a>

            `;

            productDisplay.appendChild(productCard);
        });
    }
}*/
/*function searchCategories() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let categories = document.querySelectorAll(".category");

    categories.forEach(function(category) {
        if (category.innerText.toLowerCase().includes(input)) {
            category.style.display = "block";
        } else {
            category.style.display = "none";
        }
    });
}

function showProducts(category) {
    let productDisplay = document.getElementById('productDisplay');
    productDisplay.innerHTML = ''; // Clear previous products

    // Product details
    let products = {
        mobiles: [
            { image: 'mobile/mbl1.jpg', title: 'Iphone 15 pro max 256GB' , price:'232,499.00'} ,
            { image: 'mobile/mbl2.jpg', title: 'Samusumg Galaxy S24 Ultra', price: '184,999.00' },
            { image: 'mobile/mbl3.jpg', title: 'Redmi Note 14 Pro 5G', price: '39,999.00' },
            { image: 'mobile/mbl4.jpg', title: 'Nothing 2a(8/128GB)', price: '45,999.00' }
        ],
        watches: [
            { image: 'watch/w1.jpg', title: 'Smart Watch', price: '4,499.00' },
            { image: 'watch/w2.jpg', title: 'D13 Smart Watch', price: '3,999.00' },
            { image: 'watch/w3.png', title: 'Ultima Watch Circle', price: '3,977.00' },
            { image: 'glasses/g1.jpg', title: 'Metal Frame Cut Hexagonal', price: '1099.00' },
            { image: 'glasses/b1.jpg', title: 'Barca Chain' , price: '9,999.00' },
            { image: 'glasses/b22.jpg', title: 'Barca Energy Diamond Chain' , price: '99,999.00' },
            { image: 'girls/b1.jpg', title: 'Shiny Earings', price: '299.00' },
            { image: 'girls/b2.jpg', title: ' Butterfly Shiny Earing ', price: '299.00' },
            { image: 'girls/b3.jpg', title:'Butterfly Shiny Earing' , price: '249.00' },
            { image: 'girls/b4.jpg', title: 'Multi color hair tie' , price: '149.00' },
            { image: 'girls/b5.jpg', title:'Golden Necklace' , price: '499.00' },
            { image: 'girls/b6.jpg', title: 'Golden Necklace' , price: '599.00' }
        ],
        mensClothes: [
            { image: 'img/products/prod1.png', title: 'Lymio Casual Shirts', price: '1800' },
            { image: 'shirts/s1.jpg', title: 'Classic Suit', price: ' 15000' },
            { image: 'shirt2.jpg', title: 'Casu', price: 'NRP 5000' }
        ],
        shoes: [
            { image: 'shoes/s1.jpg', title: 'Air Force', price: '4,999.00' },
            { image: 'shoes/s2.jpg', title: 'Jordan 4 Retro', price: '5,999.00' },
            { image: 'shoes/s2.jpg', title: 'Casual Pair', price: '2,999.00' },
            { image: 'shoes/s1.jpg', title: 'Air Force', price: '4,999.00' },
            { image: 'shoes/s2.jpg', title: 'Jordan 4 Retro', price: '5,999.00' },
            { image: 'shoes/s2.jpg', title: 'Casual Pair', price: '2,999.00' }
        ],
        womensClothes: [
            { image: 'girls/s1.jpg', title: 'Bridal Sari', price: '3,999.00' },
            { image: 'girls/s2.jpg', title: 'Red Sari', price: ' 5,999.00' },
            { image: 'girls/s3.jpg', title: 'Cotton Sari', price: '5,599.00' }
        ],
    };

    // Check if category exists
    if (products[category]) {
        products[category].forEach(product => {
            let productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}" onclick="openProductPage('${product.image}', '${product.title}', '${product.price}')">
                <h2>${product.title}</h2>
                <p class="texx">NPR ${product.price}</p>
                <!-- Removed 'Price:' label -->
                <a href="#"><i class="fal fa-shopping-cart cart buy-button" ></i></a>
            `;

            productDisplay.appendChild(productCard);
        });
    }
}

// Function to open the product page when an image is clicked
function openProductPage(image, title, price) {
    // Store product data in sessionStorage or pass as URL params
    sessionStorage.setItem("productImage", image);
    sessionStorage.setItem("productTitle", title);
    sessionStorage.setItem("productPrice", price);
    window.location.href = 'sproduct.html'; // Redirect to dd.html page
}*/
function searchCategories() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let categories = document.querySelectorAll(".category");

    categories.forEach(function(category) {
        if (category.innerText.toLowerCase().includes(input)) {
            category.style.display = "block";
        } else {
            category.style.display = "none";
        }
    });
}

function showProducts(category) {
    let productDisplay = document.getElementById('productDisplay');
    productDisplay.innerHTML = ''; // Clear previous products

    // Product details
    let products = {
        mobiles: [
            { image: 'mobile/i1.png', title: 'Iphone 16 pro max 256GB', price: '232,499.00', page: 'ip15.html' },
            { image: 'mobile/s1.png', title: 'Samusumg Galaxy S24 Ultra', price: '184,999.00', page: 's24.html' },
            { image: 'mobile/mbl3.jpg', title: 'Redmi Note 14 Pro 5G', price: '39,999.00', page: 'ddd.html' },
            { image: 'mobile/mbl4.jpg', title: 'Nothing 2a (8/128GB)', price: '45,999.00', page: 'sproduct.html' }
        ],
        watches: [
            { image: 'watch/w1.jpg', title: 'Smart Watch', price: '4,499.00', page: 'dd.html' },
            { image: 'watch/w2.jpg', title: 'D13 Smart Watch', price: '3,999.00', page: 'sproduct.html' },
            { image: 'watch/w3.png', title: 'Ultima Watch Circle', price: '3,977.00', page: 'ddd.html' },
            { image: 'glasses/g1.jpg', title: 'Metal Frame Cut Hexagonal', price: '1,099.00' },
            { image: 'glasses/b1.jpg', title: 'Barca Chain' , price: '9,999.00' },
            { image: 'glasses/b22.jpg', title: 'Barca Energy Diamond Chain' , price: '99,999.00' },
            { image: 'girls/ar1.jpg', title: 'Shiny Earings', price: '299.00' },
            { image: 'girls/ar2.jpg', title: '14K Gold Dangle Drop Hoop Earrings ', price: '2,999.00' },
            { image: 'girls/a3.jpg', title:'22K Gold Earrings' , price: '5,999.00' },
            { image: 'girls/ar4.jpg', title: '24K Gold Earrings' , price: '11,549.00' },
            { image: 'girls/ar5.jpg', title:'Butterfly Necklaces' , price: '7,499.00' },
            { image: 'girls/ar6.jpg', title: 'AiliFe Gold Cubic Zirconia Butterfly Necklace' , price: '2,599.00' },
            { image: 'girls/ar7.jpg', title: 'Dainty Butterfly Gold Plated ' , price: '1,549.00' },
            { image: 'girls/ar8.jpg', title:'Gold Plated Butterfly ' , price: '2,799.00' },
            { image: 'girls/ar9.jpg', title: 'Gold Plated Necklace' , price: '3,199.00' }
        ],
        womensClothes: [
           
           
            
        ],
        shoes: [
            { image: 'shoes/air1.jpg', title: 'Air Force 1', price: '4,999.00' },
            { image: 'shoes/jd4.jpg', title: 'Jordan 4 Retro', price: '7,999.00' },
            { image: 'shoes/jd3.jpg', title: 'Jordan 3', price: '8,999.00' },
            { image: 'shoes/aa1.jpg', title: 'Unisex UA SlipSpeed™', price: '3,999.00' },
            { image: 'shoes/aa2.jpg', title: 'Nike Winflo 11', price: '15,999.00' },
            { image: 'shoes/aa3.jpg', title: 'ADIDAS MUNCHEN 24', price: '11,999.00' }

        ],
        mensClothes: [
            { image: 'img/products/prod1.png', title: 'Lymio Casual Shirts', price: '1,800.00' },
            { image: 'shirts/s1.jpg', title: 'Light Blue Cotton', price: ' 3,000.00' },
            { image: 'shirts/s2.jpg', title: 'MSJUHEG Blazer Suit', price: '15,000.00' },
            { image: 'shirts/s4.jpg', title: 'Heritage Shirt Jacket', price: '4,999.00' },
            { image: 'shirts/s5.jpg', title: 'Long Sleeve Shirt', price: '2,000' },
            { image: 'shirts/s3.jpg', title: 'Thicken Cotton Jacket ', price: '19,199.00' }
        ],
        footballjersey: [
            { image: 'img/products/ars1.jpg', title: 'Arsenal Home Jersey', price: '5,599.00' },
            { image: 'img/products/barca1.png', title: 'Barca Home Jersey', price: '5,499.00',page: 'barca.html' },
            { image: 'img/products/ch1.jpg', title: 'Chelsea Home Jersey', price: '5,999.00' },
            { image: 'img/products/mc1.jpg', title: 'Manchester City Home Jersey', price: '5,499.00' },
            { image: 'img/products/rm2.jpg', title: 'Real Madrid Home Jersey', price: '4,499.00' },
            { image: 'img/products/mu.jpg', title: 'Manchester United Home Jersey', price: '4,999.00' },

        ],
       
        // Add more product categories here as needed
    };

    // Check if category exists
    if (products[category]) {
        products[category].forEach(product => {
            let productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}" onclick="openProductPage('${product.image}', '${product.title}', '${product.price}', '${product.page}')">
                <h2>${product.title}</h2>
                <p class="texx">NPR ${product.price}</p>
                <!-- Removed 'Price:' label -->
                <a href="#"><i class="fal fa-shopping-cart cart buy-button" ></i></a>
            `;

            productDisplay.appendChild(productCard);
        });
    }
}

// Function to open the appropriate product page when an image is clicked
function openProductPage(image, title, price, page) {
    // Store product data in sessionStorage
    sessionStorage.setItem("productImage", image);
    sessionStorage.setItem("productTitle", title);
    sessionStorage.setItem("productPrice", price);

    // Redirect to the appropriate page
    window.location.href = page;
}

//sproduct


 
 // Select the main image
 let mainImage = document.getElementById("MainImage");

 // Select all small images
 let smallImages = document.querySelectorAll(".small-img");
 
 // Loop through all small images and add click event
 smallImages.forEach(img => {
     img.addEventListener("click", function () {
         mainImage.src = this.src; // Update main image with clicked image
     });
 });
 
 // Select all product images (for redirection)
 let productImages = document.querySelectorAll(".pro img");
 
 // Loop through all product images and add a click event for redirection
 productImages.forEach((img, index) => {
     img.addEventListener("click", function () {
         // Redirect to different pages based on the clicked product image
         switch(index) {
             case 0:
                 window.location.href = "sproduct.html";  // Redirect to sproduct.html
                 break;
             case 1:
                 window.location.href = "dd.html";  // Redirect to dd.html
                 break;
             case 2:
                 window.location.href = "ddd.html";  // Redirect to ddd.html
                 break;
             case 3:
                 window.location.href = "default.html";  // Redirect to default.html for 4th product
                 break;
             default:
                 window.location.href = "default.html";  // Default page redirection
                 break;
         }
     });
 });
 
 