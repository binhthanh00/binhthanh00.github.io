function creatNewPerson(name){
    const obj = {
        name: name,
        greeting : function(){
            alert("Hi! Im " + this.name)
        }
    }
    return obj
}

const person1 = creatNewPerson("Thien")
console.log(person1.name)
//person1.greeting()

person1.age=20
person1.hello = function(){
    alert(person1.name + " say hello")
}
console.log(person1.age)
//person1.hello()

// function Person(_name){
//     var name = _name;
//     this.greeting = function(){
//         alert("Hi! Im " + name)
//     }
//     this.getName = function(){
//         return name
//     };
    
// }

// encapsulation
// let person3 = new Person("Phuc")
// person3.greeting()
// console.log(person3.getName())

// Person.prototype.age = 20
// let person2 = new Person("abc")
// person2.age = 20
// person2.name = "override name"
// console.log("person2 :", person2.name)
// console.log("person2 :", person2.age)
// let person3 = new Person("Thu")
// console.log("person3 age :", person3.age)
// console.log("person3 age :", person3)

// let strValue = "hello"
// let strValueObj = new String("hello")
// console.log("strValue:", strValue)
// console.log("strValueObj:", strValueObj.toString())
// let person2 = new Person("bob")
// let person3 = new Person("Thu")
// this.toString = function(){
    //     return "Name:" + this.name
    // }
// console.log("person2:", person2.name)
// console.log("Person3 :", person3)
// person2.greeting()

// student teacher <person>
function Person(name){
    this.name = name;
    this.greeting = function(){
        alert("Hi! Im " + this.name)
    }
   
}

let person = new Person("Thien")
let person2 = new Person("Thu")
//person.greeting.call(person2)


function Student(name,mark){
    this.mark = mark
    this.name = name
    this.goToSchool = function(){
        console.log("Go to school")
    }
}
let student = new Student("Ngan")
student.goToSchool()
//student.greeting()
function Teacher(name,mark){
    this.name = name
    this.checkMark = function(){
        console.log("Check mark")
    }
}
// class 
class PersonClass{
    constructor(age){
        this.age = age
    }
    go = () =>{
        alert("Go")
    }
}
class StudentClass extends PersonClass{
    constructor(name, age){
        super(age)
        this.name = name;
    }
    goToSchool = () =>{
        alert("Go to school "+ this.name)
    }
}
let myStudent = new StudentClass("Ngan")
myStudent.goToSchool()
myStudent.go()