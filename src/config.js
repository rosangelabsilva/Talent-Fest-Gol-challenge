import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD5RU-p13vPu5kE49Ayln5OkME06qmwfV4",
    authDomain: "gol-talent.firebaseapp.com",
    databaseURL: "https://gol-talent.firebaseio.com",
    projectId: "gol-talent",
    storageBucket: "gol-talent.appspot.com",
    messagingSenderId: "152501459959",
    appId: "1:152501459959:web:de2294b9f462a2141eecf2",
    measurementId: "G-SDH23MQDV0"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();