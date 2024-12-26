// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUO5c-1RSGpGspdAStcGmrEVb0qD0FbnU",
    authDomain: "emsd-cef45.firebaseapp.com",
    databaseURL: "https://emsd-cef45-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "emsd-cef45",
    storageBucket: "emsd-cef45.appspot.com",
    messagingSenderId: "573007211940",
    appId: "1:573007211940:web:651a9d8785eb14a0ea2531"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Export functions for use in other files
export {
    database,
    ref,
    set,
    onValue
};
