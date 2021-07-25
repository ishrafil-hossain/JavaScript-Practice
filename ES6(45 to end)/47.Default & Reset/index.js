"use strick"
// Default Parameter
function message(text = "This is default parameter"){
    console.log(`${text}`)
}
message();
message(`I love js es6`);

// Rest Parameter
function add(x,y, ...z){
    console.log(`x = ${x}, y = ${y}, z = ${z}`)
}
add(10,20,30,40,50)