let hour = document.querySelector('#hour'),
minute = document.querySelector('#minute'),
second = document.querySelector('#second');


const hours = document.querySelector(".hours"),
minutes = document.querySelector(".minutes"),
seconds = document.querySelector(".Seconds");


const setClock= setInterval(() => {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    // console.log(hr , min , sec);

    let calHr = (hr * 30 ) + ( min / 2);
    let calMin = ( min * 6) + ( sec / 10);
    let calSec = sec * 6;

    hour.style.transform = `rotate(${calHr}deg)`;
    minute.style.transform = `rotate(${calMin}deg)`;
    second.style.transform = `rotate(${calSec}deg)`;
    
    let Hr = hr -12
    Hr < 10 ? `0${Hr}` : Hr;
    let Min = min < 10 ? `0${min}` : min;
    let Sec = sec < 10 ? `0${sec}` : sec

    hours.innerHTML = Hr;
    minutes.innerText = Min;
    seconds.innerText = Sec;

},1000);
