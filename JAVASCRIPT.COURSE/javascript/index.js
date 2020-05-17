// console .log("Hello Word")//var str = "Hello World!"
//alert(str)
var myNumber =10
var myName = "Nguyen Van A"
var isMale = true

console.log("Type of myNumber:", typeof(myNumber))
console.log("Type of myNumber:", typeof(myName))
console.log("Type of myNumber:", typeof(isMale))
var lengthRoad = 150;// myName
var lengthRoad2 =300;
var lengthTotal = lengthRoad2 + lengthRoad;
var vec = 30; // m/s
var vec2 = vec -5; // 25m/s
var vec3 = 2 * vec;
var timer = lengthTotal / vec;
var timer2 = lengthTotal / vec2;
var timer3 = lengthTotal / vec3;
//var timer = 150 /30;
console.log("Timer",timer,"s")
console.log("Timer2",timer2,"s")
console.log("Timer3",timer3,"s")
console.log("Remain:",7 %3)

// ++, --
var ageOfNgan = 22;
//ageOfNgan = ageOfNgan + 1;
 //ageOfNgan++
//console.log("Age of Ngan:", ageOfNgan)

var newAge = ++ageOfNgan
var olderAge = ageOfNgan--
console.log("Age of Ngan:", newAge, "Old Age:", ageOfNgan, "Older Age:")

// calculate
var i= 1;
var j=2;
var k=3;
var total = i++ + --i + j++ + ++j + k++;
console.log("Total:",total)

var totalCost = (3 + 3) *3;
console.log("totalCost:", totalCost)


// var, let, const
var a= 5;
let b =5;
{
  console.log("Value of a:",a)
  console.log("Value of a:",b)
}

{
  var a2 = 5;
  let b2 = 6;
  console.log("Value of b:",b2)

}
console.log("Value of a:",a2)

const c = 5;

const PI = 3.14;
console.log("Value of c:",c,"PI:",PI)

//var userName = "Ngan"
//var userName = "Tho"
//var userName = "Minh"

//var userName = prompt("Enter your name:","")
//var age = parseInt(prompt("Enter your age:",""))
userName="Ngan"
age = 22
console.log("Comparation:", (1 === "1"))
console.log("Comparation:", (1 == "1"))
console.log("Comparation:", ("Ngan2"== "Ngan"))
if(userName === "Ngan"){
  if (age === 22){
    console.log("Yes, I'm Ngan of REACTJS2002")
  }else{
      console.log("Yes, I'm Ngan but not in REACTJS2002")
  }
  
}else if (userName === "Tho"){
  console.log("Yes, I'm Tho")
}else if (userName === "Minh"){
  console.log("hello, i'am Minh")
} else {
  console.log("Hello, I don't know you!")
}
console.log("-----------------")
userName = "Ngan"
switch(userName){
  case "Ngan":
    console.log("Yes, I'm Ngan of REACTJS2002");
    break;
  case "Tho":
    console.log("Yes, I'm Tho");
    break;
  case "Minh":
    console.log("hello, i'am Minh");
    break;
  default:
    console.log("Hello, I don't know you!")

}

// other comparasion
// Rule Grade : nhỏ hơn hoặc bằng 4 : yếu, ( 4 - 6): trung bình, (6; 7]; Khá (8;10)
var grade = 4;
if(grade < 4){
    console.log("You are a loser");
} else if (grade <= 6){
    console.log("You are Medium");
}else if (grade <= 8){
    console.log("Ypu are good ");
}else if (grade <= 10){
    console.log("you are execenlent");
} else{
    console.log("you are monster");
}

// For, While, do-while, For in, For of
//for(;;){
  //console.log("I love you")
//}
/*while(true){
  console.log( "I love you")
}*/

for(var i = 0;  i < 5 ; i++){
  console.log("I'm running round", (i+1))
}
// check myNumber2 is Prime or not
var myNumber2 = 1
var isPrime = false;
if(myNumber2 > 1){
  isPrime = true;
for( var i=2; i < Math.sqrt(myNumber); i++){
  if(myNumber2 % i ===0){
    isPrime = false;
  }
}
}
if(isPrime){
  console.log("it is prime number")
}else {
  console.log("It is not my Number")
}

var myName = "Nguyen Thanh Binh"
console.log("Type of my number :", typeof(myName))
var person = {
    name: " Nguyen Thanh Binh",
    age: 20
}
console.log("Type of my number:", typeof(person))
person = null
var age
console.log("type of number:",typeof(age))