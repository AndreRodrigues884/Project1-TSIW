function escapeMessage() {
    let loginStatus = localStorage.getItem('isLoggedIn');
    let nameUser = localStorage.getItem('nameUser');
    let userRole = localStorage.getItem('userRole');
    let escapeMessage = document.getElementById('escapeMessage');

    if (escapeMessage) {
        if (userRole === 'user' && loginStatus === 'true') {
            escapeMessage.textContent += 'Bem-vindo ao Escape Room, ' + nameUser + '!';
        } else {
            escapeMessage.textContent += 'Precisa de iniciar sessão para participar neste Escape Room!';
            let loginButton = document.createElement('button');
            loginButton.textContent = 'Ir para Login';
            loginButton.addEventListener('click', function () {
                window.location.href = '/html/LoginView.html';
            });
            escapeMessage.appendChild(loginButton);
        }
    };
}

escapeMessage()