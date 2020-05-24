let btnClick = document.getElementById("btn-click")
btnClick.addEventListener('click',test)
function test(){
    let input = document.getElementById("msg")
    alert(input.value)
}