var names = ["Ishrafil","Romeo","Faisal"];
document.write("Before sorting and reversing : "+names+"</br>");
names.sort();
document.write("After sorting : "+names+"</br>");
names.reverse();
document.write("After reversing : "+names+"</br>");


//digit sorting and reversing
var num = new Array();
for(var i = 0; i<5; i++){
    num[i] = parseInt(prompt("Enter your numbers : "));
}
num.sort(function(a,b){
    return a-b;
});
document.write(num);

for(var i = 0; i<5; i++){
    document.write("<br>"+num[i]);
}

