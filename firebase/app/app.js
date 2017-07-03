/* Aquí va todo lo chido */
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBmWoICpcMV-mHw2QRYFjcd0xRxXzuPfZg",
    authDomain: "front-674d5.firebaseapp.com",
    databaseURL: "https://front-674d5.firebaseio.com",
    projectId: "front-674d5",
    storageBucket: "",
    messagingSenderId: "1089291748570"
  };
  firebase.initializeApp(config);

//Obtener los Elementos

const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');

btnLogin.addEventListener('click', e => {
  const email = txtEmail.value;
  const password = txtPassword.value;
  const auth = firebase.auth();

  const promise = auth.signInWithEmailAndPassword(email, password);
  promise.catch( e => console.log(e));
});

btnSignUp.addEventListener('click', e => {
  const email = txtEmail.value;
  const password = txtPassword.value;
  const auth = firebase.auth();

  const promise = auth.createUserWithEmailAndPassword(email, password);
  promise.catch( e => console.log(e));
});

firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser){
    console.log(firebaseUser);
    btnLogout.classList.remove('hide');
  } else {
    console.log('no hay sesion activa');
    btnLogout.classList.add('hide');
  }
});

// logout
btnLogout.addEventListener('click', e => {
  firebase.auth().signOut();
})
