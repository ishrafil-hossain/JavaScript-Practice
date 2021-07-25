// function addNumbers(x,y,z){
//     return x+y+z;
// }
// let number1 = [10,20,30]
// // console.log(addNumbers(...number))

// // let number2 = [...number1,40,50]
// // console.log(number2)
// let number2 = [40,50,60]
// console.log(...number1, ...number2)

let p1 ={
    Name: "Md Ishrafil Hossain",
    Age: 24
}

let p2 ={
    Nationality: "Bangladesh",
    Occupation: "Student"
}

let p = {...p1, ...p2}
console.log(p)