let emoji = document.querySelector('.emoji'),
eyes = document.querySelector('.eyes'),
eyebrows = document.querySelector('.eyebrows'),
mouth = document.querySelector('.mouth'),

colorBtn = document.querySelector('#color-btn'),
eyesBtn = document.querySelector('#eyes-btn'),
eyebrowsBtn = document.querySelector('#eyebrows-btn'),
mouthBtn = document.querySelector('#mouth-btn');

let colors = ["#90fde7","#ee4d36","#4bff81","#efe6de", "#4bb4ff", "#ff702e","#b88cff", "#ffd21f"];

let counter1 =0;
let counter2 =0;
let counter3 =0;
let counter4 =0;

let totalCounts = {
    eyesCount:5,
    eyebrowsCount:4,
    mouthCount:5,
};

colorBtn.addEventListener('click', () => {
    emoji.style.backgroundColor = colors[counter1];
    counter1 = counter1 < colors.length - 1 ? counter1 + 1 : 0;
    // console.log(counter1);
})

eyesBtn.addEventListener('click', () => {
    eyes.setAttribute('src', `images/eye-${counter2}.svg`);
    counter2 = counter2 < totalCounts.eyesCount - 1 ? counter2 + 1 : 0;
    // console.log(counter2 )
});

eyebrowsBtn.addEventListener('click', () => {
    eyebrows.setAttribute('src', `images/eyebrow-${counter3}.svg`);
    counter3 = counter3 < totalCounts.eyebrowsCount - 1 ? counter3 + 1 : 0; 
});

mouthBtn.addEventListener('click', () => {
    mouth.setAttribute('src', `images/mouth-${counter4}.svg`);
    counter4 = counter4 < totalCounts.mouthCount - 1 ? counter4 + 1 : 0;
});
