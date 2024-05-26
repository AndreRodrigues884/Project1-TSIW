document.addEventListener('DOMContentLoaded', function () {
    function loadFirstSection() {
        let data = JSON.parse(localStorage.getItem('firstSection')) || [];
        let firstSection = document.getElementById("firstSection");
        firstSection.innerHTML = '';
        data.forEach(function (section, index) {
            let sectionDiv = document.createElement("div");
            sectionDiv.innerHTML = `
            <div class="container p-4">
                <div class="row ${index % 2 === 0 ? 'flex-row-reverse' : ''}">
                    <div class="col-md-6 d-flex justify-content-center align-items-center">
                        <div>
                            <h2 class="card-title main-text-color">${section.title}</h2>
                            <h6 class="card-title sec-font sec-text-color mt-4">${section.text}</h6>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex justify-content-center align-items-center">
                        <img src="${section.img}" class="card-img-top img-fluid p-4">
                    </div>
                </div>
            </div>

        `;
            firstSection.appendChild(sectionDiv);

        })
    }

    loadFirstSection();

    function loadAlumniCard() {
        let data = JSON.parse(localStorage.getItem('alumni')) || [];
        let alumniCard = document.getElementById("alumniCard");
        alumniCard.innerHTML = '';
        data.slice(0, 3).forEach(function (item, index) {
            let cardDiv = document.createElement("div");
            cardDiv.classList.add("card", "m-3");
            cardDiv.innerHTML = `
            <div class="card d-flex">
                <img src="${item.img}" class="card-img-top rounded-circle img-fluid p-4" style="width: 200px; height: 200px;">
                <div class="card-body">
                    <h5 class="card-title d-flex justify-content-center">${item.title}</h5>
                </div>
            <div class="p-4 d-flex justify-content-center">
                <a href='/html/user/AlumniView.html'><button class="btn btn-primary p-2 w-100 purple border-0">Ver</button></a>
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