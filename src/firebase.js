import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyDgQRZpMOYkuFsyFF6TtH2RHKQ0qkAWR2g",
    authDomain: "geo-location-vue-project-cce0b.firebaseapp.com",
    databaseURL: "https://geo-location-vue-project-cce0b.firebaseio.com",
    projectId: "geo-location-vue-project-cce0b",
    storageBucket: "geo-location-vue-project-cce0b.appspot.com",
    messagingSenderId: "595370681981",
    appId: "1:595370681981:web:d5dc335139e0bf20"
};
// Initialize Firebase
const fb=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore()

export {fb,db}