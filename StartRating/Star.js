let starContainer = document.querySelectorAll('.star-container');
let submitBtn = document.querySelector('#submit');
let message = document.querySelector('#message');
let submitsection = document.querySelector('#submit-section');

let events ={
    mouse:{
        over:'click',
    },
    touch:{
        over:'touchstart',
    }
};
let deviceType ="";
// Detect touch devices 
const isTouchDevice = () =>{
    try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    }catch (error) {
        deviceType ="mouse";
        return false;
    }
};

isTouchDevice();

starContainer.forEach((element, index)=>{
    element.addEventListener(events[deviceType].over,
    ()=>{
        submitBtn.disabled = false;
        if(element.classList.contains("inactive")){
            // Fill start
            ratingUpdate(0, index, true);
        }else{
            // Regular stars (remove color)
            ratingUpdate(index, starContainer.length - 1, false)
        }
    }    
    )
});

const ratingUpdate = (start, end, active) => {
    console.log(start, end, active)
    for(let i = start; i <= end; i++){
        if(active){
            starContainer[i].classList.add("active");
            starContainer[i].classList.remove("inactive");
            starContainer[i].firstElementChild.className = 
            "fa-star fa-solid";
        }else{
            starContainer[i].classList.remove("active");
            starContainer[i].classList.add("inactive");
            starContainer[i].firstElementChild.className = 
            "fa-star fa-regular";
        }
    }
};

// Message
let activeElements = document.getElementsByClassName("active");
if(activeElements.length > 0){
    switch (activeElements.length) {
        case 1:
            message.innerText = "Terrible";
            break;
        case 2:
            message.innerText = "Bad";
            break;
        case 3:
            message.innerText = "Satisfied";
            break;
        case 4:
            message.innerText = "Good";
            break;
        case 5:
            message.innerText = "Excellent";
            break;
    }
}else{
    message.innerText = "";
}

submitBtn.addEventListener('click', ()=>{
    submitsection.classList.remove('hide');
    submitsection.classList.add('show');
    submitsection.disabled = true;
});

window.onload = ()=>{
    submitBtn.disabled = true;
    submitsection.classList.add("hide");
}