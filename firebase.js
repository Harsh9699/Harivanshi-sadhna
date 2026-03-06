import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAb0xwt31jRcL4J5e3SyJOQznMqBdrab3U",
  authDomain: "harivanshi-sadhna.firebaseapp.com",
  projectId: "harivanshi-sadhna",
  storageBucket: "harivanshi-sadhna.firebasestorage.app",
  messagingSenderId: "441888438716",
  appId: "1:441888438716:web:6167ecf717821e4767d3b9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
