
let txt = " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus in veniam atque impedit quaerat nulla, doloremque quam! Deleniti ut qui repudiandae, doloremque quibusdam facilis quis, atque alias dolorem maxime iure."
// let txt = "Lorem ipsum"
let showTextP = document.getElementById("showText")
let btnShowMore = document.getElementById("btnShowMore")
let btnShowLess = document.getElementById("btnShowLess")
let maxLength = 50

function showText() {
    if (txt.length <= maxLength) {
        showTextP.innerHTML = txt
        btnShowMore.style.display = "none"
        btnShowLess.style.display = "none"
    } else {
        let shortText = getShortText(txt)
        showTextP.innerHTML = shortText
        btnShowLess.style.display = "none"
    }
}

function showLess() {
    showTextP.innerHTML = getShortText(txt)
    btnShowMore.style.display = "inline"
    btnShowLess.style.display = "none"
}

function showMore() {
    showTextP.innerHTML = txt
    btnShowMore.style.display = "none"
    btnShowLess.style.display = "inline"
}

function getShortText(str) {
    return str.substr(0, maxLength) + "..."
}
showText()
