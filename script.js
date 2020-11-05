var myTimer = document.querySelector("#timer");
var secondsLeft = 60;
setTime();
function setTime(){
        var timerInterval = setInterval(function() {
        secondsLeft --;
        myTimer.textContent = "Time Remaining " + secondsLeft;
        if (secondsLeft ===  0){
            clearInterval(timerInterval)
        }
    },1000);
}
console.log(myTimer)






