import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDSWQ0gXfqOUGcmrcbPbSY-2tB7k_B96kQ",
    authDomain: "todoapplication-a8fba.firebaseapp.com",
    projectId: "todoapplication-a8fba",
    storageBucket: "todoapplication-a8fba.appspot.com",
    messagingSenderId: "924872504279",
    appId: "1:924872504279:web:9155fd9d2c62c943cad192"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
