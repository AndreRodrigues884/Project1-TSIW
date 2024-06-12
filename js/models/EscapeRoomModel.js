class EscapeRoom {
    constructor(modalId) {
        this.modalId = modalId;
        this.modalInstance = new bootstrap.Modal(document.getElementById(this.modalId));
        this.objects = Array.from(document.querySelectorAll('.group-2 img'));
        this.tvObjects = Array.from(document.querySelectorAll('.pc-group img'));
        this.clickedObjectId = null;
        this.changedImagesCount = 0;
        this.counterDisplay = document.getElementById('counter');
        this.fiveMinutes = 60 * 3;
        this.objects.forEach(object => {
            object.addEventListener('click', () => {
                this.handleObjectClick(object);
            });
        });
        this.tvObjects.forEach(tv => {
            tv.addEventListener('click', () => {
                this.handleTVClick(tv);
            });
        });
        this.startCounter(this.fiveMinutes, this.counterDisplay, () => {
            alert('Você perdeu o jogo!');
            location.reload();
        });
    }

    handleObjectClick(object) {
        console.log('Objeto clicado:', object.id);
        this.clickedObjectId = object.id;
    }

    handleTVClick(tv) {
        console.log('TV clicada:', tv.id);
    }

    showModal() {
        this.modalInstance.show();
    }

    hideModal() {
        this.modalInstance.hide();
    }

    verifyAnswer() {
        let isBlueChecked = document.getElementById('checkBlue').checked;
        let isRedChecked = document.getElementById('checkRed').checked;

        if (isBlueChecked && !isRedChecked) {
            alert('Resposta correta!');
            if (this.clickedObjectId) { 
                this.changeTVImage(this.clickedObjectId); 
                this.changedImagesCount++; 
                if (this.changedImagesCount === this.tvObjects.length) { 
                    alert('Você ganhou o jogo!'); 
                    location.reload();
                }
            }
        } else {
            alert('Resposta errada! A resposta correta é Azul.');
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
