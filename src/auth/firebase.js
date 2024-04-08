// firebase-auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";


// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBSKb7zmWCn4GGdwmmPJM1xZif_pk8-j5M",
    authDomain: "alusmart-e65a1.firebaseapp.com",
    projectId: "alusmart-e65a1",
    storageBucket: "alusmart-e65a1.appspot.com",
    messagingSenderId: "624493076221",
    appId: "1:624493076221:web:827bc4c640d646b7d9a894",
    measurementId: "G-38G7Y0E0RW"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;