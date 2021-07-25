var len = document.querySelectorAll(".myButton").length;

for(var i = 0; i<len; i++){
    var myVar = document.querySelectorAll(".myButton")[i];
    myVar.addEventListener("click", function(){
    var text = this.innerHTML;
    var myTag = document.querySelector("h1");
    myTag.innerHTML = text + " is clicked";
    });
}
