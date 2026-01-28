const usernameInput = document.getElementById("email");
// When the input is invalid
let errorMessage = document.getElementById("errorMessage");
//valid email is required
usernameInput.addEventListener("invalid", function () {
if (usernameInput.value === "") {
    errorMessage.style.display = "inline";
    usernameInput.setCustomValidity("");
} else {
    usernameInput.setCustomValidity(""); // reset message
}
});

// Reset message when user types
usernameInput.addEventListener("input", function () {
usernameInput.setCustomValidity("");
});
