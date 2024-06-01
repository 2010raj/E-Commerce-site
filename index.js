document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (validateForm(username, password)) {
            console.log("Form Submitted");
            // Add your login logic here (e.g., AJAX request to the server)
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
