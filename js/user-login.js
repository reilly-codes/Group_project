//login

document.getElementById("loginbtn").addEventListener("click", function signup(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
});

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location.href = 'create-list.html'
    } 
});