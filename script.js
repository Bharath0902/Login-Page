// Simple signup logic 
function signup() {
    const username = document.getElementById("signup-username").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    if (username && email && password) {
        // Storing user data in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert("Signup successful! You can now login.");
        window.location.href = 'login.html';  // Redirect to login page
    } else {
        alert("Please fill in all fields.");
    }
}

// Simple login logic
function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    // Retrieving stored data from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        window.location.href = 'Main.html';  // Redirect to main page
    } else {
        alert("Invalid username or password.");
    }
}
