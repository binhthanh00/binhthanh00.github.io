var n=10;
console.log("Cac so tu 1 den n la : " ); //n=10
for(var i=0; i<n; i++)
{
    console.log(" ", (i+1));
}

console.log("-------------------------------------")
console.log("Cac so le :")
var n=10;
for( var i= 0; i < n ; i++)
{
    if( i%2 === 1)
    {
        console.log(" ",i);
    }
    
}
console.log("-----------------------------")
var n=10;
console.log("Cac so chan :")
for( var i=1; i <=n ; i++)
{
    if( i%2 === 0)
    {
        console.log(" ",i);
    }
}
console.log("-------------------------------")
var n = 10
var s = 0;
for (var i = 0; i<=n; i++)
{
    s+=i;
}
console.log("Tong cua cac so tu 1 den n la :", s)
console.log("---------------------------------")
var n = 3
var s = 0;
for (var i=0; i<=n; i++)
{
    s+=i*i;
}
console.log("Tong binh phuong cua cac so:", s)
console.log("-------------------------------------")
var n=5 
var s=0
for (var i=0; i<=n;i++)
{
    if(i%2!=0)
    {
        s+=i
    }
}
console.log("Tong cua cac so le :", s)
console.log("----------------------------")
var n = 10
for (var i=2; i < n ;i++){
    console.log("Bang nhan :",i)
    for(var j = 1; j<=n ; j++){
        console.log("",i,"x",j,"=",i*j)
    }
}
console.log("--------------------------")
var n = 10;
for( var i = 0;i < n; i++){
    var myNumber = i + 1;
    var isPrime = false;
    if(myNumber > 1){
        isPrime = true;
        for( var j=2; j <= Math.sqrt(myNumber); j++){
            if(myNumber % j === 0){
                isPrime = false;
            }
        }
    }
    if(isPrime){
        console.log("Prime:",myNumber)
}
}


// 8
// var n = 1238;
//  var check = true;
// While (n > 0) {
//     var curLastDigit = n % 10;
//     console.log(curLastDigit)
//     if (curLastDigit % 2 === 0){
//         check = false;
//      }
//      n = Math.floor(n/10);
//  }
//  if (check){
//      console.log("YES");
//  }else{
//      console.log("No");
//  } n = Math.floor(n/10)


//function
function speak(){
    console.log("Hello class");
}
function helloWorld(userName){
    console.log(userName, "say Hello world")
}
function isEven(value){
    var remain = value % 2
    if(remain % 2 == 0 ){
        return true;
    }
    return false;
}
speak();
helloWorld("Tho")
var userName = "Ha"
helloWorld(userName)
console.log("Check", isEven(3))

console.log("--------------------")

// function isPrime(value){
//     var isPrime = false;
//     if (value > 1){
//         isPrime = true;
//         for(var j = 2; j<=Math.sqrt(value);j++){
//             if(value % j === 0){
//                 isPrime = false;
//                 break;
//             }
//         }
//     }
//     return isPrime
// }

// var n = 10;
// for(var i = 0;i < n; i++){
//     var isPrime = isPrimeNumber(i+1)
//     if (isPrime){
//         console.log("Prime:", i + 1)
//     }
// }

//explore isEven --Hoisting
const Max = 10000;
function isEven2(value){
    let remain = value % 2;
    let checker;
    if( remain == 0){
        checker = true;
    }else{
        checker = false;
    }
    console.log("Checker", checker)
    return checker;
  
}
console.log(isEven2(5))

// recursive - đệ quy - hạm gọi chính nó
function count(value){
    value--;
    console.log(value + 1)
    if( value > 0){
        count(value)
    }
}

console.log("------------------")
function countReverse(value){
    value--;
    if( value > 0){
        countReverse(value);
    }
    console.log(value + 1)
}
count(10)
countReverse(10)
console.log("----------------------")


// -----------Number-------------




