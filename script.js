document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve input values and trim whitespace
        const usernameInput = document.getElementById('username').value.trim();
        const emailInput = document.getElementById('email').value.trim();
        const passwordInput = document.getElementById('password').value.trim();

        // Initialize validation variables
        let isValid = true;
        const messages = [];

        // Username validation
        if (usernameInput.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email validation
        if (!emailInput.includes('@') || !emailInput.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Password validation
        if (passwordInput.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Display feedback
        feedbackDiv.style.display = 'block';
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
        }
    });
});