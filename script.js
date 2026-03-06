import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// SIGNUP
const signupForm = document.getElementById("signup-form");

if(signupForm){
signupForm.addEventListener("submit", (e)=>{
e.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

createUserWithEmailAndPassword(auth,email,password)
.then((userCredential)=>{
alert("Account Created Successfully 🙏");
window.location.href="dashboard.html";
})
.catch((error)=>{
alert(error.message);
});

});
}



// LOGIN
const loginForm = document.getElementById("login-form");

if(loginForm){
loginForm.addEventListener("submit",(e)=>{
e.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

signInWithEmailAndPassword(auth,email,password)
.then((userCredential)=>{
alert("Login Successful 🙏");
window.location.href="dashboard.html";
})
.catch((error)=>{
alert(error.message);
});

});
}
