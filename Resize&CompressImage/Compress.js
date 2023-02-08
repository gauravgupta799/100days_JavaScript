const uploadBox = document.querySelector(".imageWrapper"),
previewImg = document.querySelector("img"),
fileInput = document.querySelector("#fileInput"),
downloadBtn = document.querySelector("#btn"),
widthInput = document.querySelector(".width input"),
heightInput = document.querySelector('.height input');



const loadFile =(e)=>{
    const file = e.target.files[0];
    if(!file) return;
    previewImg.src = URL.createObjectURL(file);
    previewImg.addEventListener("load", ()=>{
        widthInput.value = previewImg.naturalWidth;
        heightInput.value = previewImg.naturalHeight;
        document.querySelector(".imageWrapper").classList.add("active")
    
    })
    console.log(file);
}

fileInput.addEventListener('change', loadFile)
uploadBox.addEventListener("click", ()=> fileInput.click());




