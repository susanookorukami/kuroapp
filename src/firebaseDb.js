import firebase from 'firebase/app';
import 'firebase/firestore';


    const firebaseConfig = {
        apiKey: "AIzaSyDIVBx90rtGMMduzK34xyy4C2e2HAFgVbw",
        authDomain: "kuro-327b4.firebaseapp.com",
        projectId: "kuro-327b4",
        storageBucket: "kuro-327b4.appspot.com",
        messagingSenderId: "452351276806",
        appId: "1:452351276806:web:6424b383ff1e8f47979087"
    }


const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();