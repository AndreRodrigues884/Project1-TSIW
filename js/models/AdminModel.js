let logoutButton = document.getElementById('logoutButton')

function handleLogout() {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('userRole');
    window.location.href = '/html/user/AboutView.html';
}

logoutButton.addEventListener('click', handleLogout);

function redirectToLogin() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn || isLoggedIn !== 'true') {
        window.location.href = '/html/LoginView.html';
    }
}

redirectToLogin()