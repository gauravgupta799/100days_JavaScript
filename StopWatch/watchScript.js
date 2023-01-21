let [miliseconds, seconds, minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector(".timeDisplay"),
startBtn = document.querySelector("#startTimer"),
pauseBtn = document.querySelector("#pauseTimer"),
resetBtn = document.querySelector("#resetTimer");
let init;

function displayTimer(){
    miliseconds+= 10;
    if(miliseconds == 1000){
        miliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

    const h = hours < 10 ? "0" + hours : hours;
    const m = minutes < 10 ? "0" + minutes : minutes;
    const s = seconds < 10 ? "0" + seconds : seconds;
    const ms = miliseconds < 10 ? "00" + miliseconds : 
        miliseconds < 100 ? "0" + miliseconds : miliseconds;

    timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;    
}

startBtn.addEventListener("click", ()=>{
    startBtn.classList.add("disabled")
    pauseBtn.classList.add("enabled");
    resetBtn.classList.add("enabled");
    init = setInterval(displayTimer, 10);
});

pauseBtn.addEventListener("click",()=>{
    startBtn.classList.remove("disabled");
    pauseBtn.classList.remove("enabled");
    clearInterval(init);
});

resetBtn.addEventListener("click",()=>{
    startBtn.classList.remove("disabled");
    pauseBtn.classList.remove("enabled");
    clearInterval(init);
    [miliseconds, seconds, minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000';
});