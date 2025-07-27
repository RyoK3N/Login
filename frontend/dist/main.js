"use strict";
var loginButton = document.getElementById('google-login');
if (loginButton) {
    loginButton.addEventListener('click', function () {
        window.location.href = '/login';
    });
}
