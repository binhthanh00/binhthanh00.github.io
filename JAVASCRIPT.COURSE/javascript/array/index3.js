// 23 solution
let a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]
// a = a.sort() // n*log(n)
// console.log(a)
let maxFrequency = 0
for( let i =0; i< a.length; i++){
    // let curFrequency = 0
    // for (let j = 0;j<a.length;j++){
    //     if(a[j] == a[i]){
    //         curFrequency++
    //     }
    // } 
    let filterEqualValue = a.filter((value)=>{
        return a[i] == value
    })
    curFrequency = filterEqualValue.length
    if(maxFrequency < curFrequency){
        maxFrequency = curFrequency
    }
   // console.log(a[i] + "Frequency" + curFrequency)
}
console.log("output:" + maxFrequency)
// 26
let b = [1,2,3,4,6,7]
let k =8
let minSpace = Infinity
for (let i = 0; i<b.length;i++){
    let space = Math.abs(b[i]-k)
    if(minSpace > space){
        minSpace = space
    }
}
let results26 = []
for (let i =0 ; i< b.length;i++){
    let space = Math.abs(b[i]-k)
    if(space === minSpace){
        results26.push(b[i])
    }
}
console.log("Result :", results26)
// object
let car = {
    name :"Fiat",
    model: 500,
    weight: 850,
    color :"White",
    start: function(){
        console.log(this.name + " is start running...");
        
    }
};
// loop all properties and methods in object car
for(let variable in car){
    console.log("Variable :", variable)
}
// loop all value in object car
let cars = [{name: "Fiat"}, {name:"Honda"}]
for(let variable of cars){
    console.log("Variable:", variable)
}
console.log("Car", car.name)
car.start()

// function object
function Car (make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}
var myCar = new Car("Egle ", "Talon", 1993)
console.log("myCar", myCar)
console.log("MyCar make :", myCar.make)


// Object
// let myCarObject2 = {
//     name :"Fiat",
//     model: 500,
//     weight: 850,
//     color :"White",
//     start: function(){
//         console.log("=>" + this.name + "<=" + "is start running")
       
//         },
//     }
// };
// const startFuc = myCarObject2
// console.log(startFuc)
// myCarObject2.start()

console.log("---------------------")
// function doTask(){
//     setTimeout(function(){
//         console.log("Eat rice!")
//         setTimeout(function(){
//             console.log("Studying");
//             setTimeout(function(){
//                 console.log("go to sleep")
//             },3000)
//         },2000)
//     },1000)
// }
// doTask()
//
 Studying  = () =>{
    console.log("Studying");
    setTimeout(function(){
        console.log("Go to sleep")
    },3000)
}
eatRice = () =>{
    console.log("Eat rice !")
    setTimeout(Studying,2000)
}
doTask = () =>{
    setTimeout(eatRice,1000)
}
// doTask()

// promise
const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({status:"done"})
    },3000)
    for(var i =0; i< 1000000; i++){

    }
    console.log("Promise done")
})
p.then((value)=>{
    console.log("Value:", value)
})
console.log("END")