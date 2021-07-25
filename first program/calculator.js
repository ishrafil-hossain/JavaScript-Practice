var a = parseInt(prompt("Enter the first number : "));
var b = parseInt(prompt("Enter the second number : "));

function addition(x,y){

    var result = x + y;
    document.write("The addition is : "+result +"</br>");
}

function subtraction(x,y){

    var result = x - y;
    document.write("The subtraction is : "+result+"</br>");
}

function multiplication(x,y){

    var result = x * y;
    document.write("The multiplication is : "+result+"</br>");
}

function division(x,y){

    var result = x / y;
    document.write("The division is : "+result+"</br>");
}

function modulas(x,y){

    var result = x % y;
    document.write("The modulas is : "+result+"</br>");
}

addition(a,b);
subtraction(40,10);
multiplication(5,6);
division(a,b);
modulas(50,30);


