document.addEventListener("DOMContentLoaded", function () {
    const cartCount = document.getElementById("cart-count");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    // Load cart from localStorage or initialize empty
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCartDisplay() {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }

    updateCartDisplay(); // Set initial cart count

    function handleAddToCart(button) {
        const name = button.getAttribute("data-name");
        const price = parseFloat(button.getAttribute("data-price"));

        // Check if item already exists in cart
        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        // Save updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();

        // Feedback
        button.textContent = "Added!";
        button.disabled = true;

        setTimeout(() => {
            button.textContent = "Add to Cart";
            button.disabled = false;
        }, 1000);
    }

    addToCartButtons.forEach(button => {
        // Click event (desktop + mobile)
        button.addEventListener("click", () => handleAddToCart(button));

        // Fallback for some mobile devices (touchstart/pointerup)
        button.addEventListener("touchstart", () => handleAddToCart(button));
        button.addEventListener("pointerup", () => handleAddToCart(button));
    });

    // Debug: Confirm script loaded
    console.log("Cart script loaded and ready.");
});
