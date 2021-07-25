let names = ["Ishrafil", "Shakib", "Nazrul"]

for(let name of names){
    console.log(name)
}


let myInfo = {
    Id : 1106005,
    name : "Ishrafil",
    age : 24,
    Cgpa : 3.40
}

for(let x in myInfo){
    // console.log(x)
    // console.log(myInfo[x])
    console.log(`${x}: ${myInfo[x]}`)
}