//Bai 11
var a
function coutSpace(a){
    a = " Hello  wrold";
    var count=0;
    for (var i = 0; i < a.length; i++)
    {
        if(a[i] == " "){
            count++;
        }
    }
    console.log("coutSpace:",count);
}
coutSpace(a)
//bai12
var str = "hello world";
var  a = (x) => {
    let str2 = "";
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== " ") {
            str2 = str2 + x[i];
        }
    }
    return str2;
}
console.log(a(str));
// Bai 13
function reverse(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    console.log(reversed);  
  }
reverse('This is a beautiful day');
// bai 14
var str;
function myFunction(str) {
    var str = " That is a beautiful day ";
    var n = str.indexOf("is");
    console.log(n);
  }
  myFunction(str)
// bai 15
let xx = "NguyeN THI tho tHu hA"
let expect = "Nguyen Thi Tho Thu Ha";
xx = xx.toLowerCase().trim()
console.log("Before =>" + xx +"<=")
for (let i = 0; i< xx.length; i++){
    if(i == 0 || xx[i-1] == " "){
      //replace character at position i to Uppercase
      // xx[i] = xx[i].toUpperCase()
    //xx = xx.replace(xx[i], xx[i].toUpperCase());
      xx = xx.slice(0, i) + xx[i].toUpperCase() + xx.slice(i + 1)

    }
}
console.log("after =>" + xx + "<=")
// bai 16
// function findId(str)
// {
//     let convertArray=str.split('/');
//     console.log(convertArray[convertArray.length-2]);
// }
// let s1='https://www.facebook.com/profile.php?id=100012619092238/'
// findId(s1);
//bài 17
function myNumber(a, b, c){
  let min = a;
  if( b > min ) min =b ;
  if( c > min ) min = c;
  return min;
  }
console.log (myNumber(2,4,7));
function myNumber2(a, b, c){
  let max = a;
  if( b < max )  max=b ;
  if( c < max )  max=c;
  return max;
}
console.log(myNumber2(2,4,7));
//bai 18
var str = 'this is beautiful day'
let posFind = (x,y) => {
    let a = str.split(' ');
    let c = a[a.length - 1].length + a[a.length - 2].length;
    let pos = str.indexOf(y, str.length - c - 2);//trừ hai vì trừ đi hai kí tự khoảng trắng giữa hai vị trí
    console.log(pos);
}
posFind(str, 'ia');
//bai 18 
function findPosition (s2, s1){
   let lastIndex = s1.lastIndexOf(s2)
    if(lastIndex < 0) return -1
    s1 = s1.slice(0, lastIndex) + s1.slice(lastIndex+s2.length)
    console.log("first part", s1)
    console.log("S@ after remove ", s2)
     return 0
 }
let s1 = "This is a beautiful day !"
 let s2= "is "
 console.log("findPosition '", s2, "' in '",s1,"' is '",findPosition(s2,s1))


// 19
function Sum(n){
  if( n == 0)
  {
    return 0;
  }
  else{
    return Sum(n-1)+n;
  }
}
console.log(Sum(8));
//bai 20
let name="   ngan98    ";
let nameChanges=name.trim(" ");
let classes="   reactjs2002-e";
let classesChanges=classes.trim(" ");
var str=`computer = ${nameChanges} AND class = ${classesChanges}`;
console.log(str);
//
// m = m.toLowerCase();
// m = m.replace(m[0], m[0].toUpperCase());
// for (let i = 0; i <= m.length; i++) {
//     if (m[i] === " ") {
//         m = m.replace(m[i + 1], m[i + 1].toUpperCase());
//     }
// }
// console.log(m);



