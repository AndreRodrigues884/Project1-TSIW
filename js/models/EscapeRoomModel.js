class EscapeRoom {
    constructor(modalId) {
        this.modalId = modalId;
        this.modalInstance = new bootstrap.Modal(document.getElementById(this.modalId));
        this.objects = Array.from(document.querySelectorAll('.group-2 img'));
        this.tvObjects = Array.from(document.querySelectorAll('.pc-group img'));
        this.clickedObjectId = null;
        this.changedImagesCount = 0;
        this.counterDisplay = document.getElementById('counter');
        this.fiveMinutes = 60 *1.5;
        this.questions = [];
        this.usedQuestions = new Set();
        this.loadQuestionsFromStorage();
        this.modalWinElement = document.getElementById('modalWin');
        this.modalLoseElement = document.getElementById('modalLose');
        this.prizeEscapeRoomDiv = document.getElementById('prizeEscapeRoom');

        this.objects.forEach(object => {
            object.addEventListener('click', () => {
                this.handleObjectClick(object.id);
                console.log(object.id);
            });
        });
        this.startCounter(this.fiveMinutes, this.counterDisplay, () => {
            this.openModalLose();
            localStorage.setItem('hasWonEscapeRoom', 'false');
        });

        if (this.modalWinElement) {
            this.modalWin = new bootstrap.Modal(this.modalWinElement);
        } else {
            console.error('Elemento com ID modalWin não encontrado');
        }

        if (this.modalLoseElement) {
            this.modalLose = new bootstrap.Modal(this.modalLoseElement);
        } else {
            console.error('Elemento com ID modalWin não encontrado');
        }

    }

    loadQuestionsFromStorage() {
        const storedQuestions = JSON.parse(localStorage.getItem('questions')) || [];
        this.questions = [...storedQuestions];
    }

    inactiveObject(objectId) {
        document.getElementById(objectId).classList.add('inactive-object');
    }

    activeObject(objectId) {
        document.getElementById(objectId).classList.add('active-object');
    }

    openModalWin() {
        if (this.modalWin) {
            this.modalWin.show();
        } else {
            console.error('modalWin não foi inicializado corretamente');
        }
    }

    openModalLose() {
        if (this.modalLose) {
            this.modalLose.show();
        } else {
            console.error('modalLose não foi inicializado corretamente');
        }
    }

    handleObjectClick(objectId) {
        let availableQuestions = this.questions.filter(question => !this.usedQuestions.has(question.question));

        let randomIndex = Math.floor(Math.random() * availableQuestions.length);
        let randomQuestion = availableQuestions[randomIndex];

        this.updateModalContent(randomQuestion);

        this.showModal();

        this.clickedObjectId = objectId;
    }

    updateModalContent(questionObj) {
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <div>${questionObj.question}</div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="goodAnswer">
                <label class="form-check-label" for="goodAnswer">${questionObj.goodAnswer}</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="badAnswer">
                <label class="form-check-label" for="badAnswer">${questionObj.badAnswer}</label>
            </div>
        `;
    }

    showModal() {
        this.modalInstance.show();
    }

    hideModal() {
        this.modalInstance.hide();
    }

    verifyAnswer() {
        let isGoodAnswer = document.getElementById('goodAnswer').checked;
        let isBadAnswer = document.getElementById('badAnswer').checked;

        if (isGoodAnswer && !isBadAnswer) {
            alert('Resposta correta!');
            this.inactiveObject(this.clickedObjectId);
            this.changeTVImage(this.clickedObjectId);
            this.changedImagesCount++;
            this.usedQuestions.add(this.questions.find(q => q.question === document.getElementById('modalBody').getElementsByTagName('div')[0].innerHTML).question);

            if (this.changedImagesCount === this.tvObjects.length - 1) {
                this.openModalWin();
                localStorage.setItem('hasWonEscapeRoom', 'true');
            }
        } else {
            alert('Resposta errada!');
        }
        this.hideModal();
    }

    changeTVImage(objectId) {
        switch (objectId) {
            case 'object1':
                document.getElementById('tv-1').src = "/img/tv1_check.png";
                break;
            case 'object3':
                document.getElementById('tv-2').src = "/img/tv2_check.png";
                break;
            case 'object4':
                document.getElementById('tv-3').src = "/img/tv3_check.png";
                break;
            case 'object5':
                document.getElementById('tv-4').src = "/img/tv4_check.png";
                document.getElementById('tv-5').src = "/img/tv5_check.png";
                break;
            case 'object6':
                document.getElementById('tv-6').src = "/img/tv6_check.png";
                break;
            case 'object7':
                document.getElementById('tv-7').src = "/img/tv7_check.png";
                break;
            default:
                break;
        }
    }

    startCounter(duration, display, callback) {
        let timer = duration, minutes, seconds;
        const intervalId = setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(intervalId);
                callback();
            }
        }, 1000);
    }
}

export default EscapeRoom;
