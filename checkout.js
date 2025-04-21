// checkout.js

// Payment method selection
document.querySelectorAll('input[name="payment-method"]').forEach((input) => {
    input.addEventListener("change", function () {
        const upiDetails = document.getElementById("upi-details");
        const cardDetails = document.getElementById("card-details");

        upiDetails.style.display = "none";
        cardDetails.style.display = "none";

        if (this.value === "upi") {
            upiDetails.style.display = "block";
        } else if (this.value === "card") {
            cardDetails.style.display = "block";
        }
    });
});

// Handle form submission
document.getElementById("checkout-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("full-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const selectedPayment = document.querySelector('input[name="payment-method"]:checked');

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!fullName || !email || !address) {
        alert("Please fill in all required fields.");
        return;
    }

    if (!nameRegex.test(fullName)) {
        alert("Name should only contain letters and spaces.");
        return;
    }

    if (!selectedPayment) {
        alert("Please select a payment method.");
        return;
    }

    // Validate UPI ID if selected
    if (selectedPayment.value === "upi") {
        const upiId = document.getElementById("upi-id").value.trim();
        if (!upiId) {
            alert("Please enter your UPI ID.");
            return;
        }
    }

    // Validate Card details if selected
    if (selectedPayment.value === "card") {
        const cardNumber = document.getElementById("card-number").value.trim();
        const cardExpiry = document.getElementById("card-expiry").value.trim();
        const cardCVV = document.getElementById("card-cvv").value.trim();

        if (!cardNumber || !cardExpiry || !cardCVV) {
            alert("Please fill in all card details.");
            return;
        }
    }

    alert("Order placed successfully! Click OK to continue shopping.");
    localStorage.removeItem("cart");
    window.location.href = "merchandise.html";
});
