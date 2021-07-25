function Student(name,age,cgpa){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;

    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
    }
}
var student1 = new Student("Ishrafil Hossain",24,3.35);
var student2 = new Student("Faisal Gazi",24,3.30);
var student3 = new Student("Shakib Hassan",24,3.00);
var student4 = new Student("Reyan Bhuiyan",25,3.20);
var student5 = new Student();
student5.name = "Miraj";
student5.age = 24;
student5.cgpa = 3.25;


student1.display();
student2.display();
student3.display();
student4.display();
student5.display();