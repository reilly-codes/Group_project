  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBLinxxMUvxTqRyye-z9MVHhUpYKxHTjqw",
    authDomain: "shopping-list-d33a8.firebaseapp.com",
    databaseURL: "https://shopping-list-d33a8.firebaseio.com",
    projectId: "shopping-list-d33a8",
    storageBucket: "shopping-list-d33a8.appspot.com",
    messagingSenderId: "247425796518",
    appId: "1:247425796518:web:fbdfb6bd70ae843ab5a767",
    measurementId: "G-H0XKKX47YC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db = firebase.firestore();
  var auth = firebase.auth();