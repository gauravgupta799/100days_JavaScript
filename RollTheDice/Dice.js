let images = [
    "dice-1.png","dice-2.png","dice-3.png",
    "dice-4.png","dice-5.png","dice-6.png",
];

let dice = document.querySelector("img");
let total = document.querySelector("#total")

function roll(){
    dice.forEach(function(die){
        die.classList.add('.shake');
    });
    setTimeout(function() {
        dice.forEach(function(die){
            die.classList.remove('.shake');
        });
        let dieOneValue = Math.floor(Math.random() * 6);
        let dieTwoValue = Math.floor(Math.random() * 6);
        // console.log(dieOneValue, dieTwoValue)
        document.querySelector("#dice-1").setAttribute(
            'src', images[dieOneValue]
        );
        document.querySelector("#dice-2").setAttribute(
            'src', images[dieTwoValue]
        );
        total.innerHTML = "Your roll is " + ((dieOneValue + 1) + (dieTwoValue + 1)) 

    },1000)
}

roll();