const uploadBox = document.querySelector(".imageWrapper"),
previewImg = document.querySelector("img"),
fileInput = document.querySelector("#fileInput"),
downloadBtn = document.querySelector("#btn"),
widthInput = document.querySelector(".width input"),
heightInput = document.querySelector('.height input'),
ratioInput = document.querySelector('.ratio input'),
qualityInput = document.querySelector('.quality input');


let ogImageRatio;
let file;
const uploadFile =(e)=>{
    file = e.target.files[0];
    if(!file) return;
    previewImg.src = URL.createObjectURL(file);
    previewImg.addEventListener("load", ()=>{
        widthInput.value = previewImg.naturalWidth;
        heightInput.value = previewImg.naturalHeight;
        ogImageRatio = previewImg.naturalWidth / previewImg.naturalHeight;
        document.querySelector(".imageWrapper").classList.add("active")
        document.querySelector(".container").classList.add("active");
    })
    console.log(file,file.name);
}

widthInput.addEventListener("keyup", ()=>{
    // getting height according to the ration checkbox status
    const height = ratioInput.checked ? widthInput.value / ogImageRatio : heightInput.value;
    heightInput.value = Math.floor(height);
})

heightInput.addEventListener("keyup", ()=>{
    const width = ratioInput.checked ? heightInput.value * ogImageRatio : widthInput.value;
    widthInput.value = Math.floor(width);
})

const resizeAndDwonload =()=>{
    const canvas = document.createElement("canvas");
    const a = document.createElement("a");
    const ctx = canvas.getContext("2d");

    // 1.0 is 100% where 0.7 is 70% of total.
    const imageQuality = qualityInput.checked ? 0.7 : 1.0;
    canvas.width = widthInput.value;
    canvas.height = heightInput.value;

    //  drawing user selected image onto the canvas
    ctx.drawImage(previewImg, 0, 0, canvas.width, canvas.height);
    a.href = canvas.toDataURL("image/jpeg", imageQuality);
    let date = new Date().getTime()
    a.download = `${file.name.split(".")[0]}${date}.${file.name.split(".")[1]}`; 
    console.log(a.download)
    a.click();
}

downloadBtn.addEventListener("click", resizeAndDwonload)
fileInput.addEventListener('change', uploadFile)
uploadBox.addEventListener("click", ()=> fileInput.click());




