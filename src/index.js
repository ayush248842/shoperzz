import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBfwSQnO19osHxLd6RrOBIwsBP8T5hnWTk",
    authDomain: "shoperzz-e4d9f.firebaseapp.com",
    projectId: "shoperzz-e4d9f",
    storageBucket: "shoperzz-e4d9f.appspot.com",
    messagingSenderId: "803105914809",
    appId: "1:803105914809:web:c9cc411143bdd02a724068"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
