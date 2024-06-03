document.addEventListener('DOMContentLoaded', function () {

    function loadDataIntoModal(index) {
        let data = JSON.parse(localStorage.getItem('alumni')) || [];

        let modalCard = document.getElementById("modal-card");
        modalCard.innerHTML = '';

        if (index >= 0 && index < data.length) {
            let item = data[index];

            let cardDiv = document.createElement("div");
            cardDiv.classList.add("card", "m-2");
            cardDiv.innerHTML = `
            <img src="${item.img}" class="card-img-top rounded-circle p-4 w-50">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.text}</p>
            </div>
            <p class="card-date">${item.date}</p> <!-- Mostra a data -->
        `;
            modalCard.appendChild(cardDiv);
        }
    }


    function loadAlumniCard() {
        let data = JSON.parse(localStorage.getItem('alumni')) || [];
        let alumniCard = document.getElementById("alumniCard");
        alumniCard.innerHTML = '';
        data.forEach(function (item, index) {
            let cardDiv = document.createElement("div");
            cardDiv.className = 'col-12 col-md-3 d-flex justify-content-center';
            cardDiv.innerHTML = `
            <div class="card d-flex justify-content-center">
                <img src="${item.img}" class="card-img-top rounded-circle img-fluid p-4" style="width: 200px; height: 200px;">
                <div class="card-body">
                    <h5 class="card-title d-flex justify-content-center">${item.title}</h5>
                </div>
            <div class="p-4 d-flex justify-content-center">
                <button class="btn btn-primary p-2 w-100 purple border-0" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver</button>
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
});