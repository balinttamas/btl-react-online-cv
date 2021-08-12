import firebase from "firebase";

var firebaseLog = firebase.initializeApp({
    apiKey: "AIzaSyDv24UX9HhQ5ERrxnEJL0aDTjzgdRNZgME",
    authDomain: "login-fe1a1.firebaseapp.com",
    databaseURL: "https://login-fe1a1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "login-fe1a1",
    storageBucket: "login-fe1a1.appspot.com",
    messagingSenderId: "792127728047",
    appId: "1:792127728047:web:482d45f19255090740275a"
}, "database");

var db = firebaseLog.firestore();

export { db };