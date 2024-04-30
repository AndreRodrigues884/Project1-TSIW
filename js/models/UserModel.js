function userMessage() {
    let nameUser = localStorage.getItem('nameUser');
    let userRole = localStorage.getItem('userRole');
    let welcomeMessage = document.getElementById('welcomeMessage');

    if (welcomeMessage) {
        if (userRole === 'user') {
            welcomeMessage.textContent += 'Olá, ' + nameUser + '!';
        } else {
            console.log('User não encontrado');
        }
    };
}

let loginStatus = localStorage.getItem('isLoggedIn');
let login = document.getElementById('loginButton');
let logout = document.getElementById('logoutButton');

function updateButtonStatus() {
    if (loginStatus === 'true') {
        loginButton.style.display = 'none';
        logoutButton.style.display = 'block';
    } else {
        loginButton.style.display = 'block';
        logoutButton.style.display = 'none';
    }
}

function handleLogout() {
    logoutFunc();
    updateButtonStatus();
}

function logoutFunc() {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('nameUser');
    localStorage.removeItem('userRole');
    location.reload();
}

loginButton.addEventListener('click', function() {
    window.location.href = '/html/LoginView.html';
});

// Add event listener to the logout button
logoutButton.addEventListener('click', handleLogout);

updateButtonStatus();
userMessage();