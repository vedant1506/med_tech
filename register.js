import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjqrv80zEoWDaEGe9STuHijYeO2mMZ3O0",
    authDomain: "neurotech-haven.firebaseapp.com",
    projectId: "neurotech-haven",
    storageBucket: "neurotech-haven.appspot.com", // Fixed typo: "firebasestorage.app" → "appspot.com"
    messagingSenderId: "239242066260",
    appId: "1:239242066260:web:d1ac756b0600ef8b0f30c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Define auth

// Get submit button
const submit = document.getElementById('create_button');

submit.addEventListener("click", function (event) {
    event.preventDefault();

    // Get input values inside the event listener
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            alert("Account created successfully!");
            console.log("User:", user);
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
            console.error("Error:", errorMessage);
        });
});
