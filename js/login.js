/* LOGIN */

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (isAdmin(email, password)) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loggedInUserEmail', email);
        window.location.href = '/html/admin/UsersManageView.html';
    } else {
        checkUserLogin(email, password);
    }
});

function checkUserLogin(email, password) {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];
    const user = storedFormData.find(user => user.email === email);
    const errorPasswordMessage = document.getElementById('error-pwd');
    const errorEmailMessage = document.getElementById('error-email');

    if (user && user.password === password) {
        localStorage.setItem('nameUser', user.name);
        localStorage.setItem('userRole', 'user');
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loggedInUserEmail', email);
        window.location.href = '/html/user/AboutView.html';
    } else if (user) {
        errorPasswordMessage.textContent = 'Password incorreta, tente novamanete';
        localStorage.setItem('isLoggedIn', 'false');
        loginClearForm();
    } else {
        errorEmailMessage.textContent = 'Email não encontrado';
        localStorage.setItem('isLoggedIn', 'false');
        loginClearForm();
    }

}

function isAdmin(email, password) {
    const adminCredentials = {
        email: 'admin@gmail.com',
        password: 'admin12345'
    };

    if (email === adminCredentials.email && password === adminCredentials.password) {
        localStorage.setItem('userRole', 'admin');
        localStorage.setItem('loggedInUserEmail', email);
        return true;
    }
    return false;
}


function loginClearForm() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}

