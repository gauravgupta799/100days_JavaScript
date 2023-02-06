const fileInput = document.querySelector("#input"),
downloadBtn = document.querySelector("#download-btn")

downloadBtn.addEventListener("click", () => {
    e.preventDefault();
    downloadBtn.innerText = "Downloading File...";
    fetchFile(fileInput.value)
    console.log(fileInput.value);
});

function fetchFile(url){
    fetch(url)
    .then((response) =>response.blob())
    .then((file) =>{
       let temUrl =  URL.createObjectURL(file);
       let aTag = document.createElement("a");
       aTag.href = temUrl;
       aTag.download = url.replace(/^.*[\\\/]/,"")
       document.body.appendChild(aTag);
       aTag.click();
       aTag.remove();
       URL.revokeObjectURL(temUrl);
       downloadBtn.innerText = "Download File";
    }).catch(()=>{
        downloadBtn.innerText = "Download File";
        alert("Failed to download file!")
    })
}
