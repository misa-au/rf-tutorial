import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyAvRG3UH9kwEqUK97DV4xJ0j5ZfLfpRO5s",
    authDomain: "rf-demo-38088.firebaseapp.com",
    databaseURL: "https://rf-demo-38088.firebaseio.com",
    projectId: "rf-demo-38088",
    storageBucket: "rf-demo-38088.appspot.com",
    messagingSenderId: "805140614976"
};
var fire = firebase.initializeApp(config);
export default fire;