// Predefined username and password
const users = {
    "jon_snow": "winterfell",
    "daenerys": "dragonqueen",
    "tyrion": "wineandwisdom"
};

function checkLogin(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (users[username] && users[username] === password) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "home.html";
    } else {
        document.getElementById("error-message").innerText = "Incorrect Username or Password!";
    }
}

// Check if user is logged in before accessing pages
if (window.location.pathname !== "/index.html" && !localStorage.getItem("loggedInUser")) {
    window.location.href = "index.html";
}