db.collection("cart").doc().set({
    userId: user.uid,
    category: document.getElementById("category").value,
    product: document.getElementById("itemName").value,
    price: document.getElementById("price").value,
    quantity: document.getElementById("qty").value
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});