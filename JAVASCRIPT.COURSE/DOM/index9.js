let i = 0
function show(){
    if(!i){
        document.getElementById("more").style.display = "inline";
        document.getElementById("dots").style.display = "none";
        document.getElementById("show").innerHTML = "Show less";
        i = 1;
    }
    else{
        document.getElementById("more").style.display = "none";
        document.getElementById("dots").style.display = "inline";
        document.getElementById("show").innerHTML = "Show more";
        i = 0;
    }
}