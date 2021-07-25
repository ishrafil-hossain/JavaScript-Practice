for(var i = 0; i<3; i++){
    var myVar = document.querySelectorAll(".myButton")[i];
    myVar.addEventListener("click", function(){
        var text  = this.innerHTML;
        audioPlay(text);
        playAnimation(text);
    });
}
function audioPlay(text){
    switch(text){
        case "a":
            var audio  =  new Audio("");
            audio.play();
            break;
        
        case "b":
             var audio  =  new Audio("");
             audio.play();
             break;

        case "c":
            var audio  =  new Audio("");
             audio.play();
             break;
    }
}

function  playAnimation(text){
    var selectedButton = document.querySelector("."+text);
    selectedButton.classList.add("anim");

    setTimeout(function(){
        selectedButton.classList.remove("anim");
    },1000);
}