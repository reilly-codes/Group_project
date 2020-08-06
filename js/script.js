function addToCart(category, product, price, quantity) {
    var user = auth.currentUser;
    db.collection("cart").add({
        userId: user.uid,
        category: category,
        product: product,
        price: parseInt(price),
        quantity: parseInt(quantity)
    })
    .then(function(docRef) {
        console.log("Document successfully written! " + docRef.id);
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}

// function getFromCart(category, product, price, quantity) {
//     var user = auth.currentUser;
//     db.collection("cart").onSnapshot(function(querySnapshot) {
//         var cart = {
//             userId: user.uid,
//             category: category,
//             product: product,
//             price: parseInt(price),
//             quantity: parseInt(quantity)
//         };
//         querySnapshot.forEach(function(doc) {
//             cart.push(doc.data().name);
//         });
//         console.log("Current cities in CA: ", cart.join(", "));
//     });
// }  