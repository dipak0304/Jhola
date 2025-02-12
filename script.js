// Select the "Add to Cart" button
let addToCartButton = document.querySelector(".normal");

// Select the product details
let productTitle = document.querySelector("h4"); // Assuming this contains the product title
let productPrice = document.querySelector("h2"); // Assuming this contains the product price
let productSize = document.querySelector("select"); // Select dropdown for size
let productQuantity = document.querySelector("input"); // Input field for quantity
let mainImage = document.getElementById("MainImage");

// Function to add product to the cart
function addToCart() {
    let product = {
        title: productTitle.textContent,
        price: productPrice.textContent,
        size: productSize.value,
        quantity: productQuantity.value,
        image: mainImage.src
    };

    // Get existing cart from localStorage or initialize an empty array if not present
    let storedCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new product to the cart
    storedCart.push(product);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(storedCart));

    // Display a message confirming the product was added to the cart
    alert(`${product.title} has been added to your cart.`);
}

// Add an event listener to the "Add to Cart" button
addToCartButton.addEventListener("click", addToCart);

// Function to display the cart on the cart page
function displayCart() {
    // Get the cart data from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Get the table body where we will add cart items
    let cartTableBody = document.querySelector("#cart table tbody");

    // Clear any existing cart items in the table
    cartTableBody.innerHTML = '';

    let cartSubtotal = 0;

    // Loop through each cart item and add it to the table
    cart.forEach(item => {
        let row = document.createElement('tr');

        // Remove button
        let removeBtn = document.createElement('td');
        removeBtn.innerHTML = '<button class="remove-btn">Remove</button>';
        removeBtn.addEventListener('click', () => removeItemFromCart(item));
        row.appendChild(removeBtn);

        // Product image
        let productImage = document.createElement('td');
        productImage.innerHTML = `<img src="${item.image}" alt="${item.title}" width="50">`;
        row.appendChild(productImage);

        // Product name
        let productName = document.createElement('td');
        productName.textContent = item.title;
        row.appendChild(productName);

        // Product price
        let productPrice = document.createElement('td');
        productPrice.textContent = item.price;
        row.appendChild(productPrice);

        // Quantity
        let productQuantity = document.createElement('td');
        productQuantity.textContent = item.quantity;
        row.appendChild(productQuantity);

        // Subtotal
        let productSubtotal = document.createElement('td');
        let subtotal = parseFloat(item.price.replace('NPR ', '')) * item.quantity;
        productSubtotal.textContent = `NPR ${subtotal.toFixed(2)}`;
        row.appendChild(productSubtotal);

        // Add row to the table
        cartTableBody.appendChild(row);

        // Update the cart subtotal
        cartSubtotal += subtotal;
    });

    // Update the cart totals
    document.getElementById('cart-subtotal').textContent = cartSubtotal.toFixed(2);
    let shippingCost = 399;
    document.getElementById('cart-shipping').textContent = shippingCost;
    document.getElementById('cart-total').textContent = (cartSubtotal + shippingCost).toFixed(2);
}

// Function to remove an item from the cart
function removeItemFromCart(item) {
    // Get the current cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Remove the item from the cart
    cart = cart.filter(cartItem => cartItem.title !== item.title);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Refresh the cart display
    displayCart();
}

// Display the cart when the page loads
if (window.location.href.includes('cart.html')) {
    displayCart();
}


