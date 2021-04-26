import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCiJM4oXusl71BPLP0ViIGub-_mlVQTS1M",
    authDomain: "disneyplus-clone-cec31.firebaseapp.com",
    projectId: "disneyplus-clone-cec31",
    storageBucket: "disneyplus-clone-cec31.appspot.com",
    messagingSenderId: "1019101786853",
    appId: "1:1019101786853:web:b21ec042e95e1968891a0c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;