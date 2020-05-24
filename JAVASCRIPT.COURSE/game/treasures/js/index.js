class User {
    constructor(x,y,height,width,step) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.step = step;
        var img = new Image;
        img.src = "./treasures/images/user.png"
        this.img = img
    }
    draw(ctx){
       ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

    }
    moveLeft(){
        let newPosX = this.x - this.step;
        if(newPosX >=0){
            this.x = newPosX;
        }
        
    }
    moveRight(){
        let newPosX = this.x + this.step;
        if(newPosX <=450){
            this.x = newPosX
        }
        
    }
    moveUp(){
        let newPosY = this.y - this.step;
        if(newPosY >=0){
            this.y = newPosY;
        }
    
    }
    moveDown(){
        let newPosY = this.y + this.step;
        if(newPosY <= 450){
            this.y = newPosY;
        }
        
    }
}

// var img = new Image;
// img.src = "treasures/images/anh.jpg"
var user = new User(0, 0, 50, 50, 10);
var user2 = new User(100, 100, 100, 100, 10)
window.onload = () => {
    var c = document.getElementById("treasure")
    var ctx = c.getContext("2d");   
    user.draw(ctx);
    user.moveLeft();
    user.draw(ctx)
    setInterval(() => {
        ctx.fillStyle="#00FF00";
        ctx.fillRect(0, 0, 500, 500);
        user.draw(ctx);
        // user2.draw(ctx);
    }, 1);
    
}
let keyDown = (event) =>{
    if(event.keyCode === 39){
        console.log("right arrow")
        user.moveRight()
    }
    if(event.keyCode === 37){
        console.log("left arrow")
        user.moveLeft()
    }
    if(event.keyCode === 38){
        console.log("Up arrow")
        user.moveUp()
    }
    if(event.keyCode === 40){
        console.log("Down arrow")
        user.moveDown()
    }
    console.log(event)
}
window.addEventListener("keydown", keyDown)
// var c = document.getElementById("treasure")
// var ctx = c.getContext("2d");
// ctx.moveTo(0, 0);
// ctx.lineTo(200, 100);
// ctx.stroke();

// ctx.fillStyle = "#FF0000"
// ctx.fillRect(0, 0, 150, 75)
// ctx.font ="30px Aprial"
// ctx.strokeText("Hello World",50,50)

