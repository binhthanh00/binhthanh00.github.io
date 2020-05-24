let seconds = 0;
    minute = 0;
    hours = 0;
let timer,
    timer_el = document.getElementById("timer");
function timeHandler() {
    seconds++;
    // console.log(giay)
    if (seconds == 60) {
        minute = 0;
        minute++;
        // console.log(phut);
    }
    if (minute == 60) {
        minute = 0;
        hours++;
        // console.log(gio);
    }
    displayTime()
}
// setInterval(timeHandle, 1000)

// let timer = document.getElementById("timer")

function displayTime() {
    let format_hours = hours;
    format_seconds = seconds;
    format_minute = minute;
    if(seconds < 10){
        format_seconds = "0" + seconds
    }
    if(minute < 10){
        format_minute = "0" + minute
    }
    if(hours < 10){
        format_hours = "0" + hours
    }
    timer_el.innerHTML =  format_hours + ":" +  format_minute  + ":" +   format_seconds;

}

let start_btn = document.getElementById("start");
    pause_btn = document.getElementById("pause");
    reset_btn = document.getElementById("reset")
start_btn.addEventListener('click', function(){
    timer = setInterval(timeHandler, 1000)
    reset_btn.disabled = false;

})
pause_btn.addEventListener('click', function(){
    timer = clearInterval(timer)
    reset_btn.disabled = false;

})
reset_btn.addEventListener('click', function(){
    timer = clearInterval(timer)
    seconds = 0;
    minute = 0;
    hours = 0;
    timer_el.innerHTML = "00:00:00";
    reset_btn.disabled = true

})
