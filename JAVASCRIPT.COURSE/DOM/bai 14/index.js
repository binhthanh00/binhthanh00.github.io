var images = [
    "./image/ảnh1.jpg",
    "./image/ảnh2.jpg",
    "./image/ảnh3.jpg",
    "./image/anh4.jpg",
    "./image/anh5.jpg",
   
];
var num = 0;

function next() {
    var slider = document.getElementById("slider");
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}

function prev() {
    var slider = document.getElementById("slider");
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}