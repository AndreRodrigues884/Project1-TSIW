let data = JSON.parse(localStorage.getItem('alumni')) || [];
    
    function loadDataIntoModal(index) {
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
        let alumniCard = document.getElementById("alumniCard");
        alumniCard.innerHTML = '';
       
        let cardsPerSlide = 3;

        let numberOfSlides = Math.ceil(data.length / cardsPerSlide);

        for (let i = 0; i < numberOfSlides; i++) {
            let carouselItem = document.createElement("div");
            carouselItem.className = 'carousel-item' + (i === 0 ? ' active' : '');

            let rowDiv = document.createElement("div");
            rowDiv.className = 'row justify-content-center';

            for (let j = 0; j < cardsPerSlide; j++) {
                let cardIndex = i * cardsPerSlide + j;
                if (cardIndex >= data.length) break;

                let item = data[cardIndex];
                let cardDiv = document.createElement("div");
                cardDiv.className = 'col-12 col-md-3 d-flex justify-content-center';
                cardDiv.innerHTML = `
                <div class="card d-flex justify-content-center bc-alumni">
                    <img src="${item.img}" class="card-img-top rounded-circle img-fluid p-4" style="width: 300px; height: 300px;">
                    <div class="card-body">
                        <h5 class="card-title d-flex justify-content-center text-white">${item.title}</h5>
                    </div>
                    <div class="p-4 d-flex justify-content-center">
                        <button class="btn btn-primary p-2 w-100 purple border-0" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver</button>
                    </div>
                </div>
            `;
                rowDiv.appendChild(cardDiv);

                let button = cardDiv.querySelector("button");
                button.addEventListener("click", function () {
                    loadDataIntoModal(cardIndex);
                });
            }

            carouselItem.appendChild(rowDiv);
            alumniCard.appendChild(carouselItem);
        }
    }

    loadAlumniCard();
