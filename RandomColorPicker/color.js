let refreshBtn = document.querySelector(".refresh-btn");
let Container = document.querySelector(".container");

let maxPaltetteBoxes = 35;

const generatePalatee=() => {
    Container.innerHTML ="";
   for(let i=0; i< maxPaltetteBoxes; i++) {
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16)
        randomHex = `#${randomHex.padStart(6, '0')}`;
        // console.log(randomHex);
        const color = document.createElement('li');
        color.classList.add('color');
        color.innerHTML = `
                    <div class="rect-box" 
                    style="background:${randomHex}"></div>
                    <span class="hex-value">${randomHex}</span>`
        color.addEventListener('click', ()=>copyColorCode(color,randomHex))
        Container.appendChild(color);
    }
    // console.log(Container)
}
generatePalatee();

const copyColorCode =(elem, hexValue) => {
    // console.log(elem, value)
    const colorElm = elem.querySelector('.hex-value');
    navigator.clipboard.writeText(hexValue).then(()=>{
        colorElm.innerText= "Copied";
        setTimeout(()=>{
            colorElm.innerText= hexValue;
        },1000)
    }).catch(()=>{
        alert("Failed to copy the color code! Please try again.")
    })
    // console.log(colorElm)
}

refreshBtn.addEventListener("click", generatePalatee)