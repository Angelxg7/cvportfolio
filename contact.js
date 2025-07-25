var firebaseConfig = {
    apiKey: "AIzaSyDxVbW9ljZT02TmJ4Ejv0D2K_eduCed7Ns",
    authDomain: "forms-database-32b15.firebaseapp.com",
    projectId: "forms-database-32b15",
    storageBucket: "forms-database-32b15.appspot.com",
    messagingSenderId: "107612375462",
    appId: "1:107612375462:web:0d8da55408eeb2366b2767"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


// contact data//

const contactForm = document.querySelector(".contact-form");
const nombre = document.querySelector(".nombre");
const tel = document.querySelector(".tel");
const email = document.querySelector(".email");
const asunto = document.querySelector(".asunto");
const mensaje = document.querySelector(".mensaje");
const submit = document.querySelector(".submit-form");
const modal = document.querySelector(".modal-wrap");
const close = document.querySelector(".modal-close");

submit.addEventListener('click', (e) => {
	e.preventDefault();
	db.collection('contact-form').doc().set({
		nombre: nombre.value,
		tel: tel.value,
		email: email.value,
		asunto: asunto.value,
		mensaje: mensaje.value,
	}).then(() => {
		contactForm.reset();
		modal.classList.toggle("display-none");
	});
});

close.addEventListener('click', () => {
	modal.classList.toggle("display-none");
})
