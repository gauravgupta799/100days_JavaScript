const outputCode = document.querySelector("#css-code");
sliders = document.querySelectorAll("input[type='range']"),
inputs = document.querySelectorAll("input[type='number']"),
blob = document.querySelector("#blob"),
copyBtn = document.querySelector("#copy"),
ColorPicker = document.querySelector("#color-picker"),

sliders.forEach((slider)=>{
    slider.addEventListener('input', createBlob);
});

inputs.forEach((input)=> {
    input.addEventListener('change', createBlob);
});

function createBlob(){
    let radiusOne = sliders[0].value;
    let radiusTwo = sliders[1].value;
    let radiusThree = sliders[2].value;
    let radiusFour = sliders[3].value;

    let blobHeight =  inputs[0].value;
    let blobWidth = inputs[1].value;

    let borderRadius = `${radiusOne}% ${100 - radiusOne}% ${100 - radiusThree}% ${radiusThree}% / ${radiusFour}% ${radiusTwo}% ${100 - radiusTwo}% ${100 - radiusFour}%`
   blob.style.cssText = `border-radius: ${borderRadius};
    height:${blobHeight}px; width:${blobWidth}px;
   `
   outputCode.value = `border-radius: ${borderRadius};`

   ColorPicker.addEventListener('change', (color) => {
        let colorCode = color.target.value;
        blob.style.cssText = `background-color: ${colorCode};`
    });
}


copyBtn.addEventListener('click',()=>{
    outputCode.select();
    document.execCommand('copy');
    alert("Code Copied");
})

createBlob();