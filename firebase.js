// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Configurazione Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCRvOKf_zs1MttTMWdNBuWptMCbJxPtpH8",
    authDomain: "officialcfo-aiproject.firebaseapp.com",
    projectId: "officialcfo-aiproject",
    storageBucket: "officialcfo-aiproject.firebasestorage.app",
    messagingSenderId: "1045739520465",
    appId: "1:1045739520465:web:6b0f46454258e6bbdd20f0",
    measurementId: "G-E1DJ1L2JXP"
};

// Inizializzazione Firebase
const app = initializeApp(firebaseConfig);

// Autenticazione
const auth = getAuth(app);

// Provider Google
const provider = new GoogleAuthProvider();

// Funzione globale richiamata dal pulsante
window.loginWithGoogle = async function(){

    try{

        const result = await signInWithPopup(
            auth,
            provider
        );

        const user = result.user;

        console.log("Utente autenticato:", user);

        // Reindirizzamento alla home
        window.location.href = "home.html";

    }

    catch(error){

        console.error("Errore Google Login:", error);

        alert(
            "Errore durante l'accesso con Google"
        );

    }

};