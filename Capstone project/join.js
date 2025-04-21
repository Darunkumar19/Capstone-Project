document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    // Clear inputs on load
    nameInput.value = "";
    emailInput.value = "";

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default submission

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        // Name validation: only letters (allow spaces)
        const namePattern = /^[A-Za-z\s]+$/;
        if (!namePattern.test(name)) {
            alert("Please enter a valid name using letters only.");
            return;
        }

        // Email validation (standard pattern)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Success message and redirect
        let countdown = 3;
        form.innerHTML = `<h2>You have successfully joined the one piece community!</h2>
                          <p>Redirecting to home page in <span id="timer">${countdown}</span> seconds...</p>`;

        const interval = setInterval(function () {
            countdown--;
            document.getElementById("timer").textContent = countdown;

            if (countdown === 0) {
                clearInterval(interval);
                window.location.href = "main.html";
            }
        }, 1000);
    });
});
