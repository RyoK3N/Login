"use strict";
var logoutButton = document.getElementById('logout');
if (logoutButton) {
    logoutButton.addEventListener('click', function () {
        window.location.href = '/logout';
    });
}
// Display user info passed from server via template variable
var userInfoDiv = document.getElementById('user-info');
if (userInfoDiv && typeof user !== 'undefined') {
    userInfoDiv.textContent = "Logged in as ".concat(user.name, " (").concat(user.email, ")");
}
