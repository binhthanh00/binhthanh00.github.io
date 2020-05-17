// Array
let  myArray = ["Nguyen Nhat Minh", "Thu Ha ", " Thanh Binh", "Thuy Ngan", "Tho", "Huan", "Doanh"]
console.log("origin myArray", myArray)
// behavior like stack
let lastValue = myArray.pop()

myArray.push("Phuc")
lastValue = myArray.pop()

console.log("last in index of myArray","=>"+ lastValue + "<=")

myArray.unshift("Thai")
let firstValue = myArray.shift()
myArray.push("Huan");

console.log("myArray", myArray,firstValue,myArray.indexOf("Thu Ha"), myArray.lastIndexOf("Huan"))
myArray.push("Thu Ha")

console.log("myArray", myArray,firstValue,myArray.indexOf("Thu Ha"), myArray.lastIndexOf("Thu Ha"))

console.log("Unreverse:", myArray)
myArray.reverse()
console.log("Reverse: ", myArray)

//
myArray.splice(1, 2,"Do thi Thu Ha", "Nguyen Thanh Binh", "Thai")
console.log("myArray after splice(1,2):", myArray,"length", myArray.length)

console.log("Join()",myArray.join(", "))
console.log("Sort()", myArray.sort())
console.log("find()")
// let findValue = myArray.find((value, index)=>{
//     console.log("index, value", index, value);
//     if(value == "Do Thu Ha"){
//         return true;
//     }
//     return false
// })
 let finder = value =>{
     if(value == "Thai"){
         return true
     }
     return false
 }
 let cusFind = (finder) =>{
    for(let i = 0;i< myArray.length; i++){
        let check = finder(myArray[i]);
        if(check){
            return myArray[i]
        }
    }
    return -1
 }
 let findValue = cusFind(finder)
console.log("findValue:", findValue)


// array filter
myArray.unshift("Thuy Ngan")
console.log("Array:", myArray)

 let filterResult = myArray.filter((value, index, arr)=>{
//     // find value = user name
//     // if(value === "Thuy Ngan"){
//     //     return true
//     // }
//     // return false
     if(value[0] == "T"){
        return true;
     }
     return false
 })
//console.log("filter Result :", filterResult)
let mapIndexPlusValueResult = myArray.map((value,index)=>{
    return index + "." + value
})
console.log("Map:", mapIndexPlusValueResult)


let students = [
    {
        id:"T3HXX1",
        firstName: "Ngan",
        lastName : " Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Do ",
        lastName:"Thi Thu Ha"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]
let ids = students.map(student =>{
    return student.id
})
let fullNames = students.map(student =>{
    return student.lastName + " " + student.firstName
})
console.log("Array IDs:", ids)
console.log("Array FullNames :", fullNames)
console.log("students : ", students)

// reduce
let myNumbers = [3,4,5,2,1]
myNumbers.reduce((previous, value, index,arr)=>{
    console.log("previous, value", previous, value)
    // => previous : get value of previous call function
    return index
}, 0)

let totalCount = myNumbers.reduce((previous, value)=>{
    console.log("previous, value",previous, value)
    return previous+ value
},0)
console.log("totalCount:", totalCount)


// apply
let applyTotalCount = myNumbers.reduce((previous,value)=>previous + value)
console.log("applyTotalCount:", applyTotalCount)
let applyTotalEvenCount = myNumbers.reduce((previous, value)=>{
    if(value % 2 == 0){
        return previous + value
    }
    return previous
},0)
console.log("applyTotalEvencount:", applyTotalEvenCount)