import Alpine from 'alpinejs'
import './style.css'

window.Alpine = Alpine
Alpine.start()

// Add event listners for connection errors

if (navigator.onLine) {
  document.querySelector('#netWarning').style.display = 'none'
}
else {
  document.querySelector('#netWarning').style.display = ''
}

window.addEventListener('offline', function(e) {
  console.log('offline');
  document.querySelector('#netWarning').style.display = ''
});

window.addEventListener('online', function(e) {
  console.log('online');
  document.querySelector('#netWarning').style.display = 'none'
});


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env['apiKey'],
  authDomain: "todoapp-56c5a.firebaseapp.com",
  projectId: "todoapp-56c5a",
  storageBucket: "todoapp-56c5a.appspot.com",
  messagingSenderId: "932926933534",
  appId: "1:932926933534:web:5f32fd57de43d7d749bc0f",
  measurementId: "G-25YW4FBH96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);