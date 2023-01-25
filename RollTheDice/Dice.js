let images = [
    "dice-1.png","dice-2.png","dice-3.png",
    "dice-4.png","dice-5.png","dice-6.png",
];

let dice = document.querySelectorAll("img"),
    total = document.querySelector("#total"),
    dice1 = document.querySelector("#dice-1"),
    dice2 = document.querySelector("#dice-2")
// console.log(dice1,dice2);

function roll(){
    dice.forEach( die => die.classList.add('shake'));
    setTimeout(()=> {
        dice.forEach(die => die.classList.remove('shake'));
        let dieOneValue = Math.floor(Math.random() * 6);
        let dieTwoValue = Math.floor(Math.random() * 6);
        dice1.setAttribute( 'src', "images/" + images[dieOneValue] );
        dice2.setAttribute( 'src', "images/" + images[dieTwoValue] );
        total.innerHTML = "Your roll is " + ((dieOneValue + 1) + (dieTwoValue + 1));
    },1000);
}

roll();