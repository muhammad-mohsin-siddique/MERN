// script.js

// Load product data from JSON file
fetch('products.json')
    .then(response => response.json())
    .then(products => {
        displayProducts(products);
    });

let cart = [];

// Display products in the product grid
function displayProducts(products) {
    const productGrid = document.getElementById('product-grid');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <strong>$${product.price.toFixed(2)}</strong><br>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(productDiv);
    });
}

// Add product to cart
function addToCart(productId) {
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id === productId);
            const cartItem = cart.find(item => item.product.id === productId);

            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                cart.push({ product, quantity: 1 });
            }

            updateCart();
        });
}

// Update cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    const cartCount = document.getElementById('cart-count');
    cartItems.innerHTML = '';
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.product.name} - $${item.product.price.toFixed(2)} x ${item.quantity}
            <button onclick="removeFromCart(${item.product.id})">Remove</button>
        `;
        cartItems.appendChild(li);
        total += item.product.price * item.quantity;
        count += item.quantity;
    });

    totalAmount.textContent = total.toFixed(2);
    cartCount.textContent = count;
}

// Remove item from cart
function removeFromCart(productId) {
    const cartItemIndex = cart.findIndex(item => item.product.id === productId);

    if (cartItemIndex > -1) {
        cart[cartItemIndex].quantity -= 1;

        if (cart[cartItemIndex].quantity <= 0) {
            cart.splice(cartItemIndex, 1);
        }

        updateCart();
    }
}

// Toggle cart visibility
document.getElementById('cart-toggle').addEventListener('click', () => {
    const cart = document.getElementById('cart');
    cart.style.right = cart.style.right === '0px' ? '-300px' : '0px';
});

document.getElementById('close-cart').addEventListener('click', () => {
    const cart = document.getElementById('cart');
    cart.style.right = '-100%';
});

// Handle checkout
document.getElementById('checkout-button').addEventListener('click', () => {
    document.getElementById('checkout-form').style.display = 'block';
    const cart = document.getElementById('cart');
    cart.style.right = '-100%';
});

document.getElementById('user-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const userDetails = {
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
        email: document.getElementById('email').value
    };
    displayConfirmation(userDetails);
});

// Display order confirmation
function displayConfirmation(userDetails) {
    const confirmation = document.getElementById('confirmation');
    const orderDetails = document.getElementById('order-details');
    const confirmationTotal = document.getElementById('confirmation-total');
    
    orderDetails.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.product.name} - $${item.product.price.toFixed(2)} x ${item.quantity}`;
        orderDetails.appendChild(li);
        total += item.product.price * item.quantity;
    });

    confirmationTotal.textContent = total.toFixed(2);
    confirmation.style.display = 'block';
    document.getElementById('checkout-form').style.display = 'none';
    cart = [];
    updateCart();
}
