document.addEventListener('DOMContentLoaded', function () {
    function loadAlumniCard() {
        let data = JSON.parse(localStorage.getItem('alumni')) || [];
        let alumniCard = document.getElementById("alumniCard");
        alumniCard.innerHTML = '';
        data.slice(0, 3).forEach(function (item, index) {
            let cardDiv = document.createElement("div");
            cardDiv.classList.add("card", "m-3");
            cardDiv.innerHTML = `
            <div class="card d-flex">
                <img src="${item.img}" class="card-img-top rounded-circle img-fluid p-2" style="width: 400px; height: 300px;">
                <div class="card-body">
                    <h5 class="card-title d-flex justify-content-center">${item.title}</h5>
                </div>
            <div class="p-2 d-flex justify-content-center">
                <a href='/html/user/AlumniView.html' class="w-100"><button class="btn btn-primary w-100 purple border-0">Ver Testemunhos</button></a>
            </div>
            </div>
        `;
            alumniCard.appendChild(cardDiv);

            let button = cardDiv.querySelector("button");
            button.addEventListener("click", function () {
                loadDataIntoModal(index);
            });
        })
    }

    loadAlumniCard();

    function loadEventCard() {
        let data = JSON.parse(localStorage.getItem('event')) || [];
        let eventCard = document.getElementById("eventCard");
        eventCard.innerHTML = '';
        data.slice(0, 3).forEach(function (item, index) {
            let cardDiv = document.createElement("div");
            cardDiv.classList.add("card", "m-3");
            cardDiv.innerHTML = `
            <div class="card d-flex">
                <img src="${item.img}" class="card-img-top img-fluid p-2" style="width: 500px; height: auto;">
            <div class="p-2 d-flex justify-content-center">
                <a href='/html/user/EventsView.html' class="w-100"><button class="btn btn-primary w-100 purple border-0">Ver Eventos</button></a>
            </div>
            </div>
        `;
        eventCard.appendChild(cardDiv);

            let button = cardDiv.querySelector("button");
            button.addEventListener("click", function () {
                loadDataIntoModal(index);
            });
        })
    }

    loadEventCard();
});