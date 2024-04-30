let logoutButton = document.getElementById('logoutButton')

function handleLogout() {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('userRole');
    window.location.href = '/html/LoginVieW.html';
}

logoutButton.addEventListener('click', handleLogout);