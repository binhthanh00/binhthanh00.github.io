// Number
let strX = "123xw4";
let x = parseInt(strX)
let x2 = Number(strX);
console.log(strX, typeof(strX))
console.log(x, typeof(x))
let strX2 = x.toString()
console.log(strX2, typeof(strX2))

console.log(x2, typeof(x2))
// Math
// let y = Math.random()
// console.log("Y", y)
// console.log("y*100", y*100)
// console.log("Result", Math.floor(y*100+1))
function randomValue(value){
    return Math.floor(Math.random()*value +1)
}
function randomFromTo(from, to){
    return Math.floor(Math.random()*(to - from+1))+ from;
}
console.log("Random 1 - 10", randomValue(10))
console.log("Random 45 - 150", randomFromTo(45, 50))

// Strings
let myName = "Minh";
let myName2 = 'Ha';
let myName3 = `Hoa ${myName}`;
let myName4 = "Hoa " + myName + " di an com, va " + myName + " an xong di ngu "
console.log("Strings: ", myName, myName2, myName3)
console.log("String 4 : ", myName4)

// String - properties and method
let describe = "Hom nay la thu may, chac chan la thu 2";
let lengthOfDescribe = describe.length;
console.log("lengthOfDescribe", lengthOfDescribe)

let describeUppercase = describe.toUpperCase()
let describeLowercase = describe.toLowerCase()

console.log("lengthOfDescribe:",lengthOfDescribe)
console.log("describeUppercase:",describeUppercase)
console.log("describeLowercase", describeLowercase)
console.log("describe.charAt(1):", describe[1])
console.log("describe.indexOf('la')", describe.indexOf('la'))
console.log("describe.slice()", describe.slice(8,18))
console.log("describe.substr()", describe.substr(8, 10))
console.log("describe.replace()", describe.replace("la", "is"))
console.log("describe.concat()", describe.concat( describeUppercase ))
console.log("describe.include()", describe.includes("la"))
console.log("trim(): '", " la   thu may ' " .trim(), "")
