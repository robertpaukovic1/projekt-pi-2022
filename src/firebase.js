
import firebase from "firebase/compat/app";

import "firebase/compat/auth";

import "firebase/compat/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDENUDslcFNl4Z0jfI9hZyd9-CdYJy_kLE",
    authDomain: "projekt-740f3.firebaseapp.com",
    projectId: "projekt-740f3",
    storageBucket: "projekt-740f3.appspot.com",
    messagingSenderId: "176526597864",
    appId: "1:176526597864:web:9cdff0923a86ece969f35d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase }

