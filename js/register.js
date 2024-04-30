/* REGISTO */

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const sex = document.getElementById('sex').value;
    const location = document.getElementById('location').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const formData = {
        name: name,
        dob: dob,
        sex: sex,
        location: location,
        email: email,
        password: password
    };
    checkUserRegister(formData);

});

function checkUserRegister(formData) {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];
    const emailExists = storedFormData.some(user => user.email === formData.email);

    if (emailExists) {
        console.log('User Already Created');
    } else {
        storedFormData.push(formData);
        localStorage.setItem('formData', JSON.stringify(storedFormData));
        window.location.href = '/html/LoginView.html';
    }
    registerClearForm();
}

function registerClearForm() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("name").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("sex").value = "";
    document.getElementById("location").value = "";
} 