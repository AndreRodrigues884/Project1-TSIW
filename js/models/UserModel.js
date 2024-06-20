

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

function updateButtonStatus() {
    let loginStatus = localStorage.getItem('isLoggedIn');
    let loginButton = document.getElementById('loginButton');
    let logoutButton = document.getElementById('logoutButton');
    let editIcon = document.getElementById('editIcon');

    if (loginStatus === 'true') {
        loginButton.style.display = 'none';
        logoutButton.style.display = 'block';
        editIcon.style.display = 'block';
    } else {
        loginButton.style.display = 'block';
        logoutButton.style.display = 'none';
        editIcon.style.display = 'none';
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

    let loginButton = document.getElementById('loginButton');
    let logoutButton = document.getElementById('logoutButton');
    
    loginButton.addEventListener('click', function () {
        window.location.href = '/html/LoginView.html';
    });

    logoutButton.addEventListener('click', handleLogout);

    updateButtonStatus();
    userMessage();