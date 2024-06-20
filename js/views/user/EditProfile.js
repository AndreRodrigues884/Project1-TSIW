const isLoggedIn = localStorage.getItem('isLoggedIn');
const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];
const hasWonEscapeRoom =  localStorage.getItem('hasWonEscapeRoom')

if (isLoggedIn === 'true') {
    const userData = storedFormData.find(user => user.email === loggedInUserEmail);
    if (userData) {
        document.getElementById('name').value = userData.name;
        document.getElementById('dob').value = userData.dob;
        document.getElementById('sex').value = userData.sex;
        document.getElementById('location').value = userData.location;
        document.getElementById('email').value = userData.email;
    }
}

const prizeEscapeRoomImg = document.getElementById('prizeEscapeRoom');
if (hasWonEscapeRoom === 'true') {
    prizeEscapeRoomImg.style.display = 'block';
} else {
    prizeEscapeRoomImg.style.display = 'none';
}

const confirmEdit = document.getElementById('confirmEdit');
confirmEdit.addEventListener('click', function () {
    const newName = document.getElementById('name').value;
    const newDob = document.getElementById('dob').value;
    const newSex = document.getElementById('sex').value;
    const newLocation = document.getElementById('location').value;
    const newEmail = document.getElementById('email').value;

    // Atualizar os dados do user na localStorage
    const updatedFormData = storedFormData.map(user => {
        if (user.email === loggedInUserEmail) {
            return {
                name: newName,
                dob: newDob,
                sex: newSex,
                location: newLocation,
                email: newEmail,
            };
        }
        return user;
    });

    localStorage.setItem('formData', JSON.stringify(updatedFormData));
    localStorage.setItem('nameUser', newName);
    localStorage.setItem('loggedInUserEmail', newEmail);

    window.location.href = '/html/user/AboutView.html';
});