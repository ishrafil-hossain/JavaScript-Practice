// function addStyle(){
//     var myVar = document.querySelector("#paraId");
//     myVar.style.color = "red";
//     myVar.style.fontSize = "3rem";
//     myVar.style.fontStyle = "italic";
//     myVar.style.fontWeight = "bold";

// }

var myVar = document.querySelector("#paraId");
function addStyle(){
    myVar.classList.add("para-style"); //add css class
}

function removeStyle(){
    myVar.classList.remove("para-style");
}