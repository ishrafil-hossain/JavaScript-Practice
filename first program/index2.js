/*var firstName = prompt("Enter your first name : ");
var lastName = prompt(" Enter your last name : ");
var fullName = firstName + lastName;
document.write("My full name is : " + fullName + "</br>");
document.write("Total character length is : "+fullName.length + "</br>");
document.write(fullName.toUpperCase() + "</br>");
document.write(fullName.toLowerCase() + "</br>");
document.write(fullName.charAt(1));*/

/*var a = prompt("Enter your first number : ");
a = parseInt(a,10);

var b = prompt("Enter your second number : ");
b = parseInt(b,10);

var sum = a+b;
document.write(sum);*/

/*var fern = prompt("Enter fahrenheit : ");
var cel = (fern - 32 ) * (5/9);
document.write(cel);*/

//**** Even and Odd Programme

/*var n = prompt("Enter your number : ");
if(n%2==0)
document.write("even");
else
document.write("odd");*/

/*var num1 = prompt("Enter the first number : ");
var num2 = prompt("Enter the second number : ");
var num3 = prompt("Enter the third number : ");

if(num1>num2 && num1>num3)
document.write("num1 :"+num1);

else if(num2>num1 && num2>num3)
document.write("num2 :"+num2);

else
document.write("num3 :"+num3);*/

/*var letter = prompt("Enter any letter");
letter = letter.toLowerCase();

switch(letter) {

    case "a":
        document.write("vowel")
        break;
    case "e":
        document.write("vowel")
        break;
    case "i":
        document.write("vowel")
        break;
    case "o":
        document.write("vowel")
        break;
    case "u":
        document.write("vowel")
        break;
    default:
        document.write("consonant")

}*/

/*var letter = prompt("Enter any letter");
letter = letter.toLowerCase();

switch(letter) {

    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        document.write("Vowel")
        break;
    default:
        document.write("Consonant")

}*/
/*var sum = 0;
for(var i=1; i<=5; i++){

    sum = sum+i;
}
document.write(sum);*/


/*var m = parseInt(prompt("Enter the first number : "));
var n = parseInt(prompt("Enter the last number : "));
var sum = 0;
for(var i = m; i<=n; i++){
    sum = sum + i;
}
document.write(sum);*/

sum = 0;
var i = 1;
while(i<=100){
    if(i%5==0 && i%3==0)
    {
        document.write(i + "</br>");
        sum = sum + i;
    }
    i++;
}
document.write("</br>" + "The result is = " + sum);