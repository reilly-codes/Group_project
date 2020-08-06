var category = ''
var itemName = ''
var price = 0
var qty = 0
var addItem = document.getElementById("addItem");

//get category
function getCategory() {
    category = document.getElementById("category[]").value;
    console.log(category);
}

//get item name 
function getItem() {
    itemName = document.getElementById("itemName").value;
    console.log(itemName);
}

//get pprice
function getPrice() {
    price = document.getElementById("price").value;
    console.log(price);
}

// get qty
function getQty() {
    qty = document.getElementById("qty").value;
    console.log(qty);
}

//calculate total


//function reset
function formReset() {
    document.querySelector("form").reset();
}

//display list item
function display() {
    let rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row");
    let colOne = document.createElement("div");
    colOne.setAttribute("class", "col-md-3");
    let colTwo = document.createElement("div");
    colTwo.setAttribute("class", "col-md-3");
    let colThree = document.createElement("div");
    colThree.setAttribute("class", "col-md-2");
    let colFour = document.createElement("div");
    colFour.setAttribute("class", "col-md-2");
    let colFive = document.createElement("div");
    colFive.setAttribute("class", "col-md-1");
    let colSix = document.createElement("div");
    colSix.setAttribute("class", "col-md-1");

    let boughtItem = document.createElement("button");
    boughtItem.setAttribute("class", "finished");
    boughtItem.appendChild(document.createTextNode("Bought"));
    boughtItem.addEventListener("click", function boughtItem() {
        rowDiv.classList.add("bought")
    });   
    let removeItem = document.createElement("button");
    removeItem.setAttribute("class", "remove"); 
    removeItem.appendChild(document.createTextNode("Remove"));
    removeItem.addEventListener("click", function removeItem() {
        rowDiv.remove();
    });   

    document.querySelector(".output").appendChild(rowDiv);
    
     //append row with items
     rowDiv.appendChild(colSix);
     rowDiv.insertBefore(colFive, colSix);
     rowDiv.insertBefore(colFour, colFive);
     rowDiv.insertBefore(colThree, colFour);
     rowDiv.insertBefore(colTwo, colThree);
     rowDiv.insertBefore(colOne, colTwo);

    //append text for the divs
    colOne.appendChild(document.createTextNode(category));
    colTwo.appendChild(document.createTextNode(itemName));
    colThree.appendChild(document.createTextNode(price));
    colFour.appendChild(document.createTextNode(qty));
    colFive.appendChild(boughtItem);
    colSix.appendChild(removeItem);
}
addItem.addEventListener("click", function add(event){
    event.preventDefault();
    getCategory();
    getItem();
    getPrice();
    getQty();
    display();
    formReset();
});