let myNodelist = document.getElementsByTagName("LI");
  for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }
 
  let close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  function newElement() {
    let li = document.createElement("li");
     let inputValue = document.getElementById("todo-input").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
  
    if (inputValue === '') {
      alert("You must write task!");
    } else {
      document.getElementById("todo-ul").appendChild(li);
    }
    document.getElementById("todo-input").value = "";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }