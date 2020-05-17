let elememts = document.getElementsByTagName("h3")
let h3 = elememts[0]
// h3.style.color = "red"
setTimeout(()=>{
    h3.innerHTML = "My Math"
    h3.classList.add("red-color")
},3000)
// console.log("Element:",h3)
//  function buttonClick(){
//    alert(h3.innerHTML)
//  }

function myFunction(){
    let x;
    x = document.getElementById("numb").value;
    if(x % 2 === 0){
        alert("isEvent")
    }
    else{
        alert( "isOdd");
    }
    
}
