const loginButton = document.getElementById('google-login');
if (loginButton) {
    loginButton.addEventListener('click', () => {
        window.location.href = '/login';
    });
}
