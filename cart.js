document.addEventListener('DOMContentLoaded', function () {
    updateCart();

    document.getElementById('checkout').addEventListener('click', function () {
        localStorage.removeItem('cart');
        updateCart();
        window.location.href = 'checkout/checkout.html';
    });
});

function updateCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Update cart count
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    }

    // Cart display logic
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    if (cartItemsContainer && cartTotalElement) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `<p>Your cart is empty.</p>`;
            cartTotalElement.textContent = '0.00';
            return;
        }

        cartItemsContainer.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <p><strong>${item.name}</strong> (${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}</p>
                <button class="decrease-qty" data-index="${index}">-</button>
                <span>${item.quantity}</span>
                <button class="increase-qty" data-index="${index}">+</button>
                <button class="remove-item" data-index="${index}">Remove</button>
            </div>
        `).join('');

        const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        cartTotalElement.textContent = cartTotal.toFixed(2);

        attachCartEventListeners();
    }
}

function attachCartEventListeners() {
    document.querySelectorAll('.increase-qty').forEach(button => {
        button.addEventListener('click', function () {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const index = this.getAttribute('data-index');
            cart[index].quantity += 1;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        });
    });

    document.querySelectorAll('.decrease-qty').forEach(button => {
        button.addEventListener('click', function () {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const index = this.getAttribute('data-index');
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            } else {
                cart.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        });
    });

    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function () {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const index = this.getAttribute('data-index');
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        });
    });
}
