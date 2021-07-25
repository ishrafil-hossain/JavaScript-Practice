function studentInfo(name,age){
    return{
        name,
        age
    }
}

let studentObject = studentInfo("Ishrafil", 24)
console.log(studentObject)

let Message = {
    body(){
        return `Hi I am a object function`
    }
}

console.log(Message.body())

// Space diye jdi funtion name dite chai tahole single coatation er
//  modde functuon name diye coatation er bahire 1st bracker dite hobe 
//  and print korar somoy object_name then 3rd bracker er modder 
//  single coatation er modde function name dite hobe then 3rd bracket er
//  bahire 1st bracker dite hobe
let Message2  = {
    'body name'(){
        return `Hi I am a object function2`
    }
}
console.log(Message2['body name']())