
    const storedEvents = JSON.parse(localStorage.getItem('event')) || [];
    const eventsContainer = document.getElementById('eventsContainer');

    storedEvents.forEach(event => {
        const eventHTML = `
       <a href="/html/user/EventDetailView.html?id=${event.id}">
            <div class="card card-custom mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="${event.img}" alt="Imagem" class="w-100 p-4">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${event.title}</h5>
                        </div>
                    </div>
                </div>
            </div>
        <a/>              
        `;
        eventsContainer.innerHTML += eventHTML;
    });
