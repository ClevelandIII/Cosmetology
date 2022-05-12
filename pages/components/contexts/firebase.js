import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD7Y3W1KFS-uCsM3W2x2ZXQpnou5uOkpQQ",
    authDomain: "auth-document.firebaseapp.com",
    projectId: "auth-document",
    storageBucket: "auth-document.appspot.com",
    messagingSenderId: "687390637692",
    appId: "1:687390637692:web:3ee0bcd2c14a7a8b2e53f9"
  };
  
  const app = initializeApp(firebaseConfig);
export default app
