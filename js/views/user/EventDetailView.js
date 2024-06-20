
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = parseInt(urlParams.get('id'), 10);
    const storedEvents = JSON.parse(localStorage.getItem('event')) || [];
    const event = storedEvents.find(event => event.id === eventId);

    if (event) {
        const eventDetailContainer = document.getElementById('eventDetailContainer');
        const eventDetailHTML = `
     <div class="row event-card">
            <div class="col-md-8">
                <h1 class="event-title">${event.title}</h1>
                <p class="event-description">
                    ${event.text}
                </p>
            </div>
            <div class="col-md-4 d-flex align-items-center">
                <img src="${event.img}" alt="Plug-in Image" class="img-fluid">
            </div>
        </div>
        `;
        eventDetailContainer.innerHTML = eventDetailHTML;
    } else {
        eventDetailContainer.innerHTML = '<p>Evento não encontrado.</p>';
    }

