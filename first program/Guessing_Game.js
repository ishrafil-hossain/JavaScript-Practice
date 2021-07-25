for(var i = 0; i<5; i++){
    var num1 = parseInt(prompt("Enter your guessing number from 1 to 5 : "));
    var num2 = Math.floor(Math.random()*5+1);
    
    if(num1==num2){
        console.log("You are win");
    }
    else
        console.log("You are loss," + "the guessing number was : "+num2);
}

