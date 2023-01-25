import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBX2c1Cob6eFMu9xFduW9cB8sgm--XS0N0",
    authDomain: "agronomy-abb73.firebaseapp.com",
    projectId: "agronomy-abb73",
    storageBucket: "agronomy-abb73.appspot.com",
    messagingSenderId: "282003879639",
    appId: "1:282003879639:web:ba2d0dc3040c299cafe292"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;