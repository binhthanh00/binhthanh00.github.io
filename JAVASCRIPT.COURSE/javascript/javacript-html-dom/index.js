let btnClick = document.getElementById("btn-click")
btnClick.removeEventListener
btnClick.addEventListener('click',btnOnClick2)
// btnClick.addEventListener('click',test)
// function test(){
//     alert("test oke")
// }
function btnOnClick() {
    let demo = document.getElementById("demo")
    let inputValue = document.getElementById("inputValue")
    console.log("inputValue", inputValue.value)
    var value = Number(inputValue.value)
    let text = ""
    if (isNaN(value)) {
        text = ("Please enter number")
    } else {
        if (inputValue.value % 2 === 0) {
            text = ("EVEN")
        } else {
            text = ("ODD")
        }
    }
    demo.innerHTML = "Result: " + text;

}
///
function btnOnClick2() {
   
    let inputValue = document.getElementById("inputValue")
    console.log("inputValue", inputValue.value)
    var value = Number(inputValue.value)
    let text = ""
    if (isNaN(value)) {
        text = ("Please enter number")
    } else {
        if (inputValue.value % 2 === 0) {
            text = ("EVEN")
        } else {
            text = ("ODD")
        }
    }
    let oldResultElemen = document.getElementById("result-element")
    if(oldResultElemen !== null){
        document.body.removeChild(oldResultElemen)
    }
    
    let resultElemen = document.createElement("p")
    resultElemen.id="result-element"
    let textNode = document.createTextNode("Result: " + text)
    resultElemen.appendChild(textNode)
    document.body.appendChild(resultElemen)

}