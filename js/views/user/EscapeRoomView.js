import EscapeRoom from '../../models/EscapeRoomModel.js';

const object1 = document.getElementById('object1');
const object3 = document.getElementById('object3');
const object4 = document.getElementById('object4');
const object5 = document.getElementById('object5');
const object6 = document.getElementById('object6');
const object7 = document.getElementById('object7');
const btnVerify = document.getElementById('btnVerify');

const modalHandler = new EscapeRoom('modalQuestion');

let clickedObjectId;

object1.addEventListener('click', () => {
    clickedObjectId = 'object1';
    modalHandler.showModal();
});

object3.addEventListener('click', () => {
    clickedObjectId = 'object3';
    modalHandler.showModal();
});

object4.addEventListener('click', () => {
    clickedObjectId = 'object4';
    modalHandler.showModal();
});

object5.addEventListener('click', () => {
    clickedObjectId = 'object5';
    modalHandler.showModal();
});

object6.addEventListener('click', () => {
    clickedObjectId = 'object6';
    modalHandler.showModal();
});

object7.addEventListener('click', () => {
    clickedObjectId = 'object7';
    modalHandler.showModal();
});

object1.addEventListener('click', () => modalHandler.showModal());
object3.addEventListener('click', () => modalHandler.showModal());
object4.addEventListener('click', () => modalHandler.showModal());
object5.addEventListener('click', () => modalHandler.showModal());
object6.addEventListener('click', () => modalHandler.showModal());
object7.addEventListener('click', () => modalHandler.showModal());
btnVerify.addEventListener('click', () => modalHandler.verifyAnswer(clickedObjectId));




