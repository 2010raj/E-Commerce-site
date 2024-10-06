document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (validateForm(username, password)) {
            console.log("Form Submitted");
            // Redirect to index.html after validation
            window.location.href = "index.html";
        }
    });

    function validateForm(username, password) {
        if (username.trim() === "" || password.trim() === "") {
            alert("Please fill in both fields.");
            return false;
        }
        return true;
    }
});
