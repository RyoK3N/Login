const logoutButton = document.getElementById('logout');
if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        window.location.href = '/logout';
    });
}

// Display user info passed from server via template variable
const userInfoDiv = document.getElementById('user-info');
// If there is global variable injected via template
declare const user: any;
if (userInfoDiv && typeof user !== 'undefined') {
    userInfoDiv.textContent = `Logged in as ${user.name} (${user.email})`;
}
